import { useEffect,useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { onAuthStateChanged } from "firebase/auth";
import { netflixLogo,netflixUserAvatar } from "../Constants/images"
import { logOut } from "../utils/auth";
import { auth } from "../utils/fireBase";

import { setLoggedUser,removedLoggedUser } from "../store/authSlice";

import AppContext from "../utils/AppContext";
const Header = () => {
    const dispatch = useDispatch();
    const user = useSelector((store)=>store?.auth?.user);
    const navigate = useNavigate();
    const logOutHandler = ()=>{
        logOut().then(()=>{
        })
    }
    
    const {isGptSearch,setGptSearch} = useContext(AppContext);

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
        <div className="flex justify-between z-10 absolute px-20 py-1 bg-gradient-to-b from-black w-full
        flex-col md:flex-row
        ">
            <div>
                <img 
                    className="w-44 mx-auto md:mx-0"
                    src={netflixLogo}
                    alt="NetFlix Logo"
                />
            </div>
            {
                user && (
                    <div className="p-4 flex gap-3 mx-auto md:mx-0">
                        <button 
                            onClick={()=>{
                                setGptSearch()
                            }}
                            className="bg-[#10a37f] p-2 rounded-sm text-white">
                            {isGptSearch?"Main Menu":"GPT Search"}
                        </button>
                        <img 
                            className="w-10 rounded-sm hidden md:inline-block"
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