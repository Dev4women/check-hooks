import PropTypes from 'prop-types';
import React from 'react'

export default function Movie(props) {
    const {title , overview , posterUrl, rating} = props;
    return (
        <div className = "movieCart">
        <img src={posterUrl} alt={title} className = "moviePoster"/>
           <div className = "movieDetail">
           <h4>{title}</h4>
           <span className ="movieRate" >{rating}</span>
           </div> 
           <div className = "overview" >
               <h3>overview : </h3>
               <p>{overview}</p>
           </div>
        </div>
    )
}
Movie.prototype= {
    title: PropTypes.string,
    overview:PropTypes.string
}
