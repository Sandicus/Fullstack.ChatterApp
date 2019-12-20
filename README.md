# Micro Web Application - Prime 5 Chatter
#### Welcome to Prime 5 messenger web service! With Prime 5, you can:
	* Make groups
	* Show off your interests
	* Connect with friends
	* Send and recieve live messages to peers and groups alike!

_Designed by: Valentin Gheorghe, Mike Gray, Sandy Pham, Kwame L Warrick_

* **Objective** - To create an implementation of a small web service that allows users to message eachother along with other features such as creating group chats, ect.
* **Purpose** - To demonstrate the construction of a full-stacked web-application and makes it possible to open a two-way interactive communication session between the user's browser and a server.

<hr>

## Minimum viable features:  
* As a client, (not logged in) I
    * can send messages to a _peer_.
	* can view default channels
	* can view all accessible channels
	* can view messages live as they are received

## Running Application:

### Locally
##### 1.) Clone from dev
##### 2.) Run Spring application, wait until it finishes set up
##### 3.) On web browser go to http://localhost:8080/
##### 4.) A login box should appear where you can sign up
##### 5.) Now you can send messages real time in the chat server



### Live Demo
* Go to https://

## Authentication Endpoints:




## Message Endpoints:
@MessageMapping("/chat.register")
* Returns a message if a user joins the chat app. Ex: ("Sandy has joined!")

@MessageMapping("/chat.send")
* Returns a message a user enters in the text box and that message is saved in DB.

@MessageMapping("/chat.leave")
* Returns a message if user leaves the chat app. Ex: ("Valentin has left the chat")



