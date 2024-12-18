// ... first menthod to use a function as parameter in eventListioner
// document.querySelector("button").addEventListener("click",handleClick);

// function handleClick(){
//     alert("i got clicked");
// }



//detecting button press.....

var numberOFDrumButtons = document.querySelectorAll(".drum").length;



for (var i=0;i<numberOFDrumButtons;i++){

document.querySelectorAll(".drum")[i].addEventListener("click",function()    // ... Anonymous function
{
   //this.style.color = "blue";  this keyword is used to return object.

   var buttonInnerHtml = this.innerHTML;
   makeSound(buttonInnerHtml);
   buttonAnimation(buttonInnerHtml);
    
 });

}


//detecting keyboard press....

document.addEventListener("keypress",function(event){

   makeSound(event.key);

   buttonAnimation(event.currentKey);

});

function makeSound(key){
    switch(key){

        case "a":
             var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "s":
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();   
            break;      
       

        case "d":
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "f" :
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        

        case "j":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();    
            break;

        case "k":
            var kickbass=new Audio("sounds/kick-bass.mp3");
            kickbass.play();    
            break;
         
        case "l":
            var snare=new Audio("sounds/snare.mp3");
            snare.play();    
            break;

        default:
            alert("does'nt press right button");
     }



}
function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+ currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100)
}