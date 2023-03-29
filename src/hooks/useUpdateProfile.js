import { useState, useContext } from "react";
import AuthContext from "../contexts/AuthContext";

const useUpdateProfile = () => {
    const { userObj, refreshUser } = useContext(AuthContext); 
    const [newDisplayName, setNewDisplayName] = useState(userObj?.displayName);

    const onChange = (event) => {
        const {
        target: { value },
        } = event;
        setNewDisplayName(value);
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        if (userObj.displayName !== newDisplayName) {
            await userObj.updateProfile({
                displayName: newDisplayName,
            });
            refreshUser();
        }
    };

    return { newDisplayName, onChange, onSubmit };
};

export default useUpdateProfile;
