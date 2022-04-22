import { initializeApp } from 'firebase/app'
import { createApp } from 'vue'
import App from './App.vue'

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCfIk0qNhveTIazi3CpbZGpERzzL1xlUZo",
    authDomain: "tutorial-nakayama.firebaseapp.com",
    databaseURL: "https://tutorial-nakayama-default-rtdb.firebaseio.com",
    projectId: "tutorial-nakayama",
    storageBucket: "tutorial-nakayama.appspot.com",
    messagingSenderId: "454801312535",
    appId: "1:454801312535:web:0fd89ec3801488a4324552",
    measurementId: "G-RCW2ZKTNG9"
};

initializeApp(firebaseConfig)

createApp(App).mount('#app')
