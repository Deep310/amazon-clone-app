import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyBZXBF-zUald5ia9mc0OdSnpdEwN9f71Ek',
	authDomain: 'clone-app-2b5b3.firebaseapp.com',
	projectId: 'clone-app-2b5b3',
	storageBucket: 'clone-app-2b5b3.appspot.com',
	messagingSenderId: '731533698282',
	appId: '1:731533698282:web:3cbe6694fea0db44d4a393',
	measurementId: 'G-ENSE16MPMM',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
