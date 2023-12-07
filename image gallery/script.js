const smallImages = document.querySelectorAll(".img-box")

function myFunction(smallimg) {
    const fullimg = document.getElementById("big-img");
    fullimg.src = smallimg.src;
    
}

