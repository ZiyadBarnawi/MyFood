"use strict";
let leftBtns = document.querySelectorAll(".left-btn");
let rightBtns = document.querySelectorAll(".right-btn");
let dot1=document.querySelector(".dot-1")
let dot2=document.querySelector(".dot-2")
let dot3=document.querySelector(".dot-3")
let dot4=document.querySelector(".dot-4")
let dots=[dot1,dot2,dot3,dot4]

let card1 = document.querySelector(".card-1");
let card2 = document.querySelector(".card-2");
let card3 = document.querySelector(".card-3");
let card4 = document.querySelector(".card-4");

const goRight = function func1() {
  let activeCard = document.querySelector(".active-card");
  let nextCard = null;
  let cardInUse = null;
  if (activeCard.classList.contains("card-1")) {
    nextCard = card2;
    
    cardInUse = card1;
  } else if (activeCard.classList.contains("card-2")) {
    nextCard = card3;
    
    cardInUse = card2;
  } else if (activeCard.classList.contains("card-3")) {
    nextCard = card4;
    
    cardInUse = card3;
  } else if (activeCard.classList.contains("card-4")) {
    nextCard = card1;
    
    cardInUse = card4;
  }

  // if(cardInUse.classList.contains("card-1"))
  //   {
  //     activeCard.classList.toggle("active-card")
  //     activeCard.classList.toggle("hide-card")
  //     nextCard.classList.toggle("active-card")
  //     nextCard.classList.toggle("hide-card")
  //   }

  activeCard.classList.toggle("previous-animation")
  activeCard.classList.toggle("active-card")
  activeCard.classList.toggle("hide-card")
  nextCard.classList.remove("hide-card")
  nextCard.classList.toggle("next-animation")
  nextCard.classList.toggle("active-card")
  
  // activeCard.classList.add("previous-animation");
  // activeCard.classList.remove("active-card");
  // activeCard.classList.add("hide-card");
  // nextCard.classList.add("next-animation");
  // nextCard.classList.remove("hide-card");
  // nextCard.classList.add("active-card");
  // cardInUse.classList.remove("next-animation");
  // cardInUse.classList.remove("previous-animation");


  // }
};



const goleft = function func1() {
  let activeCard = document.querySelector(".active-card");
  let previousCard = null;
  let cardInUse=null;

  if (activeCard.classList.contains("card-1")) {
    previousCard = card4;
    activeCard.classList.toggle("active-card");
    cardInUse=card1
  } else if (activeCard.classList.contains("card-2")) {
    previousCard = card1;
    activeCard.classList.toggle("active-card");
    cardInUse=card2
  } else if (activeCard.classList.contains("card-3")) {
    previousCard = card2;
    activeCard.classList.toggle("active-card");
    cardInUse=card3
  } else if (activeCard.classList.contains("card-4")) {
    previousCard = card3;
    activeCard.classList.toggle("active-card");
    cardInUse=card4
  }



  activeCard.classList.remove("previous-animation")
  activeCard.classList.remove("active-card")
  activeCard.classList.add("hide-card")

  previousCard.classList.remove("next-animation")
  previousCard.classList.remove("hide-card")
  previousCard.classList.add("active-card")


  activeCard.classList.remove("next-animation")


  previousCard.classList.remove("hide-card")

  previousCard.classList.add("previous-animation")

  previousCard.classList.add("active-card")
  activeCard.classList.remove("active-card")



};

for (let btn of rightBtns) {
  btn.addEventListener("click", goRight);
}

for (let btn of leftBtns) {
  btn.addEventListener("click", goleft);
}



