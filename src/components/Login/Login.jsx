import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

export default function Login() {
  let { setUserToken } = useContext(UserContext);
  let validationSchema = Yup.object({
    email: Yup.string().email("email  Invalid").required("email required"),
    password: Yup.string().required("password required"),
  });

  let [error, setError] = useState(null);
  let navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  async function LoginSubmit(values) {
    setIsLoading(true);
    try {
      setIsLoading(true);
      let { data } = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/signin",
        values
      );
      navigate("/Home");
      localStorage.setItem("userToken", data.token);
      setUserToken(data.token);
    } catch (err) {
      setIsLoading(false);
      setError(err.response.data.message);
      console.log(err.response.data.message);
    }
  }

  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: LoginSubmit,
  });
  return (
    <>
      {/* <!-- Section: Design Block --> */}
      <section className="animate__animated animate__fadeInLeft">
        <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
          <div className="row gx-lg-5 align-items-center mb-5">
            <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: "10" }}>
              <h1
                className="my-5 display-5 fw-bold ls-tight"
                style={{ color: "hsla(337, 77%, 55%, 0.778)" }}
              >
                The best offer <br />
                <span style={{ color: "hsl(218, 81%, 75%)" }}>
                  for your business
                </span>
              </h1>
              <p className="mb-4 opacity-70 text-muted">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Temporibus, expedita iusto veniam atque, magni tempora mollitia
                dolorum consequatur nulla, neque debitis eos reprehenderit quasi
                ab ipsum nisi dolorem modi. Quos?
              </p>
            </div>

            <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
              <div
                id="radius-shape-1"
                className="position-absolute rounded-circle shadow-5-strong"
              ></div>
              <div
                id="radius-shape-2"
                className="position-absolute shadow-5-strong"
              ></div>

              <div className="card bg-glass">
                <div className="card-body px-4 py-5 px-md-5">
                  <form onSubmit={formik.handleSubmit}>
                    {/* <!-- Email input --> */}
                    <div className="form-outline mb-4">
                      <label className="mb-2" htmlFor="name">
                        Email Address :
                      </label>
                      <input
                        id="email"
                        value={formik.values.email}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        name="email"
                        type="email"
                        className="form-control"
                      />
                    </div>
                    {formik.errors.email && formik.touched.email ? (
                      <div className="alert alert-danger mt-2">
                        {formik.errors.email}
                      </div>
                    ) : (
                      ""
                    )}

                    {/* <!-- Password input --> */}
                    <div className="form-outline mb-4">
                      <label htmlFor="name">Password :</label>
                      <input
                        id="password"
                        value={formik.values.password}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        name="password"
                        type="password"
                        className="form-control"
                      />
                    </div>
                    {formik.errors.password && formik.touched.password ? (
                      <div className="alert alert-danger mt-2">
                        {formik.errors.password}
                      </div>
                    ) : (
                      ""
                    )}

                    {/* <!-- Checkbox --> */}
                    <div className="form-check d-flex justify-content-center mb-4">
                      <input
                        className="form-check-input me-2"
                        style={{
                          backgroundColor: "hsla(337, 77%, 55%, 0.778)",
                          borderColor: "hsla(337, 77%, 55%, 0.778)",
                        }}
                        type="checkbox"
                        checked
                      />
                      <label className="form-check-label">
                        Subscribe to our newsletter
                      </label>
                    </div>

                    {/* <!-- Submit button --> */}
                    {isLoading ? (
                      <button
                        type="button"
                        className="btn bg-main my-2 text-white"
                      >
                        <i className="fas fa-spider fa-spin"></i>
                      </button>
                    ) : (
                      <div className="d-flex align-items-center">
                        <button
                          disabled={!(formik.isValid && formik.dirty)}
                          type="submit"
                          className="btn bg-main my-3 mx-2 text-white"
                        >
                          Login
                        </button>{" "}
                        <Link
                          to={"/Register"}
                          className="btn bg-main text-white"
                        >
                          Register Now
                        </Link>
                      </div>
                    )}
                    <div className="d-flex  justify-content-center">
                      {error !== null ? (
                        <div className="alert alert-danger mt-4  text-center w-100 ">
                          {error}
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                    {/* <!-- Register buttons --> */}
                    <div className="text-center">
                      <p>or sign up with:</p>
                      <button
                        type="button"
                        className="btn btn-link  btn-floating mx-1"
                      >
                        <i className="fab fa-facebook-f text-main"></i>
                      </button>

                      <button
                        type="button"
                        className="btn btn-link btn-floating mx-1"
                      >
                        <i className="fab fa-google text-main"></i>
                      </button>

                      <button
                        type="button"
                        className="btn btn-link btn-floating mx-1"
                      >
                        <i className="fab fa-twitter text-main"></i>
                      </button>

                      <button
                        type="button"
                        className="btn btn-link btn-floating mx-1"
                      >
                        <i className="fab fa-github text-main"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
