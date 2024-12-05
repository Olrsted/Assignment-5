import "./MovieView.css";
import Header from "../components/Header";
import Genre from "../components/Genre";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

function MovieView() {
    const genres = [
        { id: 28, genre: 'Action' },
        { id: 12, genre: 'Adventure' },
        { id: 16, genre: 'Animation' },
        { id: 80, genre: 'Comedy' },
        { id: 18, genre: 'Drama' },
        { id: 36, genre: 'Horror' },
        { id: 9648, genre: 'Mystery' },
        { id: 10749, genre: 'Romance' },
        { id: 53, genre: 'Thriller' },
        { id: 37, genre: 'Western' }
      ];

    return (
        <div>
            <Header />
            <div className="middle-container">
                <Genre genreList={genres} />
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default MovieView;