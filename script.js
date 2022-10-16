'use strict';

const openModal = document.querySelectorAll('.show-modal');
const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');

console.log(openModal);

const addingModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const removingModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < openModal.length; i++) {
  openModal[i].addEventListener('click', removingModal);
}

closeModal.addEventListener('click', addingModal);

overlay.addEventListener('click', addingModal);

document.addEventListener('keydown', function (e) {
  // console.log(e.key);
  e.preventDefault();
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    addingModal();
  }
});
