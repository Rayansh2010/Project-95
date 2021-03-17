//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCBwbDokEA7KLkBd3O0vm-y5B7RHZzsxc8",
      authDomain: "social-kwitter.firebaseapp.com",
      databaseURL: "https://social-kwitter-default-rtdb.firebaseio.com",
      projectId: "social-kwitter",
      storageBucket: "social-kwitter.appspot.com",
      messagingSenderId: "347943958525",
      appId: "1:347943958525:web:0dfeb8d8041c9a88e30b94"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    var Username = localStorage.getItem("username");
    document.getElementById("username").innerHTML = "Welcome " + Username;
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();


function addRoom() {
      added_room_name = document.getElementById("roommade").value;

      firebase.database().ref("/").child(added_room_name).update({
            roomis: "roomnameadded"
      })

      localStorage.setItem("Addedroom", added_room_name);

      document.getElementById("roommade").value = "";

      row = "<div class='room_name' id="+added_room_name+"onclick='redirectToRoomName(this.id)' >#"+added_room_name+"</div><hr>";

      document.getElementById("output").innerHTML += row;

      window.location("");
}