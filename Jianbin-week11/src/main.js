import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'

const app = createApp(App)
app.use(PrimeVue, { theme: { preset: Aura } })
app.use(router)

app.mount('#app')

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDY8iOOr9SrU_joZvJAA9mfOsI1ewFAhNE',
  authDomain: 'jianbin-week7.firebaseapp.com',
  projectId: 'jianbin-week7',
  storageBucket: 'jianbin-week7.appspot.com',
  messagingSenderId: '146268298379',
  appId: '1:146268298379:web:a59bbc678d3e558880088e'
}

// Initialize Firebase
initializeApp(firebaseConfig)
