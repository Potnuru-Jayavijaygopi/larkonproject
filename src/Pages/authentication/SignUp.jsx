import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsImage, BsGoogle, BsFacebook } from "react-icons/bs";
import logo1Img from "../../assets/logo 1.png";
function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSignUp = (e) => {
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
              className="mb-4 d-flex justify-content-center cursor-pointer"
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
              Sign Up
            </h4>
            <p className="text-muted mb-4" style={{ fontSize: "0.825rem" }}>
              Create your account to start managing your admin dashboard.
            </p>
            <form onSubmit={handleSignUp}>
              <div className="mb-3">
                <label
                  className="form-label text-muted small mb-1"
                  style={{ fontSize: "0.8rem" }}
                >
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control bg-white border border-secondary-subtle py-2 px-3 rounded-3"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{ fontSize: "0.85rem" }}
                  required
                />
              </div>
              <div className="mb-3">
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
              <div className="mb-3">
                <label
                  className="form-label text-muted small mb-1"
                  style={{ fontSize: "0.8rem" }}
                >
                  Password
                </label>
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
              <div className="form-check mb-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="agreeTerms"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  required
                />
                <label
                  className="form-check-label text-muted small"
                  htmlFor="agreeTerms"
                  style={{ fontSize: "0.8rem" }}
                >
                  I agree to the Terms and Conditions
                </label>
              </div>

              <button
                type="submit"
                className="btn  w-100 py-2 rounded-3 border-0 fw-medium mb-3 shadow-sm"
                style={{ backgroundColor: "#ffede7", fontSize: "0.85rem" ,color:'#ff5e29' }}
              >
                Sign Up
              </button>
            </form>

            <div className="text-center my-3">
              <span
                className="text-muted small fw-semibold"
                style={{ fontSize: "0.75rem" }}
              >
                OR sign with
              </span>
            </div>

            <div className="d-flex flex-column gap-2 mb-4">
              <button
                className="btn w-100 py-2 rounded-3 border-0 d-flex align-items-center justify-content-center gap-2"
                style={{
                  backgroundColor: "#f1f5f9",
                  color: "#334155",
                  fontSize: "0.825rem",
                }}
                onClick={() => navigate("/dashboard")}
              >
                <BsGoogle style={{ color: "#4285f4", fontSize: "0.9rem" }} />
                <span>Sign up with Google</span>
              </button>

              <button
                className="btn w-100 py-2 rounded-3 border-0 d-flex align-items-center justify-content-center gap-2"
                style={{
                  backgroundColor: "#ffede7",
                  color: "#ff5e29",
                  fontSize: "0.825rem",
                }}
                onClick={() => navigate("/dashboard")}
              >
                <BsFacebook style={{ color: "#ff5e29", fontSize: "0.9rem" }} />
                <span>Sign up with Facebook</span>
              </button>
            </div>

            <div className="text-center pt-2">
              <span className="small text-muted" style={{ fontSize: "0.8rem" }}>
                Already have an account?{" "}
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

export default SignUp;
