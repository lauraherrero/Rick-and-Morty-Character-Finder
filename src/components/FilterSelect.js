import React from 'react';

const FilterSelect = props => {
  const handleSelect = (event) => {
    props.handleSelect(event.target.value)
  }
  return <form className="form-select">
    <select onChange={handleSelect}>
      <option value="">Todos</option>
      <option value="alive">Vivo</option>
      <option value="dead">Muerto</option>
      <option value="unknown">Desconodio</option>
    </select>
  </form>
}


export default FilterSelect;