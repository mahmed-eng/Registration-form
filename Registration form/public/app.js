// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import { getDatabase, ref, set, onChildAdded, } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBV6zcIlkmM4fd9a4GCI0k2DR5K0ne6W7Q",
    authDomain: "registrationdb-9c813.firebaseapp.com",
    projectId: "registrationdb-9c813",
    storageBucket: "registrationdb-9c813.appspot.com",
    messagingSenderId: "232481890490",
    appId: "1:232481890490:web:02f1d7d8f238d5add82283",
    measurementId: "G-MG0WM4Q612"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= Custom =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//_______________________________________________________________________________________________________________________

// Getting elements from html

var firstName = document.getElementById("fname");
var lastName = document.getElementById("lname");
var email = document.getElementById("mail");
var number = document.getElementById("no");
var password = document.getElementById("pass");
var course = document.getElementById("course")
var qualification = document.getElementById("qualif");
var par = document.getElementById("par");


window.sub = function() {
    var obj = {
        field: firstName.value,
        field2: lastName.value,
        field3: email.value,
        field4: number.value,
        field5: password.value,
        field6: course.value,
        field7: qualification.value,


    };
    console.log(obj);
    const database = getDatabase();
    var key = Math.random().toString().slice(2);
    console.log(key);

    obj.id = Math.random().toString().slice(2);

    const dataRef = ref(database, `tasks/${obj.id}/`);
    set(dataRef, obj);



};


//Getting Data
var parent = document.getElementById("parent");

function getData() {
    const database = getDatabase();
    var dataList = [];
    const dataRef = ref(database, "tasks/");
    onChildAdded(dataRef, function(dt) {
        dataList.push(dt.val());
        console.log(dataList);
        parent.innerHTML = "";
        for (var i = 0; i < dataList.length; i++) {
            parent.innerHTML += `<li>First Name: ${dataList[i].field} <br> Last Name: ${dataList[i].field2} <br> Email: ${dataList[i].field3} <br> Number: ${dataList[i].field4} <br> Password: ${dataList[i].field5} <br> Course: ${dataList[i].field6} <br> Qualification: ${dataList[i].field7} </li>`;
        }
    });
}
getData();