import styled from 'styled-components';
import Dropdown from 'react-bootstrap/Dropdown';

const DropdownBtn = styled(Dropdown)`
    border: 2px solid #ced4da;
    border-radius: 50px;
    padding: 0.375rem 0.75rem;
    color: black;
    margin: auto;
    display: inline-block;
    &:hover {
        background-color: #f8f9fa;
        border-color: #f8f9fa;
        color: #000;
    }
`;
export default DropdownBtn;
