import { styled } from "styled-components";

const Card = styled.div`
    background-color: ${props => props.theme.foreground};
    color: ${props => props.theme.primaryText};
    border-radius: 10px;
    box-shadow: ${props => props.theme.boxShadow};
    width: 240px;
    height: 280px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    margin: 10px;

    img {
        height: 140px;
    }

    &:hover {
        transform: scale(1.1);
        cursor: pointer;
        transition: 0.3s ease-in-out;
    }

`

const Info = styled.div`
    text-align: center;
    color: ${ props => props.theme.primaryText};
    transition: 0.3s ease-in-out;
    text-transform: Capitalize;

    h1 {
        background-color: #F08030;
        border: 2px solid;
        border-radius: 5px;
        padding: 3px 10px;
        font-size: 20px;
        margin-top: 5px;
        margin-bottom: 5px;
    }
`

const Types = styled.ul`
    display: flex;
    justify-content: space-evenly;
`

const Li = styled.li`
    margin: 7px;
    padding: 2px 10px;
    list-style: none;
    border-radius: 5px;
    background-color: ${props => props.theme.secundaryText};
    color: ${props => props.theme.primaryText};
    transition: 0.3s ease-in-out;

`

export { Card, Info, Types, Li }