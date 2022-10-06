import React from 'react'
import FilterItem from './filteritem'
import './filters.css'

const Filters = ({filterlist}) => {
  return (
    <div className='filters'>
        {filterlist && filterlist.map((filter)=>
        {
            return <FilterItem filter={filter} key={filter.id}/>
        }
        )}
    </div>
  )
}

export default Filters