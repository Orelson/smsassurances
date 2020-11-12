import React from "react";

class Actus extends React.Component {
  render() {
    return (
      <section className="blog-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">News</span>
            <h2>Notre Actualité</h2>
            <p>
              SMS Assurances est une agence dynamique qui ne cesse d'innover et
              travailler durement pour apporter le meilleur service d'assurance
              à sa clientèle.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="post-image">
                  <a href="assets/img/blog-image/seri.jpg" target="_blank">
                    <img src="assets/img/blog-image/1.jpg" alt="image" />
                  </a>
                </div>
                <div className="post-content">
                  <h3>
                    <a href="#">
                      Ouverture officielle de l'agence SMS Assurances
                    </a>
                  </h3>
                  <p>
                    L'Agence SMS Assurances a officiellement ouvert ses portes
                    le 1er Juillet 2020 dans la commune de Marcory.
                  </p>{" "}
                  <br /> <br />
                  <div className="date">
                    <i className="flaticon-timetable" /> 01 Juillet 2020
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="post-image">
                  <iframe
                    width="100%"
                    height={198}
                    src="https://www.youtube.com/embed/kO4SvJVb4Gk"
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="post-content">
                  <h3>
                    <a>
                      GNA AUTOBOOST pour vous permettre d'acquérir une voiture
                      neuve
                    </a>
                  </h3>
                  <p>
                    GNA AUTOBOOST est un produit de la GNA ASSURANCES qui permet
                    à tout particulier d'acheter sa voiture neuve grâce à un
                    accompagnement financier très avantageux et transparent. Il
                    a été lancé durant le mois de Juillet.
                  </p>{" "}
                  <br /> <br />
                  <div className="date">
                    <i className="flaticon-timetable" /> 03 Juillet 2020
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="post-image">
                  <a href="assets/img/blog-image/noufala.jpg" target="_blank">
                    <img src="assets/img/blog-image/3.jpg" alt="image" />
                  </a>
                </div>
                <div className="post-content">
                  <h3>
                    <a>Innovation : Assurance Mortalité Bétail</a>
                  </h3>
                  <p>
                    Noufala, l'Assurance Mortalité Bétail est une innovation de
                    GNA pour accompagner les propriétaires de troupeaux.
                  </p>{" "}
                  <br />
                  <br />
                  <div className="date">
                    <i className="flaticon-timetable" /> 14 Août 2020
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

export default Actus;
