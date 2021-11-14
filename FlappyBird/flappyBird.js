var block = document.getElementById("block");
var hole = document.getElementById("hole");
var character = document.getElementById("character");
var jumping = 0;
var counter = 0;

hole.addEventListener('animationiteration', () => {//animationiteration is an event do something with a <div> element when a CSS animation is repeated:
    var random = -((Math.random()*300)+150);
    hole.style.top = random + "px";
    counter++;                         // every random counter increment and use it on score 
});
/* to simulate gravity */

setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if(jumping==0){
        character.style.top = (characterTop+3)+"px";
    }
    
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    var cTop = -(500-characterTop);
    if((characterTop>480)||((blockLeft<20)&&(blockLeft>-50)&&((cTop<holeTop)||(cTop>holeTop+130)))){
        alert("Game over. Score: "+(counter-1));
        character.style.top = 100 + "px";
        counter=0;
    }
},10);

function jump(){
    jumping = 1;
    let jumpCount = 0;
    var jumpInterval = setInterval(function(){
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top")); /*A CSS Style Declaration object containing CSS declaration block of the element. */
        if((characterTop>6)&&(jumpCount<15)){             // to not after top 
            character.style.top = (characterTop-5)+"px"; // jump speed than gravity
        }
        // 5 seconds not jump or zero gravity 
        if(jumpCount>20){                                // time interval more than 20 once
            clearInterval(jumpInterval);                 // clear the jump
            jumping=0;
            jumpCount=0;
        }
        jumpCount++;
    },10);
}