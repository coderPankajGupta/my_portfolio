// nav animation 

let cross = gsap.timeline();

cross.to("#right-nav1",{
    right: 0,
    duration: 0.5,
})

cross.from("#right-nav1 li", {
    opacity: 0,
    x: 150,
    stagger: 0.2,
})

cross.from("#right-nav1 i", {
    x: 150,
    duration: 0.5,
    opacity: 0
})

let menu = document.querySelector(".nav-toggel i");
let close = document.querySelector("#right-nav1 i")

cross.pause();

menu.addEventListener("click", () => {
    cross.play();
})

close.addEventListener("click", () => {
    cross.reverse();
})

//   animation for first page

let tl = gsap.timeline();

tl.from("#primary-nav h2, #primary-nav li",{
    y:-30,
    opacity: 0,
    duration: 0.3,
    delay: 0.2,
    stagger: 0.2,
})

tl.from("#center #left h1,#left h2, #left p",{
    x: -60,
    opacity: 0,
    duration: 0.65,
    delay: 0.25,
    stagger: 0.3
},"-=1")

tl.from("#center #right", {
    x: 60,
    opacity: 0,
    duration: 0.8,
    delay: 0.3
},"-=1")

tl.from(".hire #hireme",{
    opacity: 0,
    x: -40,
    duration: 0.25,
    delay: 0.35
},"-=2")

tl.from(".hire #lets",{
    opacity: 0,
    x: 40,
    duration: 0.25,
    delay: 0.35
},"-=2")

tl.from(".container", {
    y: 60,
    opacity: 0,
    duration: 0.25,
    delay: 0.2
})

// page2

let tl2 = gsap.timeline({
    scrollTrigger : {
        trigger : "#about-me",
        scroller: "body",
        start : "top 60%",
        end : "top 10%",
        scrub: 2,
    }
})

tl2.from("#aboutme-nav h1", {
    y: -50,
    opacity: 0,
    duration: 1.5,
    delay: 0.5,
})

tl2.from(".left-child .img-container", {
    x: -50,
    opacity: 0,
    duration: 1,
    delay: 0.35
},"aboutme")

tl2.from(".right-child p", {
    x: 50,
    opacity: 0,
    duration: 1,
    delay: 0.35
},"aboutme")

// page3

let tl3 = gsap.timeline({
    scrollTrigger : {
        trigger : "#services",
        scroller: "body",
        start : "top 50%",
        end : "top 20%",
        scrub: 2,
    }
});

tl3.from("#services-nav h1", {
    y: -30,
    opacity : 0,
    duration :1.5,
    delay : 0.5
})

tl3.from("#services #service-sec #first-service", {
    x: -35,
    opacity: 0,
    duration: 0.5,
    delay: 0.3,
})

tl3.from("#services #service-sec #second-service", {
    x: -35,
    opacity: 0,
    duration: 0.5,
    delay: 0.4,
})

tl3.from("#services #service-sec #third-service", {
    x: -35,
    opacity: 0,
    duration: 0.5,
    delay: 0.5,
})

// skills

let skill = gsap.timeline({
    scrollTrigger : {
        trigger : "#skills",
        scroller: "body",
        start : "top 60%",
        end : "top 0%",
        scrub: 2,
    }
});

skill.from("#skill-nav h1", {
    y: -30,
    opacity: 0,
    duration: 0.9,
    delay: 0.5
})

skill.from("#frontend div", {
    x: -35,
    opacity: 0,
    duration: 0.8,
    delay: 0.5,
    stagger: 0.4
},"same")

skill.from("#development div", {
    x: 35,
    opacity: 0,
    duration: 0.8,
    delay: 0.5,
    stagger: 0.4
},"same")

// project

let project = gsap.timeline({
    scrollTrigger : {
        trigger : "#project-sec",
        scroller : "body",
        start : "top 60%",
        end : "top 0%",
        scrub: 2,
    }
});

project.from("#project-nav h1", {
    y: -40,
    opacity : 0,
    duration: 1,
    delay: 0.5
})

project.from("#project-midsec h2", {
    y : -80,
    opacity: 0,
    duration: 1,
    delay: 0.5
})

// wire-animation
// ${dets.x} ${dets.y}

let initialpath = `M 50 80 Q 500 80 950 80`
let finalPath = `M 50 80 Q 500 80 950 80`

let anima = document.querySelector("#wire-animation");

anima.addEventListener("mousemove", (dets) => {
    path = `M 50 80 Q ${dets.x} ${dets.y} 950 80`
    
    gsap.to("svg path", {
        attr : {d:path},
        duration: 0.5,
        ease: "power3.out"
    })
})

anima.addEventListener("mouseleave", () => {
    gsap.to("svg path", {
        attr: {d: finalPath},
        duration: 1.1,
        ease: "elastic.out(1,0.2)"
    })
})

// contact 

let contact = gsap.timeline({
    scrollTrigger : {
        trigger : "#contact-sec",
        scroller : "body",
        start : "top 60%",
        end : "top 15%",
        scrub: 2,
    }
})

contact.from("#contact-nav h1", {
    y: 50,
    opacity:0,
    duration : 1,
    delay: 0.4,
})
contact.from("#contact-sec input,#contact-sec textarea", {
    y: 50,
    opacity:0,
    duration : 1,
    delay: 0.4,
    stagger: 0.4
})

contact.from("div button",{
    y: 50,
    opacity:0,
    duration : 1,
    delay: 0.4,
})