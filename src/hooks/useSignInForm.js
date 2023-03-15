import { useState } from "react";
import { authService, firebaseInstance } from "fBase";

function useSignInForm() {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [createEmail, setCreateEmail] = useState("");
    const [createPassword, setCreatePassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [showAlert, setShowAlert] = useState(false);

const onSocialClick = async (event) => {
    if (event) {
    event.preventDefault();
    }
    const {
    target: { name },
    } = event;
    let provider;
    if (name === "google") {
    provider = new firebaseInstance.auth.GoogleAuthProvider();
    } 
    else if (name === "github") {
    provider = new firebaseInstance.auth.GithubAuthProvider();
    }
    try {
    const data = await authService.signInWithPopup(provider);
    onLoginSubmit(null,data);
    } catch (error) {
    setErrorMessage("Failed to log in with social media account.");
    }
};


const onChange = (event) => {
    if (event) {
    event.preventDefault();
    }
    console.log(event.target.name);
    const {
    target: { name, value },
    } = event;
    if (name === "loginEmail") {
    setLoginEmail(value);
    } else if (name === "loginPassword") {
    setLoginPassword(value);
    } else if (name === "createEmail") {
    setCreateEmail(value);
    } else if (name === "createPassword") {
    setCreatePassword(value);
    } else if (name === "confirmPassword") {
    setConfirmPassword(value);
    }
};

const onLoginSubmit = async (event) => {
    try {
    if (loginEmail && loginPassword) {
        const data = await authService.signInWithEmailAndPassword(
        loginEmail,
        loginPassword
        );
        console.log(data);
    } else {
        setErrorMessage("Please check your email or password.");
        setShowAlert(true);
    }
    } catch (error) {
    console.log(error);
    setErrorMessage("Failed to log in. Please try again.");
    }
};

const onCreateAccountSubmit = async (event) => {
    if (event) {
    event.preventDefault();
    }
    try {
    let data;
    if (createPassword === confirmPassword) {
        if (createEmail && createPassword) {
        data = await authService.createUserWithEmailAndPassword(
            createEmail,
            createPassword
        );
        console.log(data);
        } else if (createPassword !== confirmPassword) {
        setErrorMessage(" password is not matched");
        setShowAlert(true);
        }
    }
    console.log(data);
    } catch (error) {
    console.log(error);
    if (error.code === "auth/invalid-email") {
        setErrorMessage("올바른 이메일 형식이 아닙니다.");
    } else if (error.code === "auth/email-already-in-use") {
        setErrorMessage("이미 가입된 이메일입니다.");
    } else {
        setErrorMessage("비밀번호는 8글자 이상을 입력해주세요.");
    }
    setShowAlert(true);
    }
};
    return {
        loginEmail,
        loginPassword,
        createEmail,
        createPassword,
        confirmPassword,
        errorMessage,
        showAlert,
        setErrorMessage,
        setShowAlert,
        onChange,
        onSocialClick,
        onLoginSubmit,
        onCreateAccountSubmit,
    };
}

export default useSignInForm;
