import React from "react";

class Advices extends React.Component {
  render() {
    return (
      <section className="feedback-area ptb-100 mt-5">
        <div className="container">
          <div className="section-title">
            <h2>Conseils d'assureur</h2>
          </div>
          <div className="feedback-slides">
            <div className="client-feedback">
              <div>
                <div className="item">
                  <div className="single-feedback">
                    <p>
                      Ayez un système optimisé de gestion de l'alimentation
                      électrique pour votre maison afin d'éviter les risques de
                      surtension ou surcharge électrique, surtout en période de
                      pluie.
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="single-feedback">
                    <p>
                      Au quotidien, évitez de vous improviser électricien,
                      mécanicien ou autre, sauf si vous vous y connaissez et
                      faites appel à des professionnels pour vos travaux.
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="single-feedback">
                    <p>
                      Lorsque vous êtes à moto, portez toujours un casque et les
                      équipements de protection qui vont avec et soyez toujours
                      prudents sur les routes.
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="single-feedback">
                    <p>
                      Lorsque vous voyagez, assurez-vous que vous avez les
                      documents administratifs nécessaires, et vérifiez vos
                      affaires pour ne pas transporter des objets illicites.
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="single-feedback">
                    <p>
                      Faites regulièrement votre bilan de santé et appliquez les
                      bonnes pratiques hygiéniques pour toujours rester en
                      pleine forme : sport, relaxation, alimentation saine...
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="single-feedback">
                    <p>
                      Pour les transports de vos marchandises, traitez toujours
                      avec des professionnels spécialisés qui sont en règle avec
                      la législation afin d'éviter toute mauvaise situation.
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="single-feedback">
                    <p>
                      Dans vos cuisines, assurez-vous que les bouteilles de gaz
                      sont bien fermées et contrôlez fermement qui y a accès
                      afin de réduire les risques d'incendies.
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="single-feedback">
                    <p>
                      Face à la recrudescence des vols par bris de glace, ne
                      laissez jamais paraître dans vos véhicules des objets de
                      valeurs, les ranger dans le coffre.
                    </p>
                  </div>
                </div>
              </div>
              <button className="prev-arrow slick-arrow"></button>
              <button className="next-arrow slick-arrow">
                <i className="flaticon-right-chevron" />
              </button>
            </div>
            <div className="client-thumbnails">
              <div>
                <div className="item">
                  <div className="img-fill">
                    <img
                      src="assets/img/client-image/1.jpg"
                      alt="Charge \xE9lectrique"
                    />
                  </div>
                  <div className="title"></div>
                </div>
                <div className="item">
                  <div className="img-fill">
                    <img
                      src="assets/img/client-image/2.jpg"
                      alt="R\xE9pare un moteur de voiture"
                    />
                  </div>
                  <div className="title"></div>
                </div>
                <div className="item">
                  <div className="img-fill">
                    <img
                      src="assets/img/client-image/3.jpg"
                      alt="Casque de moto"
                    />
                  </div>
                  <div className="title"></div>
                </div>
                <div className="item">
                  <div className="img-fill">
                    <img src="assets/img/client-image/4.jpg" alt="Passport" />
                  </div>
                  <div className="title"></div>
                </div>
                <div className="item">
                  <div className="img-fill">
                    <img
                      src="assets/img/client-image/5.jpg"
                      alt="Femme qui fait du sport"
                    />
                  </div>
                  <div className="title"></div>
                </div>
                <div className="item">
                  <div className="img-fill">
                    <img
                      src="assets/img/client-image/6.jpg"
                      alt="camion de marchandises"
                    />
                  </div>
                  <div className="title"></div>
                </div>
                <div className="item">
                  <div className="img-fill">
                    <img
                      src="assets/img/client-image/7.jpg"
                      alt="bouteille de gaz"
                    />
                  </div>
                  <div className="title"></div>
                </div>
                <div className="item">
                  <div className="img-fill">
                    <img
                      src="assets/img/client-image/8.jpg"
                      alt="Vitre de voiture bris\xE9e"
                    />
                  </div>
                  <div className="title"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Advices;
