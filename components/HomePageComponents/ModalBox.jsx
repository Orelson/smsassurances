import React from "react";

class ModalBox extends React.Component {
  render() {
    return (
      <div
        style={{
          width: "90%"
        }}
      >
        <div
          className="modal fade bd-example-modal-lg"
          tabIndex={-1}
          role="dialog"
          id="myModal"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div
              style={{
                borderRadius: "50%",
                cursor: "pointer"
              }}
              type="button"
              className="btn btn-danger"
              data-dismiss="modal"
            >
              X
            </div>
            <div
              className="modal-content"
              data-toggle="modal"
              data-target="#exampleModalCenter"
              style={{
                cursor: "pointer"
              }}
            >
              <img
                src="assets/img/welcome.jpg"
                alt="Bienvenue chez SMS ASSURANCES"
                width="100%"
              />
              {}
              {}
              {}
              {}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalBox;
