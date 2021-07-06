import React from 'react';

const ExtraCard = () => {
    return (
        <>
          <main className="container">
        <section className="row justify-content-center">
          <div className="card-deck">
            <div className="card">
              <h5 className="card-header">
                  Thank You In Advance For The Nice Words Thank You
              </h5>
              <div className="card-body">
                <h5 className="card-title">I Finally Finished 😭</h5>
                <p className="card-text">Please Be Nice This Took Way To Long, I was getting over a sinus infection, so positive vibes only. Ugh that's so kitschy but ehh...</p>
                <form>
                <input className='input' type="text" placeholder='Something Nice' onChange={(e) => e.target.value}/>
                <button className="bg-success">Post It.</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
        </>
    )
}
export default ExtraCard;