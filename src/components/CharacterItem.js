import React from 'react';
import PropTypes from 'prop-types';

const CharacterItem = props => {
  const {characterImg, characterName, characterSpecie} = props;
  return <div className="container-item">
    <img className="img" src={characterImg} alt={characterName}/>
    <h3>{characterName}</h3>
    <span>{characterSpecie}</span>
  </div>
}

CharacterItem.propTypes = {
  name: PropTypes.string,
  specie: PropTypes.string,
}

export default CharacterItem;