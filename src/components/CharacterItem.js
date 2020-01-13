import React from 'react';

const CharacterItem = props => {
  return <div className="container-item">
    <img className="img" src={props.characterImg} alt={props.characterName}/>
    <h3>{props.characterName}</h3>
    <span>{props.characterSpecie}</span>
  </div>
}

export default CharacterItem;