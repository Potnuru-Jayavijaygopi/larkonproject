import React, { useState, useEffect } from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import {
  BsImage,
  BsCartPlus,
  BsBag,
  BsHeart,
  BsStarFill,
  BsCheckLg,
  BsBookmarkFill,
  BsTruck,
  BsTags,
  BsGift,
  BsHeadset,
  BsHandThumbsUp,
} from 'react-icons/bs';
import { productAPI, categoryAPI, reviewAPI, parseProductImages } from "../../services/api";

function ProductDetails() {
  const location = useLocation();
  const params = useParams();
  const [searchParams] = useSearchParams();

  const productId = params.id || searchParams.get('id') || location.state?.product?.id;

  const [product, setProduct] = useState(location.state?.product || null);
  const [categories, setCategories] = useState({});
  const [reviewsList, setReviewsList] = useState([]);
  const [loading, setLoading] = useState(!location.state?.product);
  const [error, setError] = useState(null);

  const [selectedImg, setSelectedImg] = useState(0);
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('navy');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const loadDetails = async () => {
      try {
        setLoading(true);
        setError(null);

        const [categoriesData, reviewsData] = await Promise.all([
          categoryAPI.getAll().catch(() => []),
          reviewAPI.getAll().catch(() => [])
        ]);

        const catMap = {};
        if (Array.isArray(categoriesData)) {
          categoriesData.forEach((c) => {
            catMap[c.id] = c.category_name || c.name;
          });
        }
        setCategories(catMap);
        setReviewsList(Array.isArray(reviewsData) ? reviewsData : []);

        let targetProduct = null;
        if (productId) {
          try {
            targetProduct = await productAPI.getById(productId);
          } catch (err) {
            console.warn("Product by ID not found, fetching all products:", err);
          }
        }

        if (!targetProduct) {
          const all = await productAPI.getAll();
          if (Array.isArray(all) && all.length > 0) {
            targetProduct = all.find((p) => String(p.id) === String(productId)) || all[0];
          }
        }

        if (targetProduct) {
          setProduct(targetProduct);
          if (targetProduct.size) {
            const firstSize = targetProduct.size.split(',')[0].trim();
            setSelectedSize(firstSize);
          }
          if (targetProduct.color) {
            setSelectedColor(targetProduct.color.toLowerCase());
          }
        }
      } catch (err) {
        console.error("Failed to load product details:", err);
        setError(err.message || "Failed to load product details");
      } finally {
        setLoading(false);
      }
    };

    loadDetails();
  }, [productId]);

  if (loading && !product) {
    return (
      <div className="content-card p-5 text-center text-muted">
        <div className="spinner-border text-primary me-2" role="status" />
        <div>Loading product details...</div>
      </div>
    );
  }

  const images = product ? parseProductImages(product.image) : [];
  const currentImage = images[selectedImg] || (images.length > 0 ? images[0] : null);

  const priceVal = parseFloat(product?.price || 80);
  const formattedPrice = `$${priceVal.toFixed(2)}`;
  const discountVal = parseFloat(product?.discount || 20);
  const oldPriceVal =
    discountVal > 0
      ? (priceVal / (1 - discountVal / 100)).toFixed(2)
      : (priceVal * 1.25).toFixed(2);
  const oldPrice = `$${oldPriceVal}`;
  const discountText = discountVal > 0 ? `(${discountVal}% Off)` : '(Special Offer)';

  const categoryName =
    (product?.category_id && categories[product.category_id]) ||
    product?.tag ||
    'Fashion';

  const rating = product?.average_rating
    ? parseFloat(product.average_rating).toFixed(1)
    : '4.5';
  const reviewsCount = product?.review_count ?? 55;

  const displaySizes = product?.size
    ? product.size.split(',').map((s) => s.trim().replace(/^Size\s*:\s*/i, ''))
    : ['S', 'M', 'XL', 'XXL'];

  const availableColors = [
    { id: 'navy', color: '#1e2530' },
    { id: 'amber', color: '#f59e0b' },
    { id: 'slate', color: '#cbd5e1' },
    { id: 'emerald', color: '#10b981' },
  ];

  const formattedDate = product?.created_at
    ? new Date(product.created_at).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      })
    : '22 September 2023';

  return (
    <>
      {error && (
        <div className="alert alert-warning mb-3 py-2 small">
          {error}
        </div>
      )}

      <div className="row g-4 mb-4">
        <div className="col-lg-5">
          <div className="content-card p-4 h-100">
            <div
              className="bg-light rounded-3 d-flex align-items-center justify-content-center mb-3 overflow-hidden"
              style={{ height: '260px' }}
            >
              {currentImage ? (
                <img
                  src={currentImage}
                  alt={product?.product_name || "Product"}
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentNode.innerHTML =
                      '<span class="fs-1 text-secondary opacity-50"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path><path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"></path></svg></span>';
                  }}
                />
              ) : (
                <BsImage className="fs-1 text-secondary opacity-50" />
              )}
            </div>

            <div className="row g-2 mb-4">
              {(images.length > 0 ? images.slice(0, 4) : [0, 1, 2, 3]).map((imgSrc, idx) => (
                <div className="col-3" key={idx}>
                  <div
                    className={`bg-light rounded-2 d-flex align-items-center justify-content-center cursor-pointer border overflow-hidden ${
                      selectedImg === idx ? 'border-primary border-2' : ''
                    }`}
                    style={{ height: '58px' }}
                    onClick={() => setSelectedImg(idx)}
                  >
                    {typeof imgSrc === 'string' ? (
                      <img
                        src={imgSrc}
                        alt="Thumbnail"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    ) : (
                      <BsImage className="text-secondary opacity-50" />
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="d-flex gap-2">
              <button
                className="btn btn-add-product flex-grow-1 py-2 d-inline-flex align-items-center justify-content-center gap-1"
                type="button"
              >
                <BsCartPlus /> Add To Cart
              </button>
              <button
                className="btn btn-light border flex-grow-1 py-2 fw-medium d-inline-flex align-items-center justify-content-center gap-1"
                type="button"
              >
                <BsBag /> Buy Now
              </button>
              <button
                className="btn btn-light border px-3 text-danger"
                type="button"
              >
                <BsHeart />
              </button>
            </div>
          </div>
        </div>

        <div className="col-lg-7">
          <div className="content-card p-4 h-100">
            <span className="badge bg-success-subtle text-success border border-success-subtle mb-2 px-2 py-1">
              {product?.tag || product?.status || "New Arrival"}
            </span>
            <h4 className="fw-bold text-dark mb-2">
              {product?.product_name || "Men Black Slim Fit T-shirt"}
            </h4>

            <div className="d-flex align-items-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <BsStarFill key={i} className="text-warning small" />
              ))}
              <span className="fw-bold ms-1 small">{rating}</span>
              <span className="text-muted small">({reviewsCount} Review)</span>
            </div>

            <div className="d-flex align-items-center gap-2 mb-3">
              <span className="fs-4 fw-bold text-dark">{formattedPrice}</span>
              <span className="text-decoration-line-through text-muted">{oldPrice}</span>
              <span className="text-danger fw-bold small">{discountText}</span>
            </div>

            <div className="row g-3 mb-3">
              <div className="col-sm-6">
                <label className="form-label small text-muted d-block mb-1">
                  Colors &gt; <strong className="text-dark">{product?.color || "Dark"}</strong>
                </label>
                <div className="d-flex gap-2">
                  {availableColors.map((colObj) => (
                    <button
                      key={colObj.id}
                      type="button"
                      className={`btn rounded-circle p-0 border ${
                        selectedColor === colObj.id ? 'border-dark shadow-sm' : ''
                      }`}
                      style={{
                        width: '22px',
                        height: '22px',
                        backgroundColor: colObj.color
                      }}
                      onClick={() => setSelectedColor(colObj.id)}
                    ></button>
                  ))}
                </div>
              </div>

              <div className="col-sm-6">
                <label className="form-label small text-muted d-block mb-1">
                  Size &gt; <strong className="text-dark">{selectedSize}</strong>
                </label>
                <div className="d-flex gap-1 flex-wrap">
                  {displaySizes.map((sz) => (
                    <button
                      key={sz}
                      type="button"
                      className={`btn btn-sm ${
                        selectedSize === sz ? 'btn-secondary' : 'btn-light border'
                      } px-3 py-1`}
                      onClick={() => setSelectedSize(sz)}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mb-4">
              <label className="form-label small text-muted d-block mb-1">Quantity :</label>
              <div className="d-inline-flex align-items-center border rounded-2 bg-light p-1">
                <button
                  type="button"
                  className="btn btn-sm btn-light border-0 px-2"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </button>
                <span className="px-3 fw-bold small">{quantity}</span>
                <button
                  type="button"
                  className="btn btn-sm btn-light border-0 px-2"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>

            <div className="mb-4 small text-muted">
              <div className="mb-1 text-success fw-medium d-flex align-items-center gap-1">
                <BsCheckLg /> In Stock ({product?.stock ?? 465} units available)
              </div>
              <div className="mb-1 text-success fw-medium d-flex align-items-center gap-1">
                <BsCheckLg /> Free delivery available
              </div>
              <div className="text-success fw-medium d-flex align-items-center gap-1">
                <BsCheckLg /> Sales 10% Off Use Code: <strong>CODE123</strong>
              </div>
            </div>

            <div className="mb-4">
              <h6 className="fw-bold text-dark mb-1">Description :</h6>
              <p className="small text-muted mb-0" style={{ lineHeight: '1.6' }}>
                {product?.description ||
                  'Top in sweatshirt fabric made from a cotton blend with a soft brushed inside. Relaxed fit with dropped shoulders, long sleeves and ribbing around the neckline, cuffs and hem. Small metal text applique.'}{' '}
                <a href="#readmore" className="text-primary text-decoration-none ms-1">
                  Read more
                </a>
              </p>
            </div>

            <div>
              <h6 className="fw-bold text-dark mb-2">Available offers :</h6>
              <div className="d-flex align-items-start gap-2 mb-2 small text-muted">
                <BsBookmarkFill className="text-success mt-1 flex-shrink-0" />
                <span>
                  Bank Offer 10% instant discount on Bank Debit Cards, up to $30 on orders of $50 and above
                </span>
              </div>
              <div className="d-flex align-items-start gap-2 small text-muted">
                <BsBookmarkFill className="text-success mt-1 flex-shrink-0" />
                <span>
                  Bank Offer Grab our exclusive offer now and save 20% on your next purchase! Don't miss out, shop today!
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="content-card p-3 mb-4">
        <div className="row align-items-center g-3">
          <div className="col-lg-3 col-sm-6">
            <div className="d-flex align-items-center gap-3">
              <div className="bg-danger-subtle text-danger rounded-circle p-2 fs-4 flex-shrink-0">
                <BsTruck />
              </div>
              <div>
                <h6 className="fw-bold text-dark mb-0 small">Free shipping for all orders over $200</h6>
                <span className="text-muted" style={{ fontSize: '11px' }}>Only in this week</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="d-flex align-items-center gap-3">
              <div className="bg-warning-subtle text-warning rounded-circle p-2 fs-4 flex-shrink-0">
                <BsTags />
              </div>
              <div>
                <h6 className="fw-bold text-dark mb-0 small">Special discounts for customers</h6>
                <span className="text-muted" style={{ fontSize: '11px' }}>Coupons up to $ 100</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="d-flex align-items-center gap-3">
              <div className="bg-danger-subtle text-danger rounded-circle p-2 fs-4 flex-shrink-0">
                <BsGift />
              </div>
              <div>
                <h6 className="fw-bold text-dark mb-0 small">Free gift wrapping</h6>
                <span className="text-muted" style={{ fontSize: '11px' }}>With 100 letters custom note</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="d-flex align-items-center gap-3">
              <div className="bg-info-subtle text-info rounded-circle p-2 fs-4 flex-shrink-0">
                <BsHeadset />
              </div>
              <div>
                <h6 className="fw-bold text-dark mb-0 small">Expert Customer Service</h6>
                <span className="text-muted" style={{ fontSize: '11px' }}>8:00 - 20:00, 7 days/week</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-lg-6">
          <div className="content-card p-4 h-100">
            <h6 className="fw-bold text-dark mb-3">Items Detail</h6>
            <div className="table-responsive">
              <table
                className="table table-borderless table-sm mb-0 text-muted small"
                style={{ fontSize: '12px' }}
              >
                <tbody>
                  <tr>
                    <td className="fw-semibold text-dark ps-0" style={{ width: '170px' }}>
                      Product Dimensions
                    </td>
                    <td>: 53.3 x 40.6 x 6.4 cm; {product?.weight || '500 Grams'}</td>
                  </tr>
                  <tr>
                    <td className="fw-semibold text-dark ps-0">Date First Available</td>
                    <td>: {formattedDate}</td>
                  </tr>
                  <tr>
                    <td className="fw-semibold text-dark ps-0">Department</td>
                    <td>: {product?.gender || 'Men'}</td>
                  </tr>
                  <tr>
                    <td className="fw-semibold text-dark ps-0">Brand / Manufacturer</td>
                    <td>: {product?.brand || 'Larkon Fashion'}</td>
                  </tr>
                  <tr>
                    <td className="fw-semibold text-dark ps-0">Tag Number / ASIN</td>
                    <td>: {product?.tag_number || 'TAG001'}</td>
                  </tr>
                  <tr>
                    <td className="fw-semibold text-dark ps-0">Item model number</td>
                    <td>: {product?.id ? `LK-${product.id}00` : '1137AZ'}</td>
                  </tr>
                  <tr>
                    <td className="fw-semibold text-dark ps-0">Country of Origin</td>
                    <td>: U.S.A</td>
                  </tr>
                  <tr>
                    <td className="fw-semibold text-dark ps-0">Item Weight</td>
                    <td>: {product?.weight || '500 g'}</td>
                  </tr>
                  <tr>
                    <td className="fw-semibold text-dark ps-0">Generic Name</td>
                    <td>: {categoryName}</td>
                  </tr>
                  <tr>
                    <td className="fw-semibold text-dark ps-0">Best Sellers Rank</td>
                    <td>: #{product?.id || '13'} in Clothing &amp; Accessories</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <a
              href="#more-details"
              className="small text-primary text-decoration-none d-inline-block mt-3 fw-medium"
            >
              View More Details &rarr;
            </a>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="content-card p-4 h-100">
            <h6 className="fw-bold text-dark mb-4">Top Review From World</h6>

            {reviewsList.length > 0 ? (
              reviewsList.slice(0, 2).map((rev, index) => (
                <div
                  key={rev.id || index}
                  className={`mb-4 pb-3 ${index < 1 ? 'border-bottom' : ''}`}
                >
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <div className="bg-light rounded-2 p-2 text-secondary">
                      <BsImage />
                    </div>
                    <span className="fw-bold text-dark small">
                      {rev.author_name || rev.user_name || 'Verified Buyer'}
                    </span>
                  </div>

                  <div className="d-flex align-items-center gap-2 mb-1">
                    <div className="d-flex align-items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <BsStarFill
                          key={i}
                          className="text-warning"
                          style={{
                            color: i < (rev.rating || 5) ? '#ffb703' : '#e2e8f0',
                            fontSize: '13px',
                          }}
                        />
                      ))}
                    </div>
                    <span className="fw-bold small text-dark">
                      {rev.title || 'Excellent Quality'}
                    </span>
                  </div>

                  <div className="text-muted mb-2" style={{ fontSize: '11px' }}>
                    {rev.created_at
                      ? new Date(rev.created_at).toLocaleDateString('en-GB')
                      : 'Reviewed in Canada on 16 November 2023'}
                  </div>

                  <p
                    className="text-muted small mb-2"
                    style={{ fontSize: '12px', lineHeight: '1.5' }}
                  >
                    {rev.comment ||
                      rev.description ||
                      'Medium thickness. Did not shrink after wash. Good elasticity. Perfectly fit. Highly recommended in so low price.'}
                  </p>

                  <div
                    className="d-flex gap-3 text-muted"
                    style={{ fontSize: '11px' }}
                  >
                    <span className="cursor-pointer d-inline-flex align-items-center gap-1">
                      <BsHandThumbsUp /> Helpful
                    </span>
                    <span className="cursor-pointer">Report</span>
                  </div>
                </div>
              ))
            ) : (
              <>
                <div className="mb-4 pb-3 border-bottom">
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <div className="bg-light rounded-2 p-2 text-secondary">
                      <BsImage />
                    </div>
                    <span className="fw-bold text-dark small">Henny K. Mark</span>
                  </div>

                  <div className="d-flex align-items-center gap-2 mb-1">
                    <div className="d-flex align-items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <BsStarFill
                          key={i}
                          className="text-warning"
                          style={{ color: '#ffb703', fontSize: '13px' }}
                        />
                      ))}
                    </div>
                    <span className="fw-bold small text-dark">Excellent Quality</span>
                  </div>

                  <div className="text-muted mb-2" style={{ fontSize: '11px' }}>
                    Reviewed in Canada on 16 November 2023
                  </div>

                  <p
                    className="text-muted small mb-2"
                    style={{ fontSize: '12px', lineHeight: '1.5' }}
                  >
                    Medium thickness. Did not shrink after wash. Good elasticity . XL size Perfectly fit for 5.10 height and heavy body. Did not fade after wash. Highly recommended.
                  </p>

                  <div
                    className="d-flex gap-3 text-muted"
                    style={{ fontSize: '11px' }}
                  >
                    <span className="cursor-pointer d-inline-flex align-items-center gap-1">
                      <BsHandThumbsUp /> Helpful
                    </span>
                    <span className="cursor-pointer">Report</span>
                  </div>
                </div>

                <div>
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <div className="bg-light rounded-2 p-2 text-secondary">
                      <BsImage />
                    </div>
                    <span className="fw-bold text-dark small">Jorge Herry</span>
                  </div>

                  <div className="d-flex align-items-center gap-2 mb-1">
                    <div className="d-flex align-items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <BsStarFill
                          key={i}
                          className="text-warning"
                          style={{ color: '#ffb703', fontSize: '13px' }}
                        />
                      ))}
                    </div>
                    <span className="fw-bold small text-dark">Good Quality</span>
                  </div>

                  <div className="text-muted mb-2" style={{ fontSize: '11px' }}>
                    Reviewed in U.S.A on 21 December 2023
                  </div>

                  <p
                    className="text-muted small mb-2"
                    style={{ fontSize: '12px', lineHeight: '1.5' }}
                  >
                    I liked the tshirt. it's pure cotton &amp; skin friendly, but the size is smaller to compare standard size, best rated
                  </p>
                  <div
                    className="d-flex gap-3 text-muted"
                    style={{ fontSize: '11px' }}
                  >
                    <span className="cursor-pointer d-inline-flex align-items-center gap-1">
                      <BsHandThumbsUp /> Helpful
                    </span>
                    <span className="cursor-pointer">Report</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;