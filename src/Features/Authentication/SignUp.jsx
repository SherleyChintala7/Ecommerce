// export const SignUp = () => {
//     return (
//         <>
//             <section className="py-5" style={{ backgroundColor: "#eee" }}>
//                 <div className="container" style={{ maxWidth: "950px" }}>
//                     <div className="row justify-content-center">
//                         <div className="col-lg-12 col-xl-11">
//                             <div className="card text-black shadow-sm" style={{ borderRadius: "20px" }}>
                                
//                                 <div className="card-body p-4">
//                                     <div className="row justify-content-center align-items-center">

//                                         {/* LEFT SIDE FORM */}
//                                         <div className="col-md-7 col-lg-5 col-xl-4 order-2 order-lg-1">
//                                             <p className="text-center h2 fw-bold mb-4">
//                                                 Sign Up
//                                             </p>
//                                             <form>
//                                                 {/* Name */}
//                                                 <div className="d-flex flex-row align-items-center mb-3">
//                                                     <i className="fas fa-user fa-lg me-3"></i>
//                                                     <div className="form-outline flex-fill">
//                                                         <input type="text" id="name" className="form-control" />
//                                                         <label className="form-label" htmlFor="name">Your Name</label>
//                                                     </div>
//                                                 </div>
//                                                 {/* Email */}
//                                                 <div className="d-flex flex-row align-items-center mb-3">
//                                                     <i className="fas fa-envelope fa-lg me-3"></i>
//                                                     <div className="form-outline flex-fill">
//                                                         <input type="email" id="email" className="form-control" />
//                                                         <label className="form-label" htmlFor="email">Your Email</label>
//                                                     </div>
//                                                 </div>
//                                                 {/* Password */}
//                                                 <div className="d-flex flex-row align-items-center mb-3">
//                                                     <i className="fas fa-lock fa-lg me-3"></i>
//                                                     <div className="form-outline flex-fill">
//                                                         <input type="password" id="password" className="form-control" />
//                                                         <label className="form-label" htmlFor="password">Password</label>
//                                                     </div>
//                                                 </div>
//                                                 {/* Repeat Password */}
//                                                 <div className="d-flex flex-row align-items-center mb-3">
//                                                     <i className="fas fa-key fa-lg me-3"></i>
//                                                     <div className="form-outline flex-fill">
//                                                         <input type="password" id="repeatPass" className="form-control" />
//                                                         <label className="form-label" htmlFor="repeatPass">Repeat Password</label>
//                                                     </div>
//                                                 </div>
//                                                 {/* Terms */}
//                                                 <div className="form-check d-flex justify-content-center mb-4">
//                                                     <input className="form-check-input me-2" type="checkbox" id="terms" />
//                                                     <label className="form-check-label" htmlFor="terms">
//                                                         I agree to the Terms of Service
//                                                     </label>
//                                                 </div>
//                                                 {/* Submit */}
//                                                 <div className="d-flex justify-content-center mb-2">
//                                                     <button className="btn btn-primary px-5">Register</button>
//                                                 </div>
//                                             </form>
//                                         </div>
//                                         {/* RIGHT SIDE IMAGE */}
//                                         <div className="col-md-5 col-lg-6 col-xl-7 d-flex justify-content-center align-items-center order-1 order-lg-2">
//                                             <img
//                                                 src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
//                                                 className="img-fluid"
//                                                 alt="Sample"
//                                                 style={{ maxHeight: "350px", objectFit: "contain" }}
//                                             />
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// }



import React, { useState } from "react";

