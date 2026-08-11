import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsImage } from "react-icons/bs";
import logo1Img from "../../assets/logo 1.png";

function LockScreen() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    navigate("/dashboard");
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
              hi !Gaston
            </h4>
            <p className="text-muted mb-4" style={{ fontSize: "0.825rem" }}>
              Enter your password to access the admin.
            </p>

            <form onSubmit={handleSignIn}>
              <div className="mb-4">
                <input
                  type="password"
                  className="form-control bg-white border border-secondary-subtle py-2 px-3 rounded-3"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ fontSize: "0.85rem" }}
                  required
                />
              </div>
              <button
                type="submt"
                className="btn text-white w-100 py-2 rounded-3 border-0 fw-medium mb-4 shadow-sm"
                style={{ backgroundColor: "#ff5e29", fontSize: "0.85rem" }}
              >
                Sign In
              </button>
            </form>

            <div className="text-center pt-2">
              <span
                className="small text-danger"
                style={{ fontSize: "0.8rem" }}
              >
                Not you? return{" "}
                <a
                  href="#signup"
                  className="fw-bold text-decoration-none"
                  style={{ color: "#1e293b" }}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/authentication/signup");
                  }}
                >
                  Sign Up
                </a>
              </span>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div
            className="rounded-4 d-flex align-items-center justify-content-center"
            style={{
              minHeight: "320px",
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
export default LockScreen;
