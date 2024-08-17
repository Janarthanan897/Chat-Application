// scripts.js

let isSender = true; // Boolean to keep track of the current role

function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const chatWindow = document.getElementById('chat-window');
    const messageText = messageInput.value;

    if (messageText.trim() === '') {
        return;
    }

    // Create message element
    const message = document.createElement('div');
    message.classList.add('message');
    
    if (isSender) {
        message.classList.add('sender');
    } else {
        message.classList.add('receiver');
    }
    
    message.textContent = messageText;
    chatWindow.appendChild(message);

    // Scroll to the bottom of the chat window
    chatWindow.scrollTop = chatWindow.scrollHeight;

    // Clear the input
    messageInput.value = '';
}

function switchRole() {
    isSender = !isSender;
    const currentRoleImg = document.getElementById('current-role-img');
    const currentRoleName = document.getElementById('current-role-name');
    
    if (isSender) {
        currentRoleImg.src = 'superman.jpg';
        currentRoleName.textContent = 'Superman';
    } else {
        currentRoleImg.src = 'batman.jpg';
        currentRoleName.textContent = 'Batman';
    }
}
