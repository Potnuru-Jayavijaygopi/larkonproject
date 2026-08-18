import React, { useState, useEffect } from 'react';
import { reviewAPI, formatDate } from '../services/api';
import starIcon from '../assets/Star.png';
import avatarPlaceholderIcon from '../assets/Frame (7).png';
import quoteIcon from '../assets/image (7).png';

export default function ReviewsList() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const link = document.createElement('link');
    link.href =
      'https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@600&family=Play:wght@400;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const fetchReviews = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await reviewAPI.getAll();
      if (Array.isArray(data)) {
        setReviews(data);
      } else {
        setReviews([]);
      }
    } catch (err) {
      console.error('Failed to fetch reviews:', err);
      setError('Unable to load reviews from server.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <div className="p-4 min-vh-100" style={{ backgroundColor: '#F4F5F8' }}>
      <style>{`
        ::-webkit-scrollbar {
          display: none !important;
        }
        * {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }
      `}</style>

      {error && (
        <div className="alert alert-danger py-2 small mb-3" role="alert">
          {error}
        </div>
      )}

      {loading ? (
        <div className="text-center py-5 text-secondary">
          <div className="spinner-border spinner-border-sm text-primary me-2" role="status" />
          Loading reviews...
        </div>
      ) : reviews.length === 0 ? (
        <div className="text-center py-5 text-secondary">
          No reviews available.
        </div>
      ) : (
        <div className="row g-4">
          {reviews.map((review) => {
            const reviewerName = review.user_name || 'Customer';
            const reviewerTitle = review.user_designation
              ? `${review.user_designation}${review.product_name ? ` / ${review.product_name}` : ''}`
              : review.product_name
              ? `Purchased ${review.product_name}`
              : 'Verified Buyer';

            const qualityText =
              review.review_title ||
              (review.rating >= 5
                ? 'Best Quality'
                : review.rating >= 4
                ? 'Excellent Quality'
                : review.rating >= 3
                ? 'Good Quality'
                : 'Bad Quality');

            const locationDate = `Reviewed for ${review.product_name || 'Product'} on ${formatDate(review.created_at)}`;

            return (
              <div key={review.id} className="col-12 col-md-6 col-lg-3">
                <div
                  className="card border-0 position-relative d-flex flex-column justify-content-between h-100"
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '12px',
                    boxShadow: '0px 3px 4px 0px rgba(0, 0, 0, 0.03)',
                    minHeight: '357px',
                  }}
                >
                  <div className="p-4 pb-2">
                    <p
                      className="fw-bold mb-2 text-truncate"
                      style={{
                        color: '#2B2D42',
                        fontSize: '0.8rem',
                      }}
                      title={locationDate}
                    >
                      {locationDate}
                    </p>

                    <p
                      className="text-secondary mb-3"
                      style={{
                        fontSize: '0.8rem',
                        lineHeight: '1.4',
                        display: '-webkit-box',
                        WebkitLineClamp: 5,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        minHeight: '80px',
                      }}
                    >
                      "{review.review || review.review_title || 'No comment provided.'}"
                    </p>

                    <div className="d-flex align-items-center gap-2 mt-auto">
                      <div className="d-flex gap-1">
                        {[...Array(5)].map((_, index) => (
                          <img
                            key={index}
                            src={starIcon}
                            alt="Star"
                            style={{
                              width: '14px',
                              height: '14px',
                              opacity: index < (review.rating || 5) ? 1 : 0.25,
                            }}
                          />
                        ))}
                      </div>
                      <span
                        className="fw-semibold text-secondary"
                        style={{ fontSize: '0.8rem' }}
                      >
                        {qualityText}
                      </span>
                    </div>
                  </div>

                  <div
                    className="p-3 px-4 d-flex align-items-center justify-content-between"
                    style={{
                      backgroundColor: '#FF6C2F',
                      borderBottomLeftRadius: '12px',
                      borderBottomRightRadius: '12px',
                      minHeight: '96px',
                    }}
                  >
                    <div className="d-flex align-items-center gap-3 overflow-hidden">
                      <div
                        className="d-flex align-items-center justify-content-center flex-shrink-0"
                        style={{
                          backgroundColor: '#D9D9D9',
                          borderRadius: '33px',
                          width: '66px',
                          height: '66px',
                        }}
                      >
                        <img
                          src={review.user_image || avatarPlaceholderIcon}
                          alt={reviewerName}
                          style={{
                            width: '32px',
                            height: '32px',
                            objectFit: 'contain',
                          }}
                        />
                      </div>

                      <div className="text-white overflow-hidden">
                        <h6
                          className="fw-bold mb-1 text-truncate"
                          style={{ fontSize: '0.9rem' }}
                        >
                          {reviewerName}
                        </h6>
                        <p
                          className="mb-0 text-white-50 text-truncate"
                          style={{ fontSize: '0.75rem' }}
                        >
                          {reviewerTitle}
                        </p>
                      </div>
                    </div>

                    <img
                      src={quoteIcon}
                      alt="Quote"
                      className="flex-shrink-0 ms-2"
                      style={{
                        width: '32px',
                        height: '32px',
                        objectFit: 'contain',
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}