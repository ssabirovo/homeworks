import { Component } from "react";
import NavBar from "./components/nav-bar";
import Genres from "./components/genres";
import Movies from "./components/movies";
import Loader from "./components/loader";
import Total from "./components/total";
import { paginate } from "./helpers/paginate";
import { fakeGetMovies } from "./services/fake-get-movies";
import { fakeGetGenres } from "./services/fake-get-genres";

class App extends Component {
  state = {
    loading: true,
    movies: [],
    genres: [],
    genreID: "all",
    currentPage: 1,
    pageSize: 3,
  };

  handleSelectGenre = (newGenreID) => {
    this.setState({ genreID: newGenreID, currentPage: 1 });
  };

  handlePageChange = (newPage) => {
    this.setState({ currentPage: newPage });
  };

  handleLike = (movieID) => {
    const movies = [...this.state.movies];
    const movie = movies.find((movie) => movie._id === movieID);

    movie.isLiked = !movie.isLiked;
    this.setState({ movies });
  };

  componentDidMount() {
    const movies = fakeGetMovies();
    const genres = fakeGetGenres();

    genres.unshift({ name: "All", _id: "all" });

    setTimeout(() => this.setState({ loading: false, movies, genres }), 1000);
  }

  render() {
    if (this.state.loading) return <Loader />;

    const { movies, genres, genreID, pageSize, currentPage } = this.state;

    const filteredMovies = movies.filter(
      (movie) => genreID === "all" || movie.genre._id === genreID
    );

    const paginatedMovies = paginate(filteredMovies, pageSize, currentPage);

    const total = filteredMovies.length;
    return (
      <>
        <NavBar />
        <div className='container pt-4'>
          <div className='row d-flex'>
            <Genres
              genres={genres}
              genreID={genreID}
              onSelect={this.handleSelectGenre}
            />
            <div className='col'>
              <Total total={total} />
              <Movies
                currentPage={currentPage}
                pageSize={pageSize}
                onPageChange={this.handlePageChange}
                movies={paginatedMovies}
                onLike={this.handleLike}
                total={total}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
