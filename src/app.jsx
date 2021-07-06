import React, { useState } from "react";
import Films from "./components/Films";
import People from "./components/People";
import ExtraCard from "./components/ExtraCard";

const App = () => {
  const [filmsLoaded, setFilmsLoaded] = useState()
  const [peopleLoaded, setPeopleLoaded] = useState()

  const handleFilmsClick = () => {
    setFilmsLoaded(true);
    setPeopleLoaded(false);
  };
  const handlePeopleClick = () => {
  setPeopleLoaded(true);
  setFilmsLoaded(false);
  };
  if (filmsLoaded === undefined && peopleLoaded === undefined) {
  return (
    <>
      <div className="container-fluid d-flex flex-column justify-content-center mt-2 align-content-center">
        <h1 className="">
          <u>株式会社スタジオジブリ</u>
        </h1>
        <h1 className="">Studio Ghibli</h1>
      </div>
      <div>
        <button onClick={handleFilmsClick}>Load Films</button>
        <button onClick={handlePeopleClick}>Load People</button>
        <ExtraCard />
      </div>
    </>
  );} else if (filmsLoaded === true){
    return (
        <>
          <div className="container-fluid d-flex flex-column justify-content-center mt-2 align-content-center">
            <h1 className="">
              <u>株式会社スタジオジブリ</u>
            </h1>
            <h1 className="">Studio Ghibli</h1>
          </div>
          <div>
            <button onClick={handleFilmsClick}>Load Films</button>
            <button onClick={handlePeopleClick}>Load People</button>
            <Films />
          </div>
        </>
    )
}else if (peopleLoaded === true){
    return (
        <>
          <div className="container-fluid d-flex flex-column justify-content-center mt-2 align-content-center">
            <h1 className="">
              <u>株式会社スタジオジブリ</u>
            </h1>
            <h1 className="">Studio Ghibli</h1>
          </div>
          <div>
            <button onClick={handleFilmsClick}>Load Films</button>
            <button onClick={handlePeopleClick}>Load People</button>
            <People />
          </div>
        </>
    )
};}
export default App;

//  OLD CODE
// #filmsLanding.append()
//   };
//   useEffect(() => {
//     fetch("https://ghibliapi.herokuapp.com/films")
//       .then((res) => res.json())
//       .then((allFilms) => setFilms(allFilms));
//   });

//   if (films === false) {
//     return (
//       <>
//         <h1>Hello from App Components</h1>
//         <button onClick={handleButonClick}>Load Films</button>
// <div id="filmsLanding">
//   {films.map((film) => (
//     <div className="col md-6" key={`user-card ${film.id}`}>
//       <div className="card shadow my-2">
//         <div className="card-body">
//           <h3 className="card-title">{film.title}</h3>
//           <p className="">{film.description}</p>
//           <h5>
//             {film.original_title} - {film.release_date}
//           </h5>
//         </div>
//       </div>
//     </div>
//   ))}
//         </div>
//       </>
//     );
//   }
// };
