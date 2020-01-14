import React from 'react';
import CharacterItem from './CharacterItem';
import { Link } from 'react-router-dom';

const CharacterList = props => {
  let value = props.value
  return<ul className="container-list">
    {props.CharacterList.filter(character => value === '' || character.name.toLowerCase().includes(value))
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