let year = document.querySelector('.year');

for(let i = 1920; i <= 2024; i++){
  let options = document.createElement('option');
  options.innerHTML = i;
  year.appendChild(options);
}

let options = `<option>${i}</option>`;
year.insertAdjacentElement('beforeend', options);

$('.year').append('<option>' + i + '</option>');

let kst = new Date();
let getYear = kst.getFullYear();
let getMonth = kst.getMonth();
console.log(getyear);