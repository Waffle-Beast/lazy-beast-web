const menu = document.querySelector('.adaptive-menu');
const nav = document.querySelector('.navigation');
const sections = document.querySelectorAll('section')
const body = document.querySelector('body')

console.log(nav)

menu.addEventListener('click', () => {
  nav.classList.toggle('active');
  menu.classList.toggle('active');
});

sections.forEach(section => {
  section.onclick = function(){
    nav.classList.remove('active');
    menu.classList.remove('active');
  };
});

