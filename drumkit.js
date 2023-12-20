var numberOfDrumButtons=document.querySelectorAll(".drum").length;
for(var i=0;i<numberOfDrumButtons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){

        var buttonInnerHtml=this.innerHtml;
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    });
}

document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){
    switch(key){
        case "a":
        var tom1=new Audio("tom1.mp3");
        tom1.play();
        break;

        case "b":
        var tom2=new Audio("tom2.mp3");
        tom2.play();
        break;

        case "c":
        var tom3=new Audio("tom3.mp3");
        tom3.play();
        break;

        case "d":
        var tom4=new Audio("tom4.mp3");
        tom4.play();
        break;

        case "e":
        var tom5=new Audio("tom5.mp3");
        tom5.play();
        break;

        case "f":
        var tom6=new Audio("tom6.wav");
        tom6.play();
        break;

        case "g":
        var tom7=new Audio("tom7.wav");
        tom7.play();
        break;

    default:console.log(key);
    }
}


function buttonAnimation(currentKey){

    var activeButton=document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){

        activeButton.classList.remove("pressed");
    },100);
}