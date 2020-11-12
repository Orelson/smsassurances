import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <>
        <footer className="footer-area">
          <div className="container">
            <div className="subscribe-area">
              <div className="row align-items-center">
                <div className="col-lg-5 col-md-12">
                  <div className="subscribe-content">
                    <h2>Abonnez-vous à notre Newsletter</h2>
                    <p>
                      Recevez gratuitement dans votre boîte mail des conseils
                      gratuits en assurances. Inscrivez-vous maintenant via le
                      formulaire.
                    </p>
                  </div>
                </div>
                <div className="col-lg-7 col-md-12">
                  <div className="subscribe-form">
                    <form
                      action="/"
                      method="POST"
                      className="newsletter-form"
                      data-toggle="validator"
                    >
                      <input
                        type="email"
                        className="input-newsletter"
                        placeholder="Entrez votre adresse mail"
                        name="newsletter_user_email"
                        required
                        autoComplete="off"
                      />
                      <button type="submit">
                        S'incrire maintenant{" "}
                        <i className="flaticon-right-chevron" />
                      </button>
                      <div id="validator-newsletter" className="form-result" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-footer-widget">
                  <div className="logo">
                    <a href="index.html">
                      <img
                        src="assets/img/logo_true.png"
                        alt="Logo SMS Assurances"
                      />
                    </a>
                    <p>
                      SMS Assurances est l'agent général du groupe GNA Assurances
                      à Marcory. Notre mission pricipale est de vous délivrer une
                      assurance adaptée à votre situation en quelques heures.
                    </p>
                  </div>
                  <ul className="social">
                    <li>
                      <a
                        href="https://www.facebook.com/smsassurances1/"
                        target="_blank"
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a>
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/channel/UCSR2eh5Hp9fUk-xaHxukzdQ/"
                        target="_blank"
                      >
                        <i className="fab fa-youtube" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-footer-widget">
                  <h3>Liens rapides</h3>
                  <ul className="footer-quick-links">
                    <li>
                      <a href="/">Accueil</a>
                    </li>
                    <li>
                      <a href="about.html">A propos de nous</a>
                    </li>
                    <li>
                      <a href="blog.html">Actualités</a>
                    </li>
                    <li>
                      <a href="services.html">Assurances</a>
                    </li>
                    <li>
                      <a href="faq.html">Termes et conditions</a>
                    </li>
                    <li>
                      <a href="contact.html">Contactez-nous</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-sm-3 offset-md-3">
                <div className="single-footer-widget">
                  <h3>Informations de contact</h3>
                  <ul className="footer-contact-info">
                    <li>
                      <span>Localisation : </span> Quartier Brou Fulgence, Avenue
                      de Côte d'Ivoire, en face du Groupe Scolaire Méa Kouadio et
                      non loin de l'hôpital général de Marcory, Marcory, Abidjan,
                      Côte d'Ivoire
                    </li>
                    <li>
                      <span>Email :</span>{" "}
                      <a href="mailto:contact@sms-assurances.com">
                        contact@sms-assurances.com
                      </a>
                    </li>
                    <li>
                      <span>Téléphone :</span>{" "}
                      <a href="tel:0022548480505">(+225) 48 48 05 05</a>
                    </li>
                    <li>
                      <a
                        href="https://goo.gl/maps/cH5HcYvjEVzXgpc4A"
                        target="_blank"
                      >
                        Voir notre localisation sur GoogleMap
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="copyright-area">
              <div className="row align-items-center">
                <div className="col-lg-6 col-sm-6 col-md-6">
                  <p>
                    <i className="far fa-copyright" /> 2020{" "}
                    <a href="https://www.socialoop.me/" target="_blank">
                      Socialoop
                    </a>{" "}
                  </p>
                </div>
                <div className="col-lg-6 col-sm-6 col-md-6">
                  <ul>
                    <li>
                      <a href="faq.html">Termes et conditions</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;