let hello = document.getElementById('hello');
let changeBtn = document.getElementById('txt-change-btn');
console.log(hello, changeBtn)

hello.innerHTML = '곤니찌와';
hello.style.color = 'purple';

changeBtn.addEventListener('click', () => {
  hello.innerHTML = 'Hello';
  hello.style.color = 'blue';
})

document.querySelector('.item').style.color = 'blue';

let item = document.querySelectorAll('.item');
// Vanlia Js 코드
document.querySelectorAll('.item')[0].style.color = 'blue';
document.querySelectorAll('.item')[1].style.color = 'blue';
document.querySelectorAll('.item')[2].style.color = 'blue';
// J-Query 코드
$('.item').css('color','red');
