//grabbing each div from the HTML and storing in variable.
const aboutDiv=document.querySelector('.about_Section')
const contactDiv= document.querySelector('.contact_Section')
const projectsDiv= document.querySelector('.projects_Section')
const teamDiv= document.querySelector('.team_Section')


//variable to create GSAP animations
let tl=new TimelineMax

//runs animation after pageload
window.addEventListener('load', (event) => {
    tl.to('#one',.6,{top: '0'})
    tl.to('#one',.5,{opacity: 1},'-=.5')
    tl.to('#two',.5,{top: '0', opacity: 1},'-=.4')
    
  });

//functions to delay type text in the header
let changeHeaderText=(e)=>{
        //scrolls text in the header
        for(let i=0;i<e.parentNode.className.length;i++){
            delayLetters(i,e);
        }
    }

let delayLetters=(i,e)=> { 
    setTimeout(function() { 
        document.querySelector('#location').innerHTML+=e.parentNode.className[i]
    }, 40 * i); 
} 

//Uses switch to determine appropriate content based on parent ID.
let deliverContent=(e)=>{
    // console.log(e.parentNode.className)
    switch(e.parentNode.className){
        case 'about_Section':
            aboutContent(e)
            break;
        case 'contact_Section':
            break;
        case 'projects_Section':
            break;
        case 'team_Section':
            break;
    }
}


let aboutContent=(e)=>{
    if(e.id == 'false'){
        tl.to('#about-info #p1',1,{opacity: 1, y:10})
        tl.to('#about-info #p2',1,{opacity: 1, y:10},'-=.6')
        tl.to('#about-info #p3',1,{opacity: 1, y:10},'-=.6')
    } else {
        tl.to('#p1,#p2,#p3',{opacity: 0, y:-10})
    }
}

let projectsContent=()=>{

}
// let aboutContent=()=>{
    
// }
// let aboutContent=()=>{
    
// }

//checks if opened or not and runs appropriate animation.  
let clicked=(e)=>{  
    document.querySelector('#location').innerHTML='' 
    if(e.id == 'false'){ 
        tl.to(e.parentNode, .5,{height:'55vh'})
        tl.to(e.parentNode,.1,{backgroundColor:'#000000'},'-=1')
        tl.to(e.childNodes[1],{display: 'revert'},'-=1')
        tl.to(e.childNodes[1], .2,{opacity: .9},'-=.3')
        tl.to(e.childNodes[0], .7,{right:'250px'},'-=.6')
        tl.to(e.childNodes[2], .7,{left:'250px'},'-=.6')
        changeHeaderText(e)
        deliverContent(e)
        // aboutContent(e.id)
        
        e.id='true';
    }else{
        deliverContent(e)
        tl.to(e.parentNode, .5,{height:'25vh'})
        tl.to(e.parentNode,.1,{backgroundColor:'white'},'-=1')
        tl.to(e.childNodes[1],{opacity: 0},'-=1')
        tl.to(e.childNodes[1],{display: 'none'},'-=1')
        tl.to(e.childNodes[0], .5,{right:'0'},'-=.5')
        tl.to(e.childNodes[2], .5,{left:'0'},'-=.5')
        document.querySelector('#location').innerHTML=''
        // aboutContent(e)

        
        e.id='false';
    }
}



