document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling function
    window.scrollToSection = function (id) {
        document.getElementById(id).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    };

    // Intersection Observer for section animations
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Change background color dynamically on scroll
    const colors = ["#ffadad", "#ffd6a5", "#fdffb6", "#caffbf", "#9bf6ff"];
    window.addEventListener("scroll", () => {
        let index = Math.floor(window.scrollY / window.innerHeight);
        document.body.style.backgroundColor = colors[index % colors.length];
    });

    // Highlight active navigation button
    const buttons = document.querySelectorAll("nav button");
    window.addEventListener("scroll", () => {
        let currentSection = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                currentSection = section.id;
            }
        });

        buttons.forEach(button => {
            button.classList.remove("active");
            if (button.getAttribute("onclick").includes(currentSection)) {
                button.classList.add("active");
            }
        });
    });
});
