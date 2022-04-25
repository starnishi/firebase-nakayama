import { Vue } from 'vue'
import App from './App.vue'
import firebase from 'firebase'

console.log("vue:" + Vue)

Vue.config.productionTip = false

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDmuW666ttrAozcVD2Es0r_28j5Sc6u7Zs",
    authDomain: "chat-app-f8b1c.firebaseapp.com",
    databaseURL: "https://chat-app-f8b1c-default-rtdb.firebaseio.com",
    projectId: "chat-app-f8b1c",
    storageBucket: "chat-app-f8b1c.appspot.com",
    messagingSenderId: "726013919822",
    appId: "1:726013919822:web:444eb92625a09d6e12391f"
};
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
    el: '#app',
    components: { App },
    template: '<App/>'
})
