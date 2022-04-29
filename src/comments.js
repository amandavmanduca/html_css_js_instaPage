const initialComment = 'consectetur adipiscing elit. Mi enim ut eu cras ultrices eget et'

initialComment && addNewComment(initialComment)

function addNewComment(user_text) {
    const commentTitle = document.createElement('b');
    commentTitle.className = 'comment-author'
    commentTitle.innerHTML = 'Comment '
    
    const addNewComment = document.createElement('p');
    addNewComment.className = 'comment-text'
    var text = user_text;
     
    const commentsSection = document.getElementById('comments');
    commentsSection.appendChild(addNewComment);
    addNewComment.appendChild(commentTitle).insertAdjacentText("afterend", text);
    document.getElementById("comment-input").value = ''
}

const commentButton = document.getElementById('comment-button');
commentButton.addEventListener("click", sendComment);

function sendComment() {
    const input_text = document.getElementById("comment-input").value
    input_text && addNewComment(input_text)
}
 

