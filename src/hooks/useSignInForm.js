import { useState } from "react";
import { authService, firebaseInstance } from "fBase";

function useSignInForm() {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [createEmail, setCreateEmail] = useState("");
    const [createPassword, setCreatePassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loginErrorMessage, setLoginErrorMessage] = useState("");
    const [loginShowAlert, setLoginShowAlert] = useState(false);
    const [createErrorMessage, setCreateErrorMessage] = useState("");
    const [createShowAlert, setCreateShowAlert] = useState(false);
    


    const handleAnonymousLogin = () => {
        firebaseInstance.auth().signInAnonymously()
            .then(() => {
            })
            .catch((error) => {
            });
        };

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
            setLoginErrorMessage("소셜계정으로 로그인하기에 실패하였습니다.");
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
            loginErrorMessage("이메일 혹은 비밀번호를 다시 확인해주세요");
            setLoginShowAlert(true);
        }
        } catch (error) {
        console.log(error);
        setLoginErrorMessage("로그인에 실패하였습니다. 잠시후 다시 시도해주세요.");
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
                setCreateErrorMessage("비밀번호가 같지 않습니다.");
                setCreateShowAlert(true);
            }
        }
        console.log(data);
        } catch (error) {
        console.log(error);
        if (error.code === "auth/invalid-email") {
            setCreateErrorMessage("올바른 이메일 형식이 아닙니다.");
        } else if (error.code === "auth/email-already-in-use") {
            setCreateErrorMessage("이미 가입된 이메일입니다.");
        } else {
            setCreateErrorMessage("비밀번호는 8글자 이상을 입력해주세요.");
        }
        setCreateShowAlert(true);
        }
    };
    const onPasswordRecoverySubmit = async (event) => {
        if (event) {
            event.preventDefault();
        }
        try {
            if (loginEmail) {
                await authService.sendPasswordResetEmail(loginEmail);
                setCreateErrorMessage("이메일을 확인하세요. 비밀번호 재설정 링크를 보냈습니다.");
                setLoginShowAlert(true);
            } else {
                setCreateErrorMessage("이메일을 입력해주세요.");
                setLoginShowAlert(true);
            }
        } catch (error) {
            console.log(error);
            setCreateErrorMessage("가입되지 않은 이메일 입니다. 회원가입을 진행헤주세요");
            setLoginShowAlert(true);
        }
    };

    return {
        onPasswordRecoverySubmit,
        loginEmail,
        loginPassword,
        createEmail,
        createPassword,
        confirmPassword,
        loginErrorMessage,
        loginShowAlert,
        createErrorMessage,
        createShowAlert,
        onChange,
        onSocialClick,
        onLoginSubmit,
        onCreateAccountSubmit,
        handleAnonymousLogin,
    };
}

export default useSignInForm;
