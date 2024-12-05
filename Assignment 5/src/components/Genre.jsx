import "./Genre.css";
import { useState} from "react";
import { useNavigate } from "react-router-dom";

function genre(props) {
  const [id, setId] = useState(null);
  const navigate = useNavigate();

  function genrePage(id) {
    navigate(`genre/${id}`);
  }

  const handleClick = (item) => {
    setId(item.id);
    genrePage(item.id)
  };


  return (
    <div className="genre-container">
      <h className="genre-title">Genres</h>
      <ol className="ordered-list">
        {props.genreList.map((item) => (
          <li key={item.id} className="genre-list" onClick={() => handleClick(item)}>
            {item.genre}
          </li>
        ))}
      </ol>
    </div>
  )
}
export default genre;