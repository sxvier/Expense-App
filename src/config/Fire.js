import firebase from 'firebase';



const config = {
    apiKey: "AIzaSyDhn5f1ZbcR0ChtmJ9CRyDnE3pejzT_MPs",
    authDomain: "expense-app-61338.firebaseapp.com",
    projectId: "expense-app-61338",
    storageBucket: "expense-app-61338.appspot.com",
    messagingSenderId: "577252244202",
    appId: "1:577252244202:web:84f364ac1cfe95b35e3593",
    measurementId: "G-WYS6NY9SF9"
}



const fire = firebase.initializeApp(config);

export default fire;