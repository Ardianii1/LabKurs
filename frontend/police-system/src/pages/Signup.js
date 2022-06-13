import React, { useState, useEffect } from "react";
import { variables } from "../api/Variables";
import "../css/registercss.css";

function Signup() {
  const [register, setRegister] = useState({
    id: 0,
    emri: "",
    mbiemri: "",
    email: "",
    password: "",
    nrtel: "",
    gjinia: "",
    // imgUrl: "default.png",
    // userId: 1,
    // rating: "",
    // price: "",
    // sale: "",
    // categoryId: 1,
  });
  const addClick = () => {
    // setModalTitle("Stafi");
    // setModalAction("Add Stafi");
    setRegister({
      id: 0,
      emri: "",
      mbiemri: "",
      email: "",
      password: "",
      nrtel: "",
      gjinia: "",
    });
  };

  const createClick = () => {
    fetch(variables.API_URL + "register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        emri: register.emri,
        mbiemri: register.mbiemri,
        email: register.email,
        password: register.password,
        nrtel: register.nrtel,
        gjinia: register.gjinia,
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

  const changeField = (e) => {
    setRegister({ ...register, [e.target.name]: e.target.value });
  };
  let form = <div></div>;

  return (
    <div>
      <div class="container py-5 h-100">
        <div class="row justify-content-center align-items-center h-100">
          <div class="col-12 col-lg-9 col-xl-7">
            <div
              class="card shadow-2-strong card-registration"
              //   style="border-radius: 15px;"
            >
              <div class="card-body p-4 p-md-5">
                <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
                <div class="row">
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input
                        type="text"
                        name="emri"
                        id="firstName"
                        class="form-control form-control-lg"
                        onChange={changeField}
                      />
                      <label class="form-label" for="firstName">
                        First Name
                      </label>
                    </div>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input
                        type="text"
                        name="mbiemri"
                        id="lastName"
                        class="form-control form-control-lg"
                        onChange={changeField}
                      />
                      <label class="form-label" for="lastName">
                        Last Name
                      </label>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6 mb-4">
                    <h6 class="mb-2 pb-1">Gender: </h6>

                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="gjinia"
                        id="gjinia"
                        value="female"
                        onChange={changeField}
                      />
                      <label class="form-check-label" for="femaleGender">
                        Female
                      </label>
                    </div>

                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="gjinia"
                        id="male"
                        value="male"
                        onChange={changeField}
                      />
                      <label class="form-check-label" for="maleGender">
                        Male
                      </label>
                    </div>

                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="gjinia"
                        id="other"
                        value="other"
                        onChange={changeField}
                      />
                      <label class="form-check-label" for="otherGender">
                        Other
                      </label>
                    </div>
                  </div>
                  <div class="col-md-6 mb-4 d-flex align-items-center">
                    <div class="form-outline datepicker w-100">
                      <input
                        type="number"
                        name="nrtel"
                        class="form-control form-control-lg"
                        id="nrtel"
                        onChange={changeField}
                      />
                      <label for="phoneNumber" class="form-label">
                        Phone Number
                      </label>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6 mb-4 pb-2">
                    <div class="form-outline">
                      <input
                        type="email"
                        name="email"
                        id="emailAddress"
                        class="form-control form-control-lg"
                        onChange={changeField}
                      />
                      <label class="form-label" for="emailAddress">
                        Email
                      </label>
                    </div>
                  </div>
                  <div class="col-md-6 mb-4 pb-2">
                    <div class="form-outline">
                      <input
                        type="password"
                        name="password"
                        id="password"
                        class="form-control form-control-lg"
                        onChange={changeField}
                      />
                      <label class="form-label" for="password">
                        Password
                      </label>
                    </div>
                  </div>
                </div>
                {/* <div class="row">
                <div class="col-12">
                  <select class="select form-control-lg">
                    <option value="1" disabled>
                      Choose option
                    </option>
                    <option value="2">Subject 1</option>
                    <option value="3">Subject 2</option>
                    <option value="4">Subject 3</option>
                  </select>
                  <label class="form-label select-label">
                    Choose option
                  </label>
                </div>
              </div> */}
                <div class="mt-4 pt-2">
                  <input
                    class="btn btn-primary btn-lg"
                    type="submit"
                    name="submit"
                    value="Submit"
                    onClick={() => createClick()}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
