var firebaseConfig = {
      apiKey: "AIzaSyCaGYJa_xLlJck5Yz2dLj6PXLl3Fl3ejQw",
      authDomain: "red-social-699e6.firebaseapp.com",
      projectId: "red-social-699e6",
      storageBucket: "red-social-699e6.appspot.com",
      messagingSenderId: "500317340657",
      appId: "1:500317340657:web:a6e0991fcc1ae99f7a3a50"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
//AÑADE TUS ENLACES DE FIREBASE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código

      //Final del código
      });});}
getData();
