gsap.registerPlugin(ScrollTrigger);
gsap.to('.m1',{
    scrollTrigger:{
        trigger:".m1", 
        scrub:true },
    x:600,
    
    scrub: true,
    startAt:{x:-100}
}
)

gsap.to("#sukuna",{
    scrollTrigger:{
        trigger:"#sukuna",
        scrub:true
    },
    x:100,y:100,
    startAt:{x:-100},
    scrub:true
})
gsap.to("#ken",{
    scrollTrigger:{
        trigger:"#ken",
        scrub:true
    },
    x:100,y:100,
    startAt:{x:-100},
    scrub:true
})
gsap.to("#gojo",{
    scrollTrigger:{
        trigger:"#gojo",
        scrub:true
    },
    x:100,y:100,
    startAt:{x:-100},
    scrub:true
})
gsap.to("#mei",{
    scrollTrigger:{
        trigger:"#mei",
        scrub:true
    },
    x:100,y:100,
    startAt:{x:-100},
    scrub:true
})