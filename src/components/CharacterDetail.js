import React from 'react';
import { Link } from 'react-router-dom';

const CharacterDetail = props => {
  console.log(props)
  const matchId = props.characters.filter(item => parseInt(props.characterDetail) === item.id)
  return <div className="card__container">
    {matchId.map(item =>{
      return (
      <div>
        <img className="card__container-img" src={item.image} alt={item.name}/>
        <div className="card__container-detail">
          <h3>{item.name}</h3>
          <span>Status: {item.status} </span>
          <span>Species: {item.species} </span>
          <span>Origin: {item.origin.name} </span>
          <span>Episodes: {item.episode.length}</span>
        </div>
      </div>
    )
  })}
    <Link className="link-back" to="/">Volver</Link>
    
  </div>
}

export default CharacterDetail;