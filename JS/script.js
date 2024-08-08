// script.js
document.addEventListener("DOMContentLoaded", () => {
    const skillsSection = document.getElementById("skills");
    const skillBars = document.querySelectorAll(".skill-bar-fill");

    const animateSkills = () => {
        skillBars.forEach(bar => {
            const percentage = bar.getAttribute("data-percentage");
            bar.style.width = percentage + "%";
        });
    };

    const handleScroll = () => {
        const skillsTop = skillsSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (skillsTop < windowHeight) {
            animateSkills();
            window.removeEventListener("scroll", handleScroll);
        }
    };

    window.addEventListener("scroll", handleScroll);
});


/* ======================== typing animation ==========================*/
var typed = new Typed(".typing",{
    strings:["FRESHER.","POST GRADUATED.","WEB DEVELOPER.","JOB SEEKER."],
        typeSpeed:100,
        BackSpeed:60,
        loop:true
})
