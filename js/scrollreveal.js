ScrollReveal({
  duration: 800
})
ScrollReveal({
  reset: false
});
ScrollReveal().reveal('.show-1', {
  deley: 300
})
ScrollReveal().reveal('.show-2', {
  delay: 500
})
ScrollReveal().reveal('.show-3', {
  delay: 700
})
var slideUp = {
  distance: '50%',
  origin: 'left',
  opacity: 0
};
ScrollReveal().reveal('.slide', slideUp);