const space = document.getElementById("space");
const stars1 = document.getElementById("stars1");
const stars2 = document.getElementById("stars2");

let wid = hgt = 0;
let mouseX = mouseY = 0;

window.onload = function() {doResize();};

function doResize() {

	const w = window,
	    d = document,
	    e = d.documentElement,
	    g = d.getElementsByTagName('body')[0];

    wid = w.innerWidth || e.clientWidth || g.clientWidth;
    hgt = w.innerHeight|| e.clientHeight|| g.clientHeight;

	draw();
}

function doMouse(event) {
	mouseX = event.clientX;
	mouseY = event.clientY;

	draw();
}

function draw() {
	let off = 80;
	let offsetX = off*(mouseX/wid);
	let offsetY = off*(mouseY/hgt);

	space.style.width = (wid+off)+"px";
	space.style.height = (hgt+off)+"px";
	space.style.left = (offsetX-off)+"px";
	space.style.top = (offsetY-off)+"px";

	off = 120;
	offsetX = off*(mouseX/wid);
	offsetY = off*(mouseY/hgt);

	stars1.style.width = (wid+off)+"px";
	stars1.style.height = (hgt+off)+"px";
	stars1.style.left = (offsetX-off)+"px";
	stars1.style.top = (offsetY-off)+"px";

	off = 160;
	offsetX = off*(mouseX/wid);
	offsetY = off*(mouseY/hgt);

	stars2.style.width = (wid+off)+"px";
	stars2.style.height = (hgt+off)+"px";
	stars2.style.left = (offsetX-off)+"px";
	stars2.style.top = (offsetY-off)+"px";
}