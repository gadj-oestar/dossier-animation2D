

let section = document.querySelectorAll(".stage");
let array = 15;

for (let i = 0; i < array; i++) {
section[i].addEventListener("click", function() {
gsap.to(section[i], {scale: 1.9, duration: 1,ease: "elastic.out(1, 0.3)"});
}) }


gsap.fromTo( ".stage",{scale:0, ease:"elastic.out"}, { scale:1.2, ease: "elastic.out(1, 0.3)",  stagger:{each:0.1,  from:"center"}});
