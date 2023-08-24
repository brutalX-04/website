TweenMax.staggerFrom(".intro > div", 0.8, {
	x: "-80",
	ease: Power3.easeInOut,
	opacity: "0",
},2);

TweenMax.staggerTo(".intro > div", 0.8, {
	x: "100",
	ease: Power3.easeInOut,
	delay: 1.2,
	opacity: "0",
},2);

setTimeout(function() {
  window.location.href = "home.html"; // Ganti dengan halaman utama Anda
}, 8000);