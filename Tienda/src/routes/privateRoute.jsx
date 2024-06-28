import { Navigate, useLocation } from "react-router-dom"
export const PrivateRoutes = ({children}) => {
    const {state} =  useLocation();
    const userDash = localStorage.getItem ('Admin_ID')

        if (!userDash) {
            return state?.logged ? children : <Navigate to= '/home' />
        }
        return children
    
}