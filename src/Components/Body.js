import { useEffect } from "react";
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLoggedUser,removedLoggedUser } from "../store/authSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/fireBase";

import Login from "./Login";
import Browse from "./Browse";

const Body = () => {
    const dispatch = useDispatch();
    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        }
        ,
        {
            path:'/browse',
            element:<Browse/>
        }
    ])

    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                const payload = {
                    userId:user?.uid,
                    emailId:user?.email,
                    displayName:user.displayName?user.displayName:user?.email
                }
                dispatch(setLoggedUser(payload))
            }
            else{
                dispatch(removedLoggedUser())
            }
        })
    },[dispatch])

    return (
        <div>
            <RouterProvider router={appRouter}></RouterProvider>
        </div>
    )
}

export default Body;