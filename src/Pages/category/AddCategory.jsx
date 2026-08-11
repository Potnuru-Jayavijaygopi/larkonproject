import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsImage, BsCloudUpload } from "react-icons/bs";

function AddCategory({ onNavigate }) {
  const navigate = useNavigate();

  const [categoryTitle, setCategoryTitle] = useState(
    "Fashion Men ,Women & kids",
  );
  const [createdBy, setCreatedBy] = useState("seller");
  const [stock, setStock] = useState("46233");
  const [tagId, setTagId] = useState("FS16276");
  const [description, setDescription] = useState(
    "Aurora Fashion has once again captivated fashion enthusiasts with its latest collection, seamlessly blending elegance with comfort in a range of exquisite designs.",
  );
  const [metaTitle, setMetaTitle] = useState("Fashion Brand");
  const [metaTagKeyword, setMetaTagKeyword] = useState("fashion");
  const [metaDescription, setMetaDescription] = useState("");

  const handleSaveChange = (e) => {
    e.preventDefault();
    alert("Category Updated Successfully!");
    if (navigate) {
      navigate("/category-list");
    } else if (onNavigate) {
      onNavigate("category");
    }
  };

  const handleCancel = () => {
    if (navigate) {
      navigate("/category-list");
    } else if (onNavigate) {
      onNavigate("category");
    }
  };

  return (
    <form onSubmit={handleSaveChange}>
      <div className="row g-4">
        <div className="col-xl-4 col-lg-5">
          <div className="content-card p-3 shadow-sm text-center">
            <div
              className="rounded-3 bg-secondary bg-opacity-25 d-flex align-items-center justify-content-center mb-3 mx-auto"
              style={{ height: "140px", width: "100%" }}
            >
              <BsImage className="fs-1 text-dark opacity-75" />
            </div>

            <h6
              className="fw-bold text-dark mb-3"
              style={{ fontSize: "0.9rem" }}
            >
              {categoryTitle || "Fashion Men , Women & Kid's"}
            </h6>

            <div
              className="d-flex justify-content-around text-start border-top pt-3 mb-4 "
              style={{ fontSize: "0.75rem" }}
            >
              <div>
                <span
                  className="text-muted d-block"
                  style={{ fontSize: "0.7rem" }}
                >
                  Created By :
                </span>
                <strong className="text-dark">{createdBy}</strong>
              </div>

              <div>
                <span
                  className="text-muted d-block"
                  style={{ fontSize: "0.7rem" }}
                >
                  Stock :
                </span>
                <strong className="text-dark">{stock}</strong>
              </div>

              <div>
                <span
                  className="text-muted d-block"
                  style={{ fontSize: "0.7rem" }}
                >
                  Id :
                </span>
                <strong className="text-dark">{tagId}</strong>
              </div>
            </div>

            <div className="d-flex gap-2 justify-content-center">
              <button
                className="btn btn-outline-secondary btn-sm px-3"
                type="button"
                style={{ fontSize: "0.78rem", minWidth: "130px" }}
                onClick={handleSaveChange}
              >
                Create Category
              </button>
              <button
                className="btn btn-add-product btn-sm px-3"
                type="button"
                style={{ fontSize: "0.78rem", minWidth: "130px" }}
                onClick={handleCancel}
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

            <div
              className="border border-2 border-dashed rounded-3 p-4 text-center d-flex flex-column align-items-center justify-content-center"
              style={{ borderColor: "#cbd5e1", backgroundColor: "#fafafa" }}
            >
              <BsCloudUpload
                className="display-6 mb-2"
                style={{ color: "#ff6026" }}
              />
              <h6 className="fw-bold text-dark mb-1" style={{ fontSize: "0.85rem" }}>
                Drop your images here, or{" "}
                <span className="cursor-pointer" style={{ color: "#ff6026" }}>
                  click to browse
                </span>
              </h6>
              <p
                className="text-muted small mb-0"
                style={{ fontSize: "0.725rem" }}
              >
                1600 x 1200 (4:3) recommended. PNG, JPG and GIF files are
                allowed
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
                  className="form-control form-control-sm"
                  style={{ fontSize: "0.78rem" }}
                  value={categoryTitle}
                  onChange={(e) => setCategoryTitle(e.target.value)}
                ></input>
              </div>

              <div className="col-md-6">
                <label
                  htmlFor="createdByInput"
                  className="form-label text-muted small"
                  style={{ fontSize: "0.75rem" }}
                >
                  Created By
                </label>
                <select
                  id="createdByInput"
                  className="form-select form-select-sm"
                  style={{ fontSize: "0.78rem" }}
                  value={createdBy}
                  onChange={(e) => setCreatedBy(e.target.value)}
                >
                  <option value="Seller">Seller</option>
                  <option value="Admin">Admin</option>
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
                  style={{ fontSize: "0.78rem" }}
                  value={tagId}
                  onChange={(e) => setTagId(e.target.value)}
                ></input>
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
                  style={{ fontSize: "0.78rem" }}
                  value={metaTagKeyword}
                  onChange={(e) => setMetaTagKeyword(e.target.value)}
                ></input>
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
              style={{ fontSize: "0.8rem" }}
            >
              Save Change
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
export default AddCategory;
