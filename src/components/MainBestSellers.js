import React, { useState, useEffect} from 'react';
import bestSeller from '../data/bestSeller.json'
import ImgStyled from '../styled-components/ImgStyled';
import FlowAni from '../styled-components/AniStyled';

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
                        <p className='bestSeller__author'>{post.author}</p>
                        <p className='bestSeller__title'>{post.title}</p>
                    </div>
                ))}
            </FlowAni>
        </>
    );
}
