import { PokemonContext } from "../contexts/Pokemons"
import { useContext } from "react"
import Cards from "../components/Cards"
import styled from "styled-components"
import Pagination from "../components/Pagination"

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
`

function Home(){
    const {pokemon} = useContext(PokemonContext)
    return(
        <>
            <Pagination/>
            <Container>
                {pokemon?.map((index)=>{
                    return(
                        <Cards 
                            key={index.name}
                            name={index.name}
                        />
                    )
                })}
            </Container>
        </> 
    )
}
export default Home