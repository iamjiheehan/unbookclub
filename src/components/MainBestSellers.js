import React, { useState, useEffect} from 'react';
import bestSeller from '../data/bestSeller.json'
import { FlowAniForward, FlowAniReverse } from '../styled-components/AniStyled';
import BookItem from '../components/BookItem';

export default function MainBestSellers() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setPosts(bestSeller);
    }, []);
    
    return (
        <>
            <FlowAniForward>
                {posts.map(post => (
                    <BookItem key={post.itemId} post={post} />
                ))}
            </FlowAniForward>
        </>
    );
}
