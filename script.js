// Show the romantic message
function showLove(){
    const message = document.getElementById("message");
    message.style.display = "block";
}

// Show and start the music player
function playMusic(){
    const player = document.getElementById("player");
    player.style.display = "block";
}

// Create animated lily flowers
function createLily(){

    const lily = document.createElement("div");

    lily.classList.add("lily");

    // Lily flower emoji
    lily.innerHTML = "🌸";

    // Random horizontal position
    lily.style.left = Math.random() * 100 + "vw";

    // Random size
    lily.style.fontSize = (20 + Math.random() * 30) + "px";

    // Random animation duration
    lily.style.animationDuration = (5 + Math.random() * 5) + "s";

    document.body.appendChild(lily);

    // Remove the flower after animation
    setTimeout(function(){
        lily.remove();
    },8000);

}

// Generate flowers continuously
setInterval(createLily,500);
