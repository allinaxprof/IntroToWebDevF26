// show/hide the navbar links on phones when the hamburger is clicked
function toggleShow() {
  document.getElementById('menu').classList.toggle('show')
  document.getElementById('account').classList.toggle('show')
  document.getElementById('mobile-links').classList.toggle('show')
}

// move the active class to the size that was clicked
function selectSize(size) {
  document.querySelector('.sizes .active').classList.remove('active')
  size.classList.add('active')
}
