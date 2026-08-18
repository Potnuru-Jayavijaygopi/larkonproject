import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsImage, BsFacebook, BsGoogle } from "react-icons/bs";
import logo1Img from "../../assets/logo 1.png";
import { authAPI } from "../../services/api";

function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleSignIn = async (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setError("Please enter both email and password.");
      return;
    }

    setSubmitting(true);
    setError(null);
    try {
      await authAPI.login(email.trim(), password);
      navigate("/dashboard");
    } catch (err) {
      console.error("Sign in failed:", err);
      setError(err.message || "Invalid email or password.");
    } finally {
      setSubmitting(false);
    }
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
              Sign In
            </h4>
            <p className="text-muted mb-4" style={{ fontSize: "0.825rem" }}>
              Enter your email address and password to access admin panel
            </p>

            {error && (
              <div className="alert alert-danger py-2 small mb-3">{error}</div>
            )}

            <form onSubmit={handleSignIn}>
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
                  placeholder="Enter your email (e.g. admin@larkon.com)"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ fontSize: "0.85rem" }}
                  required
                />
              </div>

              <div className="mb-3">
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <label
                    className="form-label text-muted small mb-0"
                    style={{ fontSize: "0.8rem" }}
                  >
                    Password
                  </label>
                  <a
                    href="#reset-password"
                    className="text-muted text-decoration-none small"
                    style={{ fontSize: "0.78rem" }}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/authentication/reset-password");
                    }}
                  >
                    Reset Password
                  </a>
                </div>

                <input
                  type="password"
                  className="form-control bg-white border border-secondary-subtle py-2 px-3 rounded-3"
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ fontSize: "0.85rem" }}
                  required
                  placeholder="Enter your password"
                  value={password}
                />
              </div>

              <div className="form-check mb-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label
                  className="form-check-label text-muted small"
                  htmlFor="rememberMe"
                  style={{ fontSize: "0.8rem" }}
                >
                  Remember Me
                </label>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="btn w-100 py-2 rounded-3 border-0 fw-medium mb-3 shadow-sm"
                style={{
                  backgroundColor: "#ffede7",
                  color: "#ff5e29",
                  fontSize: "0.85rem",
                }}
              >
                {submitting ? "Signing in..." : "Sign In"}
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
                <span>Sign in with Google</span>
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
                <span>Sign in with Facebook</span>
              </button>
            </div>

            <div className="text-center pt-2">
              <span className="small text-muted" style={{ fontSize: "0.8rem" }}>
                {" "}
                Don't have an account?{" "}
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
export default SignIn;
