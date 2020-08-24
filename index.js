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

//checks if opened or not and runs appropriate animation.  
let clicked=(e)=>{    
    if(e.id == 'false'){ 
        tl.to(e.parentNode, .5,{height:'55vh'})
        tl.to(e.childNodes[0], .5,{right:'250px'},'-=.6')
        tl.to(e.childNodes[1], .5,{left:'250px'},'-=.6')
        //Switch statement to check which info section to load
        switch(){
            case():
        }


        e.id='true';
    }else{
        tl.to(e.parentNode, .5,{height:'21vh'})
        tl.to(e.childNodes[0], .5,{right:'0'},'-=.6')
        tl.to(e.childNodes[1], .5,{left:'0'},'-=.6')

        e.id='false';
    }
}
