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