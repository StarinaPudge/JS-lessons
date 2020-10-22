function myClick(event) {
    // console.log(event.target);
    // console.log('click');
    console.log(this);

}

document.onclick = function(event) {
    // console.log(event.target);
    if (event.target.id === 'one') console.log('punchman');
};

// document.querySelector('#one').onclick = myClick;
// document.querySelector('body').onclick = myClick;
// document.querySelector('html').onclick = myClick;


document.querySelector('.two').onclick = function(event) {
    console.log('The Second one');
    event.stopPropagation();
};

document.querySelector('.three').onclick = function() {
    // console.log('The Third one');
    this.style.display = 'none';
};