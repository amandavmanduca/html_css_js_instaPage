const likeButton = document.getElementById('like-icon-path');
const likeIconClassList = document.getElementById("like-icon").classList

likeButton.setAttribute("fill", "none")
likeIconClassList.add('animate_like');

function handleLike() {
    const activeColor = likeButton.getAttribute("fill")
    switch(activeColor) {
        case "red":
            likeButton.setAttribute("fill", "none")
            likeButton.setAttribute("stroke", "black")
            likeIconClassList.add('animate_like');
          break;
        default:
            likeButton.setAttribute("fill", "red")
            likeButton.setAttribute("stroke", "red")
            likeIconClassList.remove('animate_like')
      }
}
