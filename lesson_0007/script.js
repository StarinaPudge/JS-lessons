document.querySelector('.onclick').onclick = function() {
    console.log('click');
};

document.querySelector('.ondblclick').ondblclick = function() {
    console.log('ondblclick');
};

document.querySelector('.onmousemove').onmousemove = function() {
    console.log('move');
};

document.querySelector('.onmouseenter').onmouseenter = function() {
    console.log('onmouseenter');
};

document.querySelector('.onmouseleave').onmouseleave = function() {
    console.log('onmouseleave');
};

document.querySelector('.onmousewheel').onmousewheel = function() {
    console.log('onmousewheel');
    return false;
};

document.querySelector('.onmousewheel').oncontextmenu = function() {
    console.log('oncontextmenu');
    return false;
};