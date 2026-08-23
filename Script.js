// =========================
// QURAN ACADEMY
// MOBILE MENU
// =========================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});


// =========================
// WHATSAPP FORM
// =========================

// IMPORTANT:
// Replace this number later with your Academy WhatsApp number.
// Use country code without + or spaces.
// Example Pakistan: 923076916893

const academyWhatsApp = "923076917893";


const admissionForm = document.getElementById("admissionForm");

admissionForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const studentName =
        document.getElementById("studentName").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const course =
        document.getElementById("course").value;

    const message =
        document.getElementById("message").value.trim();


    const whatsappMessage =
`Learn with Zaid Acadmey,

I would like to register for a course.

Student Name: ${studentName}
WhatsApp Number: ${phone}
Selected Course: ${course}

Message:
${message || "What you whant to learn."}

Please provide further details about the course and trial class.
JazakAllah Khair.`;


    const whatsappURL =
        `https://wa.me/${academyWhatsApp}?text=${encodeURIComponent(whatsappMessage)}`;


    window.open(whatsappURL, "_blank");

});
