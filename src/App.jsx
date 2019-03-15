import React, { Component } from "react";
import "./index.css";

import TMDB from "./TMDB";
import FilmListing from "./FilmListing";
import FilmDetails from "./FilmDetails";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      films: TMDB.films,
      current: {}
    };
  }

  handleDetailsClick = (film) => {
    console.log(`Fetching details for ${film}`);
    this.setState({ current: film });
  };

  render() {
    return (
      <div className="App">
        <div className="film-library">
          <FilmListing
            films={this.state.films}
            onDetailsClick={this.handleDetailsClick}
          />
          <FilmDetails film={this.state.current} />
        </div>
      </div>
    );
  }
}

export default App;
