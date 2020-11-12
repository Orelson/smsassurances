import React from "react";

class ServicesArea extends React.Component {
  render() {
    return (
      <section className="services-area bg-f8f8f8 pb-70">
        <div className="container">
          <div className="services-slides owl-carousel owl-theme">
            <div className="single-services-box">
              <div className="icon">
                <i className="flaticon-home-insurance" />
                <div className="icon-bg">
                  <img src={"/assets/img/icon-bg1.png"} alt="image" />
                  <img src={"/assets/img/icon-bg2.png"} alt="image" />
                </div>
              </div>
              <h3>
                <a href="/habitation">MR Habitation</a>
              </h3>
              <p>
                Nous apportons des solutions concrètes pour vous permettre
                d'assurer votre logement en cas de sinistre.
              </p>
              <a href="/habitation" className="read-more-btn">
                En savoir plus
              </a>
              <div className="box-shape">
                <img src={"/assets/img/box-shape1.png"} alt="image" />
                <img src={"/assets/img/box-shape2.png"} alt="image" />
              </div>
            </div>
            <div className="single-services-box">
              <div className="icon">
                <i className="flaticon-health-insurance" />
                <div className="icon-bg">
                  <img src={"/assets/img/icon-bg1.png"} alt="image" />
                  <img src={"/assets/img/icon-bg2.png"} alt="image" />
                </div>
              </div>
              <h3>
                <a href="/health">Santé</a>
              </h3>
              <p>
                Votre santé est la chose la plus importante, c'est pourquoi nous
                travaillons durement à la préserver.
              </p>
              <a href="/health" className="read-more-btn">
                En savoir plus
              </a>
              <div className="box-shape">
                <img src={"/assets/img/box-shape1.png"} alt="image" />
                <img src={"/assets/img/box-shape2.png"} alt="image" />
              </div>
            </div>
            <div className="single-services-box">
              <div className="icon">
                <i className="flaticon-travel-insurance" />
                <div className="icon-bg">
                  <img src={"/assets/img/icon-bg1.png"} alt="image" />
                  <img src={"/assets/img/icon-bg2.png"} alt="image" />
                </div>
              </div>
              <h3>
                <a href="/travel">Voyage</a>
              </h3>
              <p>
                Des avantages exceptionnels qui vous accompagnent pendant vos
                différents voyages.
              </p>
              <a href="/travel" className="read-more-btn">
                En savoir plus
              </a>
            </div>
            <div className="single-services-box">
              <div className="icon">
                <i className="flaticon-car-insurance" />
                <div className="icon-bg">
                  <img src={"/assets/img/icon-bg1.png"} alt="image" />
                  <img src={"/assets/img/icon-bg2.png"} alt="image" />
                </div>
              </div>
              <h3>
                <a href="/car">Auto-moto</a>
              </h3>
              <p>
                Conduisez sereinement et tranquillement votre véhicule, nous
                nous chargeons d'assurer tout le reste.
              </p>
              <a href="/car" className="read-more-btn">
                En savoir plus
              </a>
              <div className="box-shape">
                <img src={"/assets/img/box-shape1.png"} alt="image" />
                <img src={"/assets/img/box-shape2.png"} alt="image" />
              </div>
            </div>
            <div className="single-services-box">
              <div className="icon">
                <i className="flaticon-life-insurance" />
                <div className="icon-bg">
                  <img src={"/assets/img/icon-bg1.png"} alt="image" />
                  <img src={"/assets/img/icon-bg2.png"} alt="image" />
                </div>
              </div>
              <h3>
                <a href="/life">Individuelle accident</a>
              </h3>
              <p>
                En cas d'accident dans votre routine quotidienne, nous vous
                assistons et nous vous indemnisons.
              </p>
              <a href="/life" className="read-more-btn">
                En savoir plus
              </a>
              <div className="box-shape">
                <img src={"/assets/img/box-shape1.png"} alt="image" />
                <img src={"/assets/img/box-shape2.png"} alt="image" />
              </div>
            </div>
            <div className="single-services-box">
              <div className="icon">
                <i className="flaticon-insurance" />
                <div className="icon-bg">
                  <img src={"/assets/img/icon-bg1.png"} alt="image" />
                  <img src={"/assets/img/icon-bg2.png"} alt="image" />
                </div>
              </div>
              <h3>
                <a href="/pro">MR Professionnelle</a>
              </h3>
              <p>
                Nous mettons tout en oeuvre pour vous fournir l'assurance qu'il
                faut en cas d'incident professionnel.
              </p>
              <a href="/pro" className="read-more-btn">
                En savoir plus
              </a>
              <div className="box-shape">
                <img src={"/assets/img/box-shape1.png"} alt="image" />
                <img src={"/assets/img/box-shape2.png"} alt="image" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ServicesArea;
