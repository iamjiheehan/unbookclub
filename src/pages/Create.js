import React from 'react'
import Button from '../styled-components/ButtonStyled'; 


export default function Board() {

    return (
        <>
            <div>Create</div>
            <div>
                <h2>글을 씁시다 Create</h2>
                <Button to="/create" >글쓰기</Button>
            </div>
        </>
    )
}
