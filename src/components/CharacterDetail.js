import React from 'react';
import { Link } from 'react-router-dom';

const CharacterDetail = props => {
  console.log(props)
  return <div className="card__container">
    <Link to="/"></Link>
      <img className="card__container-img" src={props.character.image} alt={props.character.name}/>
      <div className="card__container-detail">
        <h3>{props.character.name}</h3>
        <span>Status: {props.character.status} </span>
        <span>Species: {props.character.species} </span>
        <span>Origin: {props.character.origin.name} </span>
        <span>Episodes: {props.character.episode.length}</span>
      </div>
  </div>
}


export default CharacterDetail;