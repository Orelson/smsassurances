import React from "react";

class Header extends React.Component {
  render() {
    return (
        <>
            <div className="preloader">
                <div className="loader">
                    <div className="shadow" />
                    <div className="box" />
                </div>
            </div>
            <header className="header-area header-style-three">
                <div className="top-header">
                    <div className="container">
                        <div className="row align-items-center">
                        <div className="col-lg-3 col-md-12">
                            <div className="top-header-logo">
                            <a href="index.html">
                                <img
                                src="assets/img/logo_true.png"
                                alt="logo sms assurances"
                                />
                            </a>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-12">
                            <div className="top-header-right-side">
                            <ul>
                                <li>
                                <div className="icon">
                                    <i className="flaticon-email" />
                                </div>
                                <span>Laissez-nous un email :</span>
                                <a href="mailto:contact@sms-assurances.com">
                                    contact@sms-assurances.com
                                </a>
                                </li>
                                <li>
                                <div className="icon">
                                    <i className="flaticon-call" />
                                </div>
                                <span>Appelez-nous :</span>
                                <a href="tel:0022548480505">(+225) 48 48 05 05</a>
                                </li>
                                <li>
                                <a href="index.html#devis" className="default-btn">
                                    Obtenir un devis <span />
                                </a>
                                </li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="navbar-area">
                    <div className="pearo-responsive-nav">
                        <div className="container">
                        <div className="pearo-responsive-menu">
                            <div className="logo">
                            <a href="index.html">
                                <img
                                src="assets/img/logo_true.png"
                                className="rounded-circle"
                                alt="logo"
                                />
                            </a>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="pearo-nav">
                        <div className="container">
                            <nav className="navbar navbar-expand-md navbar-light">
                                <a className="navbar-brand" href="index-3.html">
                                <img
                                    src="assets/img/logo_true.png"
                                    className="rounded-circle"
                                    alt="logo"
                                />
                                </a>
                                <div
                                className="collapse navbar-collapse mean-menu"
                                id="navbarSupportedContent"
                                >
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                    <a href="index.html" className="nav-link active">
                                        Accueil{" "}
                                    </a>
                                    </li>
                                    <li className="nav-item">
                                    <a href="services.html" className="nav-link">
                                        Nos produits <i className="flaticon-down-arrow" />
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                        <a href="habitation.html" className="nav-link">
                                            Multirisque habitation
                                        </a>
                                        </li>
                                        <li className="nav-item">
                                        <a href="health.html" className="nav-link">
                                            Santé
                                        </a>
                                        </li>
                                        <li className="nav-item">
                                        <a href="travel.html" className="nav-link">
                                            Voyage
                                        </a>
                                        </li>
                                        <li className="nav-item">
                                        <a href="car.html" className="nav-link">
                                            Auto-moto
                                        </a>
                                        </li>
                                        <li className="nav-item">
                                        <a href="life.html" className="nav-link">
                                            Individuelle Accident
                                        </a>
                                        </li>
                                        <li className="nav-item">
                                        <a href="pro.html" className="nav-link">
                                            Multirisque Professionnelle
                                        </a>
                                        </li>
                                    </ul>
                                    </li>
                                    <li className="nav-item">
                                    <a href="contact.html" className="nav-link">
                                        Nous contacter
                                    </a>
                                    </li>
                                    <li className="nav-item">
                                    <a href="about.html" className="nav-link">
                                        Qui sommes-nous ?
                                    </a>
                                    </li>
                                    <li className="nav-item">
                                    <a href="/services" className="nav-link">
                                        Services d'urgence <i className="flaticon-down-arrow" />
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                        <a href="/assistance-auto" className="nav-link">
                                            Assistance Automobile
                                        </a>
                                        </li>
                                        <li className="nav-item">
                                        <a href="/health" className="nav-link">
                                            En cas de sinistre
                                        </a>
                                        </li>
                                    </ul>
                                    </li>
                                </ul>
                                <div className="others-option">
                                    <div className="burger-menu">
                                    <i className="flaticon-menu" />
                                    </div>
                                </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
  }
}

export default Header;