import {createContext, useEffect, useState} from 'react';
import pokeAPI  from "../services/pokeAPI";

export const PokemonContext = createContext({})

export default function PokemonProvider({children}){
    const [pokemon, setPokemon] = useState()

    useEffect(()=>{
        async function getPokemon(){
            let response = await pokeAPI.get('pokemon')
            setPokemon(response.data.results)
            
        }
        getPokemon()
    },[])

    async function getPokemonByName(name){
        let response = await pokeAPI.get(`pokemon/${name}`)
        return response.data
    }

    async function getColor(id){
        let response = await pokeAPI.get(`pokemon-species/${id}/`)
        return response.data
    }

    return(
        <PokemonContext.Provider
            value={{
                pokemon,
                getPokemonByName,
                getColor
            }}
        >
            {children}
        </PokemonContext.Provider>
    )
}