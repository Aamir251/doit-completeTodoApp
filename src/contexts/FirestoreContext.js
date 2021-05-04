import React, { useContext, useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";

import { useAuth } from "../contexts/AuthContext";

const db = projectFirestore;
db.settings({ timestampsInSnapshots: true })

const FirestoreContext = React.createContext()

export const useFirestore = () => {
    return useContext(FirestoreContext)
}

export const FirestoreProvider = ({ children }) => {


    let [currentTasks, setCurrentTasks] = useState([])
    const { currentUser } = useAuth()

    useEffect(() => {

        db.collection("doit").doc(currentUser.uid).get()
            .then((doc) => {
                let documents = []
                if (doc.data().currentTasks) {
                    let tasks = doc.data().currentTasks;
                    tasks.forEach(task => {
                        documents.push(task)
                    });
                }

                setCurrentTasks(documents)
            })

    }, [currentTasks])

    function addTask(taskName, shortNote, time) {
        currentTasks.push({ name: taskName, note: shortNote, time: time })
        return db.collection("doit").doc(currentUser.uid).set({ currentTasks })
    }

    function setTasks(remainingTasks) {
        currentTasks = remainingTasks
        return db.collection("doit").doc(currentUser.uid).set({ currentTasks })
    }
    const value = {
        currentTasks,
        addTask,
        setCurrentTasks,
        setTasks
    }
    return (
        <FirestoreContext.Provider value={value}>
            {children}
        </FirestoreContext.Provider>
    )
}


