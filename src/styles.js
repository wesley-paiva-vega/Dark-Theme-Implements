import styled from "styled-components";


export const Main = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.colors.background};
    transition: all 1s;

`


export const Title = styled.h1`
    color: ${(props) => props.theme.colors.title};

`


export const Button = styled.button`
    width: 100px;
    height: 50px;
    background-color: ${(props) => props.theme.colors.colorButton};
    border: none;
    color: ${(props) => props.theme.colors.titleButton};
    border-radius: 10px;
    margin-top: 20px;
    font-weight: bold;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;


    &:hover {
        filter: brightness(0.7);
    }
`