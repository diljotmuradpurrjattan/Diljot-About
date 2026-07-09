// Page Loader

window.addEventListener("load", function(){

    const loader = document.getElementById("loader");

    loader.style.display = "none";

});




// Smooth Scroll Animation

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        let target = document.querySelector(
            this.getAttribute("href")
        );

        target.scrollIntoView({
            behavior:"smooth"
        });

    });

});




// Product Button

const buttons = document.querySelectorAll(".product-card button");


buttons.forEach(button => {

    button.addEventListener("click", function(){

        alert(
            "Thanks for your interest! Contact Diljot | DarkVibe to purchase this product."
        );

    });

});




// Contact Form

const form = document.querySelector("form");


form.addEventListener("submit", function(e){

    e.preventDefault();


    let name = document.querySelector(
        'input[type="text"]'
    ).value;


    alert(
        "Thank you " + name + "! Your message has been received."
    );


    form.reset();


});




// Typing Effect

const text = "Personal Shop & Digital Developer";

let index = 0;


function typing(){

    if(index < text.length){

        console.log(
            text.substring(0,index)
        );

        index++;

        setTimeout(
            typing,
            100
        );

    }

}


typing();





// Mouse Glow Effect

document.addEventListener(
"mousemove",
function(e){

    let glow = document.createElement("div");


    glow.style.position="fixed";
    glow.style.width="20px";
    glow.style.height="20px";
    glow.style.borderRadius="50%";
    glow.style.background="#00ff88";
    glow.style.opacity="0.3";
    glow.style.pointerEvents="none";


    glow.style.left=e.clientX+"px";
    glow.style.top=e.clientY+"px";


    document.body.appendChild(glow);



    setTimeout(()=>{

        glow.remove();

    },500);


});
