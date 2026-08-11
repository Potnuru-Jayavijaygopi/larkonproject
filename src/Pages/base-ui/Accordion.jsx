import React, { useState } from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

function Accordion() {
  const [basicOpen, setBasicOpen] = useState(1);

  const [flushOpen, setFlushOpen] = useState(null);

  const [alwaysOpenState, setAlwaysOpenState] = useState({
    1: true,
    2: false,
    3: false,
  });

  const toggleAlwaysOpen = (id) => {
    setAlwaysOpenState((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="container-fluid p-4">
      <div className="row g-4">
        <div className="col-xl-9 col-lg-8">
          <div className="card border-0 shadow-sm rounded-3 p-4 bg-white mb-4" id="default-example">
            <h6 className="fw-bold text-dark mb-2">Basic Example</h6>
            <p className="text-muted small mb-3" style={{ fontSize: '0.78rem' }}>
              Using the card component, you can extend the default collapse behavior to create an accordion. To properly achieve the accordion style, be sure to use <code>.accordion</code> as a wrapper.
            </p>

            <div className="accordion rounded-3 border overflow-hidden">
              <div className="accordion-item border-0 border-bottom">
                <button
                  className="accordion-button bg-white shadow-none px-3 py-3 d-flex align-items-center justify-content-between w-100 border-0 text-start"
                  style={{ color: basicOpen === 1 ? '#ff5e29' : '#334155', fontWeight: basicOpen === 1 ? '600' : '400' }}
                  onClick={() => setBasicOpen(basicOpen === 1 ? null : 1)}
                >
                  <span>Accordion Item #1</span>
                  {basicOpen === 1 ? <BsChevronUp className="small" /> : <BsChevronDown className="small" />}
                </button>
                {basicOpen === 1 && (
                  <div className="accordion-body px-3 py-3 text-muted small bg-white border-top border-light-subtle" style={{ fontSize: '0.78rem', lineHeight: '1.6' }}>
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                )}
              </div>

              <div className="accordion-item border-0 border-bottom">
                <button
                  className="accordion-button bg-white shadow-none px-3 py-3 d-flex align-items-center justify-content-between w-100 border-0 text-start"
                  style={{ color: basicOpen === 2 ? '#ff5e29' : '#334155', fontWeight: basicOpen === 2 ? '600' : '400' }}
                  onClick={() => setBasicOpen(basicOpen === 2 ? null : 2)}
                >
                  <span>Accordion Item #2</span>
                  {basicOpen === 2 ? <BsChevronUp className="small" /> : <BsChevronDown className="small" />}
                </button>
                {basicOpen === 2 && (
                  <div className="accordion-body px-3 py-3 text-muted small bg-white border-top border-light-subtle" style={{ fontSize: '0.78rem', lineHeight: '1.6' }}>
                    <strong>This is the second item's accordion body.</strong> It is hidden by default until activated.
                  </div>
                )}
              </div>

              <div className="accordion-item border-0">
                <button
                  className="accordion-button bg-white shadow-none px-3 py-3 d-flex align-items-center justify-content-between w-100 border-0 text-start"
                  style={{ color: basicOpen === 3 ? '#ff5e29' : '#334155', fontWeight: basicOpen === 3 ? '600' : '400' }}
                  onClick={() => setBasicOpen(basicOpen === 3 ? null : 3)}
                >
                  <span>Accordion Item #3</span>
                  {basicOpen === 3 ? <BsChevronUp className="small" /> : <BsChevronDown className="small" />}
                </button>
                {basicOpen === 3 && (
                  <div className="accordion-body px-3 py-3 text-muted small bg-white border-top border-light-subtle" style={{ fontSize: '0.78rem', lineHeight: '1.6' }}>
                    <strong>This is the third item's accordion body.</strong> It is hidden by default until activated.
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="card border-0 shadow-sm rounded-3 p-4 bg-white mb-4" id="flush-accordion">
            <h6 className="fw-bold text-dark mb-2">Flush Accordion</h6>
            <p className="text-muted small mb-3" style={{ fontSize: '0.78rem' }}>
              Add <code>.accordion-flush</code> to remove the default <code>background-color</code>, some borders, and some rounded corners to render accordions edge-to-edge with their parent container.
            </p>

            <div className="accordion accordion-flush">
              <div className="accordion-item border-0 border-bottom">
                <button
                  className="accordion-button bg-transparent shadow-none px-0 py-3 d-flex align-items-center justify-content-between w-100 border-0 text-start"
                  style={{ color: flushOpen === 1 ? '#ff5e29' : '#334155', fontWeight: flushOpen === 1 ? '600' : '400' }}
                  onClick={() => setFlushOpen(flushOpen === 1 ? null : 1)}
                >
                  <span>Accordion Item #1</span>
                  {flushOpen === 1 ? <BsChevronUp className="small" /> : <BsChevronDown className="small" />}
                </button>
                {flushOpen === 1 && (
                  <div className="accordion-body px-0 py-3 text-muted small" style={{ fontSize: '0.78rem', lineHeight: '1.6' }}>
                    Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.
                  </div>
                )}
              </div>

              <div className="accordion-item border-0 border-bottom">
                <button
                  className="accordion-button bg-transparent shadow-none px-0 py-3 d-flex align-items-center justify-content-between w-100 border-0 text-start"
                  style={{ color: flushOpen === 2 ? '#ff5e29' : '#334155', fontWeight: flushOpen === 2 ? '600' : '400' }}
                  onClick={() => setFlushOpen(flushOpen === 2 ? null : 2)}
                >
                  <span>Accordion Item #2</span>
                  {flushOpen === 2 ? <BsChevronUp className="small" /> : <BsChevronDown className="small" />}
                </button>
                {flushOpen === 2 && (
                  <div className="accordion-body px-0 py-3 text-muted small" style={{ fontSize: '0.78rem', lineHeight: '1.6' }}>
                    Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body.
                  </div>
                )}
              </div>

              <div className="accordion-item border-0">
                <button
                  className="accordion-button bg-transparent shadow-none px-0 py-3 d-flex align-items-center justify-content-between w-100 border-0 text-start"
                  style={{ color: flushOpen === 3 ? '#ff5e29' : '#334155', fontWeight: flushOpen === 3 ? '600' : '400' }}
                  onClick={() => setFlushOpen(flushOpen === 3 ? null : 3)}
                >
                  <span>Accordion Item #3</span>
                  {flushOpen === 3 ? <BsChevronUp className="small" /> : <BsChevronDown className="small" />}
                </button>
                {flushOpen === 3 && (
                  <div className="accordion-body px-0 py-3 text-muted small" style={{ fontSize: '0.78rem', lineHeight: '1.6' }}>
                    Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body.
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="card border-0 shadow-sm rounded-3 p-4 bg-white mb-4" id="always-open">
            <h6 className="fw-bold text-dark mb-2">Always Open Accordion</h6>
            <p className="text-muted small mb-3" style={{ fontSize: '0.78rem' }}>
              Omit the <code>data-bs-parent</code> attribute on each <code>.accordion-collapse</code> to make accordion items stay open when another item is opened.
            </p>

            <div className="accordion rounded-3 border overflow-hidden">
              <div className="accordion-item border-0 border-bottom">
                <button
                  className="accordion-button bg-white shadow-none px-3 py-3 d-flex align-items-center justify-content-between w-100 border-0 text-start"
                  style={{ color: alwaysOpenState[1] ? '#ff5e29' : '#334155', fontWeight: alwaysOpenState[1] ? '600' : '400' }}
                  onClick={() => toggleAlwaysOpen(1)}
                >
                  <span>Accordion Item #1</span>
                  {alwaysOpenState[1] ? <BsChevronUp className="small" /> : <BsChevronDown className="small" />}
                </button>
                {alwaysOpenState[1] && (
                  <div className="accordion-body px-3 py-3 text-muted small bg-white border-top border-light-subtle" style={{ fontSize: '0.78rem', lineHeight: '1.6' }}>
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                )}
              </div>

              <div className="accordion-item border-0 border-bottom">
                <button
                  className="accordion-button bg-white shadow-none px-3 py-3 d-flex align-items-center justify-content-between w-100 border-0 text-start"
                  style={{ color: alwaysOpenState[2] ? '#ff5e29' : '#334155', fontWeight: alwaysOpenState[2] ? '600' : '400' }}
                  onClick={() => toggleAlwaysOpen(2)}
                >
                  <span>Accordion Item #2</span>
                  {alwaysOpenState[2] ? <BsChevronUp className="small" /> : <BsChevronDown className="small" />}
                </button>
                {alwaysOpenState[2] && (
                  <div className="accordion-body px-3 py-3 text-muted small bg-white border-top border-light-subtle" style={{ fontSize: '0.78rem', lineHeight: '1.6' }}>
                    <strong>This is the second item's accordion body.</strong> It stays open alongside other items.
                  </div>
                )}
              </div>

              <div className="accordion-item border-0">
                <button
                  className="accordion-button bg-white shadow-none px-3 py-3 d-flex align-items-center justify-content-between w-100 border-0 text-start"
                  style={{ color: alwaysOpenState[3] ? '#ff5e29' : '#334155', fontWeight: alwaysOpenState[3] ? '600' : '400' }}
                  onClick={() => toggleAlwaysOpen(3)}
                >
                  <span>Accordion Item #3</span>
                  {alwaysOpenState[3] ? <BsChevronUp className="small" /> : <BsChevronDown className="small" />}
                </button>
                {alwaysOpenState[3] && (
                  <div className="accordion-body px-3 py-3 text-muted small bg-white border-top border-light-subtle" style={{ fontSize: '0.78rem', lineHeight: '1.6' }}>
                    <strong>This is the third item's accordion body.</strong> It stays open alongside other items.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-lg-4">
          <div className="card border-0 shadow-sm rounded-3 p-3 bg-white sticky-top" style={{ top: '80px', zIndex: 10 }}>
            <div className="d-flex flex-column gap-2" style={{ fontSize: '0.8rem' }}>
              <a href="#default-example" className="text-decoration-none text-secondary py-1">Default Example</a>
              <a href="#flush-accordion" className="text-decoration-none text-secondary py-1">Flush Accordion</a>
              <a href="#always-open" className="text-decoration-none text-secondary py-1">Always Open</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accordion;