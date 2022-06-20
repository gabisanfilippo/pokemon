import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    box-shadow: 0px 0px 14px 5px rgba(0,0,0,0.44);
    width: 97vw;
    margin: auto;
    padding: 1rem;
    margin-bottom: 5rem;
`

export const Search = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 0.5rem;
    img{
        width: 2rem;
    }
    input{
        width: 20rem;
        padding: 0.5rem;
        border: none;
    }
`