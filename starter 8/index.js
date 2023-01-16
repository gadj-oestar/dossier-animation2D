

let timeline = gsap.timeline()
let a =document.getElementById("cta")

timeline.fromTo('h1', {opacity:0, y:"-100%"}, {opacity:1, y:"0%", delay:0.4,ease: "back.out(1.7)"});
timeline.fromTo('aside', {opacity:0, x:"100%"}, {opacity:1, x:"0%",ease: "back.out(1.7)"});
timeline.fromTo('p',{ opacity:0,y:"-80%"},{ opacity:1,y:"0%" ,delay:0.2, ease: "back.out(1.7)"});
timeline.fromTo('a', {opacity:0,y:"50%"},{ opacity:1,y:"0%",ease: "back.out(1.7)",duration:2});
timeline.fromTo('img', {opacity:0,y:"-50%"},{ opacity:1,y:"0%",ease: "back.out(1.7)",duration:2},"<");


a.addEventListener('click', function(){
    timeline.reverse();
})