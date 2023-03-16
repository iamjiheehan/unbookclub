import styled from 'styled-components'

const BackStyled = styled.div `
    background-color: ${(props) => props.bgColor || '#61777f3a'};
    box-shadow: ${(props) => props.bgShadow || '0'};
    border-radius: ${(props) => props.bgRadius || '0'};
    padding: ${(props) => props.padding || 'auto'};
    margin: ${(props) => props.margin || 'auto'};
    height: ${(props) => props.height || 'auto'};
    width: ${(props) => props.width || 'auto'};
    position: ${(props) => props.position || 'static'};
    border: ${(props) => props.border || 'none'};

`
export default BackStyled;