const imageAspectRatio = 600/438;
let initialTranslation;
let i;


$(document).ready(function(){

	jQuery("#text-wrapper").fitText(1, { minFontSize: '1px', maxFontSize: '100px' });

	onResize();
	setInterval(draw, 1000/60);
}); 

window.onresize = function(event) {
	onResize();	
};

function onResize() {

	let pugHeight = parseInt($("#pug").css("height"), 10);
	initialTranslation = -pugHeight;
	i = 0;

	$("#pug").css("display", "block");    
}

function draw() {

	let jumpHeight = parseInt($(document).height(), 10) / 10;
	let scale = 1.03 - (0.03 * Math.sin(i));


	let pugHeight = parseInt($("#pug").css("height"), 10);

	let scaleOffset = pugHeight - (scale * pugHeight);
	let yOffset = Math.min(jumpHeight * Math.sin(i), 0) + scaleOffset;

	let translation = "translateY(" + (initialTranslation + yOffset - 25) + "px)";
	let scaleString = "scaleY(" + scale + ")";

	$("#pug").css("transform", translation + " " + scaleString);

	i += 0.1;
}