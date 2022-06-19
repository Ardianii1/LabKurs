import React, { SyntheticEvent, useState } from "react";
import { Navigate } from "react-router-dom";

import logo from "../images/logo.jpeg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [navigate, setNavigate] = useState(false);

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    await fetch("http://localhost:8000/api/login", {
      mode: "no-cors",
      method: "POST",
      // headers: { "Content-Type": "application/json" },
      // credentials: "include",
      body: JSON.stringify({
        email,
        password,
      }),
    });
    // const content = await response.json();
    // setNavigate(true);
    // props.setName(content.name);
  };

  if (navigate) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <main className="form-signin w-100 m-auto">
        <form className="form" onSubmit={submit}>
          <img className="mb-4" src={logo} alt="" width="72" height="57" />
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
          <div className="form-floating form-outline">
            <input
              required
              type="email"
              name="email"
              className="form-control form-control-lg"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="checkbox mb-3">
            <input type="checkbox" value="remember-me" /> Remember me
          </div>
          <input
            className="w-100 btn btn-lg btn-primary"
            value="Llog in"
            type="submit"
          />
          Log in
          {/* </input> */}
          <p className="mt-5 mb-3 text-muted">&copy; 2022</p>
        </form>
      </main>
    </div>
  );
};

export default Login;
