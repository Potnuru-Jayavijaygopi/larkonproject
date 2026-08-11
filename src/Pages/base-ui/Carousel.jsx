import React, { useState } from 'react';
import { BsImage, BsChevronLeft, BsChevronRight } from 'react-icons/bs';


function Carousel() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className="container-fluid p-4">


      <div className="row g-4">
        <div className="col-xl-9 col-lg-8">
          <div className="card border-0 shadow-sm rounded-3 p-4 bg-white mb-4" id="slides-only">
            <h6 className="fw-bold text-dark mb-1">Slides Only</h6>
            <p className="text-muted small mb-3" style={{ fontSize: '0.78rem' }}>
              Here is a carousel with slides only. Note the presence of the <code>.d-block</code> and <code>.w-100</code> on carousel images to prevent browser default image alignment.
            </p>
            <div className="rounded-3 overflow-hidden bg-secondary-subtle d-flex align-items-center justify-content-center" style={{ height: '320px' }}>
              <BsImage style={{ fontSize: '4.5rem', color: '#000000', opacity: 0.85 }} />
            </div>
          </div>

          <div className="card border-0 shadow-sm rounded-3 p-4 bg-white mb-4" id="with-controls">
            <h6 className="fw-bold text-dark mb-1">With Controls</h6>
            <p className="text-muted small mb-3" style={{ fontSize: '0.78rem' }}>
              Adding in the previous and next controls.
            </p>
            <div className="position-relative rounded-3 overflow-hidden bg-secondary-subtle d-flex align-items-center justify-content-center" style={{ height: '320px' }}>
              <BsImage style={{ fontSize: '4.5rem', color: '#000000', opacity: 0.85 }} />
              <button
                className="btn position-absolute top-50 start-0 translate-middle-y ms-3 p-2 rounded-circle bg-dark bg-opacity-25 text-white d-flex align-items-center justify-content-center border-0"
                style={{ width: '36px', height: '36px' }}
                onClick={() => setActiveSlide((prev) => (prev === 0 ? 2 : prev - 1))}
              >
                <BsChevronLeft />
              </button>
              <button
                className="btn position-absolute top-50 end-0 translate-middle-y me-3 p-2 rounded-circle bg-dark bg-opacity-25 text-white d-flex align-items-center justify-content-center border-0"
                style={{ width: '36px', height: '36px' }}
                onClick={() => setActiveSlide((prev) => (prev === 2 ? 0 : prev + 1))}
              >
                <BsChevronRight />
              </button>
            </div>
          </div>

          <div className="card border-0 shadow-sm rounded-3 p-4 bg-white mb-4" id="with-indicators">
            <h6 className="fw-bold text-dark mb-1">With Indicators</h6>
            <p className="text-muted small mb-3" style={{ fontSize: '0.78rem' }}>
              You can also add the indicators to the carousel, alongside the controls, too.
            </p>
            <div className="position-relative rounded-3 overflow-hidden bg-secondary-subtle d-flex align-items-center justify-content-center" style={{ height: '320px' }}>
              <BsImage style={{ fontSize: '4.5rem', color: '#000000', opacity: 0.85 }} />
              <div className="position-absolute bottom-0 start-50 translate-middle-x mb-3 d-flex gap-2">
                {[0, 1, 2].map((idx) => (
                  <button
                    key={idx}
                    className={`border-0 rounded-pill ${activeSlide === idx ? 'bg-white opacity-100' : 'bg-white opacity-50'}`}
                    style={{ width: activeSlide === idx ? '24px' : '10px', height: '6px', transition: 'all 0.3s' }}
                    onClick={() => setActiveSlide(idx)}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="card border-0 shadow-sm rounded-3 p-4 bg-white mb-4" id="with-captions">
            <h6 className="fw-bold text-dark mb-1">With Captions</h6>
            <p className="text-muted small mb-3" style={{ fontSize: '0.78rem' }}>
              Add captions to your slides easily with the <code>.carousel-caption</code> element within any <code>.carousel-item</code>.
            </p>
            <div className="position-relative rounded-3 overflow-hidden bg-secondary-subtle d-flex align-items-center justify-content-center" style={{ height: '320px' }}>
              <BsImage style={{ fontSize: '4.5rem', color: '#000000', opacity: 0.85 }} />
              <div className="position-absolute bottom-0 start-50 translate-middle-x mb-4 text-center text-dark px-3">
                <h6 className="fw-bold mb-1" style={{ fontSize: '0.9rem' }}>First slide label</h6>
                <p className="small mb-0 text-secondary" style={{ fontSize: '0.75rem' }}>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
          </div>

          <div className="card border-0 shadow-sm rounded-3 p-4 bg-white mb-4" id="crossfade">
            <h6 className="fw-bold text-dark mb-1">Crossfade</h6>
            <p className="text-muted small mb-3" style={{ fontSize: '0.78rem' }}>
              Add <code>.carousel-fade</code> to your carousel to animate slides with a fade transition instead of a slide.
            </p>
            <div className="position-relative rounded-3 overflow-hidden bg-secondary-subtle d-flex align-items-center justify-content-center" style={{ height: '320px' }}>
              <BsImage style={{ fontSize: '4.5rem', color: '#000000', opacity: 0.85 }} />
            </div>
          </div>

          <div className="card border-0 shadow-sm rounded-3 p-4 bg-white mb-4" id="individual-interval">
            <h6 className="fw-bold text-dark mb-1">Individual <code>.carousel-item</code> Interval</h6>
            <p className="text-muted small mb-3" style={{ fontSize: '0.78rem' }}>
              Add <code>data-bs-interval=""</code> to a <code>.carousel-item</code> to change the amount of time to delay between automatically cycling to the next item.
            </p>
            <div className="position-relative rounded-3 overflow-hidden bg-secondary-subtle d-flex align-items-center justify-content-center" style={{ height: '320px' }}>
              <BsImage style={{ fontSize: '4.5rem', color: '#000000', opacity: 0.85 }} />
            </div>
          </div>

          <div className="card border-0 shadow-sm rounded-3 p-4 bg-white mb-4" id="disable-touch-swiping">
            <h6 className="fw-bold text-dark mb-1">Disable Touch Swiping</h6>
            <p className="text-muted small mb-3" style={{ fontSize: '0.78rem' }}>
              Carousels support swiping left/right on touchscreen devices to move between slides. This can be disabled using the <code>data-bs-touch="false"</code> attribute.
            </p>
            <div className="position-relative rounded-3 overflow-hidden bg-secondary-subtle d-flex align-items-center justify-content-center" style={{ height: '320px' }}>
              <BsImage style={{ fontSize: '4.5rem', color: '#000000', opacity: 0.85 }} />
            </div>
          </div>

          <div className="card border-0 shadow-sm rounded-3 p-4 bg-white mb-4" id="dark-variant">
            <h6 className="fw-bold text-dark mb-1">Dark Variant</h6>
            <p className="text-muted small mb-3" style={{ fontSize: '0.78rem' }}>
              Add <code>.carousel-dark</code> to the <code>.carousel</code> for darker controls, indicators, and captions.
            </p>
            <div className="position-relative rounded-3 overflow-hidden bg-light border border-secondary-subtle d-flex align-items-center justify-content-center" style={{ height: '320px' }}>
              <BsImage style={{ fontSize: '4.5rem', color: '#000000', opacity: 0.85 }} />
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-lg-4">
          <div className="card border-0 shadow-sm rounded-3 p-3 bg-white sticky-top" style={{ top: '80px', zIndex: 10 }}>
            <div className="d-flex flex-column gap-2" style={{ fontSize: '0.8rem' }}>
              <a href="#slides-only" className="text-decoration-none text-secondary py-1">Slides Only</a>
              <a href="#with-controls" className="text-decoration-none text-secondary py-1">With Controls</a>
              <a href="#with-indicators" className="text-decoration-none text-secondary py-1">With Indicators</a>
              <a href="#with-captions" className="text-decoration-none text-secondary py-1">With Captions</a>
              <a href="#crossfade" className="text-decoration-none text-secondary py-1">Crossfade</a>
              <a href="#individual-interval" className="text-decoration-none text-secondary py-1">Individual .carousel-item Interval</a>
              <a href="#disable-touch-swiping" className="text-decoration-none text-secondary py-1">Disable Touch Swiping</a>
              <a href="#dark-variant" className="text-decoration-none text-secondary py-1">Dark Variant</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
