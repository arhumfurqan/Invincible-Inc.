// Navigation bar effects on scroll
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});



// Services section - Modal
const serviceModals = document.querySelectorAll(".service-modal");
const learnMoreBtns = document.querySelectorAll(".learn-more-btn");
const modalCloseBtns = document.querySelectorAll(".modal-close-btn");

const openModal = function (modalIndex) {
    serviceModals[modalIndex].classList.add("active");
};

learnMoreBtns.forEach((learnMoreBtn, i) => {
    learnMoreBtn.addEventListener("click", () => {
        openModal(i);
    });
});

modalCloseBtns.forEach((modalCloseBtn) => {
    modalCloseBtn.addEventListener("click", () => {
        serviceModals.forEach((modalView) => {
            modalView.classList.remove("active");
        });
    });
});


//Portfolio section - Modal
const portfolioModals = document.querySelectorAll(".portfolio-model"); // Correct class name
const imgCards = document.querySelectorAll(".img-card");
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");


const portfolioModal = function (modalIndex) {
    portfolioModals[modalIndex].classList.add("active");
};


imgCards.forEach((imgCard, i) => {
    imgCard.addEventListener("click", () => {
        portfolioModal(i); 
    });
});


portfolioCloseBtns.forEach((portfolioCloseBtn) => {
    portfolioCloseBtn.addEventListener("click", () => {
        portfolioModals.forEach((portfolioModalView) => {
            portfolioModalView.classList.remove("active");
        });
    });
});




// Website dark/light theme
const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    themeBtn.classList.toggle("sun");

    localStorage.setItem("saved-theme", getCurrentTheme());
    localStorage.setItem("saved-icon", getCurrentIcon());
});

const getCurrentTheme = () => 
    document.body.classList.contains("dark-theme") ? "dark" : "light";

const getCurrentIcon = () => 
    themeBtn.classList.contains("sun") ? "sun" : "moon";

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

if (savedTheme) {
    document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
    themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}





//Scroll to top button
const scrollTopBtn = document.querySelector(".scrollToTop-btn");


window.addEventListener("scroll", function () {
    scrollTopBtn.classList.toggle("active", window.scrollY > 500);
});


scrollTopBtn.addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});




// Navigation menu items active on page scroll
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const scrollY = window.scrollY;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const id = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            const link = document.querySelector(`.nav-items a[href*="${id}"]`);
            if (link) link.classList.add("active");
        } else {
            const link = document.querySelector(`.nav-items a[href*="${id}"]`);
            if (link) link.classList.remove("active");
        }
    });
});