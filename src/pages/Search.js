import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import DropdownBtn from "../styled-components/DropDownBtnStyled";
import Dropdown from 'react-bootstrap/Dropdown';
import { FaSearch } from 'react-icons/fa';
import { FlexRow } from 'styled-components/FlexStyled';

export default function Search() {
    return (
        <Container>
            <Form style={{ display: "inline-block" }}>
                <FlexRow alignItems="flex-start">
                    <div>
                        <Dropdown>
                            <Dropdown.Toggle as={DropdownBtn} variant="outline-secondary" id="dropdown-basic">
                                독후감 검색하기
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#">키워드로 검색</Dropdown.Item>
                                <Dropdown.Item href="#">도서명으로 검색</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div style={{margin:"0 2rem"}}>
                        <Form.Control type="text" placeholder="키워드 혹은 도서명을 입력해주세요" />
                    </div>
                    <div>
                        <Button variant="dark" type="submit" style={{ borderRadius: "50px"}}>
                            <FaSearch /> 검색하기
                        </Button>
                    </div>
                </FlexRow>
            </Form>
        </Container>
    )
}
