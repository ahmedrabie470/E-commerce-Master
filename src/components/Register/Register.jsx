import React, { useState } from "react";
import Style from "./Register.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  let navigate = useNavigate();
  async function registerSubmit(values) {
    try {
      setIsLoading(true);
      let { data } = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/signup",
        values
      );
      console.log(data);
      navigate("/Login");
    } catch (err) {
      console.log(err.response.data.message);
      setIsLoading(false);
      setError(err.response.data.message);
    }
  }
  let phoneRegex = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
  let validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "name must be at least 3 characters ")
      .max(10, "name must be at most 10 characters ")
      .required("name is required"),
    email: Yup.string().email("email  Invalid").required("email required"),
    phone: Yup.string()
      .matches(phoneRegex, "Wrong Number")
      .required("phone required"),
    password: Yup.string()
      .required("password is required")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
        "Minimum six characters, at least one letter and one number"
      ),
    rePassword: Yup.string()
      .oneOf(["password"])
      .oneOf([Yup.ref("password ")], " password and RePassword doesn't match")
      .required("RePassword required"),
  });

  let [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      rePassword: "",
    },
    validationSchema,
    onSubmit: registerSubmit,
  });
  return (
    <>
      <section className="animate__animated  animate__fadeInRight">
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
                    {/* <!-- Name input --> */}

                    <div className="mb-4">
                      <div className="form-outline">
                        <label htmlFor="name">Name :</label>
                        <input
                          id="name"
                          value={formik.values.name}
                          onBlur={formik.handleBlur}
                          className=" w-100 form-control"
                          onChange={formik.handleChange}
                          name="name"
                          type="name"
                        />
                      </div>
                      {formik.errors.name && formik.touched.name ? (
                        <div className="alert alert-danger mt-2">
                          {formik.errors.name}
                        </div>
                      ) : (
                        ""
                      )}
                    </div>

                   

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
                      {/* <!-- Phone input --> */}
 <div className="mb-4">
                      <div className="form-outline">
                        <label htmlFor="name">Phone Number :</label>
                        <input
                          id="phone"
                          value={formik.values.phone}
                          onBlur={formik.handleBlur}
                          className="form-control"
                          onChange={formik.handleChange}
                          name="phone"
                          type="tel"
                        />
                        {formik.errors.phone && formik.touched.phone ? (
                          <div className="alert alert-danger mt-2">
                            {formik.errors.phone}
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
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
                    <div className="form-outline mb-4">
                      <label htmlFor="name">Re Password :</label>

                      <input
                        id="rePassword"
                        autoComplete="on"
                        value={formik.values.rePassword}
                        onBlur={formik.handleBlur}
                        className="w-100 form-control"
                        onChange={formik.handleChange}
                        name="rePassword"
                        type="password"
                      />
                      {formik.errors.rePassword && formik.touched.rePassword ? (
                        <div className="alert alert-danger mt-2">
                          {formik.errors.rePassword}
                        </div>
                      ) : (
                        ""
                      )}
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
                      <button
                        disabled={!(formik.isValid && formik.dirty)}
                        type="submit"
                        className="btn bg-main my-2 text-white"
                      >
                        Register
                      </button>
                      
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
