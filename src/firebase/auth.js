import { useState } from "react";
import { auth } from "../firebase/config"

const CheckUser = () => {

    const [currentUser, setCurrentUser] = useState("heroooo");
    auth.onAuthStateChanged(user => {
        setCurrentUser(user)
    })
    return currentUser;
}

const CreateUser = (person) => {
    auth.createUserWithEmailAndPassword(person.email, person.password)
        .then(cred => {
            console.log(cred);
        })
}
export { CheckUser, CreateUser };