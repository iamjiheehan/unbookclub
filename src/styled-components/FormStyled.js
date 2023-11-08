import styled from 'styled-components';
import { Form } from 'react-bootstrap';

const FormStyled = styled(Form.Control)`
    color: #333;
    border-color: #ccc;
    padding: 0.5rem 1rem;
    font-weight: ${(props) => props.fontWeight || '400'};
    border-radius: ${(props) => props.radius || '50px'};
    width: 20rem;

    .flex {
        display: flex;
    }

    &:hover {
        border-color: #aaa;
    }

    @media (max-width: 412px) {
        padding: 0%;
        width: 100%;
    }
`;

export default FormStyled;
