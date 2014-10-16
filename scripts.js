$(document).ready(function() {

	createGrid(10);

// Creating a grid

function createGrid(x) {
	
	for (var i = 0; i < (x * x); i++) {
	
	$('.wrap').append('<div class="box"></div>');
	}

// Sizing each box within wrap div

	var boxSize = (500 / x);

	$('.box').width(boxSize);
	$('.box').height(boxSize);
};

// Fade div on mouse enter

$('.box').mouseenter(function() {
$(this).fadeTo("slow", .2);
});

// Reset button for all boxes

$('.reset').click(function() {
$('.box').css("opacity", 1);
});

// Prompt button asks for number of boxes

$('.changegrid').click(function() {
	console.log("test 1");
	removeGrid();
	console.log("test 2");
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