import React, { useState, useEffect} from 'react';
import newBooks from '../data/newBooks.json';
import ImgStyled from '../styled-components/ImgStyled';
import { FlowAniReverse } from '../styled-components/AniStyled';
import {TextH2,TextP} from '../styled-components/TextStyled';


export default function NewBooks() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setPosts(newBooks);
    }, []);
    
    return (
        <>
            <FlowAniReverse>
                {posts.map(post => (
                    <div key={post.itemId} >
                        <ImgStyled src={post.coverLargeUrl} alt={post.title} width= "250px"/>
                        <TextH2 padding = '1rem 0 0 0'>{post.author}</TextH2>
                        <TextP>{post.title}</TextP>
                    </div>
                ))}
            </FlowAniReverse>
        </>
    );
}
