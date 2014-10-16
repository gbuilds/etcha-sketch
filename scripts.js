$(document).ready(function() {

	createGrid(8);

// Creating a grid

function createGrid(x) {

if (21 > x && x > 0) {

	for (var i = 0; i < (x * x); i++) {
	
	$('.wrap').append('<div class="box"></div>');
	};
};

// Sizing each box within wrap div

	var boxSize = (500 / x);

	$('.box').width(boxSize);
	$('.box').height(boxSize);
};

// Fade div on mouse enter

$('.box').mouseenter(function() {
$(this).fadeTo("slow", .2);
});

// Reset opacity for all boxes

$('.reset').click(function() {
$('.box').css("opacity", 1);
});

// Reset button removes old grid and 
// asks for a custom number of boxes

$('.changegrid').click(function() {
	removeGrid();
    createGrid(prompt("Enter a grid size 1-20"));
    $('.box').mouseenter(function() {
	$(this).fadeTo("slow", .2);
});
});

// Removing an old grid

function removeGrid() {
	$('.box').remove();
};

});