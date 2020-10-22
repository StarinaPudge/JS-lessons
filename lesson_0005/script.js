// document.querySelector('.push').onclick = function() {
//     console.log(document.querySelector('.text-input').value);

//     console.log(document.querySelector('.pass-input').value);

//     console.log(document.querySelector('.range-input').value);

//     console.log(document.querySelector('.calendar-input').value);

//     console.log(document.querySelector('.color-input').value);

//     console.log(document.querySelector('.checkbox-input').checked);

//     console.log(document.querySelectorAll('.radio-input'));
//     let radioBtn = document.querySelectorAll('.radio-input');
//     for (let i = 0; i < radioBtn.length; i++) {
//         if (radioBtn[i].checked) {
//             console.log(radioBtn[i].value);
//         }
//     }
// };

let form = document.querySelector('form');
let pushBtn = document.querySelector('#send-form');
pushBtn.onclick = function(event) {
    console.log(form);

    event.preventDefault();
    console.log(serialize(form));
};
