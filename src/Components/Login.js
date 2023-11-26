import { useRef, useState } from "react";

import validateInput from "../utils/validator";
import { netflixBgImg } from "../Constants/images";

import { loginUser, registerUser } from "../utils/auth";

import Header from "./Header";
import { useDispatch } from "react-redux";
import { setLoggedUser } from "../store/authSlice";
import { auth } from "../utils/fireBase";

const Login  = () =>{
    const dispatch = useDispatch();
    const [isSignInForm,toggleForm] = useState(true);
    const [error,setError] = useState("");
    const firstName = useRef(null);
    const userName = useRef(null);
    const password = useRef(null);
    const onFormSubmit = ()=>{
        const error = validateInput(
            isSignInForm,
            firstName?.current?.value
            ,userName.current.value,
            password.current.value)
        setError(error)
        if(!error){
            if(!isSignInForm){
                registerUser(firstName.current.value,userName.current.value,password.current.value).then((res)=>{
                    const {uid,email,displayName} = auth.currentUser;
                    dispatch(setLoggedUser({
                        uid:uid,
                        email:email,
                        displayName:displayName
                    }))
                 }).catch((err)=>{
                    setError(err.code+" "+err.message)
                 })
            }
            else if(isSignInForm){
                loginUser(userName.current.value,password.current.value).then((res)=>{
                }).catch((err)=>{
                    setError(err.code+" "+err.message)
                })
            }
        }
    }
    return (
        <div>
            <Header/>            
            <img
                className="absolute"
                src={netflixBgImg}
                alt="Netflix background"
            ></img>
            <form onSubmit={(e)=>e.preventDefault()} className="bg-black p-7 rounded-lg bg-opacity-80 absolute w-1/4 my-32 mx-auto right-0 left-0 text-white">
                <h1 className="font-bold py-4 text-3xl">{isSignInForm?"Sign In":"Sign Up"}</h1>
                {
                    !isSignInForm && (
                        <input 
                            type="text" 
                            ref={firstName}
                            placeholder="Full Name" 
                            className="p-4 my-4 w-full bg-gray-700 rounded-md"
                        />
                    )
                }
                <input 
                    type="text" 
                    ref={userName}
                    placeholder="Email" 
                    className="p-4 my-4 w-full bg-gray-700 rounded-md"
                />
                <input 
                    type="password" 
                    ref={password}
                    placeholder="Password" 
                    className="p-4 my-4 w-full bg-gray-700 rounded-md"
                />
                <button onClick={()=>onFormSubmit()} className="bg-red-700 rounded-md w-full p-4 my-6">{isSignInForm?"Sign In":"Sign Up"}</button>
                {error && <span className="text-red-500 text-lg py-4">{error}</span>}
                <p className="cursor-pointer" onClick={()=>toggleForm(!isSignInForm)}>
                    {!isSignInForm?"Already Registered? Sign In Now.":"New to Netflix? Sign Up Now."}
                </p>
            </form>
        </div>
    )
}

export default Login;