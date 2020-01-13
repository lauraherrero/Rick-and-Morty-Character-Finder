import React from 'react';

const Search = props => {
  const handleInputSearch = (event) => {
    props.handleInputSearch(event.target.value)
  }
  return <form className="form-search">
    <label className="label">Busca tu personaje favorito</label>
    <input className="input-search" type="search" name="search" value={props.value} onChange={handleInputSearch}></input>
  </form>
}

export default Search;