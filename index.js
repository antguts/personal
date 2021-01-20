

const aboutClick=()=>{
    alert(this);
}
const projClick=()=>{
    alert("projects");
}
const resClick=()=>{
    alert("resume");
}

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
    let name=e.parentNode.className
    for(let i=0;i<name.length;i++){
        delayLetters(i,name);
    }
}
let delayLetters=(i,name)=> { 
setTimeout(function() { 
    document.querySelector('#location').innerHTML+=name[i]
}, 40 * i); 
} 

