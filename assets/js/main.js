const words = [
    "Web Developer",
    "Machine Learning",
    "Creative Coder",
    "Frontend Designer",
];

let wordIndex = 0;
let letterIndex = 0;

let currentWord = "";
let currentLetters = "";

const typingText = document.getElementById("typing-text");

function type() {
    if (!typingText) return;

    if (wordIndex >= words.length) {
        wordIndex = 0;
    }

    currentWord = words[wordIndex];

    currentLetters = currentWord.slice(0, letterIndex++);

    typingText.textContent = currentLetters;

    if (currentLetters.length === currentWord.length) {

        setTimeout(() => {

            letterIndex = 0;
            wordIndex++;

        }, 1200);

    }

    setTimeout(type, 120);
}

type();
// MOUSE GLOW EFFECT

const glow = document.querySelector(".mouse-glow");

document.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

});
// AOS INIT

AOS.init({

    duration: 1200,
    once: false

});
// =========================
// SKILLS DATA
// =========================

const skillData = {

    html: {

        title: "HTML5",

        description:
            "Building structured and semantic web layouts with responsive design principles and futuristic UI architecture.",

        tags:
            ["Semantic", "Responsive", "Modern UI"]

    },

    css: {

        title: "CSS3",

        description:
            "Creating futuristic UI designs, glassmorphism interfaces, animations and responsive layouts.",

        tags:
            ["Animations", "Responsive", "Glassmorphism"]

    },

    js: {

        title: "JavaScript",

        description:
            "Developing dynamic and interactive web experiences using modern JavaScript logic and animations.",

        tags:
            ["DOM", "Animations", "Logic"]

    },

    react: {

        title: "React",

        description:
            "Building reusable component-based frontend applications with modern UI systems.",

        tags:
            ["Components", "SPA", "Frontend"]

    },

    php: {

        title: "PHP",

        description:
            "Creating backend systems, authentication modules and dynamic database-driven applications.",

        tags:
            ["Backend", "Sessions", "MySQL"]

    },

    tensorflow: {

        title: "TensorFlow",

        description:
            "Building intelligent AI and machine learning systems using neural networks and prediction models.",

        tags:
            ["AI", "CNN", "Prediction"]

    }

};


// =========================
// SKILL INTERACTION
// =========================


const skillNodes =
    document.querySelectorAll(".skill-node");

const skillTitle =
    document.getElementById("skill-title");

const skillDescription =
    document.getElementById("skill-description");

const tagsContainer =
    document.querySelector(".skill-tags");

skillNodes.forEach(node => {

    node.addEventListener("click", () => {

        // REMOVE ACTIVE CLASS

        skillNodes.forEach(n => {
            n.classList.remove("active");
        });

        // ADD ACTIVE CLASS

        node.classList.add("active");

        // GET SKILL NAME

        const skill =
            node.dataset.skill;

        console.log(skill);

        // GET DATA

        const data =
            skillData[skill];

        if (skillTitle) {
            // CHANGE TITLE
            skillTitle.textContent = data.title;
        }

        if (skillDescription) {
            // CHANGE DESCRIPTION
            skillDescription.textContent = data.description;
        }

        if (tagsContainer) {
            // CHANGE TAGS
            tagsContainer.innerHTML = "";
            data.tags.forEach(tag => {
                const span = document.createElement("span");
                span.textContent = tag;
                tagsContainer.appendChild(span);
            });
        }

    });

});
// =========================
// PROJECT DATA
// =========================

const projects = {

    estore: {

        title:
            "AI Placement Portal",

        description:
            "An AI-powered placement portal that helps students connect with job opportunities using smart recommendations, resume analysis and skill-based matching..",

        image:
            "assets/images/projects/codenova.jpeg",

        tags:
            ["PHP", "MySQL", "Frontend"],

        // LIVE DEMO LINK

        demo:
            "assets/videos/codenova.mp4",

        // GITHUB LINK

        github:
            "https://github.com/Raj-Sawant/Student2Job"
    },

    crop: {

        title:
            "AI Crop Disease Prediction",

        description:
            "An AI-powered CNN system that predicts crop diseases using image classification and machine learning.",

        image:
            "assets/images/projects/fasalsurkhsha.png",

        tags:
            ["TensorFlow", "CNN", "AI/ML"],

        demo:
            "http://fasalsurkshhaweb.netlify.app",

        github:
            "https://github.com/sourav689/Fasal---Suraksha"
    },

    SkinSense: {

        title:
            "AI Powerd Skin Analysis and Management System",

        description:
            "SkinSense is an AI-powered skin analysis platform that detects skin conditions and provides smart skincare recommendations using image processing and machine learning.",

        image:
            "assets/images/projects/skinsense.png",

        tags:
            ["Python", "TensorFlow", "AI"],

        demo:
            "https://skinsense-clz1.onrender.com",

        github:
            "https://github.com/mikaelguillin/skinsense"
    }

};


// =========================
// OPEN MODAL
// =========================

function openProject(projectName) {

    const project =
        projects[projectName];

    // TITLE

    document.getElementById(
        "modal-title"
    ).textContent =
        project.title;

    // DESCRIPTION

    document.getElementById(
        "modal-description"
    ).textContent =
        project.description;

    // IMAGE

    document.getElementById(
        "modal-image"
    ).src =
        project.image;

    // TAGS

    const tagsContainer =
        document.getElementById(
            "modal-tags"
        );

    tagsContainer.innerHTML = "";

    project.tags.forEach(tag => {

        tagsContainer.innerHTML +=
            `<span>${tag}</span>`;

    });

    // LIVE DEMO LINK

    document.getElementById(
        "live-demo"
    ).href =
        project.demo;

    // GITHUB LINK

    document.getElementById(
        "github-link"
    ).href =
        project.github;

    // OPEN MODAL

    document.getElementById(
        "projectModal"
    ).classList.add("active");

}


// =========================
// CLOSE MODAL
// =========================

function closeProject() {

    document.getElementById(
        "projectModal"
    ).classList.remove("active");

}
// =========================
// LOADER
// =========================

window.addEventListener("load", () => {

    const loader =
        document.querySelector(".loader");

    setTimeout(() => {

        loader.classList.add("hide");

    }, 3200);
    // =========================
    // CLOSE WHEN CLICK OUTSIDE
    // =========================

    window.addEventListener("click", (e) => {

        const modal =
            document.getElementById(
                "projectModal"
            );

        if (e.target === modal) {

            closeProject();
        }

    });


    // =========================
    // CLOSE WITH ESC KEY
    // =========================

    document.addEventListener(
        "keydown",
        (e) => {

            if (e.key === "Escape") {

                closeProject();
            }

        });

});
/* =========================
   CONTACT FORM
========================= */

const form =
    document.getElementById("contact-form");

const successMessage =
    document.getElementById("successMessage");

form.addEventListener("submit",
    async function (e) {

        e.preventDefault();

        const formData =
            new FormData(form);

        const response =
            await fetch(
                "https://formspree.io/f/mqenvowd",
                {

                    method: "POST",

                    body: formData,

                    headers: {

                        Accept: "application/json"
                    }
                }
            );

        if (response.ok) {

            successMessage.classList.add("show");

            form.reset();

            setTimeout(() => {

                successMessage.classList.remove("show");

            }, 4000);
        }
    });
// =========================
// MOBILE NAVBAR
// =========================

const menuToggle =
    document.querySelector(".menu-toggle");

const navLinks =
    document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");
});

// CLOSE MOBILE MENU ON LINK CLICK

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");
    });
});
// =========================
// CUSTOM CURSOR
// =========================

const cursor =
    document.querySelector(".cursor");

const cursorDot =
    document.querySelector(".cursor-dot");

window.addEventListener("mousemove", (e) => {

    // Move main cursor
    cursor.style.left =
        e.clientX + "px";

    cursor.style.top =
        e.clientY + "px";

    // Move dot
    cursorDot.style.left =
        e.clientX + "px";

    cursorDot.style.top =
        e.clientY + "px";

});

// HOVER EFFECT

document.querySelectorAll("a, button, .btn").forEach(el => {

    el.addEventListener("mouseenter", () => {

        cursor.classList.add("hover");

        cursorDot.classList.add("hover");
    });

    el.addEventListener("mouseleave", () => {

        cursor.classList.remove("hover");

        cursorDot.classList.remove("hover");
    });
});