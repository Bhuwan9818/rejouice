function locomotiveFunction() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
        lerp: .09
    });

    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("[data-scroll-container]", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("[data-scroll-container]").style.transform ? "transform" : "fixed"
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    document.addEventListener("DOMContentLoaded",function(){
        setTimeout(()=>{
            locoScroll.update();
            ScrollTrigger.refresh();
        },500);
    })


    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}

locomotiveFunction();


function VideoAnimate() {
    var tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: "#part-8",
            scroller: "[data-scroll-container]",
            start: "0% 60%",
            end: "top top",
            scrub: 1,
            // markers:true,
        }
    })

    tl3.from("#video-div video", {
        scale: 1.3,
        duration: 5,
        ease: "none",
    }, 0)

    tl3.from("#video-div ", {
        scale: .7,
        duration: 5,
        ease: "none",
    }, 0);

}

VideoAnimate();



// function breakTheText() {

//     var h6 = document.querySelectorAll("#ele-2 h6") 

//     h6.forEach(co => {
//         var h6Text = co.textContent.trim();
//         var spiltedText = h6Text.split(/\s+/);
//         var clutter = '';

//         spiltedText.forEach((val, idx) => {  // forEach loop will work for each value of spiltText(array)

//             if (idx > 0) clutter += " ";

//             clutter += `<span class="hide-span" style="display: inline-block">

//             <span class='b' style="display: inline-block">${val}</span></span>`
//         })

//         co.innerHTML = clutter;
//     })

//     gsap.set("h6 .b",{
//         clearProps: "all"
//     });


//     gsap.from("h6 .b", {
//         y:100,
//         // marginTop:"100px",
//         // rotate:"360deg",
//         duration: .7,
//         delay: 3,
//         opacity: 0,
//         stagger: 0.5,  //if we will give the value of stagger in (-ve) it will work as reverse
// scrollTrigger: {
//     trigger: "#page-7-content",
//     scroller: "[data-scroll-container]",
//     start: "0% 80%",
//     end: "0% 50%",
//     markers: true,

//     // scrub: true,
// }
//     })

// }

// breakTheText();


// setInterval(() => {
//     console.log(getComputedStyle(document.querySelector("h6 .b")).transform)
// }, 500);


// document.querySelector("h6 .b").ontransitionend = (e) => console.log("transition ended by:",e.target);

// document.querySelectorAll("script").forEach(script=>script.remove());


function breakText() {

    var h5 = document.querySelector(".page-2-right-p p")
    var h5Text = h5.textContent

    var spiltedText = h5Text.split(' ')  // split is  used to split the content on the bases of '' nothing and create an array
    var clutter1 = '';

    // var halfValue = Math.floor(spiltedText.length/2)

    spiltedText.forEach((val, idx) => {  // forEach loop will work for each value of spiltText(array)

        if (idx > 0) clutter1 += " ";

        clutter1 += `<span class='a' style="display: inline-block">${val} </span>`
    })

    h5.innerHTML = clutter1;


    gsap.from("p .a", {
        y: 50,
        duration: .7,
        //  delay:0.5,
        opacity: 0,
        stagger: 0.025,
        scrollTrigger: {
            trigger: "#page-2-right",
            scroller: "[data-scroll-container]",
            start: "0% 80%",
            end: "0% 50%",
            markers: true,
            scrub: true,
        }  //if we will give the value of stagger in (-ve) it will work as reverse
    })

}

breakText();


function Text() {

    var h = document.querySelector("#ele-2 h6")
    var hText = h.textContent

    var spiltedT = hText.split(' ')  // split is  used to split the content on the bases of '' nothing and create an array
    var clutter = '';

    // var halfValue = Math.floor(spiltedText.length/2)

    spiltedT.forEach((val, idx) => {  // forEach loop will work for each value of spiltText(array)

        if (idx > 0) clutter += " ";

        clutter += `<span class='a' style="display: inline-block">${val} </span>`
    })

    h.innerHTML = clutter;


    gsap.from("h6 .a", {
        y: 50,
        duration: .7,
        delay: 0.5,
        opacity: 0,
        stagger: 0.025,  //if we will give the value of stagger in (-ve) it will work as reverse
        scrollTrigger: {
            trigger: "#part-7",
            scroller: "[data-scroll-container]",
            start: "0% 80%",
            end: "0% 50%",
            markers: true,
            scrub: true,
        }
    })

}

Text();
