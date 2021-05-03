import React, { useContext, useState } from "react";
import { projectFirestore } from "../firebase/config";

import { useAuth } from "../contexts/AuthContext";
const { currentUser } = useAuth()
const db = projectFirestore;
db.settings({ timestampsInSnapshots: true })

const FirestoreContext = React.createContext()

export const useFirestore = () => {
    return useContext(FirestoreContext)
}

const FirestoreProvider = () => {

    const [tasks, setTasks] = useState([])
    function getTasks(collection_name) {

        db.collection(collection_name).get()
            .then(snapshot => {
                snapshot.docs.forEach(doc => {
                    console.log(doc);
                })
            })
    }

    function addTask(task) {
        return db.collection("doit").doc(currentUser.uid).set({

        })
    }

    const value = {
        getTasks
    }
    return <FirestoreContext.Provider value={value}>
        {children}
    </FirestoreContext.Provider>
}


export default FirestoreProvider;