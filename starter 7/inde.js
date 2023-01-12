let main = document.querySelector('main');

main.addEventListener('mouseover', function(e){
    gsap.to(e.target,{ backgroundColor:'#fee440'})
})

main.addEventListener('mouseout', function(e){
    gsap.to(e.target,{ backgroundColor:'#f15bb5', delay:0.6,duration:0.5 })
})
