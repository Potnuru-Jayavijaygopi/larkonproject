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
  BsChevronUp,
  BsHeartFill,
  BsHeart,
  BsImage,
  BsStarFill,
  BsCartPlus,
} from "react-icons/bs";
import { productAPI, categoryAPI, parseProductImages } from "../../services/api";

const defaultCategoryList = [
  { id: 'cat-fashion', category_name: "Fashion Men , Women & Kid's" },
  { id: 'cat-sunglass', category_name: "Eye Ware & Sunglass" },
  { id: 'cat-watches', category_name: "Watches" },
  { id: 'cat-electronics', category_name: "Electronics Items" },
  { id: 'cat-furniture', category_name: "Furniture" },
  { id: 'cat-headphones', category_name: "Headphones" },
  { id: 'cat-beauty', category_name: "Beauty & Health" },
  { id: 'cat-footware', category_name: "Foot Ware" },
];

const figmaOrder = [
  "men black slim fit t-shirt",
  "olive green leather bag",
  "women golden dress",
  "gray cap for men",
  "dark green cargo pent",
  "orange headphone",
  "kid's yellow shoes",
  "men dark brown wallet",
  "sky blue mat sunglass",
  "kid's yellow t-shirt",
  "white rubber smart watch",
  "men brown leather shoes"
];

const figmaMetaData = {
  "men black slim fit t-shirt": { oldPrice: 100, price: 80, rating: "4.5", reviews: 55 },
  "olive green leather bag": { oldPrice: 150, price: 136, rating: "4.1", reviews: 143 },
  "women golden dress": { oldPrice: 250, price: 219, rating: "4.4", reviews: 174 },
  "gray cap for men": { oldPrice: 100, price: 76, rating: "4.2", reviews: 23 },
  "dark green cargo pent": { oldPrice: 130, price: 110, rating: "4.4", reviews: 109 },
  "orange headphone": { oldPrice: 250, price: 231, rating: "4.2", reviews: 200 },
  "kid's yellow shoes": { oldPrice: 100, price: 89, rating: "4.5", reviews: 321 },
  "men dark brown wallet": { oldPrice: 150, price: 132, rating: "4.1", reviews: 190 },
  "sky blue mat sunglass": { oldPrice: 100, price: 77, rating: "3.5", reviews: 290 },
  "kid's yellow t-shirt": { oldPrice: 140, price: 110, rating: "4.1", reviews: 156 },
  "white rubber smart watch": { oldPrice: 110, price: 77, rating: "3.4", reviews: 201 },
  "men brown leather shoes": { oldPrice: 250, price: 222, rating: "4.1", reviews: 370 },
};

