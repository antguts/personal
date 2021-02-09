const tl=new TimelineMax

// Variables to see if checked================
let abClicked = false
let projClicked = false
let resClicked = false

// Other variables===========================
let currentPageColor= 'green'



//Reusable===============================================

const hiddenMenuAnimation =()=>{
    tl.to('.hiddenName1, .hiddenName2',1,{top:'5vh', ease:Power4.easeOut})
}

const setMenu=(name1,name2,color,bgColor,heading)=>{
    console.log(color)
    
    tl.to('.contentDisplay',{boxShadow: `0 8px 32px 0 ${color}`})
    .to('#location, #cursor,.hiddenName1, .hiddenName2',{color: color},'-=.3')
    .to('.dropScreen',{backgroundColor: bgColor })
    .to('svg',.5,{fill: color},'-=1')
    .add(()=> document.querySelector('.hiddenName1').innerHTML = name1)
    .add(()=> document.querySelector('.hiddenName2').innerHTML = name2)
    .add(()=> {
        document.querySelector('.string1').style.backgroundColor = color

    })


}


// Click Events========================================================



// Main Menu============================================================
const aboutClick=(e)=>{
    abClicked=true

    // Sets hidden menu names==========================================
    setMenu('Resume','Projects','orange','grey')


    // Content section animation=======================================
    tl
        .to(' h2',.5,{ opacity: 0},'-=2')
        .to('.leftAboutBorder', .3,{height: '100%', width: '100%'},'-=.2')
        .to('.rightAboutBorder', .6,{height: '100%', width: '100%'},'-=.3')
        .to('.leftAboutBorder, .rightAboutBorder', .4,{backgroundColor: '#7e7c7c'},'-=.7')
        .to('.leftAboutBorder, .rightAboutBorder', .4,{height: '.6'},'-=.2')
        .to('.leftAboutBorder', .4,{width: '290%'})
        .to('.rightAboutBorder', .4,{marginRight: '-190%', width: '290%'},'-=.4')
        
        .to('.dropScreen', .4,{height: '100%'})

        .to('.leftAboutBorder', .4, {height: '0', width: '5%'})
        .to('.rightAboutBorder', .4,{height: '0', width: '5%', marginRight: 0},'-=.3')
        
    // Move hidden menu to final position============================================
    hiddenMenuAnimation()

    // Change text on header changes with GSAP animation================================
    changeHeaderText("About_Section")
    document.querySelector('.aboutInfo').style.display='inline-block'
    tl.to('.aboutInfo',.5,{opacity: 1, marginTop: '8vh'},'-=.3')
}

const projClick=()=>{
    projClicked = true
    alert("projects");
}
const resClick=()=>{
    resClicked = true
    alert("resume");
}






//Second menu that appears in content display===============================


// Checks second menu and directs the event=============================
const checkMenu=(e)=>{
    switch(e){
        case 'Resume':
            resumeSide()
            break;
        case 'About':
            aboutSide()
            break;
        case 'Projects':
            projectsSide()
            break;
    }
}

const removeContent=(e)=>{
    // console.log("This is eeee:"+e)
    switch(e.innerHTML){
        case 'Resume':
            tl.to('.aboutInfo, .projectInfo',.5,{margin: '3vh auto',display: 'none',opacity: 0})
            break;

        case 'About':
            tl.to('.projectInfo, .resumeInfo',.5,{margin: '3vh auto',display: 'none',opacity: 0})
            break;
    
        case 'Projects':
            tl.to('.aboutInfo, .resumeInfo',.5,{margin: '3vh auto',display: 'none',opacity: 0})
            break;
    }
}
const secondMenuSelect=(e)=>{
    // console.log("This is eeee:"+e)
    tl
        .to('.string1',.3,{height: '55vh'})
        .to('.hiddenName1, .hiddenName2',.2,{top: '15vh'},'-=.2')
        .to('.string1',.3,{height: '0'})
        .add(removeContent(e))
        .to('.dropScreen',.5,{height: 0})
        .add(checkMenu(e.innerHTML),'+=5')       
}

// Side menu events============================================================

    
const screenRaise=()=>{
    tl.to('.dropScreen',.5,{height: '100%'})
      .to('.hiddenName1, .hiddenName2',.2,{top: '5vh'})

}
const aboutSide=()=>{
    setMenu('Resume','Projects','orange','grey')
    changeHeaderText('About_Section')
    screenRaise()
    tl.to('.aboutInfo',.5,{display:'block',opacity: 1, marginTop: '8vh'})

}
const projectsSide=()=>{
    setMenu('Resume','About','#00d8fb','#7206b5')
    changeHeaderText('Projects_Section')
    screenRaise()
}
const resumeSide=()=>{
    setMenu('About','Projects','#2f7dd0','rgb(198 216 220)')
    changeHeaderText('Resume_Section')
    screenRaise()
    tl.to('.resumeInfo',.5,{display: 'block',opacity: 1, marginTop: '2vh'})
}

//border GSAP Animations on home==================================================

//About section==========================================================
const aboutBorderHover =()=>{
    if(!abClicked){
        // tl.to('.leftAboutBorder, .rightAboutBorder',{height: '1%'})
        tl.to('.leftAboutBorder', .3,{height: '25%', width: '25%'},'-=.1')
        tl.to('.rightAboutBorder', .3,{height: '25%', width: '25%'}, '-=.3')
    }
} 

const aboutBorderHoverOut =()=>{
    if(!abClicked){
        tl.to('.rightAboutBorder, .leftAboutBorder', .5,{height: '0%', width: '5%'})
    }
} 

//Resume section==========================================================
const resumeBorderHover =()=>{
    if(!abClicked){
        // tl.to('.leftAboutBorder, .rightAboutBorder',{height: '1%'})
        tl.to('.leftResBorder', .3,{width: '25%'},'-=.1')
        tl.to('.rightResBorder', .3,{width: '25%'}, '-=.3')
    }
} 

const resumeBorderHoverOut =()=>{
    if(!abClicked){
        tl.to('.rightResBorder, .leftResBorder', .5,{ width: '0%'})
    }
} 

//Projects section==========================================================
const projectsBorderHover =()=>{
    if(!abClicked){
        // tl.to('.leftAboutBorder, .rightAboutBorder',{height: '1%'})
        tl.to('.leftProjBorder', .3,{height: '25%'},'-=.1')
        tl.to('.rightProjBorder', .3,{height: '25%'}, '-=.3')
    }
} 

const projectsBorderHoverOut =()=>{
    if(!abClicked){
        tl.to('.rightProjBorder, .leftProjBorder', .5,{height: '0'})
    }
} 


// jquery==============================================================

$(".aboutSection").hover(aboutBorderHover,aboutBorderHoverOut)
$(".projectSection").hover(projectsBorderHover,projectsBorderHoverOut)
$(".resumeSection").hover(resumeBorderHover,resumeBorderHoverOut)



$(".hiddenName1, .hiddenName2").hover(
    ()=>{tl.to('.string1',.2,{height: '40vh', ease:Power4.easeOut})}
    ,
    ()=>{tl.to('.string1',.2,{height: '0'})}
)



//RESUME H1 content fill===============================================
const resButtonClick=(e)=>{
    
    switch(e.innerHTML){
        case 'EDUCATION':
            document.querySelector('#resContent').innerHTML= 
                '<h4>Palm Beach State College</h4>   \
                <p>Studying computer science and working towards a BA in IT Forensics. Studied various languages to earn an AS in computer Programming.</p>     \
                \
                <h4>Ironhack Bootcamp</h4>   \
                <p>Completed a 9-week intensive course in Javascript development, focusing on React and the MERN stack. I created multiple applications and participated in knowledge expanding sessions to gain insight on development in real world applications.</p>            \
                '
            break;
        case 'EXPERIENCE':
            document.querySelector('#resContent').innerHTML= 
                '<h4>In the past</h4> \
                <p>- Event coordination at upscale hotel in south Florida.</p>  \
                <p>- Managing custom projects ranging from WP/Woocommerce builds to legacy DB conversions.</p>  \
                <p>- Assistant R&R developer, servicing high volume meal delivery startups.</p> \
                <p>- Water level management in south Florida. Data gathering by combining robitics with various programs.</p> \
                '
            break;
        case 'ABOUT ME':
            document.querySelector('#resContent').innerHTML= 
                '<h4>Aspirations</h4>\
                <p></p>\
                '
            break;

    }

    tl.to('h4 p',{marginTop: '35px', opacity: 0})
    .to('h4',{marginTop: '15px', opacity: 1, stagger: .3})
    .to('p',{marginTop: '15px', opacity: 1, stagger: .3},'-=.5')


}



//functions to delay type text in the header==============================
let changeHeaderText=(e)=>{
    document.querySelector('#location').innerHTML='' 
    // scrolls text in the header
    for(let i=0;i<e.length;i++){
        delayLetters(i,e);
    }
}
let delayLetters=(i,name)=> { 
setTimeout(function() { 
    document.querySelector('#location').innerHTML+=name[i]
}, 50 * i); 
} 

