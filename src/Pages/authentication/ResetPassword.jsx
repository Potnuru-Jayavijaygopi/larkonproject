import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsImage } from "react-icons/bs";
import logo1Img from "../../assets/logo 1.png";

function ResetPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleResetPassword = (e) => {
    e.preventDefault();
    alert("Password reset instructions sent to your email!");
    navigate("/authentication/signin");
  };

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div className="container-fluid min-vh-100 p-4 d-flex flex-column align-items-center justify-content-center bg-light">
      <div
        className="row w-100 g-4 align-items-center justify-content-center my-auto"
        style={{ maxWidth: "1280px" }}
      >
        <div className="col-lg-6 col-md-10 py-2 px-md-5">
          <div className="mx-auto text-start" style={{ maxWidth: "440px" }}>
            <div
              className="mb-4 d-flex justify-content-start cursor-pointer"
              onClick={handleBackToHome}
            >
              <img
                src={logo1Img}
                alt="Larkon Logo"
                style={{
                  maxHeight: "28px",
                  width: "auto",
                  objectFit: "contain",
                }}
              />
            </div>

            <h4 className="fw-bold mb-1" style={{ color: "#1e293b" }}>
              Reset Password
            </h4>
            <p
              className="text-muted mb-4"
              style={{ fontSize: "0.825rem", lineHeight: "1.5" }}
            >
              Enter your email address and we'll send you an email with
              instructions to reset your password.
            </p>

            <form onSubmit={{ handleResetPassword }}>
              <div className="mb-4">
                <label
                  className="form-label text-muted small mb-1"
                  style={{ fontSize: "0.8rem" }}
                >
                  Email
                </label>
                <input
                  type="email"
                  className="form-control bg-white border border-secondary-subtle py-2 px-3 rounded-3"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ fontSize: "0.85rem" }}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn text-white w-100 py-2 rounded-3 border-0 fw-medium mb-4 shadow-sm"
                style={{ backgroundColor: "#ff5e29", fontSize: "0.85rem" }}
              >
                Reset Password
              </button>
            </form>

            <div className="text-center pt-2">
              <span
                className="small"
                style={{ fontSize: "0.8rem", color: "#ff5e29" }}
              >
                {" "}
                Back to{" "}
                <a
                  href="#signin"
                  className="fw-bold text-decoration-none"
                  style={{ color: "#1e293b" }}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/authentication/signin");
                  }}
                >
                  Sign In
                </a>
              </span>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div
            className="rounded-4 d-flex align-items-center justify-content-center"
            style={{
              minHeight: "520px",
              backgroundColor: "#d9d9d9",
              border: "1px solid #c8c8c8",
            }}
          >
            <BsImage
              style={{ fontSize: "4.5rem", color: "#000000", opacity: 0.85 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
