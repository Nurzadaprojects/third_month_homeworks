//MODAL with homework 3

const modal = document.querySelector('.modal');
const modalTriggerButton = document.querySelector('#btn-get');
const modalCloseButton = document.querySelector('.modal_close');
let modalOpened = false;

const openModal = () => {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    modalOpened = true;
};

const closeModal = () => {
    modal.style.display = 'none';
    document.body.style.overflow = '';
};

modalTriggerButton.onclick = openModal;
modalCloseButton.onclick = closeModal;
modal.onclick = (event) => {
    if (event.target === modal) {
        closeModal();
    }
};

const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        openModal();
        window.removeEventListener('scroll', handleScroll);
    }
};
window.addEventListener('scroll', handleScroll);

setTimeout(() => {
    if (!modalOpened) {
        openModal();
    }
}, 10000);