function ProductGrid({ onNavigate }) {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categoryMap, setCategoryMap] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [favoriteItems, setFavoriteItems] = useState({});
  const [searchFilter, setSearchFilter] = useState("");

  // Filter States (Initialized so all products show by default)
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [pricePreset, setPricePreset] = useState("all");
  const [customMinPrice, setCustomMinPrice] = useState("");
  const [customMaxPrice, setCustomMaxPrice] = useState("");
  const [selectedGenders, setSelectedGenders] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedRating, setSelectedRating] = useState(null);

  // Accordion open/collapse states
  const [openSections, setOpenSections] = useState({
    categories: true,
    price: true,
    gender: true,
    sizeFit: true,
    rating: true,
  });

  const toggleSection = (sectionKey) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionKey]: !prev[sectionKey],
    }));
  };

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
        setCategories(
          Array.isArray(categoriesData) && categoriesData.length > 0
            ? categoriesData
            : defaultCategoryList
        );
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

  const handleGenderToggle = (gender) => {
    setSelectedGenders((prev) =>
      prev.includes(gender)
        ? prev.filter((g) => g !== gender)
        : [...prev, gender]
    );
  };

  const handleSizeToggle = (size) => {
    setSelectedSizes((prev) =>
      prev.includes(size)
        ? prev.filter((s) => s !== size)
        : [...prev, size]
    );
  };


  const sortedProducts = [...products].sort((a, b) => {
    const nameA = (a.product_name || a.title || "").toLowerCase().trim();
    const nameB = (b.product_name || b.title || "").toLowerCase().trim();
    const indexA = figmaOrder.indexOf(nameA);
    const indexB = figmaOrder.indexOf(nameB);

    if (indexA !== -1 && indexB !== -1) return indexA - indexB;
    if (indexA === -1 && indexB !== -1) return -1;
    if (indexB === -1 && indexA !== -1) return 1;
    return (b.id || 0) - (a.id || 0);
  });

  const filteredProducts = sortedProducts.filter((item) => {

    const name = (item.product_name || item.title || "").toLowerCase();
    const matchesSearch = !searchFilter || name.includes(searchFilter.toLowerCase());


    const itemCat = (categoryMap[item.category_id] || item.tag || "").toLowerCase();
    const matchesCat =
      selectedCategories.length === 0 ||
      selectedCategories.some((c) => {
        const cLow = c.toLowerCase();
        return (
          itemCat.includes(cLow) ||
          cLow.includes(itemCat) ||
          (cLow.includes("fashion") && (itemCat.includes("fashion") || itemCat.includes("clothing"))) ||
          (cLow.includes("sunglass") && itemCat.includes("eye")) ||
          (cLow.includes("watch") && itemCat.includes("watch")) ||
          (cLow.includes("electronic") && itemCat.includes("elect")) ||
          (cLow.includes("foot") && itemCat.includes("shoe")) ||
          (cLow.includes("headphone") && itemCat.includes("audio"))
        );
      });

    const priceVal = parseFloat(item.price || 0);
    let matchesPresetPrice = true;
    if (pricePreset === "below-200") {
      matchesPresetPrice = priceVal < 200;
    } else if (pricePreset === "200-500") {
      matchesPresetPrice = priceVal >= 200 && priceVal <= 500;
    } else if (pricePreset === "500-800") {
      matchesPresetPrice = priceVal >= 500 && priceVal <= 800;
    } else if (pricePreset === "800-1000") {
      matchesPresetPrice = priceVal >= 800 && priceVal <= 1000;
    } else if (pricePreset === "1000-1100") {
      matchesPresetPrice = priceVal >= 1000 && priceVal <= 1100;
    }


    let matchesCustomPrice = true;
    if (customMinPrice !== "" && !isNaN(parseFloat(customMinPrice))) {
      matchesCustomPrice = matchesCustomPrice && priceVal >= parseFloat(customMinPrice);
    }
    if (customMaxPrice !== "" && !isNaN(parseFloat(customMaxPrice))) {
      matchesCustomPrice = matchesCustomPrice && priceVal <= parseFloat(customMaxPrice);
    }


    let matchesGender = true;
    if (selectedGenders.length > 0) {
      const itemGender = (item.gender || "").toLowerCase();
      matchesGender = selectedGenders.some((g) => {
        const gLow = g.toLowerCase();
        if (gLow.includes("men") && !gLow.includes("women")) {
          return itemGender === "men" || itemGender.includes("male");
        }
        if (gLow.includes("women")) {
          return itemGender === "women" || itemGender.includes("female");
        }
        if (gLow.includes("kid")) {
          return itemGender.includes("kid") || itemGender.includes("child");
        }
        return itemGender.includes(gLow) || itemGender === "unisex";
      });
    }


    let matchesSize = true;
    if (selectedSizes.length > 0) {
      let itemSizes = [];
      if (Array.isArray(item.size)) {
        itemSizes = item.size.map((s) => String(s).toUpperCase().trim());
      } else if (typeof item.size === "string") {
        itemSizes = item.size
          .toUpperCase()
          .split(",")
          .map((s) => s.trim().replace(/^SIZE\s*:\s*/i, ""));
      }
      matchesSize = selectedSizes.some((s) =>
        itemSizes.some((is) => is.includes(s.toUpperCase()) || s.toUpperCase() === "STANDARD")
      );
    }


    const ratingVal = parseFloat(item.average_rating || 0);
    const matchesRating = selectedRating ? ratingVal >= selectedRating : true;

    return (
      matchesSearch &&
      matchesCat &&
      matchesPresetPrice &&
      matchesCustomPrice &&
      matchesGender &&
      matchesSize &&
      matchesRating
    );
  });

  const displayCategoryList =
    categories.length > 0 ? categories : defaultCategoryList;

  return (
    <div className="row g-4">
      <div className="col-lg-3 col-md-4">
        <div className="product-filter-sidebar">
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

            <div className="mb-3">
              <div
                className="filter-header-box"
                onClick={() => toggleSection("categories")}
              >
                <span>Categories</span>
                {openSections.categories ? (
                  <BsChevronDown className="small" />
                ) : (
                  <BsChevronUp className="small" />
                )}
              </div>
              {openSections.categories && (
                <div className="px-1 mb-2">
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

                  {displayCategoryList.map((cat) => {
                    const catName = cat.category_name || cat.name;
                    const isChecked = selectedCategories.includes(catName);
                    return (
                      <div className="form-check mb-2" key={cat.id || catName}>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id={`cat-${cat.id || catName}`}
                          checked={isChecked}
                          onChange={() => handleCategoryToggle(catName)}
                        />
                        <label
                          className="form-check-label small"
                          htmlFor={`cat-${cat.id || catName}`}
                        >
                          {catName}
                        </label>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            <div className="mb-3">
              <div
                className="filter-header-box"
                onClick={() => toggleSection("price")}
              >
                <span>Product Price</span>
                {openSections.price ? (
                  <BsChevronDown className="small" />
                ) : (
                  <BsChevronUp className="small" />
                )}
              </div>
              {openSections.price && (
                <div className="px-1 mb-2">
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="pricePreset"
                      id="priceAll"
                      checked={pricePreset === "all"}
                      onChange={() => setPricePreset("all")}
                    />
                    <label className="form-check-label small" htmlFor="priceAll">
                      All Price
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="pricePreset"
                      id="priceBelow200"
                      checked={pricePreset === "below-200"}
                      onChange={() => setPricePreset("below-200")}
                    />
                    <label className="form-check-label small" htmlFor="priceBelow200">
                      Below $200 (145)
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="pricePreset"
                      id="price200_500"
                      checked={pricePreset === "200-500"}
                      onChange={() => setPricePreset("200-500")}
                    />
                    <label className="form-check-label small" htmlFor="price200_500">
                      $200 - $500 (1,885)
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="pricePreset"
                      id="price500_800"
                      checked={pricePreset === "500-800"}
                      onChange={() => setPricePreset("500-800")}
                    />
                    <label className="form-check-label small" htmlFor="price500_800">
                      $500 - $800 (2,276)
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="pricePreset"
                      id="price800_1000"
                      checked={pricePreset === "800-1000"}
                      onChange={() => setPricePreset("800-1000")}
                    />
                    <label className="form-check-label small" htmlFor="price800_1000">
                      $800 - $1000 (12,676)
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="pricePreset"
                      id="price1000_1100"
                      checked={pricePreset === "1000-1100"}
                      onChange={() => setPricePreset("1000-1100")}
                    />
                    <label className="form-check-label small" htmlFor="price1000_1100">
                      $1000 - $1100 (13,123)
                    </label>
                  </div>
                </div>
              )}
            </div>

            <div className="mb-4 px-1">
              <div className="fw-bold small text-dark mb-2" style={{ fontSize: "0.85rem" }}>
                Custom Price Range :
              </div>
              <div className="position-relative my-3" style={{ height: "6px" }}>
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    height: "4px",
                    backgroundColor: "#ff5e29",
                    borderRadius: "2px",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    left: "0%",
                    top: "-5px",
                    width: "14px",
                    height: "14px",
                    backgroundColor: "#ff5e29",
                    border: "2px solid #ffffff",
                    borderRadius: "50%",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.3)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    left: "35%",
                    top: "-5px",
                    width: "14px",
                    height: "14px",
                    backgroundColor: "#ff5e29",
                    border: "2px solid #ffffff",
                    borderRadius: "50%",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.3)",
                  }}
                />
              </div>

              <div className="d-flex align-items-center gap-2 mt-3">
                <div className="input-group input-group-sm">
                  <span className="input-group-text bg-white border-end-0 text-muted" style={{ fontSize: '0.8rem' }}>$</span>
                  <input
                    type="number"
                    className="form-control border-start-0 text-center"
                    placeholder="0"
                    value={customMinPrice}
                    onChange={(e) => setCustomMinPrice(e.target.value)}
                    style={{ fontSize: '0.825rem' }}
                  />
                </div>
                <span className="text-muted small">to</span>
                <div className="input-group input-group-sm">
                  <span className="input-group-text bg-white border-end-0 text-muted" style={{ fontSize: '0.8rem' }}>$</span>
                  <input
                    type="number"
                    className="form-control border-start-0 text-center"
                    placeholder="200"
                    value={customMaxPrice}
                    onChange={(e) => setCustomMaxPrice(e.target.value)}
                    style={{ fontSize: '0.825rem' }}
                  />
                </div>
              </div>
            </div>

            <div className="mb-3">
              <div
                className="filter-header-box"
                onClick={() => toggleSection("gender")}
              >
                <span>Gender</span>
                {openSections.gender ? (
                  <BsChevronDown className="small" />
                ) : (
                  <BsChevronUp className="small" />
                )}
              </div>
              {openSections.gender && (
                <div className="px-1 mb-2">
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="genderMen"
                      checked={selectedGenders.includes("Men")}
                      onChange={() => handleGenderToggle("Men")}
                    />
                    <label className="form-check-label small" htmlFor="genderMen">
                      Men (1,834)
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="genderWomen"
                      checked={selectedGenders.includes("Women")}
                      onChange={() => handleGenderToggle("Women")}
                    />
                    <label className="form-check-label small" htmlFor="genderWomen">
                      Women (2,890)
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="genderKids"
                      checked={selectedGenders.includes("Kid's")}
                      onChange={() => handleGenderToggle("Kid's")}
                    />
                    <label className="form-check-label small" htmlFor="genderKids">
                      Kid's (1,231)
                    </label>
                  </div>
                </div>
              )}
            </div>

            <div className="mb-3">
              <div
                className="filter-header-box"
                onClick={() => toggleSection("sizeFit")}
              >
                <span>Size &amp; Fit</span>
                {openSections.sizeFit ? (
                  <BsChevronDown className="small" />
                ) : (
                  <BsChevronUp className="small" />
                )}
              </div>
              {openSections.sizeFit && (
                <div className="px-1 mb-2">
                  <p className="text-muted mb-2" style={{ fontSize: "0.75rem", fontStyle: "italic" }}>
                    *For better results, select gender and category*
                  </p>
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="sizeS"
                      checked={selectedSizes.includes("S")}
                      onChange={() => handleSizeToggle("S")}
                    />
                    <label className="form-check-label small" htmlFor="sizeS">
                      S (1,437)
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="sizeM"
                      checked={selectedSizes.includes("M")}
                      onChange={() => handleSizeToggle("M")}
                    />
                    <label className="form-check-label small" htmlFor="sizeM">
                      M (2,675)
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="sizeL"
                      checked={selectedSizes.includes("L")}
                      onChange={() => handleSizeToggle("L")}
                    />
                    <label className="form-check-label small" htmlFor="sizeL">
                      L (4,870)
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="sizeXL"
                      checked={selectedSizes.includes("XL")}
                      onChange={() => handleSizeToggle("XL")}
                    />
                    <label className="form-check-label small" htmlFor="sizeXL">
                      XL (7,543)
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="sizeXXL"
                      checked={selectedSizes.includes("XXL")}
                      onChange={() => handleSizeToggle("XXL")}
                    />
                    <label className="form-check-label small" htmlFor="sizeXXL">
                      XXL (1,099)
                    </label>
                  </div>
                  <div className="mt-1">
                    <span
                      className="text-muted small cursor-pointer"
                      style={{ fontSize: "0.8rem", textDecoration: "underline" }}
                    >
                      More
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div className="mb-3">
              <div
                className="filter-header-box"
                onClick={() => toggleSection("rating")}
              >
                <span>Rating</span>
                {openSections.rating ? (
                  <BsChevronDown className="small" />
                ) : (
                  <BsChevronUp className="small" />
                )}
              </div>
              {openSections.rating && (
                <div className="px-1 mb-2">
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
                      1 ⭐ &amp; Above (437)
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
                      2 ⭐ &amp; Above (657)
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
                      3 ⭐ &amp; Above (1,897)
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
                      4 ⭐ &amp; Above (3,571)
                    </label>
                  </div>
                </div>
              )}
            </div>

            <button
              className="btn text-white w-100 mt-3 py-2 rounded-2 fw-medium border-0"
              type="button"
              style={{ backgroundColor: "#ff5e29", fontSize: "0.875rem" }}
              onClick={() => {
                // Reactive instant filtering
              }}
            >
              Apply
            </button>
          </div>
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
              Showing all <strong>{filteredProducts.length}</strong> items results
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
            <div>Loading products from API...</div>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="content-card p-5 text-center text-muted">
            No products match your filters.
          </div>
        ) : (
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-3 align-items-stretch">
            {filteredProducts.map((item) => {
              const nameLower = (item.product_name || item.title || "").toLowerCase().trim();
              const meta = figmaMetaData[nameLower] || {};

              const images = parseProductImages(item.image);
              const firstImage = images.length > 0 ? images[0] : null;

              const priceVal = parseFloat(item.price || meta.price || 80);
              const formattedPrice = `$${priceVal.toFixed(2)}`;

              const oldPriceVal = meta.oldPrice ? `$${meta.oldPrice}` : `$${(priceVal * 1.25).toFixed(0)}`;
              const discountText = "30% Off";

              const ratingVal =
                item.average_rating && parseFloat(item.average_rating) > 0
                  ? parseFloat(item.average_rating).toFixed(1)
                  : (meta.rating || "4.5");

              const reviews =
                item.review_count !== undefined && item.review_count !== null && item.review_count > 0
                  ? item.review_count
                  : (meta.reviews || 55);

              return (
                <div className="col d-flex" key={item.id}>
                  <div className="content-card w-100 p-3 d-flex flex-column justify-content-between position-relative">
                    <button
                      className="btn btn-link p-0 position-absolute top-0 end-0 m-3 text-danger border-0"
                      type="button"
                      style={{ zIndex: 2 }}
                      onClick={() => handleToggleFavorite(item.id)}
                    >
                      {favoriteItems[item.id] ? (
                        <BsHeartFill className="text-danger" />
                      ) : (
                        <BsHeart className="text-danger opacity-75" />
                      )}
                    </button>

                    <div
                      className="bg-light rounded-3 d-flex align-items-center justify-content-center mb-3 cursor-pointer overflow-hidden"
                      style={{ height: "160px", width: "100%" }}
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

                    <div className="d-flex flex-column flex-grow-1 justify-content-between">
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
                            {ratingVal}
                          </span>
                          <span
                            className="text-muted"
                            style={{ fontSize: "10px" }}
                          >
                            ({reviews} Review)
                          </span>
                        </div>

                        <div className="d-flex align-items-center gap-2 mb-3">
                          <span className="text-decoration-line-through text-muted small">
                            {oldPriceVal}
                          </span>
                          <span className="fw-bold text-dark">
                            {formattedPrice}
                          </span>
                          <span className="text-danger small fw-bold">
                            ({discountText})
                          </span>
                        </div>
                      </div>

                      <div className="d-flex gap-2 mt-auto">
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
