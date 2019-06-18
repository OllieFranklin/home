const e = document.documentElement;
const b = document.getElementsByTagName("body")[0];
let wid = hgt = mouseX = mouseY = 0;

window.onload = function() {
	doResize();
};

function doResize() {
    wid = window.innerWidth || e.clientWidth || b.clientWidth;
    hgt = window.innerHeight|| e.clientHeight|| b.clientHeight;

	draw();
}

function doMouse(event) {
	mouseX = event.clientX;
	mouseY = event.clientY;

	draw();
}

function draw() {
	const offsets = [80,120,160];
	const bg = document.getElementsByClassName("bg-element");

	for (let i=0; i<3; i++) {
		const off = offsets[i];
		const offsetX = off*(mouseX/wid);
		const offsetY = off*(mouseY/hgt);

		bg[i].style.width = (wid+off)+"px";
		bg[i].style.height = (hgt+off)+"px";
		bg[i].style.left = (offsetX-off)+"px";
		bg[i].style.top = (offsetY-off)+"px";
	}
}