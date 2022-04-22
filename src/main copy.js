import firebase from 'firebase'
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

// Initialize Firebase
var config = {
  apiKey: "AIza....",
  authDomain: "YOUR_APP.firebaseapp.com",
  databaseURL: "https://YOUR_APP.firebaseio.com",
  projectId: "YOUR_APP",
  storageBucket: "YOUR_APP.appspot.com",
  messagingSenderId: "123456789"
}
firebase.initializeApp(config)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})