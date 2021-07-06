import React, { useEffect, useState } from "react";
import Cards from "./FilmCards";

const Films = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/films")
        // .then((res) => console.log(res))
      .then(res => res.json())
      .then(allFilms => setFilms(allFilms));
  }, []);

  return (
    <>
      {films.map(films => (<Cards films={films} key={films.release_date}/>))}
      {/* <div > {films.map(films => (
        <div className="card-body">hey</div>
     ))} </div> */}
    </>
  );
};
/* Why Line 16 Worked? */
export default Films;
