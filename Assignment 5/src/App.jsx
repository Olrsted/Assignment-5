import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeView from "./Views/HomeView";
import LoginView from "./Views/LoginView";
import RegisterView from "./views/RegisterView";
import MovieView from "./views/MoviesView";
import GenreView from "./views/GenreView";
import DetailView from "./views/DetailView";

import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/register" element={<RegisterView />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/movie" element={<MovieView />}>
            <Route path="genre/:id" element={<GenreView />} />
            <Route path="details/:id" element={<DetailView />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>

  )
}

export default App