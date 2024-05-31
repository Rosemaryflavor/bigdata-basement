let popupOpenBtn = document.querySelector('.popup-open-btn');
let popup = document.querySelector('.popup');
let popupCloseBtn = document.querySelector('.popup-close-btn')

popupOpenBtn.addEventListener('click', function(){
   popup.classList.add('is-active');
})
popupCloseBtn.addEventListener('click', function(){
  popup.classList.remove('is-active');
})

let sidebar = document.querySelector('.sidebar')
let sidebarOpenBtn = document.querySelector('.sidebar-open-btn')
let sidebarCloseBtn = document.querySelector('.sidebar-close-btn')

sidebarOpenBtn.addEventListener('click', function(){
  sidebar.classList.add('is-active');
})
sidebarCloseBtn.addEventListener('click', function(){
  sidebar.classList.remove('is-active');
})

// function openSidebar(){
//   sidebar.classList.add('is-active');
// }
// function CloseSidebar(){
//   sidebar.classList.remove('is-active');
// }
// sidebarOpenBtn.addEventListener('click', openSidebar);
// sidebarCloseBtn.addEventListener('click', CloseSidebar);

// function plus (num){
//   console.log(2124 + num);
// }
// plus(10);