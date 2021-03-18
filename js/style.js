$(window).scroll(function() {
	if ($(document).scrollTop() > 30) {
		$('nav').addClass('bg-navbar-scroll');
	}      else {
		$('nav').removeClass('bg-navbar-scroll');
	}
});



$(document).ready(function(){
  $("button").click(function(){
    $("nav").addClass("bg-navbar-scroll")
  })
})