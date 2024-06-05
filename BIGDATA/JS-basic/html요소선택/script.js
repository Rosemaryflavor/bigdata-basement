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

// items.forEach((item) => {
//   item.innerHTML = '반복문';
// })

// for(let i = 0; i <= items.length; i++) {
//   items[i].innerHTML = 'for 반복문';
 
// }

let num = 5;
let num1 = '5';
let txt = '안녕하세요'
console.log(typeof(num1))
console.log(num1)
console.log((txt));
console.log((typeof(txt)));

// Array(배열), Object: 여러 자료를 한번에 담을 때 씀 
// Array: []  Object: {}
// let arr = ['may', 3543, 'August' '니하오']
// console.log(arr[0])