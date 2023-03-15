import { useCallback } from "react";
import { authService } from "fBase";
import { useNavigate } from "react-router-dom";

const useSignOut = () => {
    const navigate = useNavigate();

    const onSignOutClick = useCallback(async () => {
        await authService.signOut();
        navigate("/");
    }, [navigate]);

    return onSignOutClick;
};

export default useSignOut;
