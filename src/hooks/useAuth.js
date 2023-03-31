import { useState, useEffect } from "react";
import { authService, firebaseInstance } from "../fBase";

function useAuth() {
    const [init, setInit] = useState(false);
    const [isSignedIn, setIsSignedIn] = useState(authService.currentUser);
    const [isSignedUp, setIsSignedUp] = useState(false);
    const [userObj, setUserObj] = useState(null);

    useEffect(() => {
        authService.onAuthStateChanged((user) => {
        if (user) {
            setIsSignedIn(user);
            setUserObj({
            displayName: user.displayName,
            uid: user.uid,
            updateProfile: (args) => user.updateProfile(args),
            });
        } else {
            setIsSignedIn(false);
            setUserObj(null);
        }
        setInit(true);
        });
    }, []);

    useEffect(() => {
        // Sign in the user anonymously
        firebaseInstance.auth().signInAnonymously().then((userCredential) => {
            const user = userCredential.user;
            setIsSignedIn(true);
            setUserObj({
                displayName: "Anonymous",
                uid: user.uid,
                updateProfile: (args) => user.updateProfile(args),
            });
            setInit(true);
        }).catch((error) => {
            console.log("Error signing in anonymously:", error);
            setInit(true);
        });
    }, []);

    const refreshUser = () => {
        const user = authService.currentUser;
        setUserObj({
        displayName: user.displayName,
        uid: user.uid,
        updateProfile: (args) => user.updateProfile(args),
        });
    };

    return { init, isSignedIn, isSignedUp, userObj, setIsSignedUp, refreshUser };
}

export default useAuth;
