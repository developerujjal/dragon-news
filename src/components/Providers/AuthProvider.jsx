import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import app from "../../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";


export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createNewUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const userLogOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const userLoginWithGoogle = () => {
       return signInWithPopup(auth, googleProvider)
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser)
            setUser(currentUser)
            setLoading(false)

            /* 
            if(currentUser){
            setUser(currentUser)
            }else{
            setUser(null)
            }
            */
        })

        return () => {
            unSubscribe()
        }
    }, [])



    const authInfo = {
        user,
        createNewUser,
        signInUser,
        userLogOut,
        loading,
        userLoginWithGoogle
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}
export default AuthProvider;