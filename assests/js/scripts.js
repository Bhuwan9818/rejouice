
// gsap.registerPlugin(ScrollTrigger);

// // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector("#main"),
//   smooth: true
// });
// // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);

// // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy("#main", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//   pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
// });



// // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();

// window.onbeforeunload = function () {
//   window.scrollTo(0, 0);
// }

// document.addEventListener("DOMContentLoaded", function () {
//     if(locoScroll) {
//         locoScroll.destroy();
//     }

//     const locoScroll = new LocomotiveScroll({
//         el: document.querySelector("[data-scroll-container]"),
//         smooth: true
//     });
    
//     locoScroll.update();
// });

// if('scrollRestoration' in history) {
//     history.scrollRestoration = 'manual';
// }


//     // Initialize Locomotive Scroll
//     const scroll = new LocomotiveScroll({
//         el: document.querySelector("#main"),
//         smooth: true
//     });

// -----------locomotive end ------------------------


function cursorEffect() {
    var page1Conent = document.querySelector("#page-1-content");

    var cursor = document.querySelector("#cursor");

    page1Conent.addEventListener("mousemove", (e) => {
        // let scrollY = locoScroll.scroll.instance.scroll.y;
        // console.log("hhleo illy")

        gsap.to(cursor, {
            x: e.x,
            y: e.y,   // + scrollY,
            duration: 0.5
        })
    });

    page1Conent.addEventListener("mouseenter", (e) => {
        gsap.to(cursor, {
            scale: 1,
            opacity: 1,
            duration: 0.5
        })
    });

    page1Conent.addEventListener("mouseleave", (e) => {
        gsap.to(cursor, {
            scale: 0,
            opacity: 0,
            duration: 0.5
        })
    });
}

cursorEffect();




function page2Animate(){
    gsap.from(".elem h3", {
        y: 100,
        stagger: 0.2,
        duration: 1,
        opacity: 0,
        scrollTrigger: {
            trigger: "#page2",
            // scroller: "#main",
            start: " 70% 50%",
            end: "50% 50%",
            // scrub: 1,
            // markers: true
        }
    });
}

page2Animate();


function page2BottomAnimate(){
    gsap.from("#right-part h6,#left-part h6", {
        y: 100,
        stagger: 0.2,
        duration: 1,
        opacity: 0,
        scrollTrigger: {
            trigger: "#part-2-bottom",
            // scroller: "#main",
            start: " 70% 50%",
            end: "50% 50%",
            // scrub: 1,
            // markers: true
        }
    });
}

page2BottomAnimate();


function cursorEffectPage3() {
    var page3Conent = document.querySelector("#part-3-content #coverup");

    var part3Cursor = document.querySelector("#part-3-cursor");

    page3Conent.addEventListener("mousemove", (e) => {
        // let scrollY = locoScroll.scroll.instance.scroll.y;
        let rect = page3Conent.getBoundingClientRect();
        let margin = 30;

        let cursorWidth = part3Cursor.offsetWidth;
        let cursorHeight = part3Cursor.offsetHeight;

        let x = e.clientX - rect.left - cursorWidth / 2;
        // console.log(x)
        let y = e.clientY - rect.top - cursorHeight / 2;

        let constrainedX = Math.max(margin,Math.min(x,rect.width - margin - cursorWidth));
        let constrainedY = Math.max(margin,Math.min(y,rect.height - margin - cursorHeight));
        
        gsap.to(part3Cursor, {
            x: constrainedX,
            y: constrainedY,     // + scrollY,
            duration: 0.5
        })
    });

    page3Conent.addEventListener("mouseenter", (e) => {
        gsap.to(part3Cursor, {
            scale: 1,
            opacity: 1,
            duration: 0.5,
        });

        gsap.to("#part-3-img img",{
            opacity: .6,
        })
    });

    page3Conent.addEventListener("mouseleave", (e) => {
        gsap.to(part3Cursor, {
            scale: 0,
            opacity: 0,
            duration: 0.5,
        })

        gsap.to("#part-3-img img",{
            opacity: 1,
        })
    });
}

cursorEffectPage3();



function cursorEffectPage4() {
    var part4Conent = document.querySelector("#part-4-content-left #coverup2");

    var part4CursorLeft = document.querySelector(".part-4-cursor-left");

    part4Conent.addEventListener("mousemove", (e) => {
        // let scrollY = locoScroll.scroll.instance.scroll.y;
        let rect = part4Conent.getBoundingClientRect();
        let margin = 0;

        let cursorWidth = part4CursorLeft.offsetWidth;
        let cursorHeight = part4CursorLeft.offsetHeight;

        let x = e.clientX - rect.left - cursorWidth / 2;
        // console.log(x)
        let y = e.clientY - rect.top - cursorHeight / 2;

        let constrainedX = Math.max(margin,Math.min(x,rect.width - margin - cursorWidth + 60));
        let constrainedY = Math.max(margin,Math.min(y,rect.height - margin - cursorHeight));
        
        gsap.to(part4CursorLeft, {
            x: constrainedX,
            y: constrainedY,     // + scrollY,
            duration: 0.5
        })
    });

    part4Conent.addEventListener("mouseenter", (e) => {
        gsap.to(part4CursorLeft, {
            scale: 1,
            opacity: 1,
            duration: 0.5,
        });

        gsap.to("#part-4-img-left img",{
            opacity: .6,
        })
    });

    part4Conent.addEventListener("mouseleave", (e) => {
        gsap.to(part4CursorLeft, {
            scale: 0,
            opacity: 0,
            duration: 0.5,
        })

        gsap.to("#part-4-img-left img",{
            opacity: 1,
        })
    });
}

cursorEffectPage4();



function cursorEffectPage4Right() {
    var part4RightContent = document.querySelector("#part-4-content-right #coverup3");

    var part4CursorRight = document.querySelector(".part-4-cursor-right");

    part4RightContent.addEventListener("mousemove", (e) => {
        // let scrollY = locoScroll.scroll.instance.scroll.y;
        let rect = part4RightContent.getBoundingClientRect();
        let margin = 0;

        let cursorWidth = part4CursorRight.offsetWidth;
        let cursorHeight = part4CursorRight.offsetHeight;

        let x = e.clientX - rect.left - cursorWidth / 2;
        // console.log(x)
        let y = e.clientY - rect.top - cursorHeight / 2;

        let constrainedX = Math.max(margin - 50,Math.min(x,rect.width - margin - cursorWidth));
        let constrainedY = Math.max(margin,Math.min(y,rect.height - margin - cursorHeight));
        
        gsap.to(part4CursorRight, {
            x: constrainedX,
            y: constrainedY,     // + scrollY,
            duration: 0.5
        })
    });

    part4RightContent.addEventListener("mouseenter", (e) => {
        gsap.to(part4CursorRight, {
            scale: 1,
            opacity: 1,
            duration: 0.5,
        });

        gsap.to("#part-4-img-right img",{
            opacity: .6,
        })
    });

    part4RightContent.addEventListener("mouseleave", (e) => {
        gsap.to(part4CursorRight, {
            scale: 0,
            opacity: 0,
            duration: 0.5,
        })

        gsap.to("#part-4-img-right img",{
            opacity: 1,
        })
    });
}

cursorEffectPage4Right();


// $('.slider-nav').css({
//     'padding':'500px',
//     'font-size':'500px'
// })

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 40,
        nav: false,
        autoplay:true,
        autoplayTimeout: 1500,
        smartSpeed: 15000,
        autoplaySpeed:25000,
        autoplayHoverPause:true,
        slideTransition: "linear",
        dots:false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })
})


function breakTheText() {

    var h6 = document.querySelectorAll(".right-part7-h6 h6")

    h6.forEach(co => {
        var h6Text = co.textContent.trim();
        var spiltedText = h6Text.split(/\s+/);
        var clutter = '';

        spiltedText.forEach((val,idx) => {  // forEach loop will work for each value of spiltText(array)
        
            if(idx > 0) clutter += " ";
            
            clutter += `<span class="hide-span" style="inline-block">
            <span class='b'>${val}</span></span>` 
        })

        co.innerHTML = clutter;
    })

}

breakTheText();

gsap.from("h6 .b",{
    y:70,
    duration:.7,
    delay:0.5,
    opacity:0,
    stagger:0.025,  //if we will give the value of stagger in (-ve) it will work as reverse
    scrollTrigger: {
        trigger: ".part-7-bottom",
        start: "50% 50%",
        end:"50% 50%",
        markers: true,
        // scrub: true,
    }
})


// function breakText() {

//     var h5 = document.querySelector(".right-part8-h6 h6")
//     var h5Text = h5.textContent

//     var spiltedText = h5Text.split(' ')  // split is  used to split the content on the bases of '' nothing and create an array
//     var clutter1 = '';

//     // var halfValue = Math.floor(spiltedText.length/2)

//     spiltedText.forEach((val,idx) => {  // forEach loop will work for each value of spiltText(array)
        
//         if(idx > 0) clutter1 += " ";
        
//         clutter1 += `<span class='a'>${ val } </span>` 
//     })

//     h5.innerHTML = clutter1;

// }

// breakText();


// gsap.from("h6 .a",{
//     y:50,
//     duration:.7,
//     delay:0.5,
//     opacity:0,
//     stagger:0.025  //if we will give the value of stagger in (-ve) it will work as reverse
// })
