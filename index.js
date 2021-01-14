


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

