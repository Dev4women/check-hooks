import React from "react"
import PropTypes from "prop-types";


export default function Filter({searchTerm, handleChange}) {

  
    return (
    <div className="filterMovies">
      <input
        type = "search"
        name = "filterMovies"
        id="filter-movies"
        placeholder="Search fvrt movies.."
        value= {searchTerm}
        onChange={handleChange}
      />
    </div>
    )
}
Filter.propTypes ={
  searchTerm: PropTypes.string,
  handleChange: PropTypes.func
}
