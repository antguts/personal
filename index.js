
// LOADING MESSAGE FOR ISSUES W/SITE
// window.onload = ()=>{
//     alert('')
// }


// VARIABLE TO CREATE GSAP TIMELINE=======================
const tl=new TimelineMax

//MOBILE ANIMATIONS================================
const splitChoice=()=>{
    tl.to('.splitLeft',.3,{opacity: 0})
      .to('.splitRight',.3,{marginLeft: '90vw'},'-=.3')
} // END splitChoice

const mobSelect=(e)=>{
    let temp = e.id
    
    tl.to('#mobileMenu',{marginTop: '5vh'})
      .add(splitChoice())
      .to('#mobileMenu',.5,{height: '75vh'},'-=1')
      .add(()=>{
          switch(temp){
              case 'aboutMob':
                  aboutSide()
              break;
              case 'projectMob':
                  projectsSide()
              break;
              case 'bioMob':
                  resumeSide()
              break;
          }
      },'-=2')    
} // END mobSelect

//Reusable===============================================

const hiddenMenuAnimation =()=>{
      tl.to('.hiddenName1, .hiddenName2',1,{top:'5vh', ease:Power4.easeOut})
}

const setMenu=(name1,name2,color,bgColor,heading)=>{  
    tl.to('.contentDisplay, #mobileMenu',{boxShadow: `-3px -8px 30px -3px ${color}`})
    .to('.cogFill',.2,{ fill: color},'-=.3')
    .to('.dropScreen',{backgroundColor: bgColor })
    .to('svg',.5,{fill: color},'-=1')
    .to('.hiddenMenu',.5,{opacity: 0},'-=1')
    .add(()=> document.querySelector('.hiddenName1').innerHTML = name1)
    .add(()=> document.querySelector('.hiddenName2').innerHTML = name2)
    .to('#location, #cursor,.hiddenName1, .hiddenName2, h4',{color: color},'-=.8')
    .to('.hiddenMenu',.5,{opacity: 1})
    .add(()=> {
        document.querySelector('.string1').style.backgroundColor = color

    })
}//END setMenu

// Main Menu============================================================
const aboutClick=(e)=>{
    // Sets hidden menu names==========================================
    setMenu('Resume','Projects','orange','grey')

    // Content section animation=======================================
    tl
        .to(' h2',.5,{ opacity: 0},'-=2')
        .to('.leftAboutBorder', .3,{height: '100%', width: '100%'},'-=.2')
        .to('.rightAboutBorder', .6,{height: '100%', width: '100%'},'-=.3')
        .to('.leftAboutBorder, .rightAboutBorder', .4,{backgroundColor: '#7e7c7c'},'-=.7')
        .to('.leftAboutBorder, .rightAboutBorder', .4,{height: '0'},'-=.2')
        .to('.rightAboutBorder', .4,{marginRight: '-190%', width: '290%'},'-=.1')
        .add(screenRaise())
        .to('.leftAboutBorder', .4, {height: '0', width: '5%'})
        .to('.rightAboutBorder', .4,{height: '0', width: '5%', marginRight: 0},'-=.3')
    
    // Change text on header changes with GSAP animation================================
    changeHeaderText("About_Section")
    document.querySelector('.aboutInfo').style.display='inline-block'
    tl.to('.aboutInfo',.5,{opacity: 1, marginTop: '8vh'},'-=.3')
    hiddenMenuAnimation()
}// END aboutClick

const projClick=()=>{
    tl.to('div .leftProjBorder,div .rightProjBorder',{height: '25%'})
      .to(' h2',.2,{ opacity: 0},'-=.2')
      .to(' h2',{ display: 'none'})
      .to('div .leftProjBorder,div .rightProjBorder',.5,{left: 0},'-=.6')
      .to('div .leftProjBorder,div .rightProjBorder',.5,{width: '100%'},'-=.3')
      .to('div .leftProjBorder,div .rightProjBorder',.3,{height: '100%'})  

    projectsSide()
    // Move hidden menu to final position============================================
    hiddenMenuAnimation()
    
}// END projClick

const resClick=()=>{
    tl.to('div .leftResBorder,div .rightResBorder',{width: '25%'})
      .to(' h2',.5,{ opacity: 0},'-=2')
      .to(' h2',{ display: 'none'})
      .to('div .leftResBorder',.5,{width: '100vw'},'-=.5')
      .to('div .leftResBorder,div .rightResBorder',.6,{top: '0', height: '100vh'})
      .add(resumeSide())
      hiddenMenuAnimation()
}// END resClick

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
}// END removeContent

const secondMenuSelect=(e)=>{
    tl
        .to('.string1',.3,{height: '55vh'})
        .to('.hiddenName1, .hiddenName2',.2,{top: '15vh'},'-=.2')
        .to('.string1',.3,{height: '0'})
        .add(removeContent(e))
        .to('.dropScreen',.5,{height: 0})
        .add(checkMenu(e.innerHTML),'+=5')       
}// END secondMenuSelect

// Side menu events============================================================
const screenRaise=()=>{
    tl.to('.dropScreen',.3,{height: '100%'})
      .to('.hiddenName1, .hiddenName2',.2,{top: '5vh'})
      .to('.cogs, .cogFill',.4,{left: 0, delay: 1})

}// END screenRaise

const aboutSide=()=>{    
    tl.add(setMenu('Resume','Projects','orange','grey'))
      .add(changeHeaderText('About_Section'))
      .add(screenRaise())
      .to('.aboutInfo',.5,{display:'inline-block',opacity: 1, marginTop: '7vh'})
}// END aboutSide

const projectsSide=()=>{
    tl.add(setMenu('Resume','About','#e90db9','#7206b5'))
      .add(changeHeaderText('Projects_Section'))
      .add(screenRaise())
      .to('.projectInfo',.5,{display: 'inline-block', opacity: 1}) 
}// END projectsSide

const resumeSide=()=>{
    tl.add(setMenu('About','Projects','#2f7dd0','rgb(198 216 220)'))
      .add(changeHeaderText('Resume_Section'))
      .add(screenRaise())
      .to('.resumeInfo',.5,{display: 'block',opacity: 1, marginTop: '2vh'})
}// END resumeSide

//border GSAP Animations on home==================================================

//About section==========================================================
const aboutBorderHover =()=>{
        tl.to('.leftAboutBorder', .3,{height: '25%', width: '25%'},'-=.1')
        tl.to('.rightAboutBorder', .3,{height: '25%', width: '25%'}, '-=.3')
} 

const aboutBorderHoverOut =()=>{
        tl.to('.rightAboutBorder, .leftAboutBorder', .5,{height: '0%', width: '5%'})
} 

//Resume section==========================================================
const resumeBorderHover =()=>{
        tl.to('.leftResBorder', .3,{width: '25%'},'-=.1')
        tl.to('.rightResBorder', .3,{width: '25%'}, '-=.3')
} 

const resumeBorderHoverOut =()=>{    
        tl.to('.rightResBorder, .leftResBorder', .5,{ width: '0%'})
} 

//Projects section==========================================================
const projectsBorderHover =()=>{
        tl.to('.leftProjBorder', .3,{height: '25%'},'-=.1')
        tl.to('.rightProjBorder', .3,{height: '25%'}, '-=.3')
} 

const projectsBorderHoverOut =()=>{
        tl.to('.rightProjBorder, .leftProjBorder', .5,{height: '0'})  
} 

// jquery==============================================================
$(".aboutSection").hover(aboutBorderHover,aboutBorderHoverOut)
$(".projectSection").hover(projectsBorderHover,projectsBorderHoverOut)
$(".resumeSection").hover(resumeBorderHover,resumeBorderHoverOut)

$('.projectInfo a').hover(
    ()=>{tl.to('#scrollWindow',.5,{width: '100%'})}
    ,
    ()=>{tl.to('#scrollWindow',.5,{width: '0'})}
)


    
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
                <h4>Ironhack Miami</h4>   \
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
            // document.querySelector('#resContent').innerHTML= 
            //     '<h4>Aspirations</h4>\
            //     <p></p>\
            //     '
            break;
    }//END switch

    tl.to('h4 p',{marginTop: '35px', opacity: 0})
    .to('h4',{marginTop: '15px', opacity: 1, stagger: .3},'-=.4')
    .to('p',{marginTop: '15px', opacity: 1, stagger: .2},'-=.7')
}// END resButtonClick

//functions to delay type text in the header==============================
let changeHeaderText=(e)=>{
    document.querySelector('#location').innerHTML='' 
    // scrolls text in the header
    for(let i=0;i<e.length;i++){
        delayLetters(i,e);
    }
}// END changeHeaderText

let delayLetters=(i,name)=> { 
  setTimeout(function() { 
      document.querySelector('#location').innerHTML+=name[i]
  }, 50 * i); 
}// END delayLetters