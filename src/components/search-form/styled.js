import { styled } from "styled-components";
import { Button } from "../button/index.js";

const Form = styled.form`
    text-align: center;
    background-color: ${props => props.theme.background};
    transition: 0.3s ease-in-out;
    padding-top: 20px;

    label {
        color: ${props => props.theme.primaryText};
    }

`

const SearchBtn = styled(Button)`
    width: 50px;
    border: none;
    border-radius: 5px;
    margin-left: 8px;
    box-shadow: ${props => props.theme.boxShadow};
    color: ${props => props.theme.primaryText};
    background-color: ${props => props.theme.foreground};
    padding: 3px 10px;
    font-size: 18px;
    font-weight: 700;

    &:hover {
        transform: scale(1.1);
        cursor: pointer;
        transition: 0.3s ease-in-out;
    }

`

const Input = styled.input`
    width: 350px;
    font-size: 18px;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid;
`

export { Form, SearchBtn, Input }