import React from 'react';
import CharacterItem from './CharacterItem';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CharacterList = props => {
  let value = props.value.toLowerCase();
  return<ul className="container-list">
    {props.characterList
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

CharacterList.propTypes = {
  name: PropTypes.string,
  specie: PropTypes.string,
  id: PropTypes.string,
  characterList: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default CharacterList;