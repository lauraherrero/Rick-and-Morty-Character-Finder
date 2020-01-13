import React from 'react';
import CharacterItem from './CharacterItem';
import { Link } from 'react-router-dom';

const CharacterList = props => {
  let value = props.value
  let option=props.statusOpt;
  return<ul className="container-list">
    {props.CharacterList
    .filter (character => {
      if(option === ''){
        return character
      }
      if(option === 'dead'){
        return character.status.toLowerCase().includes(option)
      }
      if(option === 'alive') {
        return character.status.toLowerCase().includes(option)
      }
      if(option === 'unknown'){
        return character.status.toLowerCase().includes(option)
      }
    })
    .filter(character => value === '' || character.name.toLowerCase().includes(value))
    .map(character => {
      return <li key={character.id}>
        <Link to={`/character/${character.id}`}>
          <CharacterItem
            characterImg={character.image}
            characterName={character.name}
            characterSpecie={character.species}
            characterId={character.id}
          />
        </Link>
      </li>
    })}
  </ul>
}



export default CharacterList;