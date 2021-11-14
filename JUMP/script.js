var character = document.getElementById("character");
var block = document.getElementById("block");
var counter=0;

function jump(){
    if(character.classList == "animate"){return}
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },300);
}

var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>-20 && characterTop>=130){
        block.style.animation = "none";
        // alert("Game Over. score: "+Math.floor(counter/100));
        var val = confirm("Game Over. score: "+Math.floor(counter/100));

        if (val == true) {

            window.location.href = "index.html";

        } else {

            window.location.href = "../Home.html";

        }
        counter=0;
        block.style.animation = "block 1s infinite linear";
    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
}, 10);