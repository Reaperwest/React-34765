import { initializeApp } from "firebase/app";

import {
  getFirestore,
  collection,
  doc,
  getDocs,
  getDoc,
  query,
  where,
  addDoc
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDnjTlTOmXdHQfMwjXPRtCjQVC79xeiGQU",
  authDomain: "react34765-22f2b.firebaseapp.com",
  projectId: "react34765-22f2b",
  storageBucket: "react34765-22f2b.appspot.com",
  messagingSenderId: "946238748686",
  appId: "1:946238748686:web:60840d289f1347920c245f"
};

//1. Inicializar Firebase e inicializar FIRESTORE
const FirebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(FirebaseApp);

export async function getGames() {
  const collectionRef = collection(db, "games");
  let results = await getDocs(collectionRef);

  let dataGames = results.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });

  return dataGames;
}

export async function getGame(idParams) {
  const docRef = doc(db, "games", idParams);
  const docResult = await getDoc(docRef);
  if (docResult.exists()) {
    return { id: docResult.id, ...docResult.data() };
  }
}

export async function getGamesByCategory(idCategoryParams) {
  const collectionRef = collection(db, "games");

  const queryCat = query(
    collectionRef,
    where("category", "==", idCategoryParams)
  );

  let results = await getDocs(queryCat);

  let datagames = results.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });

  return datagames;
}

export async function createBuyOrder(orderData){
  const collectionRef = collection(db, "orders");
  let respuesta = await addDoc(collectionRef, orderData)
  return respuesta.id;
}

export default FirebaseApp;