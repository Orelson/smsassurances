import React from "react";

class WhyUs extends React.Component {
  render() {
    return (
      <section className="why-choose-us-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-5 col-md-12">
              <div className="why-choose-us-slides owl-carousel owl-theme">
                <div className="why-choose-us-image bg1">
                  <img src={"assets/img/why-choose-img1.jpg"} alt="image" />
                </div>
                <div className="why-choose-us-image bg2">
                  <img src={"assets/img/why-choose-img2.jpg"} alt="image" />
                </div>
                <div className="why-choose-us-image bg3">
                  <img src={"assets/img/why-choose-img3.jpg"} alt="image" />
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-12">
              <div className="why-choose-us-content">
                <div className="content">
                  <div className="title">
                    <span className="sub-title">Nos avantages</span>
                    <h2>Pourquoi nous choisir</h2>
                    <p>
                      Vous avez plus d'une raison de faire confiance à SMS
                      Assurances. Nous mettons professionnalisme, rigueur et
                      sociabilité dans ce que nous faisons.
                    </p>
                  </div>
                  <ul className="features-list">
                    <li>
                      <div className="icon">
                        <i className="flaticon-like" />
                      </div>
                      <span>Une équipe expérimentée</span>
                      Pour vous conseiller et vous assister dans vos démarches.
                    </li>
                    <li>
                      <div className="icon">
                        <i className="flaticon-customer-service" />
                      </div>
                      <span>Disponibilité</span>
                      Nous restons à votre écoute et nous vous comprenons.
                    </li>
                    <li>
                      <div className="icon">
                        <i className="flaticon-care" />
                      </div>
                      <span>Une équipe de passionnés</span>
                      Une passion, au délà des services que nous offrons.
                    </li>
                    <li>
                      <div className="icon">
                        <i className="flaticon-team" />
                      </div>
                      <span>Le client en premier</span>
                      Notre process met le client au coeur de nos offres de
                      produits.
                    </li>
                    <li>
                      <div className="icon">
                        <i className="flaticon-policy" />
                      </div>
                      <span>Sans engagement</span>
                      Vous êtes libres de resilier votre contrat au besoin
                    </li>
                    <li>
                      <div className="icon">
                        <i className="flaticon-education" />
                      </div>
                      <span>Développez vous</span>
                      Développez sereinement votre activité, nous vous assurons.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default WhyUs;
