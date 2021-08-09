const w = window, d = document, e = d.documentElement, g = d.getElementsByTagName('body')[0];
const WIDTH = w.innerWidth || e.clientWidth || g.clientWidth;
const HEIGHT = w.innerHeight || e.clientHeight || g.clientHeight;

const NUM_STARS = WIDTH * HEIGHT / 25000;

for (let i = 0; i < NUM_STARS; i++) {

	let delay = Math.random() * 10000;

	if (i % 2 === 0) {
		setTimeout(function () { addStar("homepage/star1"); }, delay);
	} else {
		setTimeout(function () { addStar("homepage/star2"); }, delay);
	}
}

function addStar(name) {
	let left = Math.random();
	let top = Math.random();

	let star = document.createElement("IMG");
	star.src = name + ".svg";
	star.className = "star";
	star.id = name;

	star.style.animationDuration = (5 + Math.random() * 10).toString() + "s";
	star.style.left = (left * 100).toString() + "%";
	star.style.top = (top * 100).toString() + "%";
	star.style.height = "2%";
	document.body.appendChild(star);
}

function showProjectDescription() {
	document.querySelector("#project-description-container").style.display = "flex";
}

function hideProjectDescription() {
	document.querySelector("#project-description-container").style.display = "none";
}
