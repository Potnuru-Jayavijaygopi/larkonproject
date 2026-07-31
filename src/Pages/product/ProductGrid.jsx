import React,{useState} from "react";
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

function ProductGrid({onNavigate}) {
 const navgiate=useNavigate();
 const [favoriteItems,setFavoriteItems]=useState({
  1:false,
  2:true,
  3:false,
  4:false,
  5:false,
  6:false,
  7:true,
  8:false,
  9:true,
  10:false,
  11:false,
  12:true,
 })
 const [searchFilter, setSearchFilter] = useState("");
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
 const handleProductDetails = () => {
    if (navigate) {
      navigate("/products/details");
    } else if (onNavigate) {
      onNavigate("product-details");
    }
  };
 const productList = [
   {
     id: 1,
     title: "Men Black Slim Fit T-shirt",
     price: "$80",
     oldPrice: "$100",
     discount: "30% Off",
     rating: 4.5,
     reviews: 55,
   },
   {
      id: 2,
      title: "Olive Green Leather Bag",
      price: "$136",
      oldPrice: "$150",
      discount: "30% Off",
      rating: 4.1,
      reviews: 143,
    },
    {
      id: 3,
      title: "Women Golden Dress",
      price: "$219",
      oldPrice: "$250",
      discount: "30% Off",
      rating: 4.4,
      reviews: 174,
    },
    {
      id: 4,
      title: "Gray Cap For Men",
      price: "$76",
      oldPrice: "$100",
      discount: "30% Off",
      rating: 4.2,
      reviews: 23,
    },
    {
      id: 5,
      title: "Dark Green Cargo Pant",
      price: "$110",
      oldPrice: "$130",
      discount: "30% Off",
      rating: 4.4,
      reviews: 109,
    },
    {
      id: 6,
      title: "Orange Headphone",
      price: "$231",
      oldPrice: "$250",
      discount: "30 Off",
      rating: 4.2,
      reviews: 200,
    },
    {
      id: 7,
      title: "Kid's Yellow Shoes",
      price: "$89",
      oldPrice: "$100",
      discount: "30% Off",
      rating: 4.5,
      reviews: 321,
    },
    {
      id: 8,
      title: "Men Dark Brown Wallet",
      price: "$132",
      oldPrice: "$150",
      discount: "30% Off",
      rating: 4.1,
      reviews: 190,
    },
    {
      id: 9,
      title: "Sky Blue Mat Sunglass",
      price: "$77",
      oldPrice: "$100",
      discount: "30% Off",
      rating: 3.5,
      reviews: 298,
    },
    {
      id: 10,
      title: "Kid's Yellow T-shirt",
      price: "$110",
      oldPrice: "$140",
      discount: "30% Off",
      rating: 4.1,
      reviews: 156,
    },
    {
      id: 11,
      title: "White Rubber Smart Watch",
      price: "$77",
      oldPrice: "$110",
      discount: "30% Off",
      rating: 3.4,
      reviews: 201,
    },
    {
      id: 12,
      title: "Men Brown Leather Shoes",
      price: "$222",
      oldPrice: "$250",
      discount: "30% Off",
      rating: 4.1,
      reviews: 370,
    },
  ];
  return(
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
                  defaultChecked
                />
                <label className="form-check-label small" htmlFor="catAll">
                  All Categories
                </label>
              </div>
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="catFashion"
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
                />
                <label
                  className="form-check-label small"
                  htmlFor="catElectronics"
                >
                  Electronics Items
                </label>
              </div>
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="catFurniture"
                />
                <label
                  className="form-check-label small"
                  htmlFor="catFurniture"
                >
                  Furniture
                </label>
              </div>
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="catHeadphones"
                />
                <label
                  className="form-check-label small"
                  htmlFor="catHeadphones"
                >
                  Headphones
                </label>
              </div>
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="catBeauty"
                />
                <label className="form-check-label small" htmlFor="catBeauty">
                  Beauty &amp; Health
                </label>
              </div>
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="catFootware"
                />
                <label className="form-check-label small" htmlFor="catFootware">
                  Foot Ware
                </label>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <div className="filter-header-box">
              <span>Product Price</span>
              <BsChevronDown className="small" />
            </div>
            <div className="px-1">
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="priceAll"
                />
                <label className="form-check-label small" htmlFor="priceAll">
                  All Price
                </label>
              </div>
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="priceBelow200"
                />
                <label
                  className="form-check-label small"
                  htmlFor="priceBelow200"
                >
                  Below $200 (145)
                </label>
              </div>
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="price200500"
                />
                <label className="form-check-label small" htmlFor="price200500">
                  $200 - $500 (1,885)
                </label>
              </div>
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="price500800"
                />
                <label className="form-check-label small" htmlFor="price500800">
                  $500 - $800 (2,276)
                </label>
              </div>
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="price8001000"
                />
                <label
                  className="form-check-label small"
                  htmlFor="price8001000"
                >
                  $800 - $1000 (12,676)
                </label>
              </div>
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="price10001100"
                />
                <label
                  className="form-check-label small"
                  htmlFor="price10001100"
                >
                  $1000 - $1100 (13,123)
                </label>
              </div>
            </div>
          </div>

          <div className="mb-4 px-1">
            <h6 className="fw-bold mb-2 small text-muted">
              Custom Price Range :
            </h6>
            <input type="range" className="form-range" min="0" max="500" />
            <div className="d-flex align-items-center gap-2 mt-2">
              <input
                type="text"
                className="form-control form-control-sm text-center"
                defaultValue="$ 0"
              />
              <span className="small text-muted">to</span>
              <input
                type="text"
                className="form-control form-control-sm text-center"
                defaultValue="$ 200"
              />
            </div>
          </div>

          <div className="mb-4">
            <div className="filter-header-box">
              <span>Gender</span>
              <BsChevronDown className="small" />
            </div>
            <div className="px-1">
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="genderMen"
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
                />
                <label className="form-check-label small" htmlFor="genderKids">
                  Kid's (1,231)
                </label>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <div className="filter-header-box">
              <span>Size &amp; Fit</span>
              <BsChevronDown className="small" />
            </div>
            <div className="px-1">
              <span
                className="text-muted d-block mb-2"
                style={{fontSize: "10px"}}
              >
                *For better results, select gender and category
              </span>
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="sizeS"
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
                />
                <label className="form-check-label small" htmlFor="sizeXXL">
                  XXL (1,099)
                </label>
              </div>
              <a
                href="#more-size"
                className="small text-primary text-decoration-none d-block mt-1"
              >
                More
              </a>
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
                  id="rate1"
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
                />
                <label className="form-check-label small" htmlFor="rate4">
                  4 ⭐ &amp; Above (3,571)
                </label>
              </div>
            </div>
          </div>

          <button className="btn btn-add-product w-100 mt-2" type="button">
            Apply
          </button>
        </div>
      </div>

      <div className="col-lg-9 col-md-8">
        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
          <div>
            <div className="text-muted small d-flex align-items-center gap-1">
              Categories <BsChevronRight className="small" />{" "}
              <strong className="text-dark">All Product</strong>
            </div>
            <div className="small text-muted">
              Showing all <strong>5,786</strong> items results
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

        <div className="row g-3">
          {productList.map((item) => (
            <div className="col-xl-3 col-lg-4 col-sm-6" key={item.id}>
              <div className="content-card h-100 p-3 d-flex flex-column justify-content-between position-relative">
            
                <button
                  className="btn btn-link p-0 position-absolute top-0 end-0 m-3 text-danger border-0"
                  type="button"
                  onClick={() => handleToggleFavorite(item.id)}
                >
                  {favoriteItems[item.id] ? <BsHeartFill /> : <BsHeart />}
                </button>

                <div
                  className="bg-light rounded-3 d-flex align-items-center justify-content-center mb-3 cursor-pointer"
                  style={{height: "160px"}}
                  onClick={handleProductDetails}
                >
                  <BsImage className="fs-1 text-secondary opacity-50" />
                </div>

                <div>
                  <h6
                    className="fw-bold text-dark mb-1 text-truncate cursor-pointer"
                    style={{fontSize: "0.85rem"}}
                    onClick={handleProductDetails}
                  >
                    {item.title}
                  </h6>

                  <div className="d-flex align-items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <BsStarFill
                        key={i}
                        className="text-warning"
                        style={{fontSize: "10px"}}
                      />
                    ))}
                    <span className="fw-bold ms-1" style={{fontSize: "11px"}}>
                      {item.rating}
                    </span>
                    <span className="text-muted" style={{fontSize: "10px"}}>
                      ({item.reviews})
                    </span>
                  </div>

                  <div className="d-flex align-items-center gap-2 mb-3">
                    <span className="text-decoration-line-through text-muted small">
                      {item.oldPrice}
                    </span>
                    <span className="fw-bold text-dark">{item.price}</span>
                    <span className="text-danger small fw-bold">
                      ({item.discount})
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
                    onClick={handleProductDetails}
                  >
                    <BsCartPlus /> Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Pagination />
      </div>
    </div>
  );
}

export default ProductGrid;


