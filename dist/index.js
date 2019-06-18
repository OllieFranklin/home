let wid = hgt = mouseX = mouseY = 0;

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