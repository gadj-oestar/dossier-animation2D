let leftarrow = document.getElementById('leftArrow');
let rightarrow = document.getElementById('rightArrow');
let section = document.querySelector('.section')
let position= 0
let dot = document.querySelector(".dots");

let timeline = gsap.timeline( {duration:1});




leftarrow.addEventListener('click', function(){


    position+=100
            timeline.to( "section", {x:"-"+position + "%"})
    
            
})

rightarrow.addEventListener('click', function(){
    position-=100

    timeline.to( "section", {x: position + "%"})
})



dot.addEventListener("click", function(e){
    position-=100

    timeline.to( "section",{x:"-"+ e.target.dataset.index*100 + "%"})

    console.log(e.target)
});





