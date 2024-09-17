//  On button click changes background color 
function change()
{
    document.body.style.backgroundColor='blue'
}

// Add event by ID
const purpleButton=document.getElementById('make-purple');
// purpleButton.addEventListener('click',makePurple)

purpleButton.addEventListener('click',function makePurple(){
    document.body.style.backgroundColor='purple'
})

// This is the most used
document.getElementById("golden-rod").addEventListener('click',function(){
    document.body.style.backgroundColor='goldenrod'
})




// More Events

document.getElementById('btn-more').addEventListener('click',function(){
    console.log("event tiggered")
})

document.getElementById("text-field").addEventListener('focus',function(){
    console.log("event tiggered inside input field")
})

// keypress,keydown always shows one character less than typed currently and keyup shows exactly typed
document.getElementById("text-field1").addEventListener('keydown',function(event){
    console.log(event.target);
})