

// SCROLL MAGIC CONTROLLER
var controller = new ScrollMagic.Controller();

function pinSection(){
  let sections=['.aboutOwner','.services','.portfolio','.appointment']

  sections.forEach(element => {   
    new ScrollMagic.Scene({
      triggerElement: element,
      triggerHook: "onLeave",
    })
    .setPin(element)
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller);
  }); //end forEach
} // end pinSection function

pinSection()


//Fly in from the left
var fromBottomTimeline = new TimelineMax();
var fromBottomFrom = TweenMax.from(".services .col", 1, {
    opacity: 0,
    x:20
});
// var fromBottomTo = TweenMax.to(".services .col", 8, {
    // opacity: 1
// });
fromBottomTimeline
    .add(fromBottomFrom)
    // .add(fromBottomTo);

new ScrollMagic.Scene({
        triggerElement: ".services",
        offset: 200,
    })
    .setTween(fromBottomTimeline)
    .duration(170)
    //    .reverse(false)
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller);




function linkTest(){
  new ScrollMagic.setPin('#about')
}



// new ScrollMagic.Scene({
//   triggerElement: ".services",
//   triggerHook: "onLeave",
// })
// .setPin(".services")
// //.addIndicators() // add indicators (requires plugin)
// .addTo(controller);



// SMOOTH SCROLLING LINKS
// $(document).ready(function() {
    // let clickFunc =()={}

    // $("a.nav-link").click(function(event) {
    //     event.preventDefault();
    //     $("html, body").animate({
    //         scrollTop: $($(this).attr("href")).offset().top
    //       }, 2000);
    //   });

    //   clickFunc()
    //   clickFunc()
    //   clickFunc()
    //   clickFunc()

  // });

  function chessBoardCellColor(cell1, cell2) {
    let matrix= []
  //   1 equals true
    var current=true
    
    for(let i=0;i<7;i++){
      for(let j=0;j<7;j++){
        matrix[i][j] = 1
        // current = (current == true)? false : true
      }
      // current = (current == true)? false : true
    }
    
    console.log(matrix)
    
    
  }
  
  chessBoardCellColor(1, 2)