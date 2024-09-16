// step 1:
// add event listner to the post button
document.getElementById('btn-post').addEventListener('click',function(){

// step 2:
// get the comment
const commentBox=document.getElementById('new-comment');
const newComment=commentBox.value;

// step 3:
// set the comment inside the comment container
const commentContainer=document.getElementById('comment-container')
const p=document.createElement('p');
p.innerText=newComment;
commentContainer.appendChild(p)

// step 4:
// clear the textArea
commentBox.value=''
})