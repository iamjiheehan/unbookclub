import React, { useState, useEffect} from 'react';
import api from '../api/BestSellers'

export default function MainBestSellers() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await api.get('/posts');
                setPosts(response.data);
            } catch (err) {
                if (err.response) {
                //Not in the 200 response range
                    console.log(err.response.data);
                    console.log(err.response.status);
                    console.log(err.response.headers);
                } else {
                    console.log(`Error: ${err.message}`);
                }
            }
        }
        fetchPosts();
    }, []);
    
    return (
        <>
            <div className='bestSeller__flexbox-wrapper'>
                {posts.map(post => (
                    <div key={post.itemId} className='bestSeller__items'>
                        <img src={post.coverLargeUrl} alt={post.title} className="bestSeller__img"/>
                        <p className='bestSeller__author'>{post.author}</p>
                        <p className='bestSeller__title'>{post.title}</p>
                    </div>
                ))}
            </div>
        </>
    );
}
