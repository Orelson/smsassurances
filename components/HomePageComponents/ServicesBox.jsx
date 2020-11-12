import React from "react";

class ServicesBox extends React.Component {
  render() {
    return (
      <section className="services-boxes-area bg-f8f8f8">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-box">
                <div className="image">
                  <img
                    src={"/assets/img/featured-services-image/1.jpg"}
                    alt="image"
                  />
                </div>
                <div className="content">
                  <h3>
                    <a href="##">Un processus simplifié</a>
                  </h3>
                  <p>
                    Simple, sécurisé et sans prise de tête, un processus très
                    optimisé
                  </p>
                  <div className="icon">
                    <img src={"/assets/img/icon1.png"} alt="image" />
                  </div>
                  <div className="shape">
                    <img src={"/assets/img/umbrella.png"} alt="image" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-box">
                <div className="image">
                  <img
                    src={"/assets/img/featured-services-image/2.jpg"}
                    alt="image"
                  />
                </div>
                <div className="content">
                  <h3>
                    <a href="##">Les prix les plus bas</a>
                  </h3>
                  <p>
                    Si vous trouvez moins cher ailleurs, nous vous remboursons
                    le double
                  </p>
                  <div className="icon">
                    <img src={"assets/img/icon2.png"} alt="image" />
                  </div>
                  <div className="shape">
                    <img src={"assets/img/umbrella.png"} alt="image" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
              <div className="single-box">
                <div className="image">
                  <img
                    src={"assets/img/featured-services-image/3.jpg"}
                    alt="image"
                  />
                </div>
                <div className="content">
                  <h3>
                    <a href="##">Satisfaction garantie</a>
                  </h3>
                  Nore but essentiel est la satisfaction de tous nos clients
                  <div className="icon">
                    <img src={"assets/img/icon3.png"} alt="image" />
                  </div>
                  <div className="shape">
                    <img src={"assets/img/umbrella.png"} alt="image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ServicesBox;
