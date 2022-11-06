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

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref (room_name).push({
            name:user_name,
            message:msg,
            like:0
      });     
     document.getElementById("msg").value="";
}