import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { BsImage, BsCloudUpload } from "react-icons/bs";
import { categoryAPI } from "../../services/api";

function CreateCategory({ onNavigate }) {
  const navigate = useNavigate();

  const [categoryTitle, setCategoryTitle] = useState("");
  const [createdBy, setCreatedBy] = useState("Admin");
  const [stock, setStock] = useState("");
  const [tagId, setTagId] = useState("");
  const [description, setDescription] = useState("");

  const [metaTitle, setMetaTitle] = useState("");
  const [metaTagKeyword, setMetaTagKeyword] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);

  const handleBrowseClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSaveChange = async (e) => {
    if (e) e.preventDefault();
    if (!categoryTitle.trim()) {
      setError("Please enter a category title.");
      return;
    }

    setSubmitting(true);
    setError(null);
    try {
      await categoryAPI.create({
        category_name: categoryTitle.trim(),
        description: description.trim() || `${categoryTitle.trim()} category collection`,
        status: "active",
      });

      alert("New Category Created Successfully!");
      if (navigate) {
        navigate("/category/list");
      } else if (onNavigate) {
        onNavigate("category");
      }
    } catch (err) {
      console.error("Failed to create category:", err);
      setError(err.message || "Failed to create category on the server.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleCancel = () => {
    if (navigate) {
      navigate("/category/list");
    } else if (onNavigate) {
      onNavigate("category");
    }
  };

  return (
    <form onSubmit={handleSaveChange}>
      {error && (
        <div className="alert alert-danger py-2 small mb-3">{error}</div>
      )}

      <div className="row g-4">
        <div className="col-xl-4 col-lg-5">
          <div className="content-card p-3 shadow-sm text-center">
            <div
              className="rounded-3 bg-secondary bg-opacity-25 d-flex align-items-center justify-content-center mb-3 mx-auto overflow-hidden"
              style={{ height: "140px", width: "100%" }}
            >
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Category Preview"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              ) : (
                <BsImage className="fs-1 text-dark opacity-75" />
              )}
            </div>

            <h6
              className="fw-bold text-start mb-3"
              style={{ fontSize: "0.9rem", color: "#2b3a4a" }}
            >
              {categoryTitle || "Fashion Men , Women & Kid's"}
            </h6>

            <div
              className="d-flex justify-content-around text-start border-top pt-3 mb-4"
              style={{ fontSize: "0.75rem" }}
            >
              <div>
                <span
                  className="text-muted d-block"
                  style={{ fontSize: "0.7rem" }}
                >
                  Created By :
                </span>
                <strong className="text-dark">{createdBy || "Admin"}</strong>
              </div>
              <div>
                <span
                  className="text-muted d-block"
                  style={{ fontSize: "0.7rem" }}
                >
                  Stock :
                </span>
                <strong className="text-dark">{stock || "0"}</strong>
              </div>
              <div>
                <span
                  className="text-muted d-block"
                  style={{ fontSize: "0.7rem" }}
                >
                  ID :
                </span>
                <strong className="text-dark">{tagId || "FS16276"}</strong>
              </div>
            </div>

            <div className="d-flex gap-2 justify-content-between border-top pt-3">
              <button
                className="btn btn-outline-secondary btn-sm "
                type="submit"
                disabled={submitting}
                style={{
                  width: "50%",
                  fontSize: "0.78rem",
                  borderRadius: "12px",
                  borderColor: "#5a6e85",
                  color: "#5a6e85",
                  backgroundColor: "transparent",
                  padding: "8px 12px",
                }}
              >
                {submitting ? "Saving..." : "Create Category"}
              </button>

              <button
                className="btn btn-sm "
                type="button"
                onClick={handleCancel}
                style={{
                  width: "50%",
                  fontSize: "0.78rem",
                  backgroundColor: "#ff6026",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "12px",
                  padding: "8px 12px",
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>

        <div className="col-xl-8 col-lg-7">
          <div className="content-card p-4 mb-4 shadow-sm">
            <h6
              className="fw-bold text-dark mb-3"
              style={{ fontSize: "0.85rem" }}
            >
              Add Thumbnail Photo
            </h6>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/*"
              style={{ display: "none" }}
            />
            <div
              className="border border-2 border-dashed rounded-3 p-4 text-center"
              style={{ borderColor: "#cbd5e1", backgroundColor: "#fafafa", cursor: "pointer" }}
              onClick={handleBrowseClick}
            >
              <BsCloudUpload
                className="display-6 mb-2"
                style={{ color: "#ea580c" }}
              />
              <h6
                className="fw-bold text-dark mb-1"
                style={{ fontSize: "0.85rem" }}
              >
                Drop your images here, or{" "}
                <span style={{ color: "#ff6026", cursor: "pointer", textDecoration: "underline" }}>
                  click to browse
                </span>
              </h6>
              <p
                className="text-muted small mb-0"
                style={{ fontSize: "0.725rem" }}
              >
                {selectedFile ? `Selected: ${selectedFile.name}` : "1600 x 1200 (4:3) recommended. PNG, JPG and GIF files are allowed"}
              </p>
            </div>
          </div>

          <div className="content-card p-4 mb-4 shadow-sm">
            <h6
              className="fw-bold text-dark mb-3"
              style={{ fontSize: "0.85rem" }}
            >
              General Information
            </h6>
            <div className="row g-3 mb-3">
              <div className="col-md-6">
                <label
                  htmlFor="catTitleInput"
                  className="form-label text-muted small"
                  style={{ fontSize: "0.75rem" }}
                >
                  Category Title
                </label>
                <input
                  id="catTitleInput"
                  type="text"
                  required
                  className="form-control form-control-sm"
                  placeholder="Enter Title"
                  style={{ fontSize: "0.78rem" }}
                  value={categoryTitle}
                  onChange={(e) => setCategoryTitle(e.target.value)}
                />
              </div>

              <div className="col-md-6">
                <label
                  htmlFor="createdBySelect"
                  className="form-label text-muted small"
                  style={{ fontSize: "0.75rem" }}
                >
                  Created By
                </label>
                <select
                  id="createdBySelect"
                  className="form-select form-select-sm"
                  style={{ fontSize: "0.78rem" }}
                  value={createdBy}
                  onChange={(e) => setCreatedBy(e.target.value)}
                >
                  <option value="Admin">Admin</option>
                  <option value="Seller">Seller</option>
                </select>
              </div>
            </div>

            <div className="row g-3 mb-3">
              <div className="col-md-6">
                <label
                  htmlFor="stockInput"
                  className="form-label text-muted small"
                  style={{ fontSize: "0.75rem" }}
                >
                  Stock
                </label>
                <input
                  id="stockInput"
                  type="text"
                  className="form-control form-control-sm"
                  placeholder="Quantity"
                  style={{ fontSize: "0.78rem" }}
                  value={stock}
                  onChange={(e) => setStock(e.target.value)}
                />
              </div>

              <div className="col-md-6">
                <label
                  htmlFor="tagIdInput"
                  className="form-label text-muted small"
                  style={{ fontSize: "0.75rem" }}
                >
                  Tag ID
                </label>
                <input
                  id="tagIdInput"
                  type="text"
                  className="form-control form-control-sm"
                  placeholder="#******"
                  style={{ fontSize: "0.78rem" }}
                  value={tagId}
                  onChange={(e) => setTagId(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="catDescTextarea"
                className="form-label text-muted small"
                style={{ fontSize: "0.75rem" }}
              >
                Description
              </label>
              <textarea
                id="catDescTextarea"
                className="form-control form-control-sm"
                rows="4"
                placeholder="Type description"
                style={{ fontSize: "0.78rem" }}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
          </div>

          <div className="content-card p-4 mb-4 shadow-sm">
            <h6
              className="fw-bold text-dark mb-3"
              style={{ fontSize: "0.85rem" }}
            >
              Meta Options
            </h6>
            <div className="row g-3 mb-3">
              <div className="col-md-6">
                <label
                  htmlFor="metaTitleInput"
                  className="form-label text-muted small"
                  style={{ fontSize: "0.75rem" }}
                >
                  Meta Title
                </label>
                <input
                  id="metaTitleInput"
                  type="text"
                  className="form-control form-control-sm"
                  placeholder="Enter Title"
                  style={{ fontSize: "0.78rem" }}
                  value={metaTitle}
                  onChange={(e) => setMetaTitle(e.target.value)}
                />
              </div>

              <div className="col-md-6">
                <label
                  htmlFor="metaTagKeyInput"
                  className="form-label text-muted small"
                  style={{ fontSize: "0.75rem" }}
                >
                  Meta Tag Keyword
                </label>
                <input
                  id="metaTagKeyInput"
                  type="text"
                  className="form-control form-control-sm"
                  placeholder="Enter word"
                  style={{ fontSize: "0.78rem" }}
                  value={metaTagKeyword}
                  onChange={(e) => setMetaTagKeyword(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="metaDescTextarea"
                className="form-label text-muted small"
                style={{ fontSize: "0.75rem" }}
              >
                Description
              </label>
              <textarea
                id="metaDescTextarea"
                className="form-control form-control-sm"
                rows="3"
                placeholder="Type description"
                style={{ fontSize: "0.78rem" }}
                value={metaDescription}
                onChange={(e) => setMetaDescription(e.target.value)}
              ></textarea>
            </div>
          </div>

          <div className="d-flex justify-content-end gap-2 mb-4">
            <button
              className="btn btn-light border btn-sm px-4 py-1"
              type="submit"
              disabled={submitting}
              style={{ fontSize: "0.8rem" }}
            >
              {submitting ? "Saving..." : "Save Change"}
            </button>
            <button
              className="btn btn-add-product btn-sm px-4 py-1"
              type="button"
              style={{ fontSize: "0.8rem" }}
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default CreateCategory;
