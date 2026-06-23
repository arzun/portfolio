window.addEventListener("scroll",()=>{

document.querySelectorAll(".project-card")
.forEach(card=>{

const pos=card.getBoundingClientRect().top;

if(pos<window.innerHeight-100){

card.style.opacity="1";
card.style.transform="translateY(0)";
}

});

});