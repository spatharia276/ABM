import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBLyTx_17Znwhf8W__fG2ZE_qieZ_q_rvs",
  authDomain: "backend-utube.firebaseapp.com",
  projectId: "backend-utube",
  storageBucket: "backend-utube.appspot.com",
  messagingSenderId: "447506485287",
  appId: "1:447506485287:web:2f90066d933b466ebf7e02",
  measurementId: "G-YPDN7B1TE1"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
