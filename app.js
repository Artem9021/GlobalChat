

const firebaseConfig = {
	apiKey: "AIzaSyAHKgDIS_phtBzaZg3u2VZqHuTN_QmMfJI",
	authDomain: "fir-chat-e85ad.firebaseapp.com",
	databaseURL: "https://fir-chat-e85ad.firebaseio.com",
	projectId: "fir-chat-e85ad",
	storageBucket: "fir-chat-e85ad.appspot.com",
	messagingSenderId: "266794827210",
	appId: "1:266794827210:web:125446662fa0b2c77be333",
	measurementId: "G-6GRRBM1H39"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


name = "User"

function sendMessage () {
	// function to send a message into the database
	let message = document.querySelector(".message").value;
	message = message.replace("<", "[Invalid Character]");
	message = message.replace(">", "[Invalid Character]");

	
		firebase.database().ref("messages").push().set({
			"sender":name,
			"message":message

		})
	document.querySelector(".message").value = "";	

	return false;
}

function login () {
	//console.log("function")
	name = document.querySelector(".login-form").value;
	name = name.replace("<", "[Invalid Character]");
	name = name.replace(">", "[Invalid Character]");
	if (name.length > 20){
		name = name.slice(0, 20)
	}
	document.querySelector(".username").textContent = name;
	document.querySelector(".login").classList.add("slide-up");
	return false; 
}

firebase.database().ref("messages").on("child_added", (snapshot) => {
	let html = document.querySelector(".messages").innerHTML;
	document.querySelector(".messages").innerHTML = `<li><i class="fa fa-user-circle"></i><span class="message-text">${snapshot.val().sender}: ${snapshot.val().message} </span></li>` + html;
})

