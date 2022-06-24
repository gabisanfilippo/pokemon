import { PokemonContext } from "../../contexts/Pokemons";
import React, { useContext, useEffect, useMemo, useState } from "react";
import {Container, Types, Title, Informations, Image} from './style'

function Cards({ name }) {
  const { getPokemonByName, pokemon, getColor, offset } = useContext(PokemonContext);
  const [types, setTypes] = useState();
  const [sprites, setSprites] = useState('');
  const [id, setId] = useState()
  const [color, setColor] = useState()

  const memo = useMemo(()=>{
    if(color == 'green'){
      return '#49d0b2'
    }
    if(color == 'black'){
      return '#303030'
    }
    if(color == 'blue'){
      return '#76bcfc'
    }
    if(color == 'yellow'){
      return '#fdda6c'
    }
    if(color == 'red'){
      return '#fd6b6c'
    }
    if(color == 'brown'){
      return '#a78876'
    }
    if(color == 'grey'){
      return '#9195b0'
    }
    if(color == 'pink'){
      return '#f1c8cc'
    }
    if(color == 'purple'){
      return '#ae8eb5'
    }
    if(color == 'white'){
      return '#1212'
    } else {
      return '#385fa3'
    }
  },[])

  useEffect(() => {
    if (pokemon) {
      async function getPokemon() {
        const data = await getPokemonByName(name);
        setTypes(data.types);
        setSprites(data.sprites);
        setId(data.id)
        const dataColor = await getColor(id)
        console.log(dataColor)
        setColor(dataColor.color.name)
        setColor(memo)
        
      }
      getPokemon();
      /* console.log(color) */
      
    }
  },[offset, getColor, pokemon]); 
  


  return (
    <Container color={color}>
      <Informations>
        <p>#{id}</p>
        <Title>{name}</Title>
        <Types>
          {types?.map((index) => {
            return <p>{index.type.name}</p>;
          })}
        </Types>
      </Informations>
      <div>
        <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`} alt={name} />
      </div>
    </Container>
  );
}
export default Cards;
