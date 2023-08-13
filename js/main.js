const toggleBtn = document.querySelector('.toggle-btn');
const menuBox = document.querySelector('.menu-box');

toggleBtn.addEventListener('click', () => {
  toggleBtn.classList.toggle('active')
  menuBox.classList.toggle('active')
});

// const toggle = document.querySelector('.toggle');
// const navigation = document.querySelector('.navigation');

// toggle.addEventListener('click', () => {
//   toggle.classList.toggle('active')
//   navigation.classList.toggle('active')
// });
