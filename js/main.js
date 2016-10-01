
$(document).ready(function(){


// START SMOOTH SCROLLING

$('a[href^=#]').on('click', function(e){
  var href = $(this).attr('href');
  $('html, body').animate({
    scrollTop:$(href).offset().top
  },'slow');
  e.preventDefault();
});

// END SMOOTH SCROLLING

});