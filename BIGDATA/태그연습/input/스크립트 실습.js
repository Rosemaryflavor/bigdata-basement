let a, b, c = true;

let userid = document.querySelector.getElementedById('userid');
let idWarn = document.querySelector('.id-warn');

userid.addEventListener('focusout', fuction()) ;{
  if(userid.value.length < 8) ;{
    idWarn.innerHTML = `<span class="txt-red">아이디를 8글자 이상 입력하시오.</span>`;
  } {
    idWarn.innerHTML = `<span class="txt-green">멋진 아이디입니다!</span>`;
  }
}

let userpw = document.getElementById('userpw');
let pwWarn = document.querySelector('.pw-warn');

userpw.addEventListener('focusout', function() {
  let pwExp = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{8,16}$/;

  if(!pwExp.test(userpw.value)) {
    pwWarn.innerHTML = `<span class="txt-red">8~16자 영문 대문자, 소문자, 숫자를 사용하시오.</span>`
  } else {
    pwWarn.innerHTML = '';
  }
})

let year = document.querySelector.getElementedById('year');
let month = document.querySelector.getElementedById('month');
let date =  document.querySelector.getElementedById('date');

let kst = new Date();
let getYear = kst.getFullYear();

for(let i = 1920; i <= getYear; i++){
  let  option = `<option>${i}</option>`
}

let checkBoxs = document.querySelectorAll('input[type="checkbox"][name="hobby"]');

checkBoxs.forEach((item) => { 
  item.addEventListener('change', () => {
    let checkCount = document.querySelectorAll('input[type="checkbox"][name="hobby"]').length;
  })
})
