import { Navigate, Outlet } from "react-router-dom";

interface Props{
    isAllowed: Boolean,
    children?: React.ReactNode,
}

export const ProtectecRoute = ({ isAllowed ,children }: Props) =>{
    if (!isAllowed) return <Navigate to="/login"/>

    return children ? <>{children}</> : <Outlet/>
}