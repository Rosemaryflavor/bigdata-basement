let popupOpenBtn = document.querySelector('.popup-open-btn');
let popup = document.querySelector('.popup');
let popupCloseBtn = document.querySelector('.popup-close-btn')

popupOpenBtn.addEventListener('click', function(){
   popup.classList.add('is-active');
})
popupCloseBtn.addEventListener('click', function(){
  popup.classList.remove('is-active');
})