const tl=new TimelineMax

// Variables to see if checked================
// let abClicked = false
// let projClicked = false
// let resClicked = false

// Other variables===========================
let currentPageColor= 'green'

window.onload = ()=>{
    // populateCogs()
    alert('ATTENTION: Under construction due to lost data. Mobile being developed seperate. Thanks for the patience')
}

// CREATE COG SVGS================================
// const populateCogs =()=>{
//     let tempCog=''
//     for(let i=0; i<4;i++){
//         // let tempClass = (i==2) ? 'rotate' : 'rotate2'
//         // console.log('tempclass: '+tempClass)
//         tempCog+= `
//             <svg id="cog${i+1}" class="${(i==2) ? 'rotate' : 'rotate2'}" xmlns="http://www.w3.org/2000/svg" version="1.0" width="1280.000000pt" height="1280.000000pt" viewBox="0 0 1280.000000 1280.000000" preserveAspectRatio="xMidYMid meet">
//             <metadata>
//             Created by potrace 1.15, written by Peter Selinger 2001-2017
//             </metadata>
//             <g class="cogFill" transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)" fill="#34aeed" stroke="none">
//             <path d="M5860 12792 c0 -4 -29 -174 -65 -377 -36 -204 -95 -541 -131 -750 -37 -209 -68 -381 -69 -383 -1 -1 -61 -14 -133 -27 -233 -45 -467 -108 -691 -187 -110 -38 -114 -39 -131 -21 -9 10 -225 268 -480 573 -255 305 -470 563 -480 573 -16 17 -38 5 -476 -248 -252 -146 -460 -269 -462 -274 -2 -5 115 -332 259 -727 l262 -717 -40 -36 c-289 -261 -333 -304 -614 -615 l-36 -39 -704 257 c-387 142 -714 258 -726 259 -19 2 -58 -61 -288 -457 -253 -438 -265 -460 -248 -476 10 -10 270 -228 578 -485 308 -257 566 -473 573 -479 10 -10 5 -35 -27 -127 -85 -249 -141 -456 -185 -688 -14 -74 -27 -135 -28 -136 -2 -1 -174 -32 -383 -69 -209 -36 -546 -95 -750 -131 -203 -36 -373 -65 -377 -65 -4 0 -8 -243 -8 -540 0 -297 4 -540 8 -540 4 0 174 -29 377 -65 204 -36 541 -95 750 -131 209 -37 381 -68 383 -69 1 -1 14 -62 28 -136 44 -232 100 -439 185 -688 32 -92 37 -117 27 -127 -7 -6 -265 -222 -573 -479 -308 -257 -568 -475 -578 -485 -17 -16 -5 -38 248 -476 230 -396 269 -459 288 -457 12 1 339 117 726 259 l704 257 36 -39 c281 -311 325 -354 614 -615 l40 -36 -262 -717 c-144 -395 -261 -722 -259 -727 2 -5 210 -128 462 -274 438 -253 460 -265 476 -248 10 10 225 268 480 573 255 305 471 563 480 573 17 18 21 17 131 -21 224 -79 458 -142 691 -187 72 -13 132 -26 133 -27 1 -2 32 -174 69 -383 36 -209 95 -546 131 -750 36 -203 65 -373 65 -377 0 -4 242 -8 538 -8 l538 0 52 292 c28 161 88 502 133 758 44 256 82 466 84 468 1 1 69 16 151 32 254 50 420 94 673 181 92 32 117 37 127 27 6 -7 222 -265 479 -573 257 -308 475 -568 485 -578 16 -17 38 -5 476 248 252 146 460 269 462 274 2 7 -163 465 -465 1290 l-57 154 65 56 c217 190 384 356 570 570 l55 64 185 -67 c708 -260 1250 -456 1257 -456 5 0 94 147 198 327 103 181 223 388 266 462 63 108 76 137 66 146 -7 7 -267 225 -578 485 -311 260 -571 478 -578 484 -10 10 -5 35 27 127 84 246 150 491 191 712 12 64 26 117 30 117 4 0 227 38 496 85 269 47 604 106 744 130 140 25 258 45 262 45 5 0 8 243 8 540 0 297 -4 540 -8 540 -4 0 -172 29 -372 64 -201 35 -539 95 -752 132 l-387 68 -21 115 c-41 219 -107 465 -191 710 -32 92 -37 117 -27 127 7 6 267 224 578 484 311 260 571 478 578 485 10 9 -3 38 -66 146 -43 74 -163 281 -266 462 -104 180 -193 327 -198 327 -7 0 -549 -196 -1257 -456 l-185 -67 -55 64 c-186 214 -353 380 -570 570 l-65 56 57 154 c302 825 467 1283 465 1290 -2 5 -210 128 -462 274 -438 253 -460 265 -476 248 -10 -10 -228 -270 -485 -578 -257 -308 -473 -566 -479 -573 -10 -10 -35 -5 -127 27 -253 87 -419 131 -673 181 -82 16 -150 31 -151 32 -2 2 -40 212 -84 468 -45 256 -105 597 -133 758 l-52 292 -538 0 c-296 0 -538 -4 -538 -8z m745 -2616 c678 -24 1405 -277 1985 -690 358 -254 675 -576 924 -936 373 -538 598 -1161 657 -1820 14 -161 14 -499 0 -660 -94 -1039 -601 -1983 -1416 -2632 -493 -393 -1095 -662 -1715 -767 -246 -42 -300 -46 -640 -46 -340 0 -394 4 -640 46 -1177 199 -2203 959 -2740 2030 -295 587 -425 1198 -398 1870 48 1199 680 2316 1688 2983 502 332 1046 531 1658 606 96 12 405 28 457 23 17 -1 98 -5 180 -7z"/>
//             </g>
//             </svg>
//         `
//     }
//     document.querySelector('.cogs').innerHTML = tempCog
// }

//Reusable===============================================

const hiddenMenuAnimation =()=>{
    tl.to('.hiddenName1, .hiddenName2',1,{top:'5vh', ease:Power4.easeOut})
}

const setMenu=(name1,name2,color,bgColor,heading)=>{
    
    tl.to('.contentDisplay',{boxShadow: `0 8px 32px 0 ${color}`})
    .to('.cogFill',.2,{ opacity: 0, fill: color},'-=.3')
    .to('.cogs',.2,{left: '-16vw'},'-=1')
    .to('#location, #cursor,.hiddenName1, .hiddenName2, h4',{color: color},'-=.8')
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
    // abClicked=true

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
        
        .add(screenRaise())

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
    // projClicked = true
    tl.to('div .leftProjBorder,div .rightProjBorder',{height: '25%'})
      .to(' h2',.2,{ opacity: 0},'-=.2')
      .to(' h2',{ display: 'none'})
      .to('div .leftProjBorder,div .rightProjBorder',.5,{left: 0},'-=.6')
      .to('div .leftProjBorder,div .rightProjBorder',.5,{width: '100%'},'-=.3')
      .to('div .leftProjBorder,div .rightProjBorder',.3,{height: '100%'})
    //   screenRaise()


    //   .to('.dropScreen', .4,{height: '100%'})
    

    projectsSide()

    // Move hidden menu to final position============================================
    hiddenMenuAnimation()

    // Change text on header changes with GSAP animation================================
    // changeHeaderText("Project_Section")
    // document.querySelector('.aboutInfo').style.display='inline-block'
    // tl.to('.aboutInfo',.5,{opacity: 1, marginTop: '8vh'},'-=.3')


}
const resClick=()=>{
    // resClicked = true
    // alert("resume");
    tl.to('div .leftResBorder,div .rightResBorder',{width: '25%'})
      .to(' h2',.5,{ opacity: 0},'-=2')
      .to(' h2',{ display: 'none'})
      .to('div .leftResBorder',.5,{width: '100vw'},'-=.5')
      .to('div .leftResBorder,div .rightResBorder',.6,{top: '0', height: '100vh'})
      .add(resumeSide())
      hiddenMenuAnimation()
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
    tl.to('.dropScreen',.3,{height: '100%'})
      .to('.hiddenName1, .hiddenName2',.2,{top: '5vh'})
      .to('.cogs, .cogFill',.4,{left: 0, opacity:1, delay: 1})

}
const aboutSide=()=>{
    
    tl.add(setMenu('Resume','Projects','orange','grey'))
      .add(changeHeaderText('About_Section'))
      .add(screenRaise())
      .to('.aboutInfo',.5,{display:'block',opacity: 1, marginTop: '8vh'})

}
const projectsSide=()=>{
    
    tl.add(setMenu('Resume','About','#e90db9','#7206b5'))
      .add(changeHeaderText('Projects_Section'))
      .add(screenRaise())
      .to('.projectInfo',{display: 'inline-block', opacity: 1})

    

}
const resumeSide=()=>{
    
    tl.add(setMenu('About','Projects','#2f7dd0','rgb(198 216 220)'))
      .add(changeHeaderText('Resume_Section'))
      .add(screenRaise())
      .to('.resumeInfo',.5,{display: 'block',opacity: 1, marginTop: '2vh'})
}

//border GSAP Animations on home==================================================

//About section==========================================================
const aboutBorderHover =()=>{
    
        // tl.to('.leftAboutBorder, .rightAboutBorder',{height: '1%'})
        tl.to('.leftAboutBorder', .3,{height: '25%', width: '25%'},'-=.1')
        tl.to('.rightAboutBorder', .3,{height: '25%', width: '25%'}, '-=.3')
    
} 

const aboutBorderHoverOut =()=>{
    
        tl.to('.rightAboutBorder, .leftAboutBorder', .5,{height: '0%', width: '5%'})
    
} 

//Resume section==========================================================
const resumeBorderHover =()=>{
    
        // tl.to('.leftAboutBorder, .rightAboutBorder',{height: '1%'})
        tl.to('.leftResBorder', .3,{width: '25%'},'-=.1')
        tl.to('.rightResBorder', .3,{width: '25%'}, '-=.3')
    
} 

const resumeBorderHoverOut =()=>{
    
        tl.to('.rightResBorder, .leftResBorder', .5,{ width: '0%'})
    
} 

//Projects section==========================================================
const projectsBorderHover =()=>{
    
        // tl.to('.leftAboutBorder, .rightAboutBorder',{height: '1%'})
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

// $('#karBlock').hover(
//     ()=>{
//         tl.to('#karBlock p',{display: 'block', opacity: 1})
//           .to('#karBlock img', {width: '100%'},'-=.5')
//         }
//     ,
//     ()=>{
//         tl.to('#karBlock p',.5,{ opacity: 0})
//           .to('#karBlock p',{display: 'none', opacity: 0})
//           .to('#karBlock img', {width: '25%'},'-=.5')
//     }
// )
// $('#devBlock').hover(
//     ()=>{tl.to('#devBlock p',{display: 'block', opacity: 1})}
//     ,
//     ()=>{tl.to('#devBlock p',{display: 'none', opacity: 0})}
// )



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
    .to('h4',{marginTop: '15px', opacity: 1, stagger: .3},'-=.4')
    .to('p',{marginTop: '15px', opacity: 1, stagger: .2},'-=.7')


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

