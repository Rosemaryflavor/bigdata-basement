function modeToggle(){
  let modeTxt = modeBtn.innerHTML;
  console.log(modeTxt);
  if(modeTxt.innerHTML == 'DARK'){
    modeTxt.innerHTML == 'LIGHT';
    document.querySelector('header').classList.add('dark');
  }
}

let modeBtn = document.querySelector('.mode-btn');
let count = 0;

function modeToggle(){
  let modeTxt = modeBtn.innerHTML;
  let header = document.querySelector('header');
}

count = count + 1;
// 1, 3, 5, 7 => Darkmode
// 2, 4, 6, 8 => Lightmode

if(count % 2 == 0) {
  this.innerHTML = 'DARK';
  header.classList.remove('dark');
} else {
  this.innerHTML = 'LIGHT';
  header.classList.add('dark');
}

