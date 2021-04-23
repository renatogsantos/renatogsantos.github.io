ScrollReveal({
  duration: 500
})
ScrollReveal({
  reset: false
});
ScrollReveal().reveal('.show-1', {
  deley: 200
})
ScrollReveal().reveal('.show-2', {
  delay: 300
})
ScrollReveal().reveal('.show-3', {
  delay: 400
})
var slideUp = {
  distance: '50%',
  origin: 'left',
  opacity: 0
};
ScrollReveal().reveal('.slide', slideUp);