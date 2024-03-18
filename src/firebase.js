import { initializeApp } from "firebase/app";
import toast from "react-hot-toast";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export const register = async (email, password) => {
    try{
        const { user } = await createUserWithEmailAndPassword(auth, email, password);
        toast.success('Successfully register')
        return user;
    } catch(error){
        toast.error(error.message);
    }
}

export const login = async (email, password) => {
    try{
        const { user } = await signInWithEmailAndPassword(auth, email, password);
        toast.success('Successfully login')
        return user;
    } catch(error){
        toast.error(error.message);
    }
}

export const logOut = async (email, password) => {
    try{
        signOut(email, password)
        toast.success('Successfully exited')
        return true;
    } catch(error){
        toast.error(error.message);
    }
}

export default app;
