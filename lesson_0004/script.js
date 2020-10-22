// document.querySelector('p').innerHTML = 'by';

document.querySelector('#btnCatDog').onclick = changeDogCat;

function changeDogCat() {
    if (document.querySelector('img').src === 'https://cdn2.iconfinder.com/data/icons/artificial-intelligence-6/64/ArtificialIntelligence7-48.png') {
        document.querySelector('img').src = 'https://cdn4.iconfinder.com/data/icons/robocat-logo/500/robocat_cat-48.png';
    } else {
        document.querySelector('img').src = 'https://cdn2.iconfinder.com/data/icons/artificial-intelligence-6/64/ArtificialIntelligence7-48.png';
    }
}

document.querySelector('#btnNewStl').onclick = changeStyle;

function changeStyle() {
    let link = document.querySelector('link').href.split('/');
    if (link[link.length-1] === "style2.css") {
        document.querySelector('link').href = "style1.css";
    } 
    if (link[link.length-1] === "style1.css") {
        document.querySelector('link').href = "style2.css";
    } 
}

document.querySelector('#btnAddText').onclick = addText;

function addText() {
    let newText = document.querySelector('#textToAdd').value;
    console.log(newText);
    let whereToAdd = document.querySelector('#adder').value;
    console.log(whereToAdd);

    document.querySelector('#firstDiv').insertAdjacentHTML(whereToAdd, newText);
}
