import React, { Component } from "react";

export class Movies extends Component {
  render() {
    return (
      <table className="movies">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
          </tr>
        </thead>
        <tbody>
          {this.props.movies.map((movie) => {
            return (
              <tr>
                <td>{movie.id}</td>
                <td>{movie.title}</td>
                <td>{movie.genres}</td>
                <td>{movie.stock}</td>
                <td>{movie.rate}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default Movies;
