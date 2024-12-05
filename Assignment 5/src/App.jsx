import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeView from "./Views/HomeView";
import LoginView from "./Views/LoginView";
import RegisterView from "./Views/RegisterView";
import MovieView from "./Views/MovieView";
import GenreView from "./Views/GenreView";
import DetailView from "./Views/DetailView";

import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<HomeView />} />
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