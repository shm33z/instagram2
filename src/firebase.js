import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC6pN363857llpKBPW-uKuYdlMrrtzzVIM",
  authDomain: "instagram-clone-138dc.firebaseapp.com",
  projectId: "instagram-clone-138dc",
  storageBucket: "instagram-clone-138dc.appspot.com",
  messagingSenderId: "204797461769",
  appId: "1:204797461769:web:1f304a44eb9518e12a7fd8",
  measurementId: "G-L4DJEB26XZ",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
