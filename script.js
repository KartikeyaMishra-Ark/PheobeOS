const windows = document.querySelectorAll(".window");





function updateTime(){

    const now = new Date();

    document.getElementById("time").textContent = 
        now.toLocaleDateString() + " " +
        now.toLocaleTimeString([],{
            hour: "2-digit",
            minute: "2-digit"
        })

}

updateTime();
setInterval(updateTime, 1000);


windows.forEach(function(window){

    const bar = window.querySelector(".window-bar");

    let moving = false;
    let offsetX;
    let offsetY;

    bar.addEventListener("mousedown", function(event){

        moving = true;

        offsetX = event.clientX - window.offsetLeft;
        offsetY = event.clientY - window.offsetTop;

    })
    document.addEventListener("mousemove", function(event){

        if (moving === false){
            return;
        }


        window.style.left = event.clientX - offsetX + "px";

        window.style.top = event.clientY - offsetY + "px";


        

    })

    document.addEventListener("mouseup", function(){

        moving = false;
    })

});







function openWindow(id){

    const appWindow = document.getElementById(id);

    appWindow.style.display = "block";

    appWindow.style.left =
        (window.innerWidth - appWindow.offsetWidth) / 2 + "px";

    appWindow.style.top =
        (window.innerHeight - appWindow.offsetHeight) / 2 + "px";



}
function closeWindow(id) { 
    document.getElementById(id).style.display = "none"; 


}

function playVideo(video){

    const player = document.getElementById("player");

    player.src = video;
    player.play();
    

}


console.log("JS WORKING")