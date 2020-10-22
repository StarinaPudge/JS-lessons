document.querySelectorAll('.modal-show').forEach(function(elem) {
    elem.onclick = showModal;
});

document.querySelectorAll('.modal-close').forEach(function(elem) {
    elem.onclick = closeModal;
});

document.querySelectorAll('.modal-wrap').forEach(function(elem) {
    elem.onclick = closeModal;
});

function showModal() {
    let modalId = this.dataset.modal;
    document.querySelector(modalId).classList.remove('hide');
    document.onkeydown = function(event) {
        if (event.keyCode === 27) closeModal();
    };
}

function closeModal() {
    document.querySelectorAll('.modal-wrap').forEach(function(elem) {
        elem.classList.add('hide');
    });
    document.onkeydown = null;
} 