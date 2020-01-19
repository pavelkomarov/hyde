
// A function to fade-in the navbar's background on the homepage
// based on vertical location
function navbar_opacity() {
	let offset = window.scrollY;
	let opacity = 1
	if (offset <= 200) {
		opacity = 0;
	} else if (200 <= 500){
		opacity = (offset - 200)/300;
	}
	document.querySelector('nav').style.backgroundColor = 'rgba(34,34,34,'+opacity+')';
}
if (window.location.href.match('^https?://[^/]+/(#.*)?$')) { // if on homepage
	navbar_opacity(); // so proper transparency when linked back to #section
	window.addEventListener('scroll', navbar_opacity);
} else { // on not-homepages, navbar is never transparent
	document.querySelector('nav').style.backgroundColor = 'rgba(34,34,34,1)';
}

// Closes the Responsive Menu on Menu Item Click
for (let link of document.querySelectorAll('.navbar-collapse a')) {
	link.addEventListener('click', () => {
		hamburger = document.getElementById('hamburger');
		if (window.getComputedStyle(hamburger).display == 'block') { // only if collapsed
			hamburger.click(); // because doing this if uncollapsed blinks the menu; I no like
		}
	});
}

// Smooth scrolling for page-scroll elements
for (let link of document.querySelectorAll('a.page-scroll')) {
	link.addEventListener('click', event => {
		let where_to = event.target.href.split('#');
		let where_is = window.location.href.split('#');
		if (where_to[0] == where_is[0]) { // then we're on the same page, so scroll smoothly
			event.preventDefault();
			anchor = document.querySelector('#'+where_to[1]);
			anchor.scrollIntoView({ behavior: 'smooth' }); // smooth, baby
		}
	});
}

