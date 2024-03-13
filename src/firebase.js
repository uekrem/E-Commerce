import { initializeApp } from "firebase/app";
import toast from "react-hot-toast";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB0sXHnrlY4eXnW3X9dOUhkBHKjOiTo4H8",
  authDomain: "myecommerce-1dd77.firebaseapp.com",
  projectId: "myecommerce-1dd77",
  storageBucket: "myecommerce-1dd77.appspot.com",
  messagingSenderId: "111688240978",
  appId: "1:111688240978:web:ed77d7dc3142a80393348b"
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