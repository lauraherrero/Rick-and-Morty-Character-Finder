import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CharacterDetail = props => {
  console.log(props)
  const matchId = props.characters.filter(character => parseInt(props.characterDetail) === character.id)
  return <div className="card__container">
    {matchId.map((item, index) =>{
      return (
      <div key={index} className="card__container-content">
        <img className="card__container-img" src={item.image} alt={item.name}/>
        <div className="card__container-detail">
          <h3 className="card__container-title">{item.name}</h3>
          <p className="card__container-info">Status: <span className="card__container-text">{item.status}</span> {item.status === 'Dead'? <i className="fas fa-skull-crossbones"></i>: <i className="fas fa-heart"></i>}</p>
          <p className="card__container-info">Species: <span className="card__container-text">{item.species}</span> {item.species === 'Alien' ? <i className="fab fa-reddit-alien"></i>:<i className="fas fa-male"></i>} </p>
          <p className="card__container-info">Origin: <span className="card__container-text"> {item.origin.name}</span></p>
          <p className="card__container-info">Episodes: <span className="card__container-text">{item.episode.length}</span></p>
        </div>
      </div>
    )
  })}
    <Link className="link-back" to="/"><i className="fas fa-hand-point-left"></i>Volver</Link>
    
  </div>
}

CharacterDetail.propTypes = {
  name: PropTypes.string,
  status: PropTypes.string,
  species: PropTypes.string,
  origin: PropTypes.string,
  episodes: PropTypes.string,
  characters: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default CharacterDetail;