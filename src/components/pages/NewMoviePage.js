import React, { Component } from "react";
import NewMovieForm from "../NewMovieForm";
import { connect } from "react-redux";
import {
  onNewMovieSubmit,
  onUpdateMovieSubmit,
  fetchMovie
} from "../../actions/newMovies";

class NewMoviePage extends Component {
  componentDidMount() {
    const { match } = this.props;
    const id = match.params._id;
    if (!this.props.movie && id) {
      this.props.fetchMovie(id);
    }
  }

  render() {
    return (
      <div>
        <h3>Yeni Film Ekle</h3>
        <NewMovieForm
          movie={this.props.movie}
          newMovie={this.props.newMovie}
          onNewMovieSubmit={this.props.onNewMovieSubmit}
          onUpdateMovieSubmit={this.props.onUpdateMovieSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ newMovie, movies }, props) => {
  return {
    newMovie,
    movie: movies.movieList.find(item => item._id === props.match.params._id)
  };
};

const mapDispatchToProps = {
  onNewMovieSubmit,
  onUpdateMovieSubmit,
  fetchMovie
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewMoviePage);
