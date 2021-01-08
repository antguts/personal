//variable to create GSAP animations
let tl=new TimelineMax

//runs animation after pageload on mobile
window.addEventListener('load', (event) => {
    tl.to('#one',.6,{top: '0'})
    tl.to('#one',.5,{opacity: 1},'-=.5')
    tl.to('#two',.5,{top: '0', opacity: 1},'-=.4')
    
  });


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

//Uses switch to determine appropriate content based on parent ID.
let deliverContent=(e)=>{
    switch(e.parentNode.className){
        case 'about_Section':
        // case 'about_section_content':
            aboutContent(e)
            break;
        case 'contact_Section':
            contactContent(e);
            break;
        case 'projects_Section':
        // case 'projects_section_content':
            projectsContent(e)
            break;
        case 'team_Section':
        // case 'team_section_content':
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

let sectionOpen=(e)=>{
    e.parentNode.style.overflow='auto'
    tl.to(e.parentNode, .5,{height:'55vh'})
    tl.to(e.parentNode,.1,{backgroundColor:'#000000'},'-=1')
    tl.to(e.childNodes[1],{display: 'revert'},'-=1')
    tl.to(e.childNodes[1], .2,{opacity: .9},'-=.3')
    tl.to(e.childNodes[0], .7,{right:'270px'},'-=.6')
    tl.to(e.childNodes[2], .7,{left:'270px'},'-=.6');
    deliverContent(e)
    e.id='true';
}
let sectionClosed=(e)=>{
    deliverContent(e)
    tl.to(e.parentNode, .5,{height:'25vh'})
    tl.to(e.parentNode,.1,{backgroundColor:'white'},'-=1')
    tl.to(e.childNodes[1],{opacity: 0},'-=1')
    tl.to(e.childNodes[1],{display: 'none'},'-=1')
    tl.to(e.childNodes[0], .5,{right:'0'},'-=.5')
    tl.to(e.childNodes[2], .5,{left:'0'},'-=.5')
    e.parentNode.style.overflow='hidden';
    document.querySelector('#location').innerHTML=''
    e.id='false';
}

//checks if opened or not and runs appropriate animation.Using hidden to keep the unopened boxes from shifting when user slides without clicking link.
let clicked=(e)=>{  
    if(e.id == 'false'){ 
        sectionOpen(e)
        changeHeaderText(e)
    }else{
        sectionClosed(e);
    }
}

// let fillTeam=()=>{
//     axios
//     .get()
//     .then()
// }



let d_click=(e)=>{
    let current=e.parentNode.className
    document.querySelector("#d_projects").style.cssText='display: none; opacity: 0; filter: blur(4px);';
    document.querySelector("#d_about").style.cssText='display: none; opacity: 0; filter: blur(4px);';
    document.querySelector("#d_team").style.cssText='display: none; opacity: 0; filter: blur(4px);';
    changeHeaderText(e)

    switch(current){
        case 'about_section_content':
            document.querySelector('#d_about').style.display= 'block'
            tl.to('#d_about',1,{opacity:1, webkitFilter:"blur(0px)"})
            break;
            case 'projects_section_content':
                document.querySelector('#d_projects').style.display= 'block'
                tl.to('#d_projects',1,{opacity:1, webkitFilter:"blur(0px)"})
            break;
        case 'team_section_content':
            document.querySelector('#d_team').style.display= 'block'
            tl.to('#d_team',1,{opacity:1, webkitFilter:"blur(0px)"})
            break;

    }
}



//axios calls==========================================================================================
let populateTeams=()=>{
    axios
    .get("https://ironrest.herokuapp.com/mia-aug2020-webdevs")
    .then(res=>{
        res.data.map(r=>{
            document.querySelector('#d_team ul').innerHTML+=`<li><a href="${r.website}" target="blank">- ${r.first_name} ${r.last_name} Webpage -</a><li>`
            document.querySelector('.team_Section ul').innerHTML+=`<li><a href="${r.website}" target="blank">- ${r.first_name} ${r.last_name} Webpage -</a><li>`

            // document.querySelector('.d_team ul').innerHTML+=pop

        })
    })
}
// populateTeams()


// Post with axios example
// function postSite(){
//     axios
//         .post('https://ironrest.herokuapp.com/mia-aug2020-webdevs', {first_name: 'Anthony',last_name: 'Gutilla', url: 'https://antguts.github.io/personal/'})
//         .then((res)=>{
//                 console.log('posted')
//         })
// }