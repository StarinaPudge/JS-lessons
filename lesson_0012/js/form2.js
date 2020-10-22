let select = document.querySelector('#select-1');


let rad = document.querySelectorAll('input[name=rad-1]');

select.onchange = function() {
    console.log(select.value);
    // console.log(rad.value);
};

let sendForm = document.querySelector('#send-form');
let form = document.querySelector('form');
console.log(form);
sendForm.onclick = function(event) {
    event.preventDefault();
    console.log('ww');
    console.log(serialize(form));
};

