
gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  lerp:.09
});

// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("[data-scroll-container]", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("[data-scroll-container]").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


// const scroll = new LocomotiveScroll({
//     el: document.querySelector('[data-scroll-container]'),
//     smooth: true,
//     lerp:.09,
// });



// gsap.registerPlugin(ScrollTrigger);

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector("[data-scroll-container]"),
//   smooth: true,

//   // for tablet smooth
//   tablet: { smooth: true },

//   // for mobile
//   smartphone: { smooth: true }
// });
// locoScroll.on("scroll", ScrollTrigger.update);

// ScrollTrigger.scrollerProxy("[data-scroll-container]", {
//   scrollTop(value) {
//     return arguments.length
//       ? locoScroll.scrollTo(value, 0, 0)
//       : locoScroll.scroll.instance.scroll.y;
//   },
//   getBoundingClientRect() {
//     return {
//       top: 0,
//       left: 0,
//       width: window.innerWidth,
//       height: window.innerHeight
//     };
//   }

//   // follwoing line is not required to work pinning on touch screen

//   /* pinType: document.querySelector(".smooth-scroll").style.transform
//     ? "transform"
//     : "fixed"*/
// });


// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// ScrollTrigger.refresh();





// gsap.registerPlugin(ScrollTrigger);

// document.addEventListener("DOMContentLoaded", function () {
//     const scrollContainer = document.querySelector("[data-scroll-container]");

//     const locoScroll = new LocomotiveScroll({
//         el: scrollContainer,
//         smooth: true
//     });

//     // ✅ Proxy Locomotive Scroll for GSAP ScrollTrigger
//     ScrollTrigger.scrollerProxy(scrollContainer, {
//         scrollTop(value) {
//             return arguments.length ? locoScroll.scrollTo(value, { duration: 0, disableLerp: true }) : locoScroll.scroll.instance.scroll.y;
//         },
//         getBoundingClientRect() {
//             return {
//                 top: 0,
//                 left: 0,
//                 width: window.innerWidth,
//                 height: window.innerHeight
//             };
//         }
//     });

//     // ✅ Fix: Always start from the top on refresh (without white screen)
//     function resetScrollPosition() {
//         setTimeout(() => {
//             locoScroll.scrollTo(0, { duration: 0, disableLerp: true });
//             ScrollTrigger.refresh();
//         }, 100);
//     }

//     // ✅ Ensure ScrollTrigger and Locomotive Scroll update correctly
//     function updateScroll() {
//         locoScroll.update();
//         ScrollTrigger.refresh();
//     }

//     // 🚀 Fix refresh issue: Only reset scroll on hard reload (not on back/forward navigation)
//     window.addEventListener("load", () => {
//         if (performance.navigation.type === 1) {  // Type 1 = Page Reload
//             resetScrollPosition();
//         } else {
//             updateScroll();
//         }
//     });

//     // ✅ Fix: Ensure smooth scrolling always works
//     setTimeout(() => {
//         updateScroll();
//     }, 500);

//     // ✅ Sync Locomotive Scroll & ScrollTrigger
//     locoScroll.on("scroll", ScrollTrigger.update);
//     ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

//     // ✅ Refresh ScrollTrigger after Locomotive updates
//     ScrollTrigger.refresh();
// });




function rejouiceAnimate() {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#main2",
            scroller: "[data-scroll-container]",
            // markers: true,
            start: "50% 50%",
            end: "150% 50%",
            scrub: 2,
            pin: true,
            ease: "none",
            pinSpacing: "false",
        }
    })


    tl.to("#main2 #top-last", {
        top: "-51%",
    }, "h")


    tl.to("#main2 #bottom-last", {
        bottom: "-51%",
    }, "h")

    tl.to("#top-last svg", {
        y: 90,
    }, "h")

    tl.to("#bottom-last svg", {
        y: -90,
    }, "h")
}

rejouiceAnimate();




function InnerrejouiceAnimate() {
    gsap.from("#last-div-of-svg svg .letter", {
        y: -250,
        duration: 2,
        delay: 1,
        stagger: -.4,
        scrollTrigger: {
            trigger: "#center-last-bottom",
            scroller: "[data-scroll-container]",
            start: "90% 50%",
            end: "50% 0%",
            ease: "none",
            scrub: 2,
            // markers: true,
        }
    })
}

InnerrejouiceAnimate();
