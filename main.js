import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";

document.addEventListener("DOMContentLoaded", function () {
    const accordion = new Accordion(".faq-container", {
        duration: 300,
        showMultiple: false,
    });

    document.querySelector(".faq-btn").addEventListener("click", function () {
        this.classList.button("active");
    });
});
