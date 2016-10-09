
$(document).ready(function(){


$('#loading').animate({width: 200, marginLeft: 0}, {duration: 1000});

$('.nav-list').mouseenter(function(){
	$(this).animate({width: '+=3vw'},'fast')
	.css('background-image','url(../img/45degreee.png)')
	.css('font-weight','900')
	.css('color','#008080');

}).mouseleave(function(){
	$(this).animate({width: '-=3vw'},'fast')
	.css('background-image','url(../img/45degreeeLightblue.png)');
	$(this).css('font-weight','normal')
	.css('color','#e8e8e8');
});



// START SMOOTH SCROLLING

$('.willkommen-l').click(function(){
	$('.content').scrollTo('.willkommen-s',500);
});

$('.ubermich-l').click(function(){
	$('.content').scrollTo('.ubermich-s',500);
});

$('.angebote-l').click(function(){
	$('.content').scrollTo('.angebote-s',500);
});
// END SMOOTH SCROLLING

});