if(document.getElementsByClassName('navbar-user-options')[0]){
  document.getElementsByClassName('navbar-user-options')[0].addEventListener('click', onUserOptionsClick);
  function onUserOptionsClick() {
    document.getElementsByClassName('user-options-wrapper')[0].classList.toggle('user-options-show');
  }  
}
