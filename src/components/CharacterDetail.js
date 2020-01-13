import React from 'react';
import { Link } from 'react-router-dom';

const CharacterDetail = props => {
  console.log(props)
  return <div>
    <Link to="/"></Link>
    <img src={props.character.image} alt={props.character.name}/>
    <h3>{props.character.name}</h3>
    <span>Status: {props.character.status} </span>
    <span>Species: {props.character.species} </span>
    <span>Origin: {props.character.origin.name} </span>
    <span>Episodes: {props.character.episode.length}</span>
  </div>
}


export default CharacterDetail;