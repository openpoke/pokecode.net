//Scroll

// Registrar el plugin ScrollTrigger

gsap.registerPlugin(ScrollTrigger);

// 1. Fer aparèixer els mòduls a mesura que el "Scroll" baixa

// El footer queda fora: en pantalles molt altes el seu "top 85%" mai s'arriba a assolir i es quedaria amb opacity 0
var modulsGrid = document.querySelectorAll(".modul__grid:not(.footer .modul__grid)");

modulsGrid.forEach((item, i) => {
	gsap.from(item, {
		scrollTrigger: {
			trigger: item,
			start: "top 85%",
			end: "90% top",
			// markers: true,
			toggleActions: "play none none none",
		},
		opacity: 0,
		y: 30,
		duration: 0.5,
		ease: "power1.out",
	});
});
