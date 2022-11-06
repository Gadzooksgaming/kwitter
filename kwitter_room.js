
const firebaseConfig = {
      apiKey: "AIzaSyBFQt5Ta6flNO_onVp29R710uI6bFnbUDg",
      authDomain: "kwitter-b3b53.firebaseapp.com",
      projectId: "kwitter-b3b53",
      storageBucket: "kwitter-b3b53.appspot.com",
      messagingSenderId: "702659334656",
      appId: "1:702659334656:web:a90cdcdd891341e1e6bee5",
      measurementId: "G-YBWK12ZR2J"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);


    user_name = localStorage.getItem("user_name");
    document.getElementById("username").innerHTML="Hello"+ user_name ;

function redirectToRoomName(name){
localStorage.setItem("room_name",name);
window.location="kwitterpage.html";
}

function addRoom(){
      room_name=document.getElementById("room_name").ariaValueMax;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      Room_names=childKey;
      row="<div class='room_name' id= "+Room_names+"onclick='redirectToRoomName(this.id)>'"+Room_names+"</div><hr>"
      document.getElementById("output").innerHTML+= row;

      
      });});}
getData();


function logout(){
      localStorage.removeItem("user_name");
      window.location ="index.html";
}