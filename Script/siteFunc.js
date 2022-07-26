const trumpetSrc = document.getElementById("trumpet-pic");

trumpetSrc.addEventListener("click", (event)=>{
    window.open("https://www.pexels.com/photo/bronze-statue-of-louis-prima-11948805/", "_blank", "noreferrer noopener");
},false);

const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(sec =>{
    sec.addEventListener("mouseover", (event)=>{
        sec.style.textDecoration = "underline #FFBF00";
    })
    sec.addEventListener("mouseout",(e)=>{
        sec.style.textDecoration ="none";
    })
});

//Move to top button
const toTop = document.getElementById("toTop");
const logo = document.getElementById("logo");
toTop.addEventListener("click", (e)=>{ logo.scrollIntoView({behavior: 'smooth'});});


//Download Resume
const resumeLink = document.querySelector("#res-link");
resumeLink.addEventListener("click", (event)=>{
    window.open("../Page/Images/Kniledge Johns - Resume.pdf","_blank","noopener noreferrer");
},false);
resumeLink.addEventListener("mouseover", (e)=>{resumeLink.style.cursor = "pointer"});

//Bullet Links
const bulletLinks = document.querySelectorAll(".res-bull li a");
const bulletLinksVisited = document.querySelectorAll(".res-bull li a:visited");

if(screen.width > 480){
    bulletLinks.forEach((link)=>{

        link.addEventListener("mouseover",(e)=>{
            link.style.fontSize = "1.5em"
            link.style.color ="#FFBF00";
            link.style.textDecoration = "underline";
        })
        link.addEventListener("mouseout",(e)=>{
            link.style.fontSize = "1em";
            link.style.textDecoration = "none";
            link.style.color ="white";
        })
        link.style.textDecoration ="none";
        link.style.color ="white";
    });

    bulletLinksVisited.forEach((link)=>{  
        link.style.textDecoration = "none";
    });
}


//Animations

//typed.js
let typed = new Typed(".typedText",{
    strings: ["LONE'S BLOG"], 
    typeSpeed: 130,
    loop: true,
    showCursor: true,
    cursorChar: '|',
    autoInsertCss: true
});

//The observer is an internal api that track if elements have intersected with the viewport.
//https://coolcssanimation.com/how-to-trigger-a-css-animation-on-scroll/
const observer = new IntersectionObserver(items=>{
    items.forEach(item=>{
        if(item.isIntersecting){
            
            if(item.target.getAttribute('id') === "introJ"){
                item.target.classList.add('slideinAnimate');
            }
            else{
                item.target.classList.add('slideinAnimateR');
            }
            
            
            
            
        }
    })
})
observer.observe(document.querySelector('#introJ'));
observer.observe(document.querySelector('#professionalJ'));
