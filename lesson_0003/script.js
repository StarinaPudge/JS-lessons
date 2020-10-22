let randNbr = Math.round(Math.random() * 10);
console.log(randNbr);

let userNum = document.querySelector('#userNbr');
document.querySelector('#btn').onclick = checkNbr;

function checkNbr() {
    let num = userNum.value;
    num = parseInt(num);
    if (isNaN(num)) {
        alert('Wrong number: ' + num);
    } else {
        if (num === randNbr) {
            alert('Your number ' + num + ' is the same as random ' + randNbr);
            location.reload();
        } else {
            alert('Your number ' + num + 'is not the same as random, try again');
        }
    }
}