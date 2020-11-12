import React from "react";

class MainBanner extends React.Component {
  render() {
    return (
      <div className="home-area home-slides owl-carousel owl-theme">
        <div className="main-banner item-bg1">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className="main-banner-content">
                  <span className="sub-title">Avec SMS ASSURANCES</span>
                  <h1>Votre entreprise est sereine et pérenne</h1>
                  <p>
                    La Multirisque professionnelle accompagnz votre entreprise
                    dans son évolution en la couvrant comme il faut en cas de
                    sinistre.
                  </p>
                  <div className="btn-box">
                    <a href="index.html#devis" className="default-btn">
                      Obtenir un devis <span />
                    </a>
                    <a href="contact.html" className="optional-btn">
                      Contactez-nous <span />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-banner item-bg2">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className="main-banner-content">
                  <span className="sub-title">AVEC SMS ASSURANCES</span>
                  <h1>Conduisez avec joie, sérénité et sécurité</h1>
                  <p>
                    Parce que vous devez au maximum éviter de stresser, nous
                    vous laissons vous concentrer sur la route et nous nous
                    chargeons du reste.
                  </p>
                  <div className="btn-box">
                    <a href="index.html#devis" className="default-btn">
                      Obtenir un devis <span />
                    </a>
                    <a href="contact.html" className="optional-btn">
                      Contactez-nous <span />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-banner item-bg5">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className="main-banner-content">
                  <span className="sub-title">Avec SMS ASSURANCES</span>
                  <h1>Profitez de chaque étape de votre vie</h1>
                  <p>
                    Chaque étape de votre vie est unique c'est pourquoi nous
                    contribuons à l'embellir avec des assurances pour toute
                    votre famille.
                  </p>
                  <div className="btn-box">
                    <a href="index.html#devis" className="default-btn">
                      Obtenir un devis <span />
                    </a>
                    <a href="contact.html" className="optional-btn">
                      Contactez-nous <span />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainBanner;
