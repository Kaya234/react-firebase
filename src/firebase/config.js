import firebase from 'firebase/app';
import 'firebase/firestore';
import { apiKey } from './apikey';

const firebaseConfig = apiKey


  // init firebase
firebase.initializeApp(firebaseConfig)

  // init services
const projectFirestore = firebase.firestore()

export { projectFirestore }