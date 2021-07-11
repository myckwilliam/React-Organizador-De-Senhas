import styled, { css } from 'styled-components';
import Button from './components/Button';



export const ButtonBase = styled.button`
    width: 9.1vw;
    height: 5.2vh;
    border: none;
    outline: none;
    cursor: pointer;
    margin: 0 2.05vw;
    background-color: lightcoral;
    font-size: 2vh;
`;

export const ButtonTop = styled(ButtonBase)`

    ${props => props.color === "red" && css`background-color: red; color: white;` }
    ${props => props.color === "green" && css`background-color: #038F22; color: white;` }
    ${props => props.color === "blue" && css`background-color: blue; color: white;` }
`;