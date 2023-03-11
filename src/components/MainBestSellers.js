import React, { useState, useEffect} from 'react';
import bestSeller from '../data/bestSeller.json'
import ImgStyled from '../styled-components/ImgStyled';
import FlowAni from '../styled-components/AniStyled';
import {TextH2,TextP} from '../styled-components/TextStyled';


export default function MainBestSellers() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setPosts(bestSeller);
    }, []);
    
    return (
        <>
            <FlowAni>
                {posts.map(post => (
                    <div key={post.itemId} >
                        <ImgStyled src={post.coverLargeUrl} alt={post.title} className="bestSeller__img" width= "250px"/>
                        <TextH2 padding = '1rem 0 0 0'>{post.author}</TextH2>
                        <TextP>{post.title}</TextP>
                    </div>
                ))}
            </FlowAni>
        </>
    );
}
