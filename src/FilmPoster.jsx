import React, { Component } from "react";

export class FilmPoster extends Component {
  render() {
    let posterUrl = `https://image.tmdb.org/t/p/w780/${
      this.props.poster_path
    }`;
    return <img src={posterUrl} alt="film poster" />;
  }
}

export default FilmPoster;
