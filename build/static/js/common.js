'use strict';

if (document.getElementsByClassName('navbar-user-options')[0]) {
  var onUserOptionsClick = function onUserOptionsClick() {
    document.getElementsByClassName('user-options-wrapper')[0].classList.toggle('user-options-show');
  };

  document.getElementsByClassName('navbar-user-options')[0].addEventListener('click', onUserOptionsClick);
}
//# sourceMappingURL=common.js.map