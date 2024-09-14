const scroll = new LocomotiveScroll({
    el: document.querySelector('main'),
    smooth: true
});
let tl= gsap.timeline();
tl.to(".page1",{
    y:"0vh",
    duration:0,
    delay:1,
    scale:0.4,
})
tl.to(".page1",{
    y:"30vh",
    duration1:1,
   

})
tl.to(".page1",{
    y:"0vh",
    rotate:360,
    scale:1,
    duration:0.8,
})