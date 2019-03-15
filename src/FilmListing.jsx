import React, { Component } from "react";

import FilmRow from "./FilmRow";

class FilmListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "all",
      faves: []
    };
  }

  handleFilterClick = (filter) => {
    console.log(`Setting filter to ${filter}`);
    this.setState(
      {
        filter
      },
      () => {
        console.log("current state", this.state);
      }
    );
  };

  handleFaveToggle = (film) => {
    console.log("Toggle fave", film);
    let newFaves = this.state.faves.slice();
    const filmIndex = newFaves.indexOf(film);
    if (filmIndex >= 0) {
      newFaves.splice(filmIndex, 1);
    } else {
      newFaves.push(film);
    }
    this.setState({ faves: newFaves });
  };

  render() {
    const filmsToDisplay =
      this.state.filter === "all"
        ? this.props.films
        : this.state.faves;
    let allFilms = filmsToDisplay.map((film, i) => (
      <FilmRow
        key={i}
        film={film}
        onFaveToggle={this.handleFaveToggle}
        isFave={this.state.faves.includes(film) ? true : false}
        onDetailsClick={this.props.onDetailsClick}
      />
    ));

    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">
          <div
            className={`film-list-filter
            ${this.state.filter === "all" ? "is-active" : null}`}
            onClick={() => this.handleFilterClick("all")}>
            ALL
            <span className="section-count">
              {this.props.films.length}
            </span>
          </div>
          <div
            className={`film-list-filter
            ${this.state.filter === "faves" ? "is-active" : null}`}
            onClick={() => this.handleFilterClick("faves")}>
            FAVES
            <span className="section-count">
              {this.state.faves.length}
            </span>
          </div>
        </div>

        {allFilms}
      </div>
    );
  }
}

export default FilmListing;
