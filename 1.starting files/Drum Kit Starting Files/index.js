var numberofdrm =document.querySelectorAll(".drum").length;

for(var i=0 ; i<numberofdrm ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", ok);
    function ok(){
        var butinnerhtml= this.innerHTML;
        makesound(butinnerhtml)
        makeanimation(butinnerhtml)
    }
}

document.addEventListener("keypress", function(event){
    makesound(event.key);
    makeanimation(event.key)
});

function makesound(key){
    switch (key) {
        case "w":
            var wsong=new Audio("sounds/crash.mp3");
            wsong.play();
            break;

        case "a":
            var asong=new Audio("sounds/kick-bass.mp3");
            asong.play();
            break;

        case "s":
            var ssong=new Audio("sounds/snare.mp3");
            ssong.play();
            break;

        case "d":
            var dsong=new Audio("sounds/tom-1.mp3");
            dsong.play();
            break;

        case "j":
            var jsong=new Audio("sounds/tom-2.mp3");
            jsong.play();
            break;

        case "k":
            var ksong=new Audio("sounds/tom-3.mp3");
            ksong.play();
            break;

        case "l":
            var lsong=new Audio("sounds/tom-4.mp3");
            lsong.play();
            break;                
        default:
            break;
    }
}

function makeanimation(currentkey){
    var active = document.querySelector("."+currentkey)
    active.classList.add("pressed")
    setTimeout(function(){
        active.classList.remove("pressed")
    },"100")
}