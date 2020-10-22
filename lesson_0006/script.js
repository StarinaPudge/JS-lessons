// let blocks = document.querySelectorAll('.block');

// function testing() {
//     console.log(this.innerHTML);
//     this.style.background = 'red';
// }

// for (let i = 0; i < blocks.length; i++) {
//     blocks[i].onclick = testing;
// }
let tab = document.querySelectorAll('.tab');

function init(j) {
    let tabBody = document.querySelectorAll('.tab-body');
    for (let i = 0; i < tabBody.length; i++) {
        if (i == j) {
            tabBody[i].style.display = 'block';
        } else {
            tabBody[i].style.display = 'none';
        }
    }
}

init(0);

tab.forEach(function(elem) {
    elem.onclick = showTabs;
});

function showTabs() {
    let pNumber = this.getAttribute('data');
    init(pNumber-1);
}