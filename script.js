let navBtn = document.querySelector('#navi-toggle');
let navOptions = document.querySelectorAll('.navigation__link');

navOptions.forEach((item) => {
  item.addEventListener('click', () => {
    navBtn.checked = false;
  })
})