import tmi from 'tmi.js';

const client = new tmi.Client({
    channels: ['axkuro'],
});

client.connect();

client.on(
    'message',
    async (_channel: string, tags: object, message: string, self: boolean) => {
        if (self) return;
        const chatBox = document.getElementById('chat-box');
        const chatMessage = document.createElement('div');
        const chatInfo = document.createElement('div');
        chatMessage.classList.add('chat-message');
        chatInfo.classList.add('chat-info');
        const username = document.createElement('p');
        username.classList.add('username');
        // @ts-ignore
        username.textContent = tags['display-name'];
        const messageContent = document.createElement('p');
        messageContent.classList.add('message');
        messageContent.textContent = message;
        chatInfo.appendChild(username);
        chatInfo.appendChild(messageContent);
        if (chatBox) {
            chatMessage.appendChild(chatInfo);
            chatBox.appendChild(chatMessage);
            chatBox.scrollTop = chatBox.scrollHeight;
        }
    }
);
