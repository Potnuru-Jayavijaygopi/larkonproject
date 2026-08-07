import React, { useEffect } from 'react';
import starIcon from '../assets/Star.png';
import avatarPlaceholderIcon from '../assets/Frame (7).png';
import quoteIcon from '../assets/image (7).png';

const reviewsData = [
  {
    id: 1,
    locationDate: 'Reviewed in U.S.A on 21 December 2023',
    comment:
      '"I recently purchased a t-shirt that I was quite excited about, and I must say, there are several aspects that I really appreciate about it. Firstly, the material is absolutely wonderful."',
    rating: 5,
    qualityText: 'Excellent Quality',
    name: 'Michael B. Coch',
    title: 'Kaika Hill, CEO / Hill & CO',
  },
  {
    id: 2,
    locationDate: 'Reviewed in Canada on 16 March 2023',
    comment:
      '"I purchased a pair of jeans Firstly, the fabric is fantastic—it\'s both durable and comfortable. The denim is soft yet sturdy, making it perfect for everyday wear."',
    rating: 5,
    qualityText: 'Best Quality',
    name: 'Theresa T. Brose',
    title: 'Millenia Life, / General internist',
  },
  {
    id: 3,
    locationDate: 'Reviewed in Germany on 23 October 2023',
    comment:
      '"The fit is perfect, hugging in all the right places while allowing for ease of movement. Overall, this dress exceeded my expectations and has quickly become a favorite in my wardrobe."',
    rating: 4,
    qualityText: 'Good Quality',
    name: 'James L. Erickson',
    title: 'Omni Tech Solutions / Founder',
  },
  {
    id: 4,
    locationDate: 'Reviewed in Germany on 23 October 2023',
    comment:
      '"The fit is perfect, hugging in all the right places while allowing for ease of movement. Overall, this dress exceeded my expectations and has quickly become a favorite in my wardrobe."',
    rating: 4,
    qualityText: 'Good Quality',
    name: 'Lily W. Wilson',
    title: 'Grade A Investment / Manager',
  },
  {
    id: 5,
    locationDate: 'Reviewed in Canada on 29 May 2023',
    comment:
      '"Additionally, the fit is perfect, providing great support and comfort for all-day wear. These bootshave quickly become a staple in my wardrobe, and I couldn\'t be happier with my purchase."',
    rating: 5,
    qualityText: 'Excellent Quality',
    name: 'Sarah M. Brooks',
    title: 'Metro / Counseling',
  },
  {
    id: 6,
    locationDate: 'Reviewed in U.S.A on 18 August 2023',
    comment:
      '"The color is rich and vibrant, making it a standout piece in my wardrobe. Overall, this sweater hasexceeded my expectations and has quickly become one of my favorite pieces to wear."',
    rating: 5,
    qualityText: 'Best Quality',
    name: 'Joe K. Hall',
    title: 'Atlas Realty / Media specialist',
  },
  {
    id: 7,
    locationDate: 'Reviewed in Iceland on 12 May 2023',
    comment:
      '"I ordered my usual size, but the shoes are either too small or too big, making them uncomfortable to wear. I would not recommend them to others not buy product. I couldn\'t be happier with my purchase"',
    rating: 3,
    qualityText: 'Bad Quality',
    name: 'Jennifer Schafer',
    title: 'Red Bears Tavern / Director',
  },
  {
    id: 8,
    locationDate: 'Reviewed in Arabic on 18 September 2023',
    comment:
      '"irstly, the quality of the fabric is exceptional. It\'s soft, luxurious, and drapes beautifully, giving the dress an elegant and sophisticated look. The design is simply stunning I couldn\'t be happier with my purchase."',
    rating: 4,
    qualityText: 'Best Quality',
    name: 'Nashida Ulfah',
    title: 'Platinum Interior / Manager',
  },
];

export default function ReviewsList() {
  useEffect(() => {
    const link = document.createElement('link');
    link.href =
      'https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@600&family=Play:wght@400;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
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
      <div className="row g-4">
        {reviewsData.map((review) => (
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
                  className="fw-bold mb-2"
                  style={{
                    color: '#2B2D42',
                    fontSize: '0.8rem',
                  }}
                >
                  {review.locationDate}
                </p>

                <p
                  className="text-secondary mb-3"
                  style={{
                    fontSize: '0.8rem',
                    lineHeight: '1.4',
                  }}
                >
                  {review.comment}
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
                          opacity: index < review.rating ? 1 : 0.25,
                        }}
                      />
                    ))}
                  </div>
                  <span
                    className="fw-semibold text-secondary"
                    style={{ fontSize: '0.8rem' }}
                  >
                    {review.qualityText}
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
                      src={avatarPlaceholderIcon}
                      alt={review.name}
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
                      {review.name}
                    </h6>
                    <p
                      className="mb-0 text-white-50 text-truncate"
                      style={{ fontSize: '0.75rem' }}
                    >
                      {review.title}
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
        ))}
      </div>
    </div>
  );
}