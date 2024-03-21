import { initializeApp } from "firebase/app";
import toast from "react-hot-toast";
import {sendEmailVerification, EmailAuthProvider, reauthenticateWithCredential, getAuth, createUserWithEmailAndPassword, onAuthStateChanged, updateProfile, updatePassword } from "firebase/auth";
import {store} from "./store.js";
import { userLogin, userLogOut } from "./stores/auth";
import { getDocs, getFirestore, collection, addDoc, onSnapshot, query, where, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { setFavorite } from "./stores/favorite.js";
import { setBasket } from "./stores/basket.js";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
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
        // await updateEmail(auth.currentUser, data.email)
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

export async function verifyProfile(){
    if(auth.currentUser.emailVerified)
        toast.success(`Email verified`);
    else{
        try{
            await sendEmailVerification(auth.currentUser);
            toast.success(`Verification sent to ${auth.currentUser.email} account`);
            return true;
        }catch(error){
            toast.error(error.message);
        }
    }
}

export async function addFavorite(data){
    try{
        await addDoc(collection(db, "favorite"), data);
        toast.success("Added successfully")
    }catch(error){
        toast.error(error.message)
    }
}

export async function addBasket(data){
    
    try {
        const querySnapshot = await getDocs(collection(db, 'basket'));
        for (let i = 0; i < querySnapshot.docs.length; i++) {
            const doc = querySnapshot.docs[i];
            const docRef = doc.ref;
            if (doc.data().data.id === data.data.id){
                await updateDoc(docRef, {count: doc.data().count + 1});
                toast.success("Added successfully")
                return;
             }
        }
    } catch (error) {
        toast.error(error.message)
    }

    try{
        await addDoc(collection(db, "basket"), data);
        toast.success("Added successfully")
    }catch(error){
        toast.error(error.message)
    }
}

export async function deleteFavorite(id){
    try{
        await deleteDoc(doc(db, "favorite", id));
        toast.success("Deleted successfully")
    }catch(error){
        toast.error(error.message)
    }
}

export async function deleteBasket(id){
    try{
        await deleteDoc(doc(db, "basket", id));
        toast.success("Deleted successfully")
    }catch(error){
        toast.error(error.message)
    }
}

export async function countDecrease(data){
    try {
        const querySnapshot = await getDocs(collection(db, 'basket'));
        for (let i = 0; i < querySnapshot.docs.length; i++) {
            const doc = querySnapshot.docs[i];
            const docRef = doc.ref;
            if (doc.data().data.id === data.data.id && doc.data().count > 1){
                await updateDoc(docRef, {count: doc.data().count - 1});
                toast.success("Deleted successfully")
            }
        }
    } catch (error) {
        toast.error(error.message)
    }
}

onAuthStateChanged(auth, (user) => {
    if (user) {
        // store.dispatch(userLogin({
        //     user: user,
        // }));
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
    } //else {
    //     store.dispatch(userLogOut())
    // }
  });


export default app;