import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 25rem;
    height: 8rem;
    box-shadow: 0px 0px 7px 0px rgba(0,0,0,0.88);
    background-color: ${props => props.color}
`

export const Types = styled.div`
    display: flex;
    text-transform: capitalize;
    p{
        margin-right: 2rem;
        background-color: rgba(255,255,255,0.3);
        padding-top: 0.2rem;
        padding-bottom: 0.2rem;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        border-radius: 0.5rem;
    }
`

export const Title = styled.p`
    text-transform: capitalize;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    font-weight: 800;
`

export const Informations = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
`