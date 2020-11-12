import React from "react";

class Cia extends React.Component {
  render() {
    return (
      <section className="quote-area ptb-100 pb-0 mtb-14">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">Police d'assurances</span>
            <h2>CIA BY GNA ASSURANCES</h2>
          </div>
          <div className="row d-flex justify-content-center">
            <iframe
              width="90%"
              height={532}
              src="https://www.youtube.com/embed/AVlzmhTxkeI"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Cia;
