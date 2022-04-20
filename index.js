var drumlength = document.querySelectorAll(".drum").length;
for(var i=0;i<drumlength;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        var button =this.innerHTML;
        makeSound(button);
        animation(button);
});
}

document.addEventListener('keydown',function(event){
    makeSound(event.key);
    animation(event.key);
})
function makeSound(key){
    
    switch (key) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var tom1 = new Audio('sounds/tom-2.mp3');
            tom1.play();
            break;
        case "s":
            var tom1 = new Audio('sounds/tom-3.mp3');
            tom1.play();
            break;
        case "d":
            var tom1 = new Audio('sounds/tom-4.mp3');
            tom1.play();
            break;
        case "j":
            var tom1 = new Audio('sounds/crash.mp3');
            tom1.play();
            break;    
        case "k":
            var tom1 = new Audio('sounds/kick-bass.mp3');
            tom1.play();
            break;
        case "l":
            var tom1 = new Audio('sounds/snare.mp3');
            tom1.play();
            break;   
        default:console.log(button);
            break;
    }
}
function animation(currentKey){
    var key= document.querySelector("."+currentKey);
    key.classList.add("pressed");
    setTimeout(function(){
        key.classList.remove("pressed");
    },100);
}   