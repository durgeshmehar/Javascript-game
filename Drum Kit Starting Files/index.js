//mouse click event
var noTimes =document.querySelectorAll(".drum").length;
for( var i=0 ;i<noTimes ;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var key=this.innerText;
        makeSound(key);
        makeAnimation(key); 
    } );
}

//keyboard event
 document.addEventListener("keypress",function(event){
    var keys =event.key;
    makeSound(keys);
    makeAnimation(keys);
 })
function makeSound(key){
    switch(key){
        case "w":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var tom1=new Audio("sounds/snare.mp3");
            tom1.play();
            break;
        case "k":
            var tom1=new Audio("sounds/crash.mp3");
            tom1.play();
            break;
            
        case "l":
            var tom1=new Audio("sounds/kick-bass.mp3");
            tom1.play();
            break;
            
        default:
            // alert("Wrong keyword enter :" +key);
            break;
    }
}

function makeAnimation(key){
    var getButton =document.querySelector("."+key);
    getButton.classList.add("pressed");
    setTimeout( function() { getButton.classList.remove("pressed")} ,100);
}
//case 1: when jquery insert into body
// $("h1").css("color","red");
jQuery("h1").css({"color":"red","background-color":"green"}); 

//case 2: when jquery insert into header
// $(document).ready( function(){
//    $("h1").css("color","red");
// })

