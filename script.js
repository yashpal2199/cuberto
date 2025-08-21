window.onload = () => {

    Shery.mouseFollower({ skew: true, ease: "expo.out", duration: 0.5, size: 20, 
    color: "#000", opacity: 0.2 });
    Shery.makeMagnet(".magnet");
    Shery.hoverWithMediaCircle(".hvr", {videos: ["Assets/0.mp4", "Assets/2.mp4", "Assets/3.mp4"],});

    gsap.to(".fleftelm", {
        scrollTrigger: {
            trigger: "#fimages",
            pin: true,
            start: "top top",
            end: "bottom bottom",
            endTrigger: ".last",
            scrub: 1,
        },
        y: "-300%",
        ease: Power1
    })

    let sections = document.querySelectorAll(".fleftelm");
    Shery.imageEffect(".images", {
        style: 5,
        // config: {onMouse: {value: 1}}, 
        slideStyle: (setScroll) => {
            sections.forEach(function (section, index) {
                ScrollTrigger.create({
                    trigger: section,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1,
                    onUpdate: function(prog) {
                        setScroll(prog.progress + index)
                    }
                })
            })
        }
    });
};

