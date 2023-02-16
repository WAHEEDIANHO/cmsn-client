import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

import "../css/login.css";
function Login({ api, setUser }) {
  const [login, setLogin] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [iserror, setIserror] = useState(false);

  useEffect((_) => {
    if (pathname === "/logout" && sessionStorage.getItem("cms_token")) {
      sessionStorage.clear();
      return navigate("/");
    } else if (pathname === "/logout" && !sessionStorage.getItem("cms_token"))
      return navigate("/");

    if (sessionStorage.getItem("cms_token") && pathname === "/")
      return navigate("/dashboard");
  });

  const submit = async (e) => {
    e.preventDefault();

    // validation

    if (login.username === "") {
      document.querySelector("#username").classList.add("error");
      return;
    } else if (login.password === "") {
      document.querySelector("#password").classList.add("error");
      return;
    }

    try {
      let res = await axios.post(`${api}/user/login`, login);
      res = await res.data;
      sessionStorage.setItem("cms_token", res.token);
      sessionStorage.setItem("cms_id", res._id);
      setUser(true, res._id);
    } catch (err) {
      setLogin({ username: "", password: "" });
      setIserror(true);
    }

    if (sessionStorage.getItem("cms_token")) {
      return navigate("/dashboard");
    }
  };

  return (

      <>
        <section className="vh-100 position-relative">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-6 text-black">

                <div className="px-5 ms-xl-4">
                  {/*<i className="fas fa-lock fa-2x me-3 pt-5 mt-xl-4" style={{color: '#709085'}}></i>*/}
                  <span className="h1 fw-bold mb-0">Application of Queue Theory</span>
                </div>

                <div className="d-flex align-items-center px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">

                  <form style={{width: '23rem'}} method="post" onSubmit={submit}>

                    <h3 className="fw-normal mb-3 pb-3" style={{letterSpacing: '1px'}}>Log in</h3>

                    {iserror ? (
                        <h5 className="fw-normal mb-3 pb-3 text-danger">
                          Invalid credential
                        </h5>
                    ) : null}
                    <div className="form-outline mb-4">
                      <input
                          type="text"
                          className="form-control form-control-lg"
                          id="username"
                          name="username"
                          placeholder="Username"
                          onChange={(e) => {
                            setLogin({ ...login, username: e.target.value });
                            e.target.classList.remove("error");
                          }}
                          value={login.username ? login.username : ""}
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <input
                          type="password"
                          className="form-control form-control-lg"
                          id="password"
                          placeholder="Password"
                          name="password"
                          onChange={(e) =>
                              setLogin({ ...login, password: e.target.value })
                          }
                          value={login.password ? login.password : ""}
                      />
                    </div>

                    <div className="pt-1 mb-4">
                      <button className="btn btn-info btn-lg btn-block" type="submit">Login</button>
                    </div>
                  </form>

                </div>

              </div>
              <div className="col-sm-6 px-0 d-none d-sm-block">
                <img src="https://images.unsplash.com/photo-1618425978222-3a0490ee522c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
                     alt="Login" className="w-100 vh-100" style={{objectFit: 'cover', objectPosition: 'center'}} />
              </div>
            </div>
          </div>
        </section>
      </>

  );
}

export default Login;
