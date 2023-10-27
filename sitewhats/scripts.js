const chats = {
    "Amigo 1": [
        { type: "received", text: "Olá! Como você está?" },
        { type: "sent", text: "Estou bem, e você?" }
    ],
    "Amigo 2": [],
    "Amigo 3": []
};

let currentChat = "Amigo 1";

function changeChat(friendName) {
    currentChat = friendName;
    const chatTitle = document.getElementById("chat-title");
    const messagesDiv = document.getElementById("messages");

    chatTitle.textContent = friendName;
    messagesDiv.innerHTML = "";

    chats[friendName].forEach(message => {
        const messageDiv = document.createElement("div");
        messageDiv.className = `message ${message.type}`;
        messageDiv.textContent = message.text;
        messagesDiv.appendChild(messageDiv);
    });
}

function sendMessage() {
    const input = document.getElementById("message-input");
    if (input.value.trim() === "") return;

    chats[currentChat].push({ type: "sent", text: input.value.trim() });
    input.value = "";
    changeChat(currentChat);
}

// Adicionando ouvinte de evento para detectar a tecla "Enter"
document.getElementById("message-input").addEventListener("keydown", function(event) {
    if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        sendMessage();
    }
});

// Carregar chat inicial
changeChat("Amigo 1");