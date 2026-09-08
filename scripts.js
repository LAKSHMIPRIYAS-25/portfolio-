/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        const icon = menuBtn.querySelector("i");

        if (navLinks.classList.contains("active")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        } else {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }

    });


    // Close mobile menu after clicking a link

    navLinks.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            const icon = menuBtn.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        });

    });

}


/* =========================================================
   TYPING EFFECT
========================================================= */

const typingElement = document.querySelector(".hero-content h2 span");

const roles = [
    "Full Stack Developer",
    "Python Developer",
    "Web Developer",
    "Software Developer"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;


function typeEffect() {

    if (!typingElement) return;

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingElement.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {

            deleting = true;

            setTimeout(typeEffect, 1800);

            return;
        }

    } else {

        typingElement.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex === roles.length) {
                roleIndex = 0;
            }

        }

    }

    const speed = deleting ? 55 : 100;

    setTimeout(typeEffect, speed);
}


typeEffect();


/* =========================================================
   SCROLL REVEAL ANIMATION
========================================================= */

const revealElements = document.querySelectorAll(
    ".section-title, " +
    ".about-text, " +
    ".info-card, " +
    ".skill-group, " +
    ".project-card, " +
    ".timeline-item, " +
    ".achievement-card, " +
    ".contact-text, " +
    ".contact-item"
);


const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


/* =========================================================
   ACTIVE NAVBAR LINK
========================================================= */

const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-links a");


function updateActiveNav() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navItems.forEach(link => {

        link.classList.remove("active");

        const href =
            link.getAttribute("href");

        if (href === `#${currentSection}`) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNav
);

updateActiveNav();


/* =========================================================
   HEADER SCROLL EFFECT
========================================================= */

const header =
    document.querySelector(".header");


window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* =========================================================
   PROJECT CARD TILT EFFECT
========================================================= */

const projectCards =
    document.querySelectorAll(".project-card");


projectCards.forEach(card => {

    card.addEventListener("mousemove", event => {

        const rect =
            card.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;

        const rotateX =
            ((y - centerY) / centerY) * -3;

        const rotateY =
            ((x - centerX) / centerX) * 3;


        card.style.transform =
            `perspective(800px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-8px)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});


/* =========================================================
   SKILL PROGRESS ANIMATION
========================================================= */

const progressBars =
    document.querySelectorAll(".progress div");


const progressObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    const finalWidth =
                        entry.target.style.width;

                    entry.target.style.width = "0%";

                    setTimeout(() => {

                        entry.target.style.transition =
                            "width 1.2s ease";

                        entry.target.style.width =
                            finalWidth;

                    }, 200);

                    progressObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.5
        }
    );


progressBars.forEach(bar => {

    progressObserver.observe(bar);

});


/* =========================================================
   CONTACT EMAIL
========================================================= */

const emailLinks =
    document.querySelectorAll(
        'a[href^="mailto:"]'
    );


emailLinks.forEach(link => {

    link.addEventListener("click", () => {

        console.log(
            "Opening email:",
            "lakshmipriya2514@gmail.com"
        );

    });

});


/* =========================================================
   SMOOTH BUTTON FEEDBACK
========================================================= */

const buttons =
    document.querySelectorAll(".btn");


buttons.forEach(button => {

    button.addEventListener("click", () => {

        button.style.transform =
            "scale(0.96)";

        setTimeout(() => {

            button.style.transform = "";

        }, 120);

    });

});


/* =========================================================
   SCROLL TO TOP
========================================================= */

const scrollTopBtn =
    document.createElement("button");


scrollTopBtn.innerHTML =
    '<i class="fas fa-arrow-up"></i>';


scrollTopBtn.setAttribute(
    "aria-label",
    "Scroll to top"
);


scrollTopBtn.className =
    "scroll-top";


document.body.appendChild(
    scrollTopBtn
);


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        scrollTopBtn.classList.add("visible");

    } else {

        scrollTopBtn.classList.remove("visible");

    }

});


scrollTopBtn.addEventListener(
    "click",
    () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


/* =========================================================
   CONSOLE MESSAGE
========================================================= */

console.log(
    "%cWelcome to Lakshmi Priya's Portfolio!",
    "font-size:18px;font-weight:bold;"
);

console.log(
    "%cPython Full Stack Developer | AI & Data Science",
    "font-size:13px;"
);