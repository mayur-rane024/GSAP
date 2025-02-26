gsap.to("#box1",{
    x: 1200,
    // y: 200,
    duration: 1.5,
    delay : 0.6,
    rotate : 3500,
    backgroundColor : "teal",         // CAMEL CASE USE KARO SINCE JS
    borderRadius : "50%",
    scale : 2.5
})
gsap.from("#box2",{
    x: 1200,
    // y: -200,
    duration: 2,
    delay : 0.6,
    rotate : 3500,
    backgroundColor : "teal",
    borderRadius : "0%",
    scale : 0.5
})