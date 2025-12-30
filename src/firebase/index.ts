import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCjcdLuVGj-jkIBVlH1hhQTBTMoLnSHg-M',
  authDomain: 'sochr-8f13f.firebaseapp.com',
  projectId: 'sochr-8f13f',
  storageBucket: 'sochr-8f13f.firebasestorage.app',
  messagingSenderId: '598818645802',
  appId: '1:598818645802:web:2e13287e5301c57517a053',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
