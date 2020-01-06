'use strict';

var usernamePage = document.querySelector('#username-page');
var chatPage = document.querySelector('#chat-page');
var newAccountPage = document.querySelector('#create-account-page');
var usernameForm = document.querySelector('#usernameForm');
var messageForm = document.querySelector('#messageForm');
var messageInput = document.querySelector('#message');
var messageArea = document.querySelector('#messageArea');
var connectingElement = document.querySelector('.connecting');
var sideBar = document.querySelector('#sidebar');
var channelArea = document.querySelector("#channellist");

var stompClient = null;
var username = null;
var password = null;
var channel = null;
var channelMessages = null;

var colors = [
    '#2196F3', '#32c787', '#00BCD4', '#ff5652',
    '#ffc107', '#ff85af', '#FF9800', '#39bbb0'
];

function connect(event) {
    username = document.querySelector('#name').value.trim();
    password = document.querySelector('#password').value;

    if(username && password) {
        usernamePage.classList.add('hidden');
        newAccountPage.classList.add('hidden');
        chatPage.classList.remove('hidden');
        sideBar.classList.remove('hidden');

        var socket = new SockJS('/prime5chatter');
        stompClient = Stomp.over(socket);

        stompClient.connect({}, onConnected, onError);
    }
    event.preventDefault();
}

function onConnected() {
    // Subscribe to the Public Topic
    stompClient.subscribe('/topic/public', onMessageReceived);
    stompClient.subscribe('/format/channels', getPublicChannels);
    stompClient.subscribe("/format/getMessages", getChannelMessages);

    channel = 'Public Channel 1';
    // Tell your username to the server
    stompClient.send("/app/chat.createUser",
        {},
        JSON.stringify({USER_NAME: username, USER_PWD: password})
    );
    stompClient.send("/app/chat.register",
        {},
        JSON.stringify({sender: username, type: 'JOIN'})
    );

    connectingElement.classList.add('hidden');
    stompClient.send("/app/chat.publicchannels");
    stompClient.send("/app/chat.getMessages", {}, JSON.stringify(channel));
}

function goToAccountCreation(event) {
    usernamePage.classList.add('hidden');
    newAccountPage.classList.remove('hidden');
    event.preventDefault();
}

function goToLogin(event) {
    newAccountPage.classList.add('hidden');
    usernamePage.classList.remove('hidden');
    event.preventDefault();
}

function createAccount(event) {
    username = document.querySelector('#newUsername').value.trim();
    password = document.querySelector('#newPassword').value;

    if (username && password) {
        usernamePage.classList.add('hidden');
        newAccountPage.classList.add('hidden');
        chatPage.classList.remove('hidden');
        sideBar.classList.remove('hidden');
        var socket = new SockJS('/prime5chatter');
        stompClient = Stomp.over(socket);

        stompClient.connect({}, onConnected, onError);
    }
    event.preventDefault();
}

function onError(error) {
    connectingElement.textContent = 'Could not connect to WebSocket server. Please refresh this page to try again!';
    connectingElement.style.color = 'red';
}


function send(event) {
    var messageContent = messageInput.value.trim();

    if(messageContent && stompClient) {
        var chatMessage = {
            sender: username,
            content: messageInput.value,
            type: 'CHAT',
            channel_name: channel
        };

        stompClient.send("/app/chat.send", {}, JSON.stringify(chatMessage));
        messageInput.value = '';
    }
    event.preventDefault();
}


function onMessageReceived(payload) {
    var message = JSON.parse(payload.body);

    console.log(message);

    var messageElement = document.createElement('li');

    if(message.type === 'JOIN') {
        messageElement.classList.add('event-message');
        message.content = message.sender + ' joined!';
    } else if (message.type === 'LEAVE') {
        messageElement.classList.add('event-message');
        message.content = message.sender + ' left!';
    } else {
        messageElement.classList.add('chat-message');

        var avatarElement = document.createElement('i');
        var avatarText = document.createTextNode(message.sender[0]);
        avatarElement.appendChild(avatarText);
        avatarElement.style['background-color'] = getAvatarColor(message.sender);

        messageElement.appendChild(avatarElement);

        var usernameElement = document.createElement('span');
        var usernameText = document.createTextNode(message.sender);
        usernameElement.appendChild(usernameText);
        messageElement.appendChild(usernameElement);



        var timestamp = document.createElement('time');
        timestamp.innerText = message.timestamp;
        messageElement.appendChild(timestamp)

    }

    var textElement = document.createElement('p');
    var messageText = document.createTextNode(message.content);
    textElement.appendChild(messageText);

    messageElement.appendChild(textElement);

    messageArea.appendChild(messageElement);
    messageArea.scrollTop = messageArea.scrollHeight;
}

