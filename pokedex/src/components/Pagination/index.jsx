import { Container } from "./style"
import { PokemonContext } from "../../contexts/Pokemons";
import { useContext, useEffect, useState } from "react";

function Pagination(){
    const {setLimit, setOffset, limit, offset, pokemon, resultsLimited} = useContext(PokemonContext)
    const [pageActual, setPageActual] = useState()
    const [totalPage, setTotalPage] = useState()
    useEffect(()=>{
        setPageActual(Math.ceil(pokemon?.length / limit))
        let count = (resultsLimited / limit)
        if(count % 30 === 0){
            setTotalPage(count)
        } else {
            setTotalPage((parseInt(count))+1)
        }
    },[pageActual])
    const onLeftClick = () => {
        if(pageActual !== 1){
            setPageActual(pageActual-1)
            setOffset((offset)-limit)
        }
    }
    const onRightClick = () => {
        if(pageActual !== totalPage){
            setPageActual((pageActual)+1)
            setOffset((offset)+limit)
        }
    }
    return(
        <Container>
            <button onClick={onLeftClick} >◀</button>
            <p>{pageActual} de {totalPage}</p> 
            <button onClick={onRightClick} >▶</button>
        </Container>
    )
}
export default Pagination