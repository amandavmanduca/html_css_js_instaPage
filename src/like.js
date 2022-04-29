const likeButton = document.getElementById('like-icon-path');

likeButton.setAttribute("fill", "none")

function handleLike() {
    const activeColor = likeButton.getAttribute("fill")
    switch(activeColor) {
        case "red":
            likeButton.setAttribute("fill", "none")
          break;
        default:
            likeButton.setAttribute("fill", "red")
      }
}
