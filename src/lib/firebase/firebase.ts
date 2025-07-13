import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA-4Wrrd8BivYxInUeia0HQxJ3Hv6ro70Y",
  authDomain: "projectb23-app.firebaseapp.com",
  projectId: "projectb23-app",
  storageBucket: "projectb23-app.firebasestorage.app",
  messagingSenderId: "943835041715",
  appId: "1:943835041715:web:061c84a63b0589ddac05c6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);