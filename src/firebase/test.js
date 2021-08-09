import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

const a = firestore.collection('users').doc('0YDaNGLBbOLd3WFUwOxq').collection('cardItems').doc('YJCrpGHOXHz1c7MZWw07');

const b = firestore.doc('/users/0YDaNGLBbOLd3WFUwOxq/cardItems/YJCrpGHOXHz1c7MZWw07');