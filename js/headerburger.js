let headerburger = document.querySelector('.header__burger');
  let headernavbar = document.querySelector('.header__navbar');
  let menuLink = document.querySelectorAll('menu__link');

  headerburger.addEventListener('click', function () {
    headerburger.classList.toggle('active');
    headernavbar.classList.toggle('active');
  })


  menuLink.forEach(function (menuLink) {
    menuLink.addEventListener('click', function () {
      headerburger.classList.toggle('active');
      headernavbar.classList.toggle('active');
    })
  })