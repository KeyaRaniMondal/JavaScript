
document.getElementById("btn-delete").addEventListener('click',function(){
    const secret=document.getElementById("secret-info")
    secret.style.display='None'
})

document.getElementById("delete-conform").addEventListener('keyup',function(event){
 const text=event.target.value;
const delbtn=document.getElementById("btn-delete")
if(text==='delete')
    delbtn.removeAttribute("disabled")
else
    delbtn.setAttribute("disabled",true)
})