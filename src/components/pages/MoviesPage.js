import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MoviesList from "../MoviesList";
import { fetchMovies, deleteMovie } from "../../actions/movies";

export class MoviesPage extends Component {
  static propTypes = {
    movies: PropTypes.object.isRequired,
    deleteMovie: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.fetchMovies();
  }

  render() {
    // console.log(this.props);
    return (
      <div>
        <h2>Film Listesi</h2>
        <MoviesList
          movies={this.props.movies}
          deleteMovie={this.props.deleteMovie}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ movies }) => {
  return {
    movies
  };
};

const mapDispatchToProps = {
  fetchMovies,
  deleteMovie
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesPage);
