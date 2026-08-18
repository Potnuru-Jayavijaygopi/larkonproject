import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Pagination from "../../Components/Pagination";
import {
  BsChevronRight,
  BsGear,
  BsFunnel,
  BsPlusLg,
  BsSearch,
  BsChevronDown,
  BsHeartFill,
  BsHeart,
  BsImage,
  BsStarFill,
  BsCartPlus,
} from "react-icons/bs";
import { productAPI, categoryAPI, parseProductImages } from "../../services/api";

function ProductGrid({ onNavigate }) {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categoryMap, setCategoryMap] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [favoriteItems, setFavoriteItems] = useState({});
  const [searchFilter, setSearchFilter] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedRating, setSelectedRating] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        setError(null);
        const [productsData, categoriesData] = await Promise.all([
          productAPI.getAll(),
          categoryAPI.getAll().catch(() => [])
        ]);

        const catMap = {};
        if (Array.isArray(categoriesData)) {
          categoriesData.forEach((cat) => {
            catMap[cat.id] = cat.category_name || cat.name;
          });
        }
        setCategoryMap(catMap);
        setCategories(Array.isArray(categoriesData) ? categoriesData : []);
        setProducts(Array.isArray(productsData) ? productsData : []);
      } catch (err) {
        console.error("Failed to load products for grid:", err);
        setError(err.message || "Failed to load products");
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const handleToggleFavorite = (productId) => {
    setFavoriteItems((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  const handleCreateProduct = () => {
    if (navigate) {
      navigate("/products/create");
    } else if (onNavigate) {
      onNavigate("create-product");
    }
  };

  const handleProductDetails = (product) => {
    const id = product?.id || "";
    if (navigate) {
      navigate(`/products/details?id=${id}`, { state: { product } });
    } else if (onNavigate) {
      onNavigate("product-details", { product });
    }
  };

  const handleCategoryToggle = (categoryName) => {
    if (categoryName === "all") {
      setSelectedCategories([]);
      return;
    }
    setSelectedCategories((prev) =>
      prev.includes(categoryName)
        ? prev.filter((c) => c !== categoryName)
        : [...prev, categoryName]
    );
  };

  // Filter products based on search, categories, rating
  const filteredProducts = products.filter((item) => {
    const name = (item.product_name || item.title || "").toLowerCase();
    const matchesSearch = !searchFilter || name.includes(searchFilter.toLowerCase());

    const itemCat = categoryMap[item.category_id] || item.tag || "";
    const matchesCat =
      selectedCategories.length === 0 ||
      selectedCategories.some((c) =>
        itemCat.toLowerCase().includes(c.toLowerCase()) ||
        c.toLowerCase().includes(itemCat.toLowerCase())
      );

    const rating = parseFloat(item.average_rating || 0);
    const matchesRating = selectedRating ? rating >= selectedRating : true;

    return matchesSearch && matchesCat && matchesRating;
  });

  return (
    <div className="row g-4">
      <div className="col-lg-3 col-md-4">
        <div className="content-card p-3 mb-3">
          <div className="position-relative">
            <BsSearch className="position-absolute top-50 start-0 translate-middle-y ms-2 text-muted small" />
            <input
              type="text"
              className="form-control form-control-sm ps-4 border-light bg-light"
              placeholder="Search ..."
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
            />
          </div>
        </div>

        <div className="content-card p-3">
          <div className="mb-4">
            <div className="filter-header-box">
              <span>Categories</span>
              <BsChevronDown className="small" />
            </div>
            <div className="px-1">
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="catAll"
                  checked={selectedCategories.length === 0}
                  onChange={() => handleCategoryToggle("all")}
                />
                <label className="form-check-label small" htmlFor="catAll">
                  All Categories
                </label>
              </div>

              {categories.length > 0 ? (
                categories.map((cat) => (
                  <div className="form-check mb-2" key={cat.id}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id={`cat-${cat.id}`}
                      checked={selectedCategories.includes(cat.category_name)}
                      onChange={() => handleCategoryToggle(cat.category_name)}
                    />
                    <label
                      className="form-check-label small"
                      htmlFor={`cat-${cat.id}`}
                    >
                      {cat.category_name}
                    </label>
                  </div>
                ))
              ) : (
                <>
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="catFashion"
                      checked={selectedCategories.includes("Fashion")}
                      onChange={() => handleCategoryToggle("Fashion")}
                    />
                    <label className="form-check-label small" htmlFor="catFashion">
                      Fashion Men , Women &amp; Kid's
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="catEyewear"
                      checked={selectedCategories.includes("Sunglass")}
                      onChange={() => handleCategoryToggle("Sunglass")}
                    />
                    <label className="form-check-label small" htmlFor="catEyewear">
                      Eye Ware &amp; Sunglass
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="catWatches"
                      checked={selectedCategories.includes("Watches")}
                      onChange={() => handleCategoryToggle("Watches")}
                    />
                    <label className="form-check-label small" htmlFor="catWatches">
                      Watches
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="catElectronics"
                      checked={selectedCategories.includes("Electronics")}
                      onChange={() => handleCategoryToggle("Electronics")}
                    />
                    <label
                      className="form-check-label small"
                      htmlFor="catElectronics"
                    >
                      Electronics Items
                    </label>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="mb-4">
            <div className="filter-header-box">
              <span>Rating</span>
              <BsChevronDown className="small" />
            </div>
            <div className="px-1">
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="ratingFilter"
                  id="rateAll"
                  checked={selectedRating === null}
                  onChange={() => setSelectedRating(null)}
                />
                <label className="form-check-label small" htmlFor="rateAll">
                  All Ratings
                </label>
              </div>
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="ratingFilter"
                  id="rate4"
                  checked={selectedRating === 4}
                  onChange={() => setSelectedRating(4)}
                />
                <label className="form-check-label small" htmlFor="rate4">
                  4 ⭐ &amp; Above
                </label>
              </div>
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="ratingFilter"
                  id="rate3"
                  checked={selectedRating === 3}
                  onChange={() => setSelectedRating(3)}
                />
                <label className="form-check-label small" htmlFor="rate3">
                  3 ⭐ &amp; Above
                </label>
              </div>
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="ratingFilter"
                  id="rate2"
                  checked={selectedRating === 2}
                  onChange={() => setSelectedRating(2)}
                />
                <label className="form-check-label small" htmlFor="rate2">
                  2 ⭐ &amp; Above
                </label>
              </div>
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="ratingFilter"
                  id="rate1"
                  checked={selectedRating === 1}
                  onChange={() => setSelectedRating(1)}
                />
                <label className="form-check-label small" htmlFor="rate1">
                  1 ⭐ &amp; Above
                </label>
              </div>
            </div>
          </div>

          <button
            className="btn btn-add-product w-100 mt-2"
            type="button"
            onClick={() => {
              // Apply is instant with reactive state
            }}
          >
            Apply
          </button>
        </div>
      </div>

      <div className="col-lg-9 col-md-8">
        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
          <div>
            <div className="text-muted small d-flex align-items-center gap-1">
              Categories <BsChevronRight className="small" />{" "}
              <strong className="text-dark">
                {selectedCategories.length > 0
                  ? selectedCategories.join(", ")
                  : "All Product"}
              </strong>
            </div>
            <div className="small text-muted">
              Showing <strong>{filteredProducts.length}</strong> items results
            </div>
          </div>

          <div className="d-flex gap-2">
            <button
              className="btn btn-sm btn-outline-secondary bg-white px-3 d-inline-flex align-items-center gap-1"
              type="button"
            >
              <BsGear /> More Setting
            </button>
            <button
              className="btn btn-sm btn-outline-secondary bg-white px-3 d-inline-flex align-items-center gap-1"
              type="button"
            >
              <BsFunnel /> Filters
            </button>
            <button
              className="btn btn-sm btn-success px-3 d-inline-flex align-items-center gap-1"
              type="button"
              onClick={handleCreateProduct}
            >
              <BsPlusLg /> New Product
            </button>
          </div>
        </div>

        {error && (
          <div className="alert alert-warning mb-3 py-2 small">
            {error}
          </div>
        )}

        {loading ? (
          <div className="text-center py-5 text-muted">
            <div className="spinner-border text-primary me-2" role="status" />
            <div>Loading products...</div>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="content-card p-5 text-center text-muted">
            No products match your filters.
          </div>
        ) : (
          <div className="row g-3">
            {filteredProducts.map((item) => {
              const images = parseProductImages(item.image);
              const firstImage = images.length > 0 ? images[0] : null;
              const priceVal = parseFloat(item.price || 0);
              const formattedPrice = `$${priceVal.toFixed(2)}`;
              const discountVal = parseFloat(item.discount || 0);
              const oldPriceVal =
                discountVal > 0
                  ? (priceVal / (1 - discountVal / 100)).toFixed(2)
                  : (priceVal * 1.25).toFixed(2);
              const oldPrice = `$${oldPriceVal}`;
              const discountText =
                discountVal > 0 ? `${discountVal}% Off` : "Special Offer";
              const rating = item.average_rating
                ? parseFloat(item.average_rating).toFixed(1)
                : "4.5";
              const reviews = item.review_count ?? 55;

              return (
                <div className="col-xl-3 col-lg-4 col-sm-6" key={item.id}>
                  <div className="content-card h-100 p-3 d-flex flex-column justify-content-between position-relative">
                    <button
                      className="btn btn-link p-0 position-absolute top-0 end-0 m-3 text-danger border-0"
                      type="button"
                      style={{ zIndex: 2 }}
                      onClick={() => handleToggleFavorite(item.id)}
                    >
                      {favoriteItems[item.id] ? <BsHeartFill /> : <BsHeart />}
                    </button>

                    <div
                      className="bg-light rounded-3 d-flex align-items-center justify-content-center mb-3 cursor-pointer overflow-hidden"
                      style={{ height: "160px" }}
                      onClick={() => handleProductDetails(item)}
                    >
                      {firstImage ? (
                        <img
                          src={firstImage}
                          alt={item.product_name || "Product"}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                          }}
                          onError={(e) => {
                            e.target.style.display = "none";
                            e.target.parentNode.innerHTML =
                              '<span class="fs-1 text-secondary opacity-50"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path><path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"></path></svg></span>';
                          }}
                        />
                      ) : (
                        <BsImage className="fs-1 text-secondary opacity-50" />
                      )}
                    </div>

                    <div>
                      <h6
                        className="fw-bold text-dark mb-1 text-truncate cursor-pointer"
                        style={{ fontSize: "0.85rem" }}
                        title={item.product_name || item.title}
                        onClick={() => handleProductDetails(item)}
                      >
                        {item.product_name || item.title || "Product Name"}
                      </h6>

                      <div className="d-flex align-items-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <BsStarFill
                            key={i}
                            className="text-warning"
                            style={{ fontSize: "10px" }}
                          />
                        ))}
                        <span
                          className="fw-bold ms-1"
                          style={{ fontSize: "11px" }}
                        >
                          {rating}
                        </span>
                        <span
                          className="text-muted"
                          style={{ fontSize: "10px" }}
                        >
                          ({reviews})
                        </span>
                      </div>

                      <div className="d-flex align-items-center gap-2 mb-3">
                        <span className="text-decoration-line-through text-muted small">
                          {oldPrice}
                        </span>
                        <span className="fw-bold text-dark">
                          {formattedPrice}
                        </span>
                        <span className="text-danger small fw-bold">
                          ({discountText})
                        </span>
                      </div>
                    </div>

                    <div className="d-flex gap-2">
                      <button
                        className="btn btn-sm btn-light border px-2 text-muted"
                        type="button"
                      >
                        ...
                      </button>
                      <button
                        className="btn btn-sm btn-outline-secondary bg-white w-100 d-flex align-items-center justify-content-center gap-1 small"
                        type="button"
                        onClick={() => handleProductDetails(item)}
                      >
                        <BsCartPlus /> Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <Pagination />
      </div>
    </div>
  );
}

export default ProductGrid;
