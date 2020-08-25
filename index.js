//grabbing each div from the HTML and storing in variable.
const aboutDiv=document.querySelector('.about')
const contactDiv= document.querySelector('.contact')
const projectsDiv= document.querySelector('.projects')
const teamDiv= document.querySelector('.team')

//variable to create GSAP animations
let tl=new TimelineMax

//runs animation after pageload
window.addEventListener('load', (event) => {
    tl.to('#one',.6,{top: '0'})
    tl.to('#one',.5,{opacity: 1},'-=.5')
    tl.to('#two',.5,{top: '0', opacity: 1},'-=.4')
    
  });

let letters=['a','b','c','d','e','f','g','h','i','j','k','l','m']
//checks if opened or not and runs appropriate animation.  
let clicked=(e)=>{    
    if(e.id == 'false'){ 
        tl.to(e.parentNode, .5,{height:'55vh'})
        tl.to(e.parentNode,.1,{backgroundColor:'#000000'},'-=1')
        tl.to(e.childNodes[1],{display: 'revert'},'-=1')
        tl.to(e.childNodes[1], .2,{opacity: .9},'-=.3')
        tl.to(e.childNodes[0], .7,{right:'250px'},'-=.6')
        tl.to(e.childNodes[2], .7,{left:'250px'},'-=.6')
        // tl.set('#paraTest',{text: 'm'});
        // for(let i=0;i<letters.length;i++){
        //     // if(i%3==0)
        //     // document.querySelector('#parTest').innerHTML=letters[i/3]
        // }

        //Switch statement to check which info section to load
        // switch(){
        //     case():
        // }


        e.id='true';
    }else{
        tl.to(e.parentNode, .5,{height:'25vh'})
        tl.to(e.parentNode,.1,{backgroundColor:'white'},'-=1')
        tl.to(e.childNodes[1],{opacity: 0},'-=1')
        tl.to(e.childNodes[1],{display: 'none'},'-=1')
        tl.to(e.childNodes[0], .5,{right:'0'},'-=.5')
        tl.to(e.childNodes[2], .5,{left:'0'},'-=.5')

        e.id='false';
    }
}



