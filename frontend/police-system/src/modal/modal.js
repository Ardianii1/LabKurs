import React from "react";

function Modal({
  modalTitle,
  modalAction,
  createClick,
  updateClick,
  changeField,
  // changeEmri,
  // changeMbiemri,
  object,
  editClick,
}) {
  let form = <div></div>;
  switch (modalAction) {
    case "Add Stafi":
      form = (
        <div>
          <div className="input-group mb-3">
            <span className="input-group-text">Name</span>
            <input
              type="text"
              name="emri"
              className="form-control"
              // value={object.emri}
              onChange={changeField}
            ></input>
            <br></br>
            <span className="input-group-text">Last Name</span>
            <input
              type="text"
              name="mbiemri"
              className="form-control"
              // value={object.mbiemri}
              onChange={changeField}
            ></input>
          </div>
          {/* <input type="submit" name="submit" onClick={createClick}></input> */}
        </div>
      );
      break;
    case "Edit Stafi":
      form = (
        <div>
          <div className="input-group mb-3">
            <span className="input-group-text">Name</span>
            <input
              type="text"
              name="emri"
              className="form-control"
              defaultValue={object.emri}
              onChange={changeField}
            ></input>
            <br></br>
            <span className="input-group-text">Last Name</span>
            <input
              type="text"
              name="mbiemri"
              className="form-control"
              defaultValue={object.mbiemri}
              onChange={changeField}
            ></input>
          </div>
        </div>
      );
      break;
    default:
  }

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{modalAction}</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            {form}
            {object.id === 0 ? (
              <button
                type="button"
                className="btn btn-primary float-start"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => createClick()}
              >
                Create
              </button>
            ) : null}

            {object.id !== 0 ? (
              <button
                type="button"
                className="btn btn-primary float-start"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => updateClick()}
              >
                Update
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
