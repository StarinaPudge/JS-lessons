document.querySelector('.read-rules').onclick = function() {
    document.querySelector('.form-slider').style.marginLeft = '-250px';
};

document.querySelectorAll('.read-rules-back').forEach(elem => {
    elem.onclick = function() {
        document.querySelector('.form-slider').style.marginLeft = '0';
    };
});