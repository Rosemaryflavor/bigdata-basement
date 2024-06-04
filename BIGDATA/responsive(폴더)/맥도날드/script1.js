let search = document.querySelector('.search');
let searchOpenBtn = document.querySelector('.sidebar-open-btn');
let searchCloseBtn = document.querySelector('.search-close-btn');

function searchOpen(){
 search.classList.add('is-open');
}

searchOpenBtn.addEventListener('click', searchOpen);

function searchClose(){
  search.classList.remove('is-open');
}
searchCloseBtn.addEventListener('click', searchClose);

let sidebar = document.querySelector('.sidebar');
let sidebarOpenBtn = document.querySelector('.sidebar-open-btn');
let overlay = document.querySelector('.overlay');
console.log(sidebar, sidebarOpenBtn, overlay);

function sidebarOpen() {
  sidebar.classList.add('active');
  overlay.classList.add('active');
}
sidebarOpenBtn.addEventListener('click', sidebarOpen);

function sidebarClose() {
  sidebar.classList.remove('active');
  overlay.classList.remove('active');
}
overlay.addEventListener('click', sidebarClose);
