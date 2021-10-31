import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/Firebase.init";

initializeAuthentication();
const provider = new GoogleAuthProvider();

const useFirebase = ()=>{
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    const googleSignIn = ()=>{
        setIsLoading(true);
        return signInWithPopup(auth, provider)
        // .then(result =>{

        // })
    }

    const userLogOut = ()=>{
        setIsLoading(true);
        signOut(auth)
        .then(() => {
            setUser({});
          })
          setIsLoading(false);
    }

    useEffect(()=>{
        setIsLoading(true);
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
            } else {
            }
            setIsLoading(false);
          });
      }, [])

    return {
        user,
        isLoading,
        setUser,
        googleSignIn,
        userLogOut,
        setIsLoading
    }
}

export default useFirebase;