// Function to toggle the chatbox visibility
function toggleChat() {
    const chatbox = document.getElementById("chatbox");

    if (chatbox) {
        chatbox.style.display = chatbox.style.display === "flex" ? "none" : "flex";
    } else {
        console.error("Chatbox not found!");
    }
}

// Function to send the message
function sendMessage() {
    const input = document.getElementById("chatInput");
    const messages = document.getElementById("chatMessages");

    if (input.value.trim() !== "") {
        messages.innerHTML += `<p><b>You:</b> ${input.value}</p>`;
        input.value = "";
    }
}

// Add event listener to the chatbot button after the DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    const chatbotButton = document.getElementById('botButton');

    if (chatbotButton) {
        chatbotButton.addEventListener('click', toggleChat);
    } else {
        console.error('Chatbot button not found!');
    }
});
