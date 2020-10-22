let block1 = document.querySelector('.block-1');
block1.style.width = "200px";
console.log(block1.style);


block1.classList.add('red');

block1.classList.add('green');

block1.classList.remove('green');

console.log(block1.classList);

console.log(block1.classList.contains('red'));

document.querySelector('.switch').onclick = function() {
    block1.classList.toggle('red');
};