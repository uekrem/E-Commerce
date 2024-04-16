import { initializeApp } from "firebase/app";
import toast from "react-hot-toast";
import { EmailAuthProvider, reauthenticateWithCredential, getAuth, createUserWithEmailAndPassword, onAuthStateChanged, updateProfile, updatePassword } from "firebase/auth";
import { store } from "./store.js";
import { getFirestore, collection, onSnapshot, query, where } from "firebase/firestore";
import { setBasket, setFavorite, setOrder } from "./stores/personalSpaces.js";
import { userLogin } from "./stores/auth.js";
import jsCookie from "js-cookie";

const firebaseConfig = {
  apiKey: "AIzaSyB0sXHnrlY4eXnW3X9dOUhkBHKjOiTo4H8",
  authDomain: "myecommerce-1dd77.firebaseapp.com",
  projectId: "myecommerce-1dd77",
  storageBucket: "myecommerce-1dd77.appspot.com",
  messagingSenderId: "111688240978",
  appId: "1:111688240978:web:ed77d7dc3142a80393348b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();


export const register = async (email, password, name) => {
    try{
        const { user } = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(user, { displayName: name });
        toast.success('Successfully register')
        return user;
    } catch(error){
        toast.error(error.message);
    }
}

export const update = async (data) => {
    try{
        await updateProfile(auth.currentUser, {displayName: data.displayName})
        toast.success('Successfully update');
    } catch(error){
        toast.error(error.message);
    }
}

export const resetPassword = async (currPass, newPass) => {
    const credential = EmailAuthProvider.credential(auth.currentUser.email, currPass);
    try{
        await reauthenticateWithCredential(auth.currentUser, credential);
        await updatePassword(auth.currentUser, newPass)
        toast.success('Successfully change password');
        return true;
    } catch(error){
        toast.error(error.message);
    }
}

onAuthStateChanged(auth, (user) => {
    if (user) {
        store.dispatch(userLogin({
            user: jsCookie.get("auth") !== undefined ? JSON.parse(jsCookie.get("auth")) : [] ,
            isAuthenticated:true,
        }));
        onSnapshot(query(collection(db, "favorite"), where("uid", '==', auth.currentUser.uid)), (doc) => {
            store.dispatch(
                setFavorite(
                    doc.docs.reduce((elements, element) => [...elements, {...element.data(), id:element.id}], [])
                )
            )
        })
        onSnapshot(query(collection(db, "basket"), where("uid", '==', auth.currentUser.uid)), (doc) => {
            store.dispatch(
                setBasket(
                    doc.docs.reduce((elements, element) => [...elements, {...element.data(), id:element.id}], [])
                )
            )
        })
        onSnapshot(query(collection(db, "ordering"), where("uid", '==', auth.currentUser.uid)), (doc) => {
            store.dispatch(
                setOrder(
                    doc.docs.reduce((elements, element) => [...elements, {...element.data(), id:element.id}], [])
                )
            )
        })
    }
});

export default app;