import { PokemonContext } from "../../contexts/Pokemons";
import React, { useContext, useEffect, useState } from "react";
import {Container, Types, Title} from './style'

function Cards({ name }) {
  const { getPokemonByName, pokemon, getColor } = useContext(PokemonContext);
  const [types, setTypes] = useState();
  const [sprites, setSprites] = useState('');
  const [id, setId] = useState()
  const [color, setColor] = useState()

  useEffect(async () => {
    if (pokemon) {
      async function getPokemon() {
        const data = await getPokemonByName(name);
        setTypes(data.types);
        setSprites(data.sprites);
        setId(data.id)
        const dataColor = await getColor(id)
        setColor(dataColor.color.name)  
        console.log(dataColor.color.name)
      }
      await getPokemon();
    }
    switch (color) {
      case 'black':
        setColor('#303030');
        break;
      case 'blue':
        setColor('#76bcfc');
        break;
      case 'green':
        setColor('#49d0b2');
        break;
      case 'yellow':
        setColor('#fdda6c');
        break;
      case 'red':
        setColor('#fd6b6c');
        break;
      case 'brown':
        setColor('#a78876');
        break;
      case 'grey':
        setColor('#9195b0');
        break;
      case 'pink':
        setColor('#f1c8cc');
        break;
      case 'purple':
        setColor('#ae8eb5');
        break;
      case 'white':
        setColor('#1212');
        break;
      case 'yellow':
        setColor('#e8c250');
        break;
      default:
        setColor('#385fa3');
        break;
    }
  }, []); 
  


  return (
    <Container color={color}>
      <div>
        <p>#{id}</p>
        <Title>{name}</Title>
        <Types>
          {types?.map((index) => {
            return <p>{index.type.name}</p>;
          })}
        </Types>
      </div>
      <div>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`} alt={name} />
      </div>
    </Container>
  );
}
export default Cards;