function getPublicChannels(payload) {

    var channelArray = JSON.parse(payload.body);

    for(var i = 0; i < channelArray.length; i++) {
        var channel = channelArray[i];
        var channelElement = document.createElement('li');
        var linkElement = document.createElement('button');
        linkElement.innerHTML = channel.channel_name;
        linkElement.id = channel.channel_name;
        linkElement.onclick = function(){goToChannel(this.id)};
        channelElement.appendChild(linkElement);
        channelArea.appendChild(channelElement);
        channelArea.scrollTop = channelArea.scrollHeight;
    }

}

function goToChannel(channelName) {
    console.log("GO TO CHANNEL IS BEING CALLED");
    //testMessage("Going to another channel");
    channel = channelName;
    while(messageArea.firstChild) {
        messageArea.removeChild(messageArea.firstChild);
    }
    stompClient.send("/app/chat.getMessages", {}, JSON.stringify(channelName));
    //testMessage("We've moved to another channel");
}

function getChannelMessages(payload) {
    //testMessage("Getting channel messages");
    channelMessages = JSON.parse(payload.body);
    console.log(channelMessages.length);
    for(var i = channelMessages.length - 1; i >= 0; i--) {
        var currentMessage = channelMessages[i];
        retrievingMessages(currentMessage);
    }
    //testMessage("channel messages retrieved");

}

function getAvatarColor(messageSender) {
    var hash = 0;
    for (var i = 0; i < messageSender.length; i++) {
        hash = 31 * hash + messageSender.charCodeAt(i);
    }
    var index = Math.abs(hash % colors.length);
    return colors[index];
}

function testMessage(text){
    var message = {
        sender: username,
        content: text,
        type: 'CHAT',
        channel_name: channel
    };
    var messageElement = document.createElement('li');

    messageElement.classList.add('chat-message');

    var avatarElement = document.createElement('i');
    var avatarText = document.createTextNode(message.sender[0]);
    avatarElement.appendChild(avatarText);
    avatarElement.style['background-color'] = getAvatarColor(message.sender);

    messageElement.appendChild(avatarElement);

    var usernameElement = document.createElement('span');
    var usernameText = document.createTextNode(message.sender);
    usernameElement.appendChild(usernameText);
    messageElement.appendChild(usernameElement);



    var timestamp = document.createElement('time');
    timestamp.innerText = message.timestamp;
    messageElement.appendChild(timestamp);

    var textElement = document.createElement('p');
    var messageText = document.createTextNode(message.content);
    textElement.appendChild(messageText);

    messageElement.appendChild(textElement);

    messageArea.appendChild(messageElement);
    messageArea.scrollTop = messageArea.scrollHeight;

}

function retrievingMessages (message) {
    // console.log(message);
    console.log("RETRIEVING MESSAGES IN JAVASCRIPT");
    var messageElement = document.createElement('li');

    if(message.type === 'JOIN') {
        messageElement.classList.add('event-message');
        message.content = message.sender + ' joined!';
    } else if (message.type === 'LEAVE') {
        messageElement.classList.add('event-message');
        message.content = message.sender + ' left!';
    } else {
        messageElement.classList.add('chat-message');

        var avatarElement = document.createElement('i');
        var avatarText = document.createTextNode(message.sender[0]);
        avatarElement.appendChild(avatarText);
        avatarElement.style['background-color'] = getAvatarColor(message.sender);

        messageElement.appendChild(avatarElement);

        var usernameElement = document.createElement('span');
        var usernameText = document.createTextNode(message.sender);
        usernameElement.appendChild(usernameText);
        messageElement.appendChild(usernameElement);



        var timestamp = document.createElement('time');
        timestamp.innerText = message.timestamp;
        messageElement.appendChild(timestamp);

    }

    var textElement = document.createElement('p');
    var messageText = document.createTextNode(message.content);
    textElement.appendChild(messageText);

    messageElement.appendChild(textElement);

    messageArea.appendChild(messageElement);
    messageArea.scrollTop = messageArea.scrollHeight;
}

usernameForm.addEventListener('submit', connect, true);
newAccountPage.addEventListener('submit', createAccount, true);
messageForm.addEventListener('submit', send, true);

