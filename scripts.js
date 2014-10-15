$(document).ready(function() {

	createGrid(prompt("Enter a grid size 1-20"));

// Creating a grid

function createGrid(x) {
	
	for (var i = 0; i < (x * x); i++) {
	
	$('.wrap').append('<div class="box"></div>');
	}

// Sizing the boxes within wrap div

	var boxSize = (500 / x);

	$('.box').width(boxSize);
	$('.box').height(boxSize);
};

// Change div color on Mouse Enter

$('.box').mouseenter(function() {
$(this).fadeTo("slow", .2);
});

});