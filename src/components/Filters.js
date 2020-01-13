import React from 'react';
import FilterSearch from './FilterSearch';
import FilterSelect from './FilterSelect';

const Filters = props => {
  console.log(props)
  return <div className="filters">
    <FilterSearch
      value={props.value}
      handleInputSearch={props.handleInputSearch}
    />
    <FilterSelect 
      handleSelect={props.handleSelect}
    />
  </div>
}


export default Filters;