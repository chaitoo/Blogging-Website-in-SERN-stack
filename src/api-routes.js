import express from 'express';


var router = express.Router();

var mysql      = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 100,
  host     : 'localhost',
  user     : 'root',
  password : 'admin',
  database : 'musefests',
  debug    :  false
});


// festivals api
router.get("/fests",function(req,res){
   pool.getConnection(function(err,connection){
           if (err) {
             connection.release();
             res.status(100).json({"status" : "Error in connection database"});
             return;
           }

           console.log('connected as id ' + connection.threadId);

           connection.query("select * from festivals",function(err,rows){
               connection.release();
               if(!err) {
                   res.status(200).json(rows);
               }
           });

           connection.on('error', function(err) {
                 res.json({"code" : 100, "status" : "Error in connection database"});
                 return;
           });
     });
 });

 router.get('/details/performers/:_id', (req, res) => {
   let artist_id = req.params._id;
   pool.getConnection(function(err,connection){
           if (err) {
             connection.release();
             res.status(100).json({"status" : "Error in connection database"});
             return;
           }
           var query = "select * from artists where artist_id="+artist_id+";";
           connection.query(query, function(err,rows){
               connection.release();
               if(!err) {
                   res.status(200).json(rows);
               }
           });

           connection.on('error', function(err) {
                 res.status(100).json({"status" : "Error in connection database"});
                 return;
           });
     });
 })

 router.get('/fests/:title', (req, res) => {
   let fest = req.params.title;
   pool.getConnection( (err, connection) => {
     if(err) {
       connection.release();
       res.status(100).json({'status':'Error in connection database'});
       return;
     }
     console.log('festival page'+fest+'api fetched !!');

     connection.query("select * from festivals where title='"+fest+"'", (err, rows) => {
       connection.release();
       if(!err) {
         res.status(200).json(rows);
       }
     });

     connection.on('error', (err) => {
       res.status(100).json({'status':'Error in connection database'})
     });
   });
 });

 router.get('/festival/:_id', (req, res) => {
   let fest_id = req.params._id;
   pool.getConnection(function(err,connection){
           if (err) {
             connection.release();
             res.status(100).json({"status" : "Error in connection database"});
             return;
           }

           connection.query("select * from festivals where fest_id="+fest_id+";",function(err,rows){
               connection.release();
               if(!err) {
                let res_obj = {};
                res_obj.festData = rows[0];
                res_obj.performers = []
                let performers = JSON.parse(res_obj.festData.performers);

                if(performers!==null && performers.length!=0) {
                    var performer_query = "select * from artists where "
                    for (var i = 0; i < performers.length; i++) {
                       performer_query += "artist_id="+performers[i]+" ";
                       if(i == performers.length-1) {
                         performer_query += ";"
                       }
                       else {
                         performer_query += "or "
                       }
                    }

                      connection.query(performer_query, function(err,rows) {
                        if(!err) {
                          res_obj.performers.push(rows);
                          res.json(res_obj);
                        }
                      })
                    }
                    else {
                      res.json(res_obj);
                    }
               }
           });
          //  res_obj.festival_data.performers.forEach((performer) => {
          //    connection.query("select * from artists where artist_id="+performer+";", (err,rows) => {
          //      connection.release();
          //      if(!err) {
          //        console.log(rows);
          //      }
          //    })
          //  })


           connection.on('error', function(err) {
                 res.status(100).json({"status" : "Error in connection database"});
                 return;
           });
     });
 });

 router.get('/artists/all', (req, res) => {
   pool.getConnection( (err, connection) => {
     if(err) {
       connection.release();
       res.status(100).json({'status':'Error in connection database'});
       return;
     }

     connection.query("select artist_id, name from artists", (err, rows) => {
       connection.release();
       if(!err) {
         res.status(200).json(rows);
       }
     });

     connection.on('error', (err) => {
       res.status(100).json({'status':'Error in connection database'})
     });
   });
 })

 router.post('/add/festival', (req, res) => {
   let fest_data = req.body;
   pool.getConnection( (err, connection) => {
     if(err) {
       connection.release();
       res.status(100).json({'status':'Error in connection database'});
       return;
     }

     connection.query("select count(fest_id) as rowCount from festivals", (err, rows) => {
       connection.release();
       if(!err) {
         let fest_id = rows[0].rowCount+1;
         if(!fest_data.performers)
         fest_data.performers="";
         let values = '('+fest_id+',"'+fest_data.title+'","'+fest_data.subtitle+'","'+fest_data.fullTitle+'","'+fest_data.fromDate
         +'","'+fest_data.toDate+'","'+fest_data.description+'","'+fest_data.capacity+'",'+fest_data.age+',"'+fest_data.budget
         +'","'+fest_data.city+'","'+fest_data.country+'","'+fest_data.img_url+'","['+fest_data.performers+']");'
         let query = 'INSERT INTO festivals (fest_id, title, subtitle, full_title, from_date, to_date, description, capacity,age, budget, city, country, img_url, performers) values'+values;

         connection.query(query, (err, rows) => {
           res.redirect('/festivals');
         })

       }
     });

     connection.on('error', (err) => {
       res.status(100).json({'status':'Error in connection database'})
     });
   });
 })

 router.get('/remove/festival/:_id', (req, res) => {
   let fest_id = req.params._id;
   pool.getConnection(function(err,connection){
           if (err) {
             connection.release();
             res.status(100).json({"status" : "Error in connection database"});
             return;
           }
           var query = "delete from festivals where fest_id="+fest_id+";";
           connection.query(query,function(err,rows){
               connection.release();
               if(!err) {
                   res.redirect('/festivals');
               }
           });

           connection.on('error', function(err) {
                 res.json({"code" : 100, "status" : "Error in connection database"});
                 return;
           });
     });
 })

 router.post('/edit/festival/:fest_id/:user_id/:fest_title', (req, res) => {
   let fest_id = req.params.fest_id;
   let fest_title = req.params.fest_title;
   let user_id = req.params.user_id;
   let fest_data = req.body;
   pool.getConnection(function(err,connection){
           if (err) {
             connection.release();
             res.status(100).json({"status" : "Error in connection database"});
             return;
           }
           if(!fest_data.performers)
           fest_data.performers='';

           var query = "update festivals set title='"+fest_data.title+"', subtitle='"+fest_data.subtitle+"', full_title='"+
           fest_data.fullTitle+"', from_date='"+fest_data.fromDate+"', to_date='"+fest_data.toDate+"', description='"+
           fest_data.description+"', capacity='"+fest_data.capacity+"', age="+fest_data.age+", budget='"+fest_data.budget+"', city='"+
           fest_data.city+"' ,country='"+fest_data.country+"', img_url='"+fest_data.img_url+"', performers='["+fest_data.performers+"]'"+
           " where fest_id="+fest_id+" ;";
           connection.query(query,function(err,rows){
               connection.release();
               if(!err) {
                   res.redirect('/festival/'+fest_id+"/"+fest_title);
               }
           });
           connection.on('error', function(err) {
                 res.json({"code" : 100, "status" : "Error in connection database"});
                 return;
           });
     });
 });

 //articles api
 router.get('/articles', (req, res) => {
   pool.getConnection(function(err,connection){
           if (err) {
             connection.release();
             res.status(100).json({"status" : "Error in connection database"});
             return;
           }
           var query = "select id, title, img_url from articles order by weight desc limit 10;";
           connection.query(query,function(err,rows){
               connection.release();
               if(!err) {
                   res.status(200).json(rows);
               }
           });

           connection.on('error', function(err) {
                 res.json({"code" : 100, "status" : "Error in connection database"});
                 return;
           });
     });
 });

 router.get('/articles/:_id', (req, res) => {
   let blog_id = req.params._id;
   pool.getConnection(function(err,connection){
           if (err) {
             connection.release();
             res.status(100).json({"status" : "Error in connection database"});
             return;
           }
           var query = "select * from articles where id="+blog_id;
           connection.query(query,function(err,rows){
               connection.release();
               if(!err) {
                   res.status(200).json(rows);
               }
           });

           connection.on('error', function(err) {
                 res.json({"code" : 100, "status" : "Error in connection database"});
                 return;
           });
     });
 });

 router.post('/add/article', (req, res) => {
   let blog_data = req.body;
   pool.getConnection(function(err,connection){
           if (err) {
             connection.release();
             res.status(100).json({"status" : "Error in connection database"});
             return;
           }
           let query = "insert into articles (title, subtitle, full_title, description, img_url, weight, writer_id) values";
           let values = "('"+blog_data.title+"','"+blog_data.subtitle+"','"+blog_data.fullTitle+"','"+
           blog_data.description+"','"+blog_data.image_url+"',"+blog_data.weight+","+blog_data.user_id+");"
           query += values;
           console.log(query);
           connection.query(query,function(err,rows){
               connection.release();
               if(!err) {
                   res.redirect('/articles');
               }
           });

           connection.on('error', function(err) {
                 res.json({"code" : 100, "status" : "Error in connection database"});
                 return;
           });
     });
 })

 router.post('/edit/article/:blog_id/:user_id/:blog_title', (req, res) => {
   let blog_id = req.params.blog_id;
   let blog_title = req.params.blog_title;
   let user_id = req.params.user_id;
   let blog_data = req.body;
   pool.getConnection(function(err,connection){
           if (err) {
             connection.release();
             res.status(100).json({"status" : "Error in connection database"});
             return;
           }

           var query = "update articles set title='"+blog_data.title+"', subtitle='"+blog_data.subtitle+"', full_title='"+
           blog_data.fullTitle+"', description='"+blog_data.description+"', weight="+blog_data.weight+", img_url='"+
           blog_data.image_url+"' where id="+blog_id+" ;";

           connection.query(query,function(err,rows){
               connection.release();
               if(!err) {
                   res.redirect('/article/'+blog_id+"/"+blog_title);
               }
           });
           connection.on('error', function(err) {
                 res.json({"code" : 100, "status" : "Error in connection database"});
                 return;
           });
     });
 });



module.exports = router;
