import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBJ0PD-Vc4zHQ0CtTPFes7fEGndsUvU0mE',
  authDomain: 'vue-authentication-fe1ac.firebaseapp.com',
  projectId: 'vue-authentication-fe1ac',
  storageBucket: 'vue-authentication-fe1ac.appspot.com',
  messagingSenderId: '887786287022',
  appId: '1:887786287022:web:249f6a37b9513b28cd623f',
};

firebase.initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app');
