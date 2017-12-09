function toggleParallax() {
  let demos = document.getElementsByClassName('demo');
  let i;
  for (i = 0; i < demos.length; i++) {
    demos[i].classList.toggle('parallax')
  }
}
