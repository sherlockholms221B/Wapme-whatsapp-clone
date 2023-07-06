import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: 'AIzaSyCGnG9DzIlisZE6dNTzZpscLEUPrQbNwi8',
  authDomain: 'wapme-whatsapp-clone.firebaseapp.com',
  projectId: 'wapme-whatsapp-clone',
  storageBucket: 'wapme-whatsapp-clone.appspot.com',
  messagingSenderId: '129892687070',
  appId: '1:129892687070:web:80881ed5ee96a80bda364f',
  measurementId: 'G-0LM3WZZ1QG',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
