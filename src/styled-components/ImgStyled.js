import styled from 'styled-components';

const ImgStyled = styled.img`
    width:${(props) => props.width || 'auto'};
    height:${(props) => props.height || 'auto'};
    max-width:${(props) => props.maxWidth || 'auto'};
    padding:${(props) => props.padding || 'auto'};
    margin:${(props) => props.margin || 'auto'};
`
export default ImgStyled;