import { Component } from "react";
import { Movies, NavBar, Genres, Loader, Total } from "./components";
import { paginate } from "./helpers/paginate";
import _ from "lodash";
import { fakeGetGenres, fakeGetMovies } from "./services";
import { toast } from "react-toastify";

class App extends Component {
  state = {
    loading: true,
    movies: [],
    genres: [],
    genreID: "all",
    currentPage: 1,
    pageSize: 3,
    columnSort: {
      path: "title",
      order: "asc",
    },
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

  handleDeleteMovie = (movieID) => {
    const movies = this.state.movies.filter((movie) => movie._id !== movieID);
    this.setState({ movies });
    toast.success(`Deleted Movie = ${movieID}`);
    toast.error(`Deleted Movie = ${movieID}`);
    toast.warn(`Deleted Movie = ${movieID}`);
  };

  componentDidMount() {
    const movies = fakeGetMovies();
    const genres = fakeGetGenres();

    genres.unshift({ name: "All", _id: "all" });

    setTimeout(() => this.setState({ loading: false, movies, genres }), 1000);
  }

  render() {
    if (this.state.loading) return <Loader />;

    const { movies, genres, genreID, pageSize, currentPage, columnSort } =
      this.state;

    const filteredMovies = movies.filter(
      (movie) => genreID === "all" || movie.genre._id === genreID
    );

    const sortedMovies = _.orderBy(
      filteredMovies,
      columnSort.path,
      columnSort.order
    );

    const paginatedMovies = paginate(sortedMovies, pageSize, currentPage);

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
                total={total}
                movies={paginatedMovies}
                onDeleteMovie={this.handleDeleteMovie}
                onPageChange={this.handlePageChange}
                onLike={this.handleLike}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
