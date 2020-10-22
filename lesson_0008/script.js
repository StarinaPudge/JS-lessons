// document.querySelector('#test').onkeypress = function(e) {
//     console.log(e);
//     if ((e.keyCode < 97 || e.keyCode > 122) && (e.keyCode < 65 || e.keyCode > 90)) {
//         console.log('no ' + e.key);
//     } else {
//         this.value += e.key.toLowerCase();
//     }
//     return false;
// };

let left = 0;

document.onkeypress = function(e) {
    console.log(e);
    sq = document.querySelector('.sq');
    if (e.keyCode === 37) {
        left = left + 10;
        sq.style.marginLeft = left + 'px';
    }
    if (e.keyCode === 39) {
        left = left - 10;
        sq.style.marginLeft = left + 'px';
    }
    return false;
};