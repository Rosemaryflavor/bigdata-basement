let userid = document.querySelector.getElementedById('userid');
let idWarn = document.querySelector('.id-warn');

let userpw = document.getElementById('userpw');
let pwWarn = document.querySelector('.pw-warn');

userid.addEventListener('focusout', fuction()) ;{
  if(userid.Value.length < 8) ;{
    idWarn.innerHTML = `<span class="txt-red">아이디를 8글자 이상 입력하시오.</span>`
  }
}


let year = document.querySelector.getElementedById('year');
let month = document.querySelector.getElementedById('month');
let date =  document.querySelector.getElementedById('date');

let kst = new Date();
let getYear = kst.getFullYear();

for(let i = 1920; i <= getYear; i++){
  let  option = `<option>${i}</option>`
}