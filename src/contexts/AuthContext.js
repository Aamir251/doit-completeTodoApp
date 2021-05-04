import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { auth, projectFirestore } from "../firebase/config"
const AuthContext = React.createContext()


// This function returns the value i.e. currentUser and any other variable directly, so we don't need to use useContext() everywhere
export const useAuth = () => {
    return useContext(AuthContext);
}

// AuthProvider is the Component Name-

export const AuthProvider = ({ children }) => {


    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true)
    function signUp(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    function logIn(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    function logOut() {
        return auth.signOut();
    }
    useEffect(() => {
        const unSubscribe = auth.onAuthStateChanged(user => {
            // SetCurrentUser must be before setLoading(false; this is because if we set the 
            // loading to false before then our app gets rendered before we set the current user
            // Hence, current user will not be available to our App
            setCurrentUser(user)
            setLoading(false)
        })

        return unSubscribe;
    }, []);

    const value = {
        currentUser,
        signUp,
        logIn,
        logOut
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}