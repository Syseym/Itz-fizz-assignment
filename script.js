// Registering ScrollTrigger with core GSAP engine
gsap.registerPlugin(ScrollTrigger);

// 01. Entrance Animations on First Page Load
window.addEventListener("DOMContentLoaded", () => {
    const entranceTimeline = gsap.timeline();
    
    entranceTimeline.from(".main-title", {
        delay: 0.2,
        duration: 1.4,
        y: 60,
        opacity: 0,
        ease: "power4.out"
    });
    
    entranceTimeline.from(".stat-card", {
        duration: 0.9,
        y: 25,
        opacity: 0,
        stagger: 0.15,
        ease: "power3.out"
    }, "-=0.8");
});

// 02. Scroll-Linked Car Transformation (Fixed Center Rotation)
gsap.to("#scrolling-object", {
    scale: 2.8,                 
    rotation: -45,              
    transformOrigin: "50% 50%", 
    scrollTrigger: {
        trigger: ".main-viewport",
        start: "top top",
        end: "bottom bottom",
        scrub: 1
    }
});

// 03. Dissolve Intro Text on Displacement
gsap.to(".frame-initial .content-box", {
    opacity: 0,
    y: -80,
    scrollTrigger: {
        trigger: ".frame-initial",
        start: "top top",
        end: "bottom center",
        scrub: true
    }
});