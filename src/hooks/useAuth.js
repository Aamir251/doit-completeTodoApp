import React from "react";
import { useEffect, useState } from "react";

import { auth } from "../firebase/config"
const useAuth = () => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })
    }, [])

    return { currentUser }
}

export default useAuth;