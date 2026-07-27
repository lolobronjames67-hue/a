//top buttons
document.getElementById("cornhub").addEventListener("click", function () {
    window.location.href="https://cornhub.website/";
});

// Card button
document.getElementById("cardBtn").addEventListener("click", function () {
    alert("Button clicked!");
});

// Form submission
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;

    document.getElementById("message").textContent =
        "Thank you, " + name + "! Your form has been submitted.";

    this.reset();
});