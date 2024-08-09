"use strict"


let formShowBtn=document.querySelector(".form-show-btn")
let form =document.querySelector(".form")
let behindForm=document.querySelector(".behind-form")
let submit=document.querySelector(".submit")
let secSummay=document.querySelector(".summary")
let toSummaryBtn=document.querySelector(".to-summary-btn")
let secProductDescription=document.querySelector(".product-description")
let toProductDescriptionBtn=document.querySelector(".to-product-description-btn")
let secHow=document.querySelector(".how-it-works")
let toHowBtn=document.querySelector(".to-how-btn")
let secSample=document.querySelector(".sample")
let toSampleBtn=document.querySelector(".to-sample-btn")
let secAnyDiet=document.querySelector(".diets")
let toAnyDietBtn=document.querySelector(".to-any-diet-btn")
let secPlanes=document.querySelector(".pricing-plans")
let toPlanesBtn=document.querySelector(".to-planes-btn")
let secGallery=document.querySelector(".gallery")
let toGalleryBtn=document.querySelector(".to-gallery-btn")
let nav=document.querySelector("nav")
let links=document.querySelectorAll(".link")
let subscribe=document.querySelector(".subscribe")
let productDescriptionCoords=secProductDescription.getBoundingClientRect()
let header=document.querySelector("header")

let observer=new IntersectionObserver(function(entries){
    let [entry]=entries;
    console.log(entry)
    if (entry.intersectionRatio < 0.1) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }
    
},{root:null,threshold:0.1})
observer.observe(nav)

const showForm=function(e){
    e.preventDefault()

    form.classList.toggle("hide")
    form.classList.toggle("unhide")

    if(getComputedStyle(behindForm).display!=="none")
        behindForm.style.display="none"
        else
        behindForm.style.display="block"

   
   
}
const hideForm=function(e){
    e.preventDefault()

    form.classList.toggle("hide")
    form.classList.toggle("unhide")
    behindForm.classList.remove("unhide")
    behindForm.classList.add("hide")

    behindForm.style.display="none"
    formShowBtn.removeEventListener("click",hideForm)
    behindForm.addEventListener("click",showForm)

   
}

formShowBtn.addEventListener("click",function(e){
    showForm(e)
})

behindForm.addEventListener("click",function(e){
    if(form.style.display!=="none"){
        showForm(e)
    }  
})

document.addEventListener("keypress",function(e){
    console.log(e)
    if(e.key==="Enter"&&form.style.display!=="none"){
        showForm(e)
    }
})

submit.addEventListener("click",function(e){
    showForm(e)
})

toSummaryBtn.addEventListener("click",function(e){
    e.preventDefault()
    secSummay.scrollIntoView({behavior:"smooth"})
})
toProductDescriptionBtn.addEventListener("click",function(e){
    e.preventDefault()
    secProductDescription.scrollIntoView({behavior:"smooth"})
})
toHowBtn.addEventListener("click",function(e){
    e.preventDefault()
    secHow.scrollIntoView({behavior:"smooth"})
})
toSampleBtn.addEventListener("click",function(e){
    e.preventDefault()
    secSample.scrollIntoView({behavior:"smooth"})
})
toAnyDietBtn.addEventListener("click",function(e){
    e.preventDefault()
    secAnyDiet.scrollIntoView({behavior:"smooth"})
})
toPlanesBtn.addEventListener("click",function(e){
    e.preventDefault()
    secPlanes.scrollIntoView({behavior:"smooth"})
})
toGalleryBtn.addEventListener("click",function(e){
    e.preventDefault()
    secGallery.scrollIntoView({behavior:"smooth"})
})

nav.addEventListener("mouseover",function(e){
    if(e.target.classList.contains("link")){
        let link=e.target
        
        for(let l of links){
            if (l===link)
                continue
            else
            {
                l.classList.add("fade")
                l.classList.remove("unfaded")
            }
        }
        if (!link.classList.contains("form-show-btn")){
            subscribe.classList.add("fade")
        }
    }
})

nav.addEventListener("mouseout",function(e){
    if(e.target.classList.contains("link")){
        let link=e.target
        link.classList.remove("active-link")
        for (let l of links){
            if (l.classList.contains("fade")){
                l.classList.remove("fade")
                l.classList.add("unfaded")
                subscribe.classList.remove("fade")

            }
        }
    }
})

// window.addEventListener("scroll",function(){
    
//     if(this.window.scrollY> productDescriptionCoords.top)
//         nav.classList.add("sticky")
//     else
//     nav.classList.remove("sticky")

// })