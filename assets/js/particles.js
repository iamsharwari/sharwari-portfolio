particlesJS("particles-js", {

    particles: {

        number: {
            value: 70
        },

        color: {
            value: "#00f7ff"
        },

        shape: {
            type: "circle"
        },

        opacity: {
            value: 0.5
        },

        size: {
            value: 3
        },

        move: {
            enable: true,
            speed: 1
        },

        line_linked: {
            enable: true,
            distance: 150,
            color: "#00f7ff",
            opacity: 0.2,
            width: 1
        }

    },

    interactivity: {

        detect_on: "canvas",

        events: {

            onhover: {
                enable: true,
                mode: "grab"
            },

            onclick: {
                enable: true,
                mode: "push"
            }

        }

    }

});