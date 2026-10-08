/* =========================================
SANUS N - PORTFOLIO JAVASCRIPT
========================================= */

/* -----------------------------------------

1. SCROLL REVEAL ANIMATION
   ----------------------------------------- */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
(entries) => {

```
    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

},
{
    threshold: 0.12
}
```

);

revealElements.forEach((element) => {

```
revealObserver.observe(element);
```

});

/* -----------------------------------------
2. MOVING BACKGROUND ORB
----------------------------------------- */

const orbOne = document.querySelector(".orb.one");

document.addEventListener("mousemove", (event) => {

```
if (!orbOne) return;

const x =
    (event.clientX / window.innerWidth - 0.5) * 35;

const y =
    (event.clientY / window.innerHeight - 0.5) * 35;

orbOne.style.transform =
    `translate(${x}px, ${y}px)`;
```

});

/* -----------------------------------------
3. ACTIVE NAVIGATION LINK
----------------------------------------- */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

```
let currentSection = "";

sections.forEach((section) => {

    const sectionTop =
        section.offsetTop - 180;

    if (window.scrollY >= sectionTop) {

        currentSection = section.getAttribute("id");

    }

});

navLinks.forEach((link) => {

    link.style.color = "#aaa";

    if (
        link.getAttribute("href") ===
        "#" + currentSection
    ) {

        link.style.color = "#ffffff";

    }

});
```

});

/* -----------------------------------------
4. PROFILE IMAGE EFFECT
----------------------------------------- */

const profile = document.querySelector(".profile");

if (profile) {

```
profile.addEventListener("mouseenter", () => {

    profile.style.transform =
        "scale(1.08) rotate(3deg)";

});

profile.addEventListener("mouseleave", () => {

    profile.style.transform =
        "scale(1) rotate(0deg)";

});
```

}

/* -----------------------------------------
5. BUTTON CLICK RIPPLE
----------------------------------------- */

const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {

```
button.addEventListener("click", function (event) {

    const ripple = document.createElement("span");

    ripple.style.position = "absolute";
    ripple.style.width = "10px";
    ripple.style.height = "10px";
    ripple.style.borderRadius = "50%";
    ripple.style.background = "rgba(255,255,255,.5)";
    ripple.style.pointerEvents = "none";

    const rect =
        button.getBoundingClientRect();

    ripple.style.left =
        `${event.clientX - rect.left}px`;

    ripple.style.top =
        `${event.clientY - rect.top}px`;

    button.style.position = "relative";
    button.style.overflow = "hidden";

    button.appendChild(ripple);

    setTimeout(() => {

        ripple.remove();

    }, 500);

});
```

});

/* -----------------------------------------
6. CONSOLE MESSAGE
----------------------------------------- */

console.log(
"%cHey! 👋 Welcome to Sanus N's portfolio.",
"color:#00d9ff;font-size:16px;font-weight:bold;"
);

console.log(
"%cBuilt with HTML, CSS & JavaScript.",
"color:#9c7cff;font-size:13px;"
);

/* -----------------------------------------
7. CURRENT YEAR
----------------------------------------- */

const footer = document.querySelector("footer");

if (footer) {

```
const year =
    new Date().getFullYear();

footer.innerHTML =
    `© ${year} Sanus N · Built with curiosity & code.`;
```

}
