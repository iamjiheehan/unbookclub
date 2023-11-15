import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
    

    const navigate = useNavigate();

    // useEffect(() => {
    //     // 이 효과는 createErrorMessage가 변경될 때마다 실행
    //     console.log(createErrorMessage);
    // }, [createErrorMessage]); // createErrorMessage를 의존성 배열에 추가

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
        setCreateErrorMessage("");
        }
        //console.log(event.target.name);
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
                //console.log(data);
            } else {
                setLoginErrorMessage("이메일 혹은 비밀번호를 다시 확인해주세요");
                setLoginShowAlert(true);
            }
        } catch (error) {
            //(error);
            setLoginErrorMessage("로그인에 실패하였습니다. 잠시후 다시 시도해주세요.");
        }
    };
    
    const onCreateAccountSubmit = async (event) => {
        if (event) {
            event.preventDefault();
        }
    
        try {
            let data;
    
            if (createEmail && createPassword && createPassword === confirmPassword) {
                // 이메일, 비밀번호가 존재하고 비밀번호가 일치하는 경우
                data = await authService.createUserWithEmailAndPassword(
                    createEmail,
                    createPassword
                );
    
                // 사용자 계정이 성공적으로 생성된 경우에만 페이지 이동
                navigate('/');
            } else {
                // 비밀번호가 일치하지 않거나 이메일 또는 비밀번호 값이 없는 경우
                setCreateErrorMessage("비밀번호가 일치하지 않습니다.");
                setCreateShowAlert(true);
                console.log(createErrorMessage);
            }
        } catch (error) {
            console.log(error);
    
            // Firebase Auth 에러 코드를 확인하여 적절한 메시지 설정
            if (error.code === "auth/invalid-email") {
                setCreateErrorMessage("올바른 이메일 형식이 아닙니다.");
            } else if (error.code === "auth/email-already-in-use") {
                setCreateErrorMessage("이미 가입된 이메일입니다.");
            } else {
                setCreateErrorMessage("비밀번호는 8글자 이상을 입력해주세요.");
            }
            setCreateShowAlert(true);
        }
        window.scrollTo(0, 0);
    };
    

    const onPasswordRecoverySubmit = async (event) => {
        if (event) {
            event.preventDefault();
        }
        try {
            if (loginEmail) {
                await authService.sendPasswordResetEmail(loginEmail);
                setCreateErrorMessage("이메일을 확인하세요. 비밀번호 재설정 링크를 보냈습니다.");
                // setLoginShowAlert(true);
            } else {
                setCreateErrorMessage("이메일을 입력해주세요.");
                // setLoginShowAlert(true);
            }
            alert(createErrorMessage);
        } catch (error) {
            console.log(error);
            setCreateErrorMessage("가입되지 않은 이메일 입니다. 회원가입을 진행헤주세요");
            // setLoginShowAlert(true);
            alert(createErrorMessage);
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
