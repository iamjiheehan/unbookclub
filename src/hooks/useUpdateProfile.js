import { useState } from "react";

const useUpdateProfile = (userObj, refreshUser) => {
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
