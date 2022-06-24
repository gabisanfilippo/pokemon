import { Container } from "./style"
import { PokemonContext } from "../../contexts/Pokemons";
import { useContext, useEffect, useState, useMemo } from "react";

function Pagination(){
    const {setLimit, setOffset, limit, offset, pokemon, resultsLimited} = useContext(PokemonContext)
    const [pageActual, setPageActual] = useState()
    const [totalPage, setTotalPage] = useState()

    const memo = useMemo(()=>{
        return Math.ceil(pokemon?.length / limit)
    },[pokemon, limit])
    useEffect(()=>{
        setPageActual(memo)
    },[memo])
    
    console.log(memo)
    useEffect(()=>{
        
        let count = (resultsLimited / limit)
        if(count % 30 === 0){
            setTotalPage(parseInt(count))
        } else {
            setTotalPage((parseInt(count))+1)
        }
    },[pokemon, limit, resultsLimited])
    const onLeftClick = () => {
        if(pageActual !== 1){
            setPageActual(pageActual-1)
            setOffset(offset-limit)
        }
    }
    const onRightClick = () => {
        if(pageActual !== totalPage){
            setPageActual(parseInt((pageActual)+1))
            setOffset(parseInt((offset)+limit))
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