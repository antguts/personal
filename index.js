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
    switch(e.parentNode.className){
        case 'about_Section':
            aboutContent(e)
            break;
        case 'contact_Section':
            contactContent(e);
            break;
        case 'projects_Section':
            projectsContent(e)
            break;
        case 'team_Section':
            break;
    }
}



//animations for display. 
let aboutContent=(e)=>{
    if(e.id == 'false'){
        
        tl.to('#about-info #p1',.5,{opacity: 1, y:10},'-=.3')
        tl.to('#about-info #p2',.5,{opacity: 1, y:10},'-=.3')
        tl.to('#about-info #skillset',.5,{opacity: 1, y:10},'-=.3');
    } else {
        
        tl.to('#skillset,#p1,#p2,#p3',{opacity: 0, y:-10});
    }
}

let projectsContent=(e)=>{
    if(e.id=='false'){
        tl.to('.projectContent',.5,{display: 'revert',opacity:1})
    } else{
        tl.to('.projectContent',{opacity:0, display: 'none'})
    }
}
let contactContent=(e)=>{
    if(e.id=='false'){
        tl.to('#email,#github,#linkedin',{display: 'revert', overFlow: 'auto'})
        tl.to('#email',.3,{opacity:1, marginTop: '5px'},'-=.3')
        tl.to('#linkedin',.3,{opacity:1, marginTop: '5px'})
        tl.to('#github',.3,{opacity:1, marginTop: '5px'})
        tl.to('#email',.2,{marginTop: '15px'},'-=.6')
        tl.to('#linkedin',.2,{marginTop: '15px'},'-=.3')
        tl.to('#github',.2,{marginTop: '15px'})
        tl.to('.contact_Section p',.2,{opacity: 1},'-=.1')
    } else{
        tl.to('.contact_Section p',{opacity:0})
        tl.to('#email',.2,{opacity:0, marginTop: '180px'})
        tl.to('#linkedin',.2,{opacity:0, marginTop: '180px'})
        tl.to('#github',.2,{opacity:0, marginTop: '180px'})
        tl.to('#email,#github,#linkedin',{opacity:0, display: 'none',overFlow: 'hidden'})
    }
}
// let aboutContent=()=>{
    
// }

//checks if opened or not and runs appropriate animation.Using hidden to keep the unopened boxes from shifting when user slides without clicking link.
let clicked=(e)=>{  
    document.querySelector('#location').innerHTML='' 
    if(e.id == 'false'){ 
        tl.to(e.parentNode, .5,{height:'55vh'})
        tl.to(e.parentNode,.1,{backgroundColor:'#000000'},'-=1')
        tl.to(e.childNodes[1],{display: 'revert'},'-=1')
        tl.to(e.childNodes[1], .2,{opacity: .9},'-=.3')
        tl.to(e.childNodes[0], .7,{right:'270px'},'-=.6')
        tl.to(e.childNodes[2], .7,{left:'270px'},'-=.6')
        e.parentNode.style.overflow='auto'
        changeHeaderText(e)
        deliverContent(e)
        
        
        e.id='true';
    }else{
        e.parentNode.style.overflow='hidden';
        deliverContent(e);
        tl.to(e.parentNode, .5,{height:'25vh'})
        tl.to(e.parentNode,.1,{backgroundColor:'white'},'-=1')
        tl.to(e.childNodes[1],{opacity: 0},'-=1')
        tl.to(e.childNodes[1],{display: 'none'},'-=1')
        tl.to(e.childNodes[0], .5,{right:'0'},'-=.5')
        tl.to(e.childNodes[2], .5,{left:'0'},'-=.5')
        document.querySelector('#location').innerHTML=''
        

        
        e.id='false';
    }
}










// Post with axios example
// function(){
//     axios
//         .post('https://ironrest.herokuapp.com/antguts', {name: 'anthony', url: ''})
//         .then((res)=>{

//         })
// }