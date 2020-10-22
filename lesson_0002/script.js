function someText() {
    console.log("Some text");
}

let btn = document.querySelector('#btn');
console.log(btn.clientTop);
btn.onclick = someText;


let modalBtn = document.querySelector('#modal-show');
modalBtn.onclick = show;

function show() {
    let modal = document.querySelector('.modal');
    if (modal.hidden === false) {
        modal.hidden = true;
    } else {
        modal.hidden = false;
    }
}

let borderBtn = document.querySelector('#changeBorder');
borderBtn.onclick = changer;

function changer() {
    let modal = document.querySelector('.modal');
    modal.style.borderRadius = '20px';
    modal.style.border = '5px';
}