const tl=new TimelineMax

// Variables to see if checked================
let abClicked = false
let projClicked = false
let resClicked = false

const aboutClick=(e)=>{
    abClicked=true
    tl.to('.leftAboutBorder', .3,{height: '50%', width: '50%'})
    tl.to('.rightAboutBorder', .3,{height: '100%', width: '50%'}, '-=.3')
    tl.to('.aboutSection h2', .3,{margin: '36vh 13vw 0 0'}, '-=.7')

    changeHeaderText("About_Section")
}
const projClick=()=>{
    alert("projects");
}
const resClick=()=>{
    alert("resume");
}

//GSAP Animations==================
    const borderHover =()=>{
        if(!abClicked){
            tl.to('.leftAboutBorder', .3,{height: '25%', width: '25%'})
            tl.to('.rightAboutBorder', .3,{height: '25%', width: '25%'}, '-=.3')
        }
    } 

    const borderHoverOut =()=>{
        if(!abClicked){
            tl.to('.leftAboutBorder', .5,{height: '1%', width: '5%'})
            tl.to('.rightAboutBorder', .5,{height: '1%', width: '5%'}, '-=.5')
        }
    } 

// jquery==========================

    $(".aboutSection h2").hover(borderHover,borderHoverOut)


// gsap.registerPlugin(MotionPathPlugin);
// Nav button hovering
// let S = [{scale:1.1},{scale:1.02},{scale:1.2}];

// let btn= document.querySelectorAll("#btn")
// $(btn).hover(enter,out);
// function enter(){
//   TweenMax.to(this,0.5,{opacity: 1});
// };
// function out(){
//   TweenMax.to(this,{opacity:.5})
// };


//functions to delay type text in the header
let changeHeaderText=(e)=>{
    document.querySelector('#location').innerHTML='' 
    // scrolls text in the header
    // let name=e.parentNode.className
    for(let i=0;i<e.length;i++){
        delayLetters(i,e);
    }
}
let delayLetters=(i,name)=> { 
setTimeout(function() { 
    document.querySelector('#location').innerHTML+=name[i]
}, 40 * i); 
} 

