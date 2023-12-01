import React, { useContext } from "react";
import { useFormik } from "formik";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
export default function Address() {
  let { onlinePayment, cartId } = useContext(CartContext);

  async function handleAddressSubmit(value) {
    let response = await onlinePayment(cartId, "http://localhost:3000", value);
    window.location.href = response?.data.session.url;
  }

  let formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      city: "",
    },
    onSubmit: handleAddressSubmit,
  });
  return (
    <>
      <section style={{ backgroundColor: "#eee" }}>
        <div className="container py-5">
          <div className="card">
            <div className="card-body">
              <div className="row d-flex justify-content-center pb-5">
                <div className="col-md-7 col-xl-5 mb-4 mb-md-0">
                  <div className="py-4 d-flex flex-row">
                    <h5>
                      <span className="far fa-check-square pe-2"></span>
                      <b>ELIGIBLE</b> |
                    </h5>
                    <span className="ps-2">Pay</span>
                  </div>
                  <h4 className="text-success">$85.00</h4>
                  <h4>Diabetes Pump & Supplies</h4>
                  <div className="d-flex pt-2">
                    <div>
                      <p>
                        <b>
                          Insurance Responsibility{" "}
                          <span className="text-success">$71.76</span>
                        </b>
                      </p>
                    </div>
                    <div className="ms-auto">
                      <p className="text-main">
                        <i className="fas fa-plus-circle text-main pe-1"></i>
                        Add insurance card
                      </p>
                    </div>
                  </div>
                  <p>
                    Insurance claims and all necessary dependencies will be
                    submitted to your insurer for the coverred portion of this
                    order
                  </p>
                  <div
                    className="rounded d-flex"
                    style={{ backgroundColor: "#f8f9fa" }}
                  >
                    <div className="p-2">Aetna-Open Access</div>
                    <div className="ms-auto p-2">OAP</div>
                  </div>
                  <hr />
                  <div className="pt-2">
                    <div className="d-flex pb-2">
                      <div>
                        <p>
                          <b>
                            Patient Balance{" "}
                            <span className="text-success">$13.24</span>
                          </b>
                        </p>
                      </div>
                      <div className="ms-auto">
                        <p className="text-main">
                          <i className="fas fa-plus-circle text-main pe-1"></i>
                          Add payment card
                        </p>
                      </div>
                    </div>
                    <p>
                      This is an estimate for the portion of your order (not
                      covered by insurance) due today . once insurance finalizes
                      their review refunds and/or balances will reconcile
                      automatically.
                    </p>
                    <form className="pb-3">
                      <div className="d-flex flex-row pb-3">
                        <div className="d-flex align-items-center pe-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="radioNoLabel"
                            id="radioNoLabel1"
                            value=""
                            aria-label="..."
                            checked
                          />
                        </div>
                        <div className="rounded border d-flex w-100 p-3 align-items-center">
                          <p className="mb-0">
                            <i className="fab fa-cc-visa fa-lg text-main pe-2"></i>
                            Visa Debit Card
                          </p>
                          <div className="ms-auto">************3456</div>
                        </div>
                      </div>

                      <div className="d-flex flex-row">
                        <div className="d-flex align-items-center pe-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="radioNoLabel"
                            id="radioNoLabel2"
                            value=""
                            aria-label="..."
                          />
                        </div>
                        <div className="rounded border d-flex w-100 p-3 align-items-center">
                          <p className="mb-0">
                            <i className="fab fa-cc-mastercard fa-lg text-dark pe-2"></i>
                            Mastercard Office
                          </p>
                          <div className="ms-auto">************1038</div>
                        </div>
                      </div>
                    </form>
                    <input
                      type="button"
                      value="Proceed to payment"
                      className="btn bg-main text-light btn-block btn-lg"
                    />
                  </div>
                </div>

                <div className="col-md-5 col-xl-4 offset-xl-1">
                  <div className="py-4 d-flex text-center justify-content-end">
                    <h6>
                      <Link to={'/Products'}>Cancel and return to website</Link>
                    </h6>
                  </div>
                  <div
                    className="rounded d-flex flex-column p-2"
                    style={{ backgroundColor: "#f8f9fa" }}
                  >
                    <div className="p-2 me-3">
                      <h4>Personal Information </h4>
                    </div>
                    <form onSubmit={formik.handleSubmit}>
                      <label htmlFor="name" className="text-main">
                        name :{" "}
                      </label>
                      <input
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="text"
                        className="form-control mb-2 "
                        name="name"
                        id="name"
                      />
                      <label htmlFor="phone" className="text-main">
                        Phone :{" "}
                      </label>
                      <input
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="tel"
                        className="form-control mb-2 "
                        name="phone"
                        id="phone"
                      />
                      <label htmlFor="city" className="text-main">
                        City :{" "}
                      </label>
                      <input
                        value={formik.values.city}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="text"
                        className="form-control mb-2 "
                        name="city"
                        id="city"
                      />
                      <Link
                        type="submit"
                        onClick={() => handleAddressSubmit()}
                        className="btn bg-main my-3 w-25 p-2  text-light"
                      >
                        Pay Now
                      </Link>
                    </form>

                    <div className="border-top px-2 mx-2"></div>
                    <div className="p-2 d-flex pt-3">
                      <div className="col-8">
                        Total Deductible, Coinsurance, and Copay
                      </div>
                      <div className="ms-auto">$40.00</div>
                    </div>
                    <div className="p-2 d-flex">
                      <div className="col-8">
                        Maximum out-of-pocket on Insurance Policy (not reached)
                      </div>
                      <div className="ms-auto">$6500.00</div>
                    </div>
                    <div className="border-top px-2 mx-2"></div>
                    <div className="p-2 d-flex pt-3">
                      <div className="col-8">Insurance Responsibility</div>
                      <div className="ms-auto">
                        <b>$71.76</b>
                      </div>
                    </div>
                    <div className="p-2 d-flex">
                      <div className="col-8">
                        Patient Balance{" "}
                        <span className="fa fa-question-circle text-dark"></span>
                      </div>
                      <div className="ms-auto">
                        <b>$71.76</b>
                      </div>
                    </div>
                    <div className="border-top px-2 mx-2"></div>
                    <div className="p-2 d-flex pt-3">
                      <div className="col-8">
                        <b>Total</b>
                      </div>
                      <div className="ms-auto">
                        <b className="text-success">$85.00</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
