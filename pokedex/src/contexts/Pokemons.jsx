import {createContext, useEffect, useState} from 'react';
import pokeAPI  from "../services/pokeAPI";

export const PokemonContext = createContext({})

export default function PokemonProvider({children}){
    const [pokemon, setPokemon] = useState()
    const [limit, setLimit] = useState(30)
    const [offset, setOffset] = useState(0)
    const [resultsLimited, setResultsLimited] = useState()

    useEffect(()=>{
        async function getPokemon(limit,offset){
            let response = await pokeAPI.get(`pokemon?limit=${limit}&offset=${offset}`)
            setPokemon(response.data.results)
            setResultsLimited(response.data.count)
            
        }
        getPokemon(limit, offset)
    },[offset])

    async function getPokemonByName(name){
        let response = await pokeAPI.get(`pokemon/${name}`)
        return response.data
    }

    async function getColor(id){
        let response = await pokeAPI.get(`pokemon-species/${id}`)
        return response.data
    }

    return(
        <PokemonContext.Provider
            value={{
                pokemon,
                getPokemonByName,
                getColor,
                setLimit,
                setOffset,
                limit,
                offset,
                resultsLimited
            }}
        >
            {children}
        </PokemonContext.Provider>
    )
}