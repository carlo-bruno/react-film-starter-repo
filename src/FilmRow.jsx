import React, { Component } from "react";
import FilmPoster from "./FilmPoster";
import Fave from "./Fave";

class FilmRow extends Component {
  render() {
    let { title, poster_path, release_date } = this.props.film;
    let year = new Date(release_date).getFullYear();

    return (
      <div
        className="film-row"
        onClick={() => this.props.onDetailsClick(title)}>
        <FilmPoster poster_path={poster_path} />

        <div className="film-summary">
          <h1>{title}</h1>
          <p>{year}</p>
        </div>
        <Fave
          isFave={this.props.isFave}
          onFaveToggle={() =>
            this.props.onFaveToggle(this.props.film)
          }
        />
      </div>
    );
  }
}

export default FilmRow;
