import React, { SyntheticEvent, useState } from "react";
// import { variables } from "../api/Variables";
import { Navigate } from "react-router-dom";
// import "../App.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [navigate, setNavigate] = useState(false);

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    await fetch("https://localhost:7101/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
    setNavigate(true);
  };

  if (navigate) {
    return <Navigate to="/pages/login" />;
  }

  return (
    <form onSubmit={submit}>
      {/* <img
          class="mb-4"
          src="/docs/5.2/assets/brand/bootstrap-logo.svg"
          alt=""
          width="72"
          height="57"
        /> */}
      <h1 className="h3 mb-3 fw-normal">Please sign up</h1>
      <input
        type="text"
        name="name"
        className="form-control"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        name="email"
        className="form-control"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        name="password"
        className="form-control"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <input type="checkbox" value="remember-me" /> Remember me
      <button className="w-100 btn btn-lg btn-primary" type="submit">
        Sign in
      </button>
      <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
    </form>
  );
};
// function Register() {
//   const [register, setRegister] = useState({
//     id: 0,
//     emri: "",
//     mbiemri: "",
//     email: "",
//     password: "",
//     nrtel: "",
//     gjinia: "",
//   });

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     alert(`Please fill up the inputs`);
//   };
//   const createClick = () => {
//     fetch(variables.API_URL + "register", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         emri: register.emri,
//         mbiemri: register.mbiemri,
//         email: register.email,
//         password: register.password,
//         nrtel: register.nrtel,
//         gjinia: register.gjinia,
//       }),
//     })
//       .then((res) => res.json())
//       .then(
//         (result) => {
//           alert(result);
//           window.location.reload();
//         },
//         (error) => {
//           alert("Failed", error);
//         }
//       );
//   };

//   const changeField = (e) => {
//     setRegister({ ...register, [e.target.name]: e.target.value });
//   };

//   return (
//     <div>
//       <div className="container py-5 h-100">
//         <div className="row justify-content-center align-items-center h-100">
//           <div className="col-12 col-lg-9 col-xl-7">
//             <div
//               className="card shadow-2-strong card-registration"
//               //   style="border-radius: 15px;"
//             >
//               <form onSubmit={handleSubmit}>
//                 <div className="card-body p-4 p-md-5">
//                   <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">
//                     Create an account
//                   </h3>
//                   <div className="row">
//                     <div className="col-md-6 mb-4">
//                       <div className="form-floating form-outline">
//                         <input
//                           required
//                           type="text"
//                           name="emri"
//                           id="firstName"
//                           className="form-control form-control-lg"
//                           onChange={changeField}
//                           placeholder="First Name"
//                         />
//                         <label className="form-label" htmlFor="firstName">
//                           First Name
//                         </label>
//                       </div>
//                     </div>
//                     {/* <div className="col-md-6 mb-4">
//                       <div className="form-floating form-outline">
//                         <input
//                           required
//                           type="text"
//                           name="mbiemri"
//                           id="lastName"
//                           className="form-control form-control-lg"
//                           onChange={changeField}
//                           placeholder="Last Name"
//                         />
//                         <label className="form-label" htmlFor="mbiermi">
//                           Last Name
//                         </label>
//                       </div>
//                     </div> */}
//                   </div>
//                   <div className="row"></div>
//                   <div className="row">
//                     <div className="col-md-6 mb-4 pb-2">
//                       <div className="form-floating form-outline">
//                         <input
//                           required
//                           type="email"
//                           name="email"
//                           id="emailAddress"
//                           className="form-control form-control-lg"
//                           onChange={changeField}
//                           placeholder="Email"
//                         />
//                         <label className="form-label" htmlFor="emailAddress">
//                           Email
//                         </label>
//                       </div>
//                     </div>
//                     <div className="col-md-6 mb-4 pb-2">
//                       <div className="form-floating form-outline">
//                         <input
//                           required
//                           type="password"
//                           name="password"
//                           id="floatingPassword"
//                           className="form-control form-control-lg"
//                           onChange={changeField}
//                           placeholder="Password"
//                         />
//                         <label
//                           className="form-label"
//                           htmlFor="floatingPassword"
//                         >
//                           Password
//                         </label>
//                       </div>
//                     </div>
//                     {/* <div className="col-md-6 mb-4 d-flex align-items-center">
//                       <div className="form-floating form-outline datepicker w-100">
//                         <input
//                           required
//                           type="number"
//                           name="nrtel"
//                           className="form-control form-control-lg"
//                           id="nrtel"
//                           onChange={changeField}
//                           placeholder="Phone Number"
//                         />
//                         <label htmlFor="phoneNumber" className="form-label">
//                           Phone Number
//                         </label>
//                       </div>
//                     </div>
//                     <div className="col-md-6 mb-4">
//                       <h6 className="mb-2 pb-1">Gender: </h6>

//                       <div className="form-check form-check-inline">
//                         <input
//                           required
//                           className="form-check-input"
//                           type="radio"
//                           name="gjinia"
//                           id="gjinia"
//                           value="female"
//                           onChange={changeField}
//                         />
//                         <label
//                           className="form-check-label"
//                           htmlFor="femaleGender"
//                         >
//                           Female
//                         </label>
//                       </div>

//                       <div className="form-check form-check-inline">
//                         <input
//                           required
//                           className="form-check-input"
//                           type="radio"
//                           name="gjinia"
//                           id="male"
//                           value="male"
//                           onChange={changeField}
//                         />
//                         <label
//                           className="form-check-label"
//                           htmlFor="maleGender"
//                         >
//                           Male
//                         </label>
//                       </div>

//                       <div className="form-check form-check-inline">
//                         <input
//                           required
//                           className="form-check-input"
//                           type="radio"
//                           name="gjinia"
//                           id="other"
//                           value="other"
//                           onChange={changeField}
//                         />
//                         <label
//                           className="form-check-label"
//                           htmlFor="otherGender"
//                         >
//                           Other
//                         </label>
//                       </div>
//                     </div> */}
//                   </div>
//                   <div className="mt-4 pt-2">
//                     <input
//                       required
//                       className=" btn btn-primary btn-lg"
//                       type="submit"
//                       name="submit"
//                       value="Submit"
//                       onClick={() => createClick()}
//                       style={{ width: "27.5%" }}
//                     />
//                   </div>
//                   <div className="mt-1 pt-2">
//                     <span>
//                       Already have an account? <a href="login">Login</a>
//                     </span>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

export default Register;
