import list from "./list";
import React, { useState } from "react";
import MoviesList from "./components/MoviesList";
import Filter from "./components/Filter";
import AddMovieForm from "./components/AddMovieForm";
import PropTypes from "prop-types";
import "./App.css";

function App() {

 const [wrapperClass, setwrapperClass] = useState("");
 const revealMovieForm = () =>
  setwrapperClass(wrapperClass === "" ? "active" : "");
  const [movies, setMovies] = useState(list);
  const handleAddMovie = (data) => {
    setMovies([
      ...movies,
      {
        id: movies.length+1,
        title: data.new_title,
        overview: data.new_description,
        posterUrl: data.new_posterUrl,
        rating:data.new_rating,
      },
    ]);
  };
  const [searchTerm, setSerchTerm] = useState("");
  const handleChange = (event) => {
    let value = event.target.value;
    console.log("value:", value);
    setSerchTerm(value);
    if (value) {
       const results = list.filter((movie) =>
        movie.title.toLowerCase().includes(value.toLowerCase())
      );
      console.log("my fvrt movies are :", results);
      setMovies(results);
      
    } else {
      setMovies(list);
    }
  };
  return (
    <div className="main">
      <div className="header">
        <h2>Movies Show</h2>
        <button className="add-btn" onClick={revealMovieForm}>
          <strong>+</strong> Add Movie
        </button>
      </div>
      <div className={`formWrapper + ${wrapperClass}`}>
        <AddMovieForm
          handleAddMovie={handleAddMovie}
          setwrapperClass={setwrapperClass}
        />
      </div>
      <Filter searchTerm={searchTerm} handleChange={handleChange} />
      <MoviesList movies={movies} />
    </div>
  );
};

AddMovieForm.propTypes ={
  handleAddMovie: PropTypes.func,
  setwrapperClass: PropTypes.func
}
Filter.propTypes ={
  searchTerm: PropTypes.string,
  handleChange: PropTypes.func
}
MoviesList.propTypes= {
  movies: PropTypes.arrayOf(PropTypes.object)
}

export default App;

