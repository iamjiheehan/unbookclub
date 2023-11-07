import { useState } from 'react';
import { dbService } from 'fBase';

const useReviewEditor = (reviewObj) => {
    const [editing, setEditing] = useState(false);
    const [newReview, setNewReview] = useState(reviewObj ? reviewObj.review : '');
    const [newNickname, setNewNickname] = useState(reviewObj ? reviewObj.creatorNickname : '');
    const [newTitle, setnewTitle] = useState(reviewObj ? reviewObj.title : '');
    const [newAuthor, setnewAuthor] = useState(reviewObj ? reviewObj.author : '');
    const [newRating, setNewRating] = useState(0);
    const [errorMessage, setErrorMessage] = useState('');

    const onDeleteClick = async () => {
        const ok = window.confirm('정말 삭제하실건가요?');
        if (ok) {
        await dbService.doc(`unBookClub/${reviewObj.id}`).delete();
        }
    };

    const toggleEditing = () => setEditing((prev) => !prev);

    const onSubmit = async (event) => {
        event.preventDefault();
        if (newReview === '') {
            setErrorMessage('리뷰를 입력해주세요');
        } else {
            await dbService.doc(`unBookClub/${reviewObj.id}`).update({
                review: newReview,
                title: newTitle,
                author: newAuthor,
                selectedRating: newRating,
            });
            setEditing(false);
        };
    };
    
    const onCancel = () => {
        setEditing(false);
    };
    
    const onChange = (event) => {
        const {
            target : {value, name},
        }= event;
        if (name === 'newReview') {
            setNewReview(value);
        } else if (name === 'bookTitle') {
            setnewTitle(value);
        } else if (name === 'bookAuthor') {
            setnewAuthor(value);
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
