import { useState, useCallback, useRef, useEffect } from "react";
import PropTypes from "prop-types";

const AddMovieForm = ({handleAddMovie, setwrapperClass}) => {
  const [values, setValues] = useState({
    new_title: "",
    new_description: "",
    new_posterUrl: "",
    new_rating: "",
  });

  const handleValueChange = useCallback((event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
    console.log("event.target.name:",event.target.value)
  }, [values]);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();

      const data = {
        new_title:values.new_title,
        new_description:values.new_description,
        new_posterUrl:values.new_posterUrl,
        new_rating: values.new_rating
      }
      handleAddMovie(data);
      setwrapperClass("");
    },
    [handleAddMovie,setwrapperClass,values]
  );

  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) ref.current.focus();
  }, []);

  return (
    <form onSubmit={handleSubmit} className="addMovie_form">
      <label htmlFor="title">Title</label>
      <input
        ref={ref}
        name="new_title"
        type="text"
        placeholder="Entre a movie's title"
        onChange={handleValueChange}
        value={values.new_title}
        required
      />
      <label htmlFor= "overview">Overview</label>
      <textarea
        id= "description"
        name="new_description"
        placeholder="Entre a movie's description"
        onChange={handleValueChange}
        value={values.new_description}
        required
      />
      <label htmlFor= "posterUrl">Poster Url</label>
      <input
        name="new_posterUrl"
        type="text"
        placeholder="Entre a movie's poster Url"
        onChange={handleValueChange}
        value={values.new_posterUrl}
        required
      />
      <label htmlFor= "rating">Rating</label>
      <input
        name="new_rating"
        type="text"
        placeholder="Entre a movie's rating"
        onChange={handleValueChange}
        value={values.new_rating}
        required
      />
      <input type="submit" value="Add movie" />
    </form>
  );
};

AddMovieForm.propTypes ={
  handleAddMovie: PropTypes.func,
  setwrapperClass: PropTypes.func
}
export default AddMovieForm;