export const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // validation rules
  const validators = {
    name: (v) => (v.trim() ? "" : "Name is required"),
    email: (v) =>
      /^\S+@\S+\.\S+$/.test(v) ? "" : "Please enter a valid email address",
    password: (v) =>
      v.length >= 6 ? "" : "Password must be at least 6 characters",
    mobile: (v) =>
      /^\d{10}$/.test(v) ? "" : "Mobile number must be 10 digits",
    terms: (v) => (v ? "" : "You must accept the Terms of service"),
  };

  // validate a single field
  const validateField = (name, value) => {
    const validator = validators[name];
    if (!validator) return "";
    return validator(value);
  };

  // validate whole form, returns errors object
  const validateForm = (data) => {
    const newErrors = {};
    Object.keys(validators).forEach((key) => {
      const err = validateField(key, data[key]);
      if (err) newErrors[key] = err;
    });
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData((prev) => {
      const updated = { ...prev, [name]: newValue };
      // update error for this field immediately
      setErrors((prevErr) => {
        const copy = { ...prevErr };
        const errMsg = validateField(name, newValue);
        if (errMsg) copy[name] = errMsg;
        else delete copy[name];
        return copy;
      });
      return updated;
    });

    // reset submitted state if user edits
    if (submitted) setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm(formData);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // form is valid — do your registration logic here (API call, etc.)
      console.log("Form data ready to send:", formData);

      // mimic success
      setSubmitted(true);

      // optional: clear form
      setFormData({
        name: "",
        email: "",
        password: "",
        mobile: "",
        terms: false,
      });
    } else {
      setSubmitted(false);
    }
  };

  const isValid = Object.keys(validateForm(formData)).length === 0;

  return (
    <>
       <section className="py-5" style={{ backgroundColor: "#f7f7f7" }}>
            <div className="container" >
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-11 col-lg-11 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>

                      <form className="mx-1 mx-md-4" onSubmit={handleSubmit} noValidate>
                        {/* Name */}
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0 w-100">
                            <label className="form-label" htmlFor="name">
                              Your Name
                            </label>
                            <input
                              type="text"
                              id="name"
                              className={`form-control ${errors.name ? "is-invalid" : ""}`}
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                            />
                            {errors.name && (
                              <div className="invalid-feedback">{errors.name}</div>
                            )}
                          </div>
                        </div>

                        {/* Email */}
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0 w-100">
                            <label className="form-label" htmlFor="email">
                              Your Email
                            </label>
                            <input
                              type="email"
                              id="email"
                              className={`form-control ${errors.email ? "is-invalid" : ""}`}
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                            />
                            
                            {errors.email && (
                              <div className="invalid-feedback">{errors.email}</div>
                            )}
                          </div>
                        </div>

                        {/* Password */}
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0 w-100">
                             <label className="form-label" htmlFor="password">
                              Password
                            </label>
                            <input
                              type="password"
                              id="password"
                              className={`form-control ${errors.password ? "is-invalid" : ""}`}
                              name="password"
                              value={formData.password}
                              onChange={handleChange}
                            />
                           
                            {errors.password && (
                              <div className="invalid-feedback">{errors.password}</div>
                            )}
                          </div>
                        </div>

                        {/* Mobile */}
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0 w-100">
                             <label className="form-label" htmlFor="mobile">
                              Mobile
                            </label>
                            <input
                              type="tel"
                              id="mobile"
                              className={`form-control ${errors.mobile ? "is-invalid" : ""}`}
                              name="mobile"
                              value={formData.mobile}
                              onChange={handleChange}
                              inputMode="numeric"
                              pattern="\d*"
                            />
                           
                            {errors.mobile && (
                              <div className="invalid-feedback">{errors.mobile}</div>
                            )}
                          </div>
                        </div>

                        {/* Terms */}
                        <div className="form-check d-flex justify-content-center mb-3">
                              
                          <input
                            className={`form-check-input ${errors.terms ? "is-invalid" : ""}`}
                            type="checkbox"
                            id="terms"
                            name="terms"
                            checked={formData.terms}
                            onChange={handleChange}
                          />
                        <label className="form-check-label" htmlFor="terms">
                            I agree all statements in <a href="#!">Terms of service</a>
                          </label>
                          {errors.terms && (
                            <div className="invalid-feedback d-block">{errors.terms}</div>
                          )}
                        </div>

                        {/* Submit */}
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg"
                            disabled={!isValid}
                          >
                            Register
                          </button>
                        </div>

                        {submitted && (
                          <div className="alert alert-success text-center" role="alert">
                            Registration successful!
                          </div>
                        )}
                      </form>
                    </div>

                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid"
                        alt="Sample"
                      />
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
};
