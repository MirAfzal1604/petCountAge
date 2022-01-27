let input = document.querySelector("#input");

input.addEventListener("input", p => {
    var age = p.target.value;
    document.querySelector('#dog').innerHTML = age * 7 + ' Years Old';
    document.querySelector('#cat').innerHTML = age * 5.2 + ' Years Old';
    document.querySelector('#horse').innerHTML = age * 6 + ' Years Old';
    document.querySelector('#rabbit').innerHTML = age * 7 + ' Years Old';
});

function clr() {
    document.getElementById('input').value = '';
    document.getElementById('cat').innerHTML = null;
    document.getElementById('horse').innerHTML = null;
    document.getElementById('rabbit').innerHTML = null;
    document.getElementById('dog').innerHTML = null;
}