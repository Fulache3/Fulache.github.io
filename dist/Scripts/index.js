//Header animation opening and scroll up
function headerAnim() {
    const header = document.querySelector(".header");
    gsap.set(header, {
        y: "-200%",
        onComplete: () => {
            gsap.to(header, { duration: 2, opacity: 1, y: "0%" });
        },
    });
    document.addEventListener("DOMContentLoaded", function () {
        let lastScrollPosition = window.pageYOffset;
        let doneScroll = false;
        window.addEventListener("scroll", function () {
            const currentScrollPosition = window.pageYOffset;

            if (currentScrollPosition > 150 && doneScroll === false) {
                gsap.to(header, { y: "-200%" });
                doneScroll = true;
            } else if (currentScrollPosition === 0) {
                gsap.to(header, { duration: 2, y: "0%" });
                doneScroll = false;
            }

            lastScrollPosition = currentScrollPosition;
        });
    });
}

function carousel() {
    const container = document.querySelector(".element-to-carousel");
    const image = container.querySelector("img");
    let n = 1;
    setInterval(() => {
        gsap.to(image, {
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
                image.setAttribute("src", `Images/GlamourGemHaven (${n}).png`);

                gsap.to(image, {
                    opacity: 1,
                    duration: 0.5,
                });

                n++;

                if (n === 7) {
                    n = 1;
                }
            },
        });
    }, 5000);
}
function scroller() {
    const skipBtn = document.querySelectorAll(".skip-btn");

    const pageContents = document.querySelectorAll(".page-contents");
    skipBtn.forEach(function (skipB, index) {
        skipB.addEventListener("click", function () {
            pageContents[index].scrollIntoView({ behavior: "smooth" });
        });
    });
}
function logoAnim() {
    const logo = document.querySelector(".logo");
    gsap.from(logo, { duration: 1, opacity: 0, delay: 1 });
}

function tilt() {
    const containers = document.querySelectorAll(".element-to-tilt");
    VanillaTilt.init(containers, {
        max: 5,
        speed: 500,
        glare: true,
        "max-glare": 0.5,
        gyroscope: false,
        reverse: true,
        perspective: 1000,
    });
}

function animFront() {
    const frontElements = document.querySelectorAll(".front-elem");

    frontElements.forEach((elements) => {
        gsap.to(elements, {
            duration: 1,
            opacity: 1,
        });
    });

    const stagCon = document.querySelector(".stag-elem-con");
    const hTexts = stagCon.querySelectorAll("span");
    gsap.from(hTexts, {
        opacity: 0,
        duration: 2,
        stagger: 0.1, // Adjust the stagger value as needed
        ease: "power2.out",
      });
    setInterval(() => {
        gsap.from(hTexts, {
            opacity: 0,
            duration: 2,
            stagger: 0.1, // Adjust the stagger value as needed
            ease: "power2.out",
          });
    }, 7000);


}

function scrollTriggerFunc() {
    // Select all elements with the class name "element-to-scroll"
    const elementsToScroll = document.querySelectorAll(".element-to-scroll");

    // Iterate over each element
    elementsToScroll.forEach((elementToScroll) => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: elementToScroll,
                start: "top 80%",
                end: "bottom center",
                scrub: true,
                markers: false,
            },
        });

        tl.to(elementToScroll, {
            opacity: 1,
        });
    });

    const lenis = new Lenis();

    lenis.on("scroll", (e) => {
        console.log(e);
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
}
function main() {
    headerAnim();
    logoAnim();
    tilt();
    carousel();
    scroller();
    scrollTriggerFunc();
    animFront();
}
main();
