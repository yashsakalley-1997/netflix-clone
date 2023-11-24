import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { netflixLogo,netflixUserAvatar } from "../Constants/images"
import { logOut } from "../utils/auth";
const Header = () => {
    const user = useSelector((store)=>store?.auth?.user);
    const navigate = useNavigate();
    const logOutHandler = ()=>{
        logOut().then(()=>{
            navigate("/")
        })
    }
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