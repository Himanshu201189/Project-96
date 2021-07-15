//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyChc9Msgj6tWrhWVHn9_1WQKJfoVX1DPDo",
    authDomain: "kwitter-app-751d1.firebaseapp.com",
    databaseURL: "https://kwitter-app-751d1-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-751d1",
    storageBucket: "kwitter-app-751d1.appspot.com",
    messagingSenderId: "511849268058",
    appId: "1:511849268058:web:d4ab65bce989065eb36963",
    measurementId: "G-C3PK27X8E6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name"); document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
      purpose : "adding user"
  });
  localStorage.setItem("room name", room_name);
  window.location= "kwitter_page.html";
}
function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room name", name);
    window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
      console.log("room")
    //End code
    });});}
getData();
