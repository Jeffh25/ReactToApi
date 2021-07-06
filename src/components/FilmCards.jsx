import React from "react";

const Cards = (props) => {
  // let handleBtnClick = (e) => {
  //   e.preventDefault();
  // };
  return (
    <>
      <main className="container">
        <section className="row justify-content-center">
          <div className="card-deck">
            <div className="card">
              <h5 className="card-header">
                {props.films.original_title} - {props.films.release_date}
              </h5>
              <div className="card-body">
                <h5 className="card-title">{props.films.title}</h5>
                <p className="card-text">{props.films.description}</p>
                <a
                  href={props.films.url}
                  // onClick={handleBtnClick}
                  className="btn btn-success"
                >
                  Go To API
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Cards;
