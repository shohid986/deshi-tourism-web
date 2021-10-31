import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/Firebase.init";

initializeAuthentication();
const provider = new GoogleAuthProvider();

const useFirebase = ()=>{
    const [user, setUser] = useState({});
    const auth = getAuth();
    const googleSignIn = ()=>{
        signInWithPopup(auth, provider)
        .then(result =>{
            setUser(result.user);
            console.log(result.user);
        })
    }

    const userLogOut = ()=>{
        signOut(auth)
        .then(() => {
            setUser({});
          })
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
            } else {
            }
          });
      }, [])

    return {
        user,
        googleSignIn,
        userLogOut
    }
}

export default useFirebase;