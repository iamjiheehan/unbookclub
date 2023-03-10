import styled from 'styled-components'

const BackStyled = styled.div `
    background-color: ${(props) => props.bgColor || '#61777f3a'};
    box-shadow: 0 4px 4px rgb(0 0 0 / 25%);
    border-radius: 30px;
    box-shadow: 0 4px 4px rgb(0 0 0 / 25%);
    padding: ${(props) => props.padding || 'auto'};
    height: ${(props) => props.height || 'auto'};
    width: ${(props) => props.width || 'auto'};
    position: ${(props) => props.position || 'static'};
`
export default BackStyled;