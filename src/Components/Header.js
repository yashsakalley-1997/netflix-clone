import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { onAuthStateChanged } from "firebase/auth";
import { netflixLogo,netflixUserAvatar } from "../Constants/images"
import { logOut } from "../utils/auth";
import { auth } from "../utils/fireBase";

import { setLoggedUser,removedLoggedUser } from "../store/authSlice";
const Header = () => {
    const dispatch = useDispatch();
    const user = useSelector((store)=>store?.auth?.user);
    const navigate = useNavigate();
    const logOutHandler = ()=>{
        logOut().then(()=>{
        })
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(user)=>{
            if(user){
                const payload = {
                    userId:user?.uid,
                    emailId:user?.email,
                    displayName:user.displayName?user.displayName:user?.email
                }
                dispatch(setLoggedUser(payload))
                navigate("/browse")
            }
            else{
                dispatch(removedLoggedUser())
                navigate("/")
            }
        })
        return ()=>{
            unsubscribe()
        }
    },[dispatch,navigate])

    return (
        <div className="flex justify-between z-10 absolute px-20 py-1 bg-gradient-to-b from-black w-full">
            <div>
                <img 
                    className="w-44"
                    src={netflixLogo}
                    alt="NetFlix Logo"
                />
            </div>
            {
                user && (
                    <div className="p-4 flex gap-3">
                        <img 
                            className="w-10 rounded-sm"
                            src={netflixUserAvatar} alt="user-avatar"
                        />
                        <button onClick={logOutHandler} className="text-white font-semibold">Sign Out</button>
                    </div>
                )
            }
        </div>
    )
}

export default Header;