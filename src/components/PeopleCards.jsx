import React from "react";

const PeopleCards = (props) => {
    // let handleBtnClick = (e) => {
    //     e.preventDefault();
    //   };
  return (
    <>
      <main className=" ">
        <section className="w-25">
          <div className="card-deck">
            <div className="card">
              <h5 className="card-header">
                {props.people.name}
              </h5>
              <div className="card-body">
                <h5 className="card-title">{props.people.gender}, {props.people.age}</h5>
                <a
                  href={props.people.url}
                //   onClick={handleBtnClick}
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

export default PeopleCards;
