import React, { useEffect, useState } from "react";

const App = () => {
  const [films, setFilms] = useState(false);
  //   const filmCards =(
  //               <div className="card-body">
  //                   <h3 className='card-title'>{film.title}</h3>
  //                   <p className=''>{film.description}</p>
  //                   <h5>{film.original_title} - {film.release_date}</h5>
  //               </div>)
  console.log(useState());

  const handleButonClick = () => {
    // #filmsLanding.append()
  };
  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((allFilms) => setFilms(allFilms));
  });

  if (films === false) {
    return (
      <>
        <h1>Hello from App Components</h1>
        <button onClick={handleButonClick}>Load Films</button>
        <div id="filmsLanding">
          {films.map((film) => (
            <div className="col md-6" key={`user-card ${film.id}`}>
              <div className="card shadow my-2">
                <div className="card-body">
                  <h3 className="card-title">{film.title}</h3>
                  <p className="">{film.description}</p>
                  <h5>
                    {film.original_title} - {film.release_date}
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
};

export default App;
