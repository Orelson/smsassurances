import React from "react";

class Quote extends React.Component {
  render() {
    return (
      <section className="quote-area ptb-100" id="devis">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="quote-content">
                <h2>Obtenez un dévis gratuitement</h2>
                <p>
                  Vous souhaitez souscrire à une assurance et vous désirez avoir
                  un devis ? Remplissez le formulaire qui correspond au type
                  d'assurance que vous voulez et nous vous contacterons dans les
                  plus brefs délais.
                </p>
                <div className="image">
                  <img src={"assets/img/img1.png"} alt="image" width="65%" />
                </div>
              </div>
            </div>
            <div className="bg-light p-3 border-3 col-lg-6 col-md-12">
              <h4>
                Obtenez gratuitement un devis en remplissant le formulaire
              </h4>
              <form action="/" method="POST" onsubmit="merci()">
                <div className="row">
                  <div className="form-group col">
                    <input
                      id="username"
                      type="text"
                      className="form-control"
                      name="username"
                      placeholder="Nom et pr\xE9noms *"
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="EMAIL *"
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col">
                    <input
                      type="text"
                      className="form-control"
                      name="phone"
                      placeholder="Num\xE9ro de T\xE9l\xE9phone *"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col">
                    <select name="type" required>
                      <option value="Assurance Individuelle Accident">
                        ASSURANCE INDIVIDUELLE ACCIDENT
                      </option>
                      <option value="Assurance Multirisque Habitation">
                        ASSURANCE MULTIRISQUE HABITATION
                      </option>
                      <option value="Assurance Sant\xE9">
                        ASSURANCE SANTE
                      </option>
                      <option value="Assurance Voyage">ASSURANCE VOYAGE</option>
                      <option selected value="Assurance Automobile">
                        ASSURANCE AUTOMOBILE
                      </option>
                      <option value="Assurance Multirisque Professionnelle">
                        ASSURANCE MULTIRISQUE PROFESSIONNELLE
                      </option>
                    </select>
                    <p>Type d'assurance *</p>
                  </div>
                </div>
                <div className="form-group col">
                  <input
                    type="hidden"
                    className="form-control"
                    name="date"
                    defaultValue="<%= currentDate %>"
                  />
                </div>
                <div className="row p-3">
                  <textarea
                    name="message"
                    className="form-control col"
                    placeholder="Laissez-nous un message (facultatif)"
                    rows={6}
                    style={{
                      width: "90%"
                    }}
                    defaultValue={""}
                  />
                </div>
                <button
                  type="submit"
                  className="submitBtn default-btn btn-lg btn-block"
                >
                  Envoyer votre demande <span />
                </button>
                <br />
                <br />
                <p className="text-danger text-sm-left">
                  * Les champs marqués avec une astérisque sont obligatoires.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Quote;
