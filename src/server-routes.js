import express from 'express';
import path from 'path';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import React from 'react';

import ClientRoutes from './client-routes';
import FestivalGridContainer from './react/templates/festivalGrid-container';
import FestivalListPage from './react/templates/festival-list.js'


var serverApp = express();

serverApp.set('view engine', 'ejs');
serverApp.set('views', path.join(__dirname, 'views'));

serverApp.use(express.static(path.join(__dirname, 'static')));




serverApp.get('/festivals', (req, res) => {
  const content = renderToString(
    <FestivalListPage />
  );
  res.render('festival-listing', {title: 'Musefests-Festivals', content });
})

serverApp.get('/', (req, res) => {
    fetch('http://localhost:2525/api/fests')
      .then(resp => resp.json())
      .then(function (data) {
          const festGridContainer = renderToString(
            <FestivalGridContainer fests = {data} />
          );
          res.render('index', {title: 'Musefests', festGridContainer });

      })
      .catch(function(e) {
        console.log("err api fetching"+e);
      });
});




module.exports = serverApp;
