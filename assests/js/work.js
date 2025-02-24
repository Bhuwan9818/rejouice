
gsap.registerPlugin(ScrollTrigger);

// document.addEventListener("DOMContentLoaded",function(){
//     let scrollContainer = document.querySelector("[data-scroll-container]");
// }) 

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    // lerp: .09
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


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

window.onload = function(){
    setTimeout(() => {
        locoScroll.scrollTo(0,{duration:0,disableLerp:true});
    }, 100);
}



setTimeout(() => {
    if(document.querySelector("[data-scroll-container]").style.transform === ''){
        document.body.style.overflow="auto";
    }
}, 1000);

ScrollTrigger.refresh();



// Store reference in a separate object to survive hard reloads
const _APP_STATE_ = window._APP_STATE_ || {
    locoScroll: null,
    isInitializing: false
  };
  window._APP_STATE_ = _APP_STATE_;
  
  function initSmoothScroll() {
    // Cleanup previous instance
    if (_APP_STATE_.locoScroll) {
      _APP_STATE_.locoScroll.destroy();
      console.log('♻️ Destroyed previous scroll instance');
    }
  
    const scrollContainer = document.querySelector('[data-scroll-container]');
    if (!scrollContainer) {
      console.error('❌ Scroll container not found!');
      return;
    }
  
    // ✅ Initialize Locomotive Scroll
    try {
      _APP_STATE_.locoScroll = new LocomotiveScroll({
        el: scrollContainer,
        smooth: true,
        smartphone: { smooth: true },
        tablet: { smooth: true }
      });
  
      console.log('✅ Locomotive Scroll initialized');
  
    } catch (error) {
      console.error('💥 Scroll initialization failed:', error);
      return;
    }
  
    // ✅ Correct scrollerProxy so ScrollTrigger measures correctly
    ScrollTrigger.scrollerProxy(scrollContainer, {
      scrollTop(value) {
        return arguments.length 
          ? _APP_STATE_.locoScroll.scrollTo(value, { duration: 0, disableLerp: true }) 
          : _APP_STATE_.locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      },
      pinType: scrollContainer.style.transform ? "transform" : "fixed"
    });
  
    // ✅ Sync ScrollTrigger updates with Locomotive Scroll
    _APP_STATE_.locoScroll.on("scroll", () => {
      ScrollTrigger.update();
    });
  
    // ✅ Ensure ScrollTrigger refreshes AFTER Locomotive Scroll initializes
    setTimeout(() => {
      ScrollTrigger.refresh();
      console.log('🔄 ScrollTrigger refreshed');
    }, 300); // Small delay ensures correct viewport positioning
  }
  
  // *2️⃣ Properly Initialize Everything*
  function handleAppInit() {
    if (_APP_STATE_.isInitializing) return;
    _APP_STATE_.isInitializing = true;
  
    if (document.readyState === 'complete') {
      initSmoothScroll();
    } else {
      document.addEventListener('DOMContentLoaded', initSmoothScroll);
    }
  
    window.addEventListener('load', () => {
      if (!_APP_STATE_.locoScroll?.isActive) {
        console.log('🔁 Reinitializing after hard reload');
        initSmoothScroll();
      }
    });
  
    // ✅ Resize Handling for Correct Scroll Measurements
    const resizeObserver = new ResizeObserver(() => {
      _APP_STATE_.locoScroll?.update();
      ScrollTrigger.refresh();
    });
    resizeObserver.observe(document.documentElement);
  }
  
  // *3️⃣ Start App Initialization*
  if (typeof LocomotiveScroll !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    handleAppInit();
  } else {
    console.error('⚠️ Locomotive Scroll or ScrollTrigger not loaded! Check script order:');
  }







function rejouiceAnimate() {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#main2",
            scroller: "[data-scroll-container]",
            markers: true,
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
            markers: true,
        }
    })
}

InnerrejouiceAnimate();
