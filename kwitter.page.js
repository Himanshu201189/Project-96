//YOUR FIREBASE LINKS
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

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
function send()
{
 msg = document.getElementById("msg").value;
 firebase.database().ref(room_name).push({
       name:user_name,
       message:msg,
       like:0
 });

 document.getElementById("msg").value = "";
}
//End code
      } });  }); }
getData();
