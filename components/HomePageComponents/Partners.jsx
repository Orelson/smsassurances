import React from "react";

class Partners extends React.Component {
  render() {
    return (
      <section className="partner-area">
        <div className="container">
          <div className="partner-title">
            <h2>Nos partenaires</h2>
          </div>
          <div className="partner-slides owl-carousel owl-theme">
            <div className="single-partner-item">
              <a href="https://www.gna-assurances.com/" target="_blank">
                <img src={"/assets/img/partner-image/1.png"} alt="image" />
              </a>
            </div>
            <div className="single-partner-item">
              <a href="https://smsimmobilier.net/" target="_blank">
                <img src={"/assets/img/partner-image/2.png"} alt="image" />
              </a>
            </div>
            <div className="single-partner-item">
              <a href="https://www.africa-re.com/" target="_blank">
                <img src={"/assets/img/partner-image/3.png"} alt="image" />
              </a>
            </div>
            <div className="single-partner-item">
              <a
                href="https://www.ascoma.com/ascoma-conseil-et-courtier-en-assurances-monaco-france-afrique-107.html"
                target="_blank"
              >
                <img src={"/assets/img/partner-image/4.png"} alt="image" />
              </a>
            </div>
            <div className="single-partner-item">
              <a href="https://www.cica-re.com/" target="_blank">
                <img src={"/assets/img/partner-image/5.png"} alt="image" />
              </a>
            </div>
            <div className="single-partner-item">
              <a href="https://mcicareci.com/" target="_blank">
                <img src={"/assets/img/partner-image/6.png"} alt="image" />
              </a>
            </div>
            <div className="single-partner-item">
              <a href="https://www.olea.africa/" target="_blank">
                <img src={"/assets/img/partner-image/7.png"} alt="image" />
              </a>
            </div>
            <div className="single-partner-item">
              <a
                href="https://www.willistowerswatson.com/fr-CI"
                target="_blank"
              >
                <img src={"/assets/img/partner-image/8.png"} alt="image" />
              </a>
            </div>
            <div className="single-partner-item">
              <a href="https://www.minesimportexport.com" target="_blank">
                <img src={"/assets/img/partner-image/9.png"} alt="image" />
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Partners;
