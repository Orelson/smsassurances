import React from "react";

class CTR extends React.Component {
  render() {
    return (
      <section className="ctr-area">
        <div className="container">
          <div className="ctr-content">
            <h2>Des assurances pour vous et votre famille</h2>
            <p>Aux meilleurs prix et meilleurs avantages.</p>
            <a href="#devis" className="default-btn">
              Comparer maintenant <i className="flaticon-right-chevron" />
              <span />
            </a>
          </div>
          <div className="ctr-image">
            <img src={"./assets/img/ctr-img.jpg"} alt="image" />
          </div>
          <div className="shape">
            <img src={"assets/img/bg-dot3.png"} alt="image" />
          </div>
        </div>
      </section>
    );
  }
}

export default CTR;
