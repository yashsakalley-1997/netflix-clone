import 
    {   
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        signOut,
        updateProfile
    } from "firebase/auth";
import { auth } from "./fireBase";


export const registerUser = async (email,password,name) =>{
    try{
        const userCredential = await createUserWithEmailAndPassword(auth,email,password);
        await updateProfile(userCredential,{
            displayName:name
        });
    }
    catch(error){
        throw error;
    }
}

export const loginUser = async (email,password) => {
    try{
        const userCredential = await signInWithEmailAndPassword(auth,email,password);
        return userCredential.user
    }
    catch(err){
        throw err;
    }
}

export const logOut = async () => {
    try{
        await signOut(auth);
    }
    catch(err){
        throw err;
    }
}