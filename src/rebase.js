import Rebase from 're-base'
import firebase from 'firebase/app';
import 'firebase/database';

var app = firebase.initializeApp({
  apiKey: "AIzaSyDHEtobuwTFHOc_Oz0gL-_EcYvZpXsxDq4",
  authDomain: "montanha-transaction.firebaseapp.com",
  databaseURL: "https://montanha-transaction.firebaseio.com",
  projectId: "montanha-transaction",
});

var db = firebase.database(app);
var base = Rebase.createClass(db);

export default base;
