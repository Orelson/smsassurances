import React from "react";

class Modal extends React.Component {
  render() {
    return (
      <div
        className="modal fade"
        id="exampleModalCenter"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Obtenez un devis en remplissant le formulaire
              </h5>
              <button
                type="button"
                className="close btn-danger"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div
                style={{
                  width: "100%"
                }}
              >
                <form
                  action="index.php"
                  method="POST"
                  onSubmit="alert('Votre demande a bien \xE9t\xE9 prise en compte !');"
                >
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="username"
                      placeholder="Votre Nom"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Votre Email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="phone"
                      placeholder="Votre T\xE9l\xE9phone"
                    />
                  </div>
                  <div className="form-group">
                    <p>Sélectionnez votre type d'assurance</p>
                    <select name="type" required>
                      <option value="Assurance sant\xE9">
                        Assurance santé
                      </option>
                      <option
                        selected
                        value="Assurance Multirisques Habitation"
                      >
                        Assurance Multirisque Habitation
                      </option>
                      <option value="Assurance Individuelle Accident">
                        Assurance Individuelle Accident
                      </option>
                      <option value="Assurance Voyage">Assurance Voyage</option>
                      <option value="Assurance Auto-moto">
                        Assurance Auto-moto
                      </option>
                      <option value="Assurance Multirisque Professionnelle">
                        Assurance Multirisque Professionnelle
                      </option>
                    </select>
                  </div>
                  <div className="form-group col">
                    <input
                      type="hidden"
                      className="form-control"
                      name="date"
                      defaultValue="<%= currentDate %>"
                    />
                  </div>
                  <button
                    type="submit"
                    className="submitBtn default-btn btn-lg"
                  >
                    Envoyer votre demande
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
