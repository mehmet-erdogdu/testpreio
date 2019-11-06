import React from "react";
import PropTypes from "prop-types";
import MovieCard from "./MovieCard";
import { Grid } from "semantic-ui-react";
import { DotLoader } from "react-spinners";

const override = `
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const MoviesList = ({ movies, deleteMovie }) => {
  const emptyMessage = <p>Film bulunamadı</p>;
  const moviesList = (
    <div>
      <DotLoader
        css={override}
        sizeUnit={"px"}
        size={100}
        color={"#ff3333"}
        loading={movies.fetching}
      />
      {movies.error.response ? (
        <h3>Hata, veri gelmedi.</h3>
      ) : (
        <Grid stackable columns={4}>
          {movies.movieList.map(movie => (
            <MovieCard
              key={movie._id}
              deleteMovie={deleteMovie}
              movie={movie}
            />
          ))}
        </Grid>
      )}
    </div>
  );

  return <div>{movies.length === 0 ? emptyMessage : moviesList}</div>;
};

MoviesList.propTypes = {
  movies: PropTypes.shape({
    movieList: PropTypes.array.isRequired
  }).isRequired
};

export default MoviesList;
