const imageAspectRatio = 600/438;
let initialTranslation;
let i;


$(document).ready(function(){
	onResize();
	setInterval(draw, 1000/60);
}); 

window.onresize = function(event) {
	onResize();	
};

function onResize() {
	let pugWidth = parseInt($("#pug").css("width"), 10);
	let pugHeight = imageAspectRatio*pugWidth;
    $("#pug").css("height", pugHeight);

	initialTranslation = -pugHeight;
	i = 0;

	$("#pug").css("display", "block");    
}

function draw() {

	let jumpHeight = parseInt($(document).height(), 10) / 15;

	let yOffset = Math.min(jumpHeight * Math.sin(i), 0);

	let translation = "translateY(" + (initialTranslation + yOffset) + "px)";

	$("#pug").css("transform", translation);

	i += 0.1;
}