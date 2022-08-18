import { FC, ReactElement, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useGlobal } from "~/context/GlobalProvider";

const RequireAuth: FC<{ children: ReactElement }> = ({ children }) => {
    const { state: { loggedIn } } = useGlobal()
    if (!loggedIn) {
        return <Navigate to={'/login'} replace />
    }
    return children
}

export default RequireAuth