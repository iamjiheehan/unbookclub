import { useState } from 'react';
import { dbService } from 'fBase';

import useUpdateProfile from "../hooks/useUpdateProfile";

const useReviewEditor = (reviewObj) => {
    const [editing, setEditing] = useState(false);
    const [newReview, setNewReview] = useState(reviewObj.review);
    const [newNickname, setNewNickname] = useState(reviewObj.creatorNickname);
    const [newTitle, setnewTitle] = useState(reviewObj.title);
    const [newAuthor, setnewAuthor] = useState(reviewObj.author);
    const [newRating, setNewRating] = useState(0);

    const [errorMessage, setErrorMessage] = useState('');

    const onDeleteClick = async () => {
        const ok = window.confirm('정말 삭제하실건가요?');
        if (ok) {
        await dbService.doc(`unBookClub/${reviewObj.id}`).delete();
        }
    };

    const toggleEditing = () => setEditing((prev) => !prev);

    const onSubmit = async (newData) => {
        if (Object.keys(newData).every((key) => newData[key] === reviewObj[key])) {
            setErrorMessage('수정 할 내용이 없다면 취소 버튼을 눌러주세요.');
            return;
        }
        setErrorMessage('');
        await dbService.doc(`unBookClub/${reviewObj.id}`).update(newData).then(() => {
            const updatedReviewObj = {...reviewObj, ...newData};
            setNewReview(updatedReviewObj);
        });
        setEditing(false);
    };
    
    const onCancel = () => {
        setEditing(false);
    };

    const onChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
        case 'bookTitle':
            setnewTitle(value);
            break;
        case 'bookAuthor':
            setnewAuthor(value);
            break;
        case 'newReview':
            setNewReview(value);
            break;
        default:
            break;
        }
    };

    console.log(newReview);

    return {
        editing,
        errorMessage,
        newReview,
        newNickname,
        setNewNickname,
        newTitle,
        newAuthor,
        newRating,
        setNewRating,
        onDeleteClick,
        toggleEditing,
        onSubmit,
        onCancel,
        onChange,
    };
};

export default useReviewEditor;
