
$(document).ready(function() {

	createGrid(prompt("What size grid do you want?"));

});


function createGrid(x) {

	var boxSize = (300 / x);
	
	for (var i = 0; i < (x * x); i++) {
	
	$('.wrap').append('<div class="box"></div>');
	
	}
	$('.box').width(boxSize);
	$('.box').height(boxSize);
}