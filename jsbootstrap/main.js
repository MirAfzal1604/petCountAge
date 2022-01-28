let input = document.querySelector("#input");
let dog = document.querySelector('#dog');
let cat = document.querySelector('#cat');
let horse = document.querySelector('#horse');
let rabbit = document.querySelector('#rabbit');

input.addEventListener("input", p => {
    var age = p.target.value;

    dog.innerHTML = Number(age * 7).toFixed(2) + ' Years Old';
    cat.innerHTML = Number(age * 5.2).toFixed(2) + ' Years Old';
    horse.innerHTML = Number(age * 6).toFixed(2) + ' Years Old';
    rabbit.innerHTML = Number(age * 7).toFixed(2) + ' Years Old';
});

function clr() {
    input.value = '';
    dog = null;
    cat = null;
    horse = null;
    rabbit = null;
}