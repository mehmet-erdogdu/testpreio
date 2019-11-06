import React, { Component } from "react";
import { Button, Message, Image, Form } from "semantic-ui-react";
import InlineError from "./InlineError";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

class NewMovieForm extends Component {
  state = {
    _id: this.props.movie ? this.props.movie._id : null,
    title: this.props.movie ? this.props.movie.title : "",
    cover: this.props.movie ? this.props.movie.cover : "",
    errors: {},
    redirect: false
  };

  static propTypes = {
    onNewMovieSubmit: PropTypes.func.isRequired,
    onUpdateMovieSubmit: PropTypes.func.isRequired
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { movie } = nextProps.newMovie;
    if (movie.title && movie.title !== this.state.title) {
      this.setState({ title: movie.title, cover: movie.cover });
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: [e.target.value]
    });
  };

  onSubmit = e => {
    const errors = this.validate();
    this.setState({
      errors,
      redirect: true
    });

    const _id = this.state._id || this.props.newMovie.movie._id;
    if (Object.keys(errors).length === 0) {
      if (!_id) this.props.onNewMovieSubmit(this.state);
      else this.props.onUpdateMovieSubmit({ ...this.state, _id });
    }
  };

  validate = e => {
    const errors = {};
    if (!this.state.title) errors.title = "Başlık girilmedi";
    if (!this.state.cover) errors.cover = "Resim seçilmedi";
    return errors;
  };

  render() {
    const { errors } = this.state;
    const form = (
      <Form
        onSubmit={this.onSubmit}
        loading={
          this.props.newMovie.fetching || this.props.newMovie.movie.fetching
        }
      >
        <Form.Field error={!!errors.title}>
          <label>Film Adı</label>
          {errors.title && <InlineError message={errors.title} />}
          <input
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
            placeholder="Film Adı"
          />
        </Form.Field>
        <Form.Field error={!!errors.cover}>
          <label>Resim Adresi</label>
          {errors.cover && <InlineError message={errors.cover} />}
          <input
            name="cover"
            value={this.state.cover}
            onChange={this.handleChange}
            placeholder="Film Resmi"
          />
          <br />
          <br />
          <Image src={this.state.cover} size="small" />
          <div className="clearfix"></div>
        </Form.Field>
        <Button primary type="submit">
          Kaydet
        </Button>
        {this.props.newMovie.error.response && (
          <Message negative>
            <Message.Header>
              Üzgünüz kaydetme işlemi başarısız oldu!
            </Message.Header>
            <p>{this.props.newMovie.error.message}</p>
          </Message>
        )}
      </Form>
    );

    return (
      <div>
        {this.props.newMovie.done && this.state.redirect ? (
          <Redirect to="/movies" />
        ) : (
          form
        )}
      </div>
    );
  }
}
export default NewMovieForm;
