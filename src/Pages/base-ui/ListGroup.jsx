import React, { useState } from 'react';

function ListGroup() {
  const [checkedState, setCheckedState] = useState({
    first: true,
    second: false,
    third: false,
  });

  const toggleCheck = (key) => {
    setCheckedState((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="container-fluid p-4">
      <div className="row g-4">

        <div className="col-xl-9 col-lg-8">
          <div className="card border-0 shadow-sm rounded-3 p-4 bg-white mb-4" id="basic">
            <h6 className="fw-bold text-dark mb-1">Basic</h6>
            <p className="text-muted small mb-3" style={{ fontSize: '0.78rem' }}>
              The most basic list group is an unordered list with list items and the proper classes. Build upon it with the options that follow, or with your own CSS as needed.
            </p>

            <ul className="list-group rounded-3 border-0 shadow-sm" style={{ fontSize: '0.825rem', maxWidth: '400px' }}>
              <li className="list-group-item border-light-subtle py-2 px-3">An item</li>
              <li className="list-group-item border-light-subtle py-2 px-3">A second item</li>
              <li className="list-group-item border-light-subtle py-2 px-3">A third item</li>
              <li className="list-group-item border-light-subtle py-2 px-3">A fourth item</li>
              <li className="list-group-item border-light-subtle py-2 px-3">And a fifth one</li>
            </ul>
          </div>


          <div className="card border-0 shadow-sm rounded-3 p-4 bg-white mb-4" id="active-items">
            <h6 className="fw-bold text-dark mb-1">Active items</h6>
            <p className="text-muted small mb-3" style={{ fontSize: '0.78rem' }}>
              Add <code>.active</code> to a <code>.list-group-item</code> to indicate the current active selection.
            </p>

            <ul className="list-group rounded-3 border-0 shadow-sm" style={{ fontSize: '0.825rem', maxWidth: '400px' }}>
              <li className="list-group-item border-0 text-white fw-medium py-2 px-3" style={{ backgroundColor: '#ff5e29' }}>An active item</li>
              <li className="list-group-item border-light-subtle py-2 px-3">A second item</li>
              <li className="list-group-item border-light-subtle py-2 px-3">A third item</li>
              <li className="list-group-item border-light-subtle py-2 px-3">A fourth item</li>
              <li className="list-group-item border-light-subtle py-2 px-3">And a fifth one</li>
            </ul>
          </div>

          <div className="card border-0 shadow-sm rounded-3 p-4 bg-white mb-4" id="disabled-items">
            <h6 className="fw-bold text-dark mb-1">Disabled items</h6>
            <p className="text-muted small mb-3" style={{ fontSize: '0.78rem' }}>
              Add <code>.disabled</code> to a <code>.list-group-item</code> to make it appear disabled. Note that some elements with <code>.disabled</code> will also require custom JavaScript to fully disable their click events (e.g., links).
            </p>

            <ul className="list-group rounded-3 border-0 shadow-sm" style={{ fontSize: '0.825rem', maxWidth: '400px' }}>
              <li className="list-group-item border-light-subtle text-muted disabled bg-light py-2 px-3" aria-disabled="true">A disabled item</li>
              <li className="list-group-item border-light-subtle py-2 px-3">A second item</li>
              <li className="list-group-item border-light-subtle py-2 px-3">A third item</li>
              <li className="list-group-item border-light-subtle py-2 px-3">A fourth item</li>
              <li className="list-group-item border-light-subtle py-2 px-3">And a fifth one</li>
            </ul>
          </div>

          <div className="card border-0 shadow-sm rounded-3 p-4 bg-white mb-4" id="links-and-buttons">
            <h6 className="fw-bold text-dark mb-1">Links and buttons</h6>
            <p className="text-muted small mb-3" style={{ fontSize: '0.78rem' }}>
              Use <code>&lt;a&gt;</code>s or <code>&lt;button&gt;</code>s to create actionable list group items with hover, disabled, and active states by adding <code>.list-group-item-action</code>. We separate these pseudo-classes to ensure list groups made of non-interactive elements (like <code>&lt;li&gt;</code>s or <code>&lt;div&gt;</code>s) don't provide a hover or active affine.
            </p>

            <div className="row g-4">
              <div className="col-md-6">
                <div className="list-group rounded-3 shadow-sm" style={{ fontSize: '0.825rem' }}>
                  <a href="#link" className="list-group-item list-group-item-action border-0 text-white fw-medium py-2 px-3" style={{ backgroundColor: '#ff5e29' }}>
                    An active link button
                  </a>
                  <a href="#link" className="list-group-item list-group-item-action py-2 px-3">A second link item</a>
                  <a href="#link" className="list-group-item list-group-item-action py-2 px-3">A third link item</a>
                  <a href="#link" className="list-group-item list-group-item-action py-2 px-3">A fourth link item</a>
                  <a href="#link" className="list-group-item list-group-item-action disabled text-muted py-2 px-3">A disabled link item</a>
                </div>
              </div>

              <div className="col-md-6">
                <div className="list-group rounded-3 shadow-sm" style={{ fontSize: '0.825rem' }}>
                  <button className="list-group-item list-group-item-action border-0 text-white fw-medium py-2 px-3" style={{ backgroundColor: '#ff5e29' }}>
                    An active button
                  </button>
                  <button className="list-group-item list-group-item-action py-2 px-3">A second button</button>
                  <button className="list-group-item list-group-item-action py-2 px-3">A third button</button>
                  <button className="list-group-item list-group-item-action py-2 px-3">A fourth button</button>
                  <button className="list-group-item list-group-item-action disabled text-muted py-2 px-3" disabled>A disabled button</button>
                </div>
              </div>
            </div>
          </div>

          <div className="card border-0 shadow-sm rounded-3 p-4 bg-white mb-4" id="flush">
            <h6 className="fw-bold text-dark mb-1">Flush</h6>
            <p className="text-muted small mb-3" style={{ fontSize: '0.78rem' }}>
              Add <code>.list-group-flush</code> to remove some borders and rounded corners to render list group items edge-to-edge in a parent container (e.g., cards).
            </p>

            <ul className="list-group list-group-flush" style={{ fontSize: '0.825rem', maxWidth: '400px' }}>
              <li className="list-group-item py-2 px-0">An item</li>
              <li className="list-group-item py-2 px-0">A second item</li>
              <li className="list-group-item py-2 px-0">A third item</li>
              <li className="list-group-item py-2 px-0">A fourth item</li>
              <li className="list-group-item py-2 px-0">And a fifth one</li>
            </ul>
          </div>

          <div className="card border-0 shadow-sm rounded-3 p-4 bg-white mb-4" id="numbered">
            <h6 className="fw-bold text-dark mb-1">Numbered</h6>
            <p className="text-muted small mb-2" style={{ fontSize: '0.78rem' }}>
              Add the <code>.list-group-numbered</code> modifier class (and optionally use an <code>&lt;ol&gt;</code>) to opt into numbered list group items. Numbers are generated via CSS (as opposed to a <code>&lt;ol&gt;</code>s default browser styling) for better placement inside list group items and to allow for better customization.
            </p>
            <p className="text-muted small mb-3" style={{ fontSize: '0.78rem' }}>
              These also work with <code>ol</code>s (or <code>ul</code>s) to create numbered lists, optionally with badges and flex utilities to build more complex layouts.
            </p>

            <div className="row g-4">
              <div className="col-md-6">
                <ol className="list-group list-group-numbered rounded-3 shadow-sm" style={{ fontSize: '0.825rem' }}>
                  <li className="list-group-item py-2 px-3">A list item</li>
                  <li className="list-group-item py-2 px-3">A list item</li>
                  <li className="list-group-item py-2 px-3">A list item</li>
                </ol>
              </div>

              <div className="col-md-6">
                <ol className="list-group list-group-numbered rounded-3 shadow-sm" style={{ fontSize: '0.825rem' }}>
                  <li className="list-group-item d-flex justify-content-between align-items-start py-2 px-3">
                    <div className="ms-2 me-auto">
                      <div className="fw-bold text-dark">Subheading</div>
                      <span className="text-muted small" style={{ fontSize: '0.75rem' }}>Content for list item</span>
                    </div>
                    <span className="badge text-white rounded-pill px-2 py-1" style={{ backgroundColor: '#ff5e29', fontSize: '0.7rem' }}>14</span>
                  </li>

                  <li className="list-group-item d-flex justify-content-between align-items-start py-2 px-3">
                    <div className="ms-2 me-auto">
                      <div className="fw-bold text-dark">Subheading</div>
                      <span className="text-muted small" style={{ fontSize: '0.75rem' }}>Content for list item</span>
                    </div>
                    <span className="badge text-white rounded-pill px-2 py-1" style={{ backgroundColor: '#ff5e29', fontSize: '0.7rem' }}>14</span>
                  </li>

                  <li className="list-group-item d-flex justify-content-between align-items-start py-2 px-3">
                    <div className="ms-2 me-auto">
                      <div className="fw-bold text-dark">Subheading</div>
                      <span className="text-muted small" style={{ fontSize: '0.75rem' }}>Content for list item</span>
                    </div>
                    <span className="badge text-white rounded-pill px-2 py-1" style={{ backgroundColor: '#ff5e29', fontSize: '0.7rem' }}>14</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>

          <div className="card border-0 shadow-sm rounded-3 p-4 bg-white mb-4" id="horizontal">
            <h6 className="fw-bold text-dark mb-1">Horizontal</h6>
            <p className="text-muted small mb-3" style={{ fontSize: '0.78rem' }}>
              Add <code>.list-group-horizontal</code> to change the layout of list group items from vertical to horizontal across all breakpoints. Alternatively, choose a responsive variant <code>.list-group-horizontal-&#123;sm|md|lg|xl|xxl&#125;</code> to make a list group horizontal starting at that breakpoint's <code>min-width</code>.
            </p>

            <div className="d-flex flex-column gap-3">
              <ul className="list-group list-group-horizontal rounded-3" style={{ fontSize: '0.825rem', maxWidth: '480px' }}>
                <li className="list-group-item py-2 px-3 flex-fill text-center">An item</li>
                <li className="list-group-item py-2 px-3 flex-fill text-center">A second item</li>
                <li className="list-group-item py-2 px-3 flex-fill text-center">A third item</li>
              </ul>

              <ul className="list-group list-group-horizontal rounded-3" style={{ fontSize: '0.825rem', maxWidth: '480px' }}>
                <li className="list-group-item py-2 px-3 flex-fill text-center">An item</li>
                <li className="list-group-item py-2 px-3 flex-fill text-center">A second item</li>
                <li className="list-group-item py-2 px-3 flex-fill text-center">A third item</li>
              </ul>

              <ul className="list-group list-group-horizontal rounded-3" style={{ fontSize: '0.825rem', maxWidth: '480px' }}>
                <li className="list-group-item py-2 px-3 flex-fill text-center">An item</li>
                <li className="list-group-item py-2 px-3 flex-fill text-center">A second item</li>
                <li className="list-group-item py-2 px-3 flex-fill text-center">A third item</li>
              </ul>
            </div>
          </div>

          <div className="card border-0 shadow-sm rounded-3 p-4 bg-white mb-4" id="contextual-classes">
            <h6 className="fw-bold text-dark mb-1">Contextual classes</h6>
            <p className="text-muted small mb-3" style={{ fontSize: '0.78rem' }}>
              Use contextual classes to style list items with a stateful background and color.
            </p>

            <ul className="list-group rounded-3" style={{ fontSize: '0.825rem', maxWidth: '500px' }}>
              <li className="list-group-item py-2 px-3">A simple default list group item</li>
              <li className="list-group-item py-2 px-3 border-0" style={{ backgroundColor: '#ffefe9', color: '#ff5e29' }}>A simple primary list group item</li>
              <li className="list-group-item py-2 px-3 border-0" style={{ backgroundColor: '#f1f5f9', color: '#475569' }}>A simple secondary list group item</li>
              <li className="list-group-item py-2 px-3 border-0" style={{ backgroundColor: '#dcfce7', color: '#16a34a' }}>A simple success list group item</li>
              <li className="list-group-item py-2 px-3 border-0" style={{ backgroundColor: '#fee2e2', color: '#dc2626' }}>A simple danger list group item</li>
              <li className="list-group-item py-2 px-3 border-0" style={{ backgroundColor: '#fef9c3', color: '#ca8a04' }}>A simple warning list group item</li>
              <li className="list-group-item py-2 px-3 border-0" style={{ backgroundColor: '#e0f2fe', color: '#0284c7' }}>A simple info list group item</li>
              <li className="list-group-item py-2 px-3 border border-light-subtle" style={{ backgroundColor: '#ffffff', color: '#64748b' }}>A simple light list group item</li>
              <li className="list-group-item py-2 px-3 border-0" style={{ backgroundColor: '#cbd5e1', color: '#0f172a' }}>A simple dark list group item</li>
            </ul>
          </div>

          <div className="card border-0 shadow-sm rounded-3 p-4 bg-white mb-4" id="custom-content">
            <h6 className="fw-bold text-dark mb-1">Custom content</h6>
            <p className="text-muted small mb-3" style={{ fontSize: '0.78rem' }}>
              Add nearly any HTML within, even for flexbox list groups like the one below, with the help of flexbox utilities.
            </p>

            <div className="list-group rounded-3 shadow-sm" style={{ maxWidth: '540px' }}>

              <a href="#custom1" className="list-group-item list-group-item-action active border-0 text-white p-3" style={{ backgroundColor: '#ff5e29' }}>
                <div className="d-flex w-100 justify-content-between align-items-center mb-1">
                  <h6 className="mb-0 text-white fw-bold">List group item heading</h6>
                  <small style={{ fontSize: '0.7rem', opacity: 0.9 }}>3 days ago</small>
                </div>
                <p className="mb-1 small" style={{ fontSize: '0.78rem', opacity: 0.95 }}>
                  Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                </p>
                <small style={{ fontSize: '0.7rem', opacity: 0.85 }}>And some muted small text.</small>
              </a>

              <a href="#custom2" className="list-group-item list-group-item-action p-3">
                <div className="d-flex w-100 justify-content-between align-items-center mb-1">
                  <h6 className="mb-0 text-dark fw-bold">List group item heading</h6>
                  <small className="text-muted" style={{ fontSize: '0.7rem' }}>3 days ago</small>
                </div>
                <p className="mb-1 text-muted small" style={{ fontSize: '0.78rem' }}>
                  Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                </p>
                <small className="text-muted" style={{ fontSize: '0.7rem' }}>And some muted small text.</small>
              </a>

              <a href="#custom3" className="list-group-item list-group-item-action p-3">
                <div className="d-flex w-100 justify-content-between align-items-center mb-1">
                  <h6 className="mb-0 text-dark fw-bold">List group item heading</h6>
                  <small className="text-muted" style={{ fontSize: '0.7rem' }}>3 days ago</small>
                </div>
                <p className="mb-1 text-muted small" style={{ fontSize: '0.78rem' }}>
                  Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                </p>
                <small className="text-muted" style={{ fontSize: '0.7rem' }}>And some muted small text.</small>
              </a>
            </div>
          </div>

          <div className="card border-0 shadow-sm rounded-3 p-4 bg-white mb-4" id="checkboxes-and-radios">
            <h6 className="fw-bold text-dark mb-1">Checkboxes and radios</h6>
            <p className="text-muted small mb-3" style={{ fontSize: '0.78rem' }}>
              Place Bootstrap's checkboxes and radios within list group items and customize as needed. You can use them without <code>&lt;label&gt;</code>s, but remember to include an <code>aria-label</code> attribute and value for accessibility.
            </p>

            <ul className="list-group rounded-3 shadow-sm" style={{ fontSize: '0.825rem', maxWidth: '400px' }}>
              <li className="list-group-item py-2 px-3 d-flex align-items-center gap-2">
                <input
                  className="form-check-input mt-0"
                  type="checkbox"
                  checked={checkedState.first}
                  onChange={() => toggleCheck('first')}
                />
                <span>First checkbox</span>
              </li>

              <li className="list-group-item py-2 px-3 d-flex align-items-center gap-2">
                <input
                  className="form-check-input mt-0"
                  type="checkbox"
                  checked={checkedState.second}
                  onChange={() => toggleCheck('second')}
                />
                <span>Second checkbox</span>
              </li>

              <li className="list-group-item py-2 px-3 d-flex align-items-center gap-2">
                <input
                  className="form-check-input mt-0"
                  type="checkbox"
                  checked={checkedState.third}
                  onChange={() => toggleCheck('third')}
                />
                <span>Third checkbox</span>
              </li>
            </ul>
          </div>
        </div>


        <div className="col-xl-3 col-lg-4">
          <div className="card border-0 shadow-sm rounded-3 p-3 bg-white sticky-top" style={{ top: '80px', zIndex: 10 }}>
            <div className="d-flex flex-column gap-2" style={{ fontSize: '0.8rem' }}>
              <a href="#basic" className="text-decoration-none text-secondary py-1">Basic</a>
              <a href="#active-items" className="text-decoration-none text-secondary py-1">Active items</a>
              <a href="#disabled-items" className="text-decoration-none text-secondary py-1">Disabled items</a>
              <a href="#links-and-buttons" className="text-decoration-none text-secondary py-1">Links and buttons</a>
              <a href="#flush" className="text-decoration-none text-secondary py-1">Flush</a>
              <a href="#numbered" className="text-decoration-none text-secondary py-1">Numbered</a>
              <a href="#horizontal" className="text-decoration-none text-secondary py-1">Horizontal</a>
              <a href="#contextual-classes" className="text-decoration-none text-secondary py-1">Contextual classes</a>
              <a href="#custom-content" className="text-decoration-none text-secondary py-1">Custom content</a>
              <a href="#checkboxes-and-radios" className="text-decoration-none text-secondary py-1">Checkboxes and radios</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListGroup;