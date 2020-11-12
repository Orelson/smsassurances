import React from "react";

class AboutArea extends React.Component {
  render() {
    return (
      <section className="about-area ptb-100 bg-f8f8f8">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-title">
                <span>A propos de nous</span>
                <h2>L'Agent Général de GNA à Marcory</h2>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="about-text">
                <p>
                  Notre mission principale est de vous délivrer l'assurance
                  adéquate qui répond parfaitement à vos besoins dans les plus
                  brefs délais.
                </p>
                <a href="/about" className="read-more-btn">
                  En savoir plus <i className="flaticon-right-chevron" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutArea;
