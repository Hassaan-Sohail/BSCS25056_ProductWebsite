document.addEventListener("DOMContentLoaded", function () {
   if (document.title.includes("Home")) {
        alert("Welcome to Tick & Style!");
        const yearEl = document.getElementById("year");
        if (yearEl) {
            yearEl.textContent =  `${new Date().getFullYear()} Tick & Style`;
        }
    }
});
const productStock = {
    "classic": true,
    "royal": true,
    "midnight": false,
    "sport": true,
    "luxury": true
};
function checkStock(productId) {
    if (productStock[productId]) {
        alert("This product is in stock!");
    } else {
        alert("Sorry, this product is out of stock.");
    }
}
function validateForm() {
    const name = document.getElementById("name")?.value.trim();
    const email = document.getElementById("email")?.value.trim();
    const message = document.getElementById("message")?.value.trim();
    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return false;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}
function sendMessage() {
    let input = document.getElementById("userInput");
    let chatWindow = document.getElementById("chatWindow");
    let message = input.value.trim();

    if (message === "") return;
    let userMsg = document.createElement("div");
    userMsg.className = "user-message";
    userMsg.innerText = message;
    chatWindow.appendChild(userMsg);

    let botMsg = document.createElement("div");
    botMsg.className = "bot-message";
    botMsg.innerText = getBotResponse(message.toLowerCase());
    chatWindow.appendChild(botMsg);
    chatWindow.scrollTop = chatWindow.scrollHeight;
    input.value = "";
}

function getBotResponse(userText) {
    if (userText.includes("hello") || userText.includes("hi")) {
        return "Hi there! Welcome to Tick & Style.";
    } else if (userText.includes("products")) {
        return "We offer watches like Classic Silver, Royal Gold, Midnight Black, Sport Chrono, and Luxury Diamond.";
    } else if (userText.includes("price")) {
        return "Our prices range from Rs. 15,000 to Rs. 35,000.";
    } else if (userText.includes("location")) {
        return "We are located in Lahore, Pakistan.";
    } else if (userText.includes("email")) {
        return "You can reach us at bscs25056@itu.edu.pk.";
    } else if (userText.includes("contact")) {
        return "Our contact number is +92 301 4085075.";
    } else if (userText.includes("shop")) {
        return "Visit our Products page to explore and shop now!";
    } else {
        return "Sorry, I didn’t understand that. Please ask about products, prices, or contact info.";
    }
}
