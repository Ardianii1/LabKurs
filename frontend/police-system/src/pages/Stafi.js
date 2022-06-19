import React, { useState, useEffect } from "react";
import Modal from "../modal/modal";
import { variables } from "../api/Variables";

function Stafi() {
  const [stafis, setStafis] = useState([]);
  const [modalTitle, setModalTitle] = useState([]);
  const [modalAction, setModalAction] = useState([]);
  // const [postId, setPostId] = useState(null);
  // const [emri, setEmri] = useState("");
  // const [mbiemri, setMbiemri] = useState("");
  const [stafi, setStafi] = useState({
    id: 0,
    emri: "",
    mbiemri: "",
    // imgUrl: "default.png",
    // userId: 1,
    // rating: "",
    // price: "",
    // sale: "",
    // categoryId: 1,
  });
  //   const refreshList(){
  //     fetch(variables.API_URL+'stafi')
  //     .then(response=>response.json())
  //     .then(data=>{
  //         this.setState({stafi:data});
  //     });
  // }

  useEffect(() => {
    fetch(variables.API_URL + "stafi", {
      "content-type": "application/json",
      mode: "cors",
      method: "GET",
      // redirect: "follow",
    })
      .then((response) => response.json())
      .then((stafi) => {
        setStafis(stafi);
      });
  }, []);

  const addClick = () => {
    setModalTitle("Stafi");
    setModalAction("Add Stafi");
    setStafi({
      id: 0,
      emri: "",
      mbiemri: "",
    });
    // console.log(stafi);
  };
  const editClick = (stafi) => {
    setModalTitle("Stafi");
    setModalAction("Edit Stafi");
    setStafi({
      id: stafi.id,
      emri: stafi.emri,
      mbiemri: stafi.mbiemri,
    });
  };

  const createClick = () => {
    fetch(variables.API_URL + "stafi", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        emri: stafi.emri,
        mbiemri: stafi.mbiemri,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          alert(result);
          window.location.reload();
        },
        (error) => {
          alert("Failed", error);
        }
      );
  };

  const updateClick = (id) => {
    fetch(variables.API_URL + "stafi/" + id, {
      mode: "cors",
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: stafi.id,
        emri: stafi.emri,
        mbiemri: stafi.mbiemri,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          window.location.reload();
          alert(result);
        },
        (error) => {
          alert("Failed", error);
        }
      );
  };

  const deleteClick = (id) => {
    // console.log(id);
    if (window.confirm("Are you sure?")) {
      fetch(variables.API_URL + "stafi/" + id, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then(
          window.location.reload(),
          (result) => {
            alert(result);
          },
          (error) => {
            alert("Failed", error);
          }
        );
    }
  };
  const changeField = (e) => {
    setStafi({ ...stafi, [e.target.name]: e.target.value });
  };
  // const changeMbiemri = (e) => {
  //   this.setState({ mbiemri: e.target.value });
  // };
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary m-2 float-end"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        onClick={() => addClick()}
      >
        Add New
      </button>
      <table className="table table-striped table-hover table-responsive">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Surname</th>
            {/* <th>Email</th> */}
            {/* <th>Role</th> */}
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {stafis.map((stafi) => {
            return (
              <tr key={stafi.id}>
                <td>{stafi.id}</td>
                <td>{stafi.emri}</td>
                <td>{stafi.mbiemri}</td>
                {/* <td>{stafi.email}</td>
                <td>{stafi.password}</td>
                <td>{stafi.roleId}</td> */}
                <td className="gap-2">
                  <button
                    type="button"
                    className="btn btn-edit btn-info "
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => editClick(stafi)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-pencil-square"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                      <path
                        fillRule="evenodd"
                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={() => deleteClick(stafi.id)}
                    type="button"
                    className="btn btn-delete btn-danger ml-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-trash-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                    </svg>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Modal
        modalTitle={modalTitle}
        modalAction={modalAction}
        createClick={createClick}
        updateClick={updateClick}
        changeField={changeField}
        // changeMbiemri={changeMbiemri}
        object={stafi}
      />
    </div>
  );
}

export default Stafi;
