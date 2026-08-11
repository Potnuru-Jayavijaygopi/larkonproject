import React from 'react';
import { BsImage } from 'react-icons/bs';


function Card() {
  return (
    <div className="container-fluid p-4">


  
      <div className="row g-4 mb-4">
       
        <div className="col-xl-3 col-md-6">
          <div className="card border-0 shadow-sm rounded-3 overflow-hidden bg-white h-100">
            <div className="bg-secondary-subtle d-flex align-items-center justify-content-center" style={{ height: '140px' }}>
              <BsImage style={{ fontSize: '2.5rem', color: '#000000', opacity: 0.85 }} />
            </div>
            <div className="card-body p-3">
              <h6 className="card-title fw-bold text-dark mb-2">Card title</h6>
              <p className="card-text text-muted small mb-3" style={{ fontSize: '0.78rem' }}>
                Some quick example text to build on the card title and make up the bulk of the card's content. With supporting text below as a natural lead-in to additional content.
              </p>
              <button className="btn text-white btn-sm px-3 py-1 fw-medium" style={{ backgroundColor: '#ff5e29', borderRadius: '0.375rem' }}>
                Button
              </button>
            </div>
          </div>
        </div>

        
        <div className="col-xl-3 col-md-6">
          <div className="card border-0 shadow-sm rounded-3 overflow-hidden bg-white h-100">
            <div className="bg-secondary-subtle d-flex align-items-center justify-content-center" style={{ height: '140px' }}>
              <BsImage style={{ fontSize: '2.5rem', color: '#000000', opacity: 0.85 }} />
            </div>
            <div className="card-body p-3">
              <h6 className="card-title fw-bold text-dark mb-2">Card title</h6>
              <p className="card-text text-muted small mb-3" style={{ fontSize: '0.78rem' }}>
                Some quick example text to build on the card title.
              </p>
              <div className="d-flex gap-3 small" style={{ fontSize: '0.78rem' }}>
                <a href="#link1" className="text-decoration-none" style={{ color: '#ff5e29' }}>Card link</a>
                <a href="#link2" className="text-decoration-none" style={{ color: '#ff5e29' }}>Another link</a>
              </div>
            </div>
          </div>
        </div>

     
        <div className="col-xl-3 col-md-6">
          <div className="card border-0 shadow-sm rounded-3 overflow-hidden bg-white h-100">
            <div className="bg-secondary-subtle d-flex align-items-center justify-content-center" style={{ height: '140px' }}>
              <BsImage style={{ fontSize: '2.5rem', color: '#000000', opacity: 0.85 }} />
            </div>
            <div className="card-body p-3">
              <p className="card-text text-muted small mb-3" style={{ fontSize: '0.78rem' }}>
                Some quick example text to build on the card title and make up the bulk of the card's content. With supporting text below as a natural lead-in to additional content.
              </p>
              <button className="btn text-white btn-sm px-3 py-1 fw-medium" style={{ backgroundColor: '#ff5e29', borderRadius: '0.375rem' }}>
                Button
              </button>
            </div>
          </div>
        </div>

     
        <div className="col-xl-3 col-md-6">
          <div className="card border-0 shadow-sm rounded-3 overflow-hidden bg-white h-100">
            <div className="card-body p-3 pb-0">
              <h6 className="card-title fw-bold text-dark mb-2">Card title</h6>
            </div>
            <div className="bg-secondary-subtle d-flex align-items-center justify-content-center" style={{ height: '100px' }}>
              <BsImage style={{ fontSize: '2.2rem', color: '#000000', opacity: 0.85 }} />
            </div>
            <div className="card-body p-3 pt-2">
              <p className="card-text text-muted small mb-3" style={{ fontSize: '0.78rem' }}>
                Some quick example text to build on the card title.
              </p>
              <div className="d-flex gap-3 small" style={{ fontSize: '0.78rem' }}>
                <a href="#link1" className="text-decoration-none" style={{ color: '#ff5e29' }}>Card link</a>
                <a href="#link2" className="text-decoration-none" style={{ color: '#ff5e29' }}>Another link</a>
              </div>
            </div>
          </div>
        </div>
      </div>

  
      <div className="row g-4 mb-4">
        <div className="col-md-6">
          <div className="card border-0 shadow-sm rounded-3 p-4 bg-white">
            <h6 className="fw-bold text-dark mb-2">Special title treatment</h6>
            <p className="text-muted small mb-3" style={{ fontSize: '0.8rem' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button className="btn text-white w-100 py-2 fw-medium" style={{ backgroundColor: '#ff5e29', borderRadius: '0.375rem' }}>
              Go somewhere
            </button>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card border-0 shadow-sm rounded-3 p-4 bg-white">
            <h6 className="fw-bold text-dark mb-2">Special title treatment</h6>
            <p className="text-muted small mb-3" style={{ fontSize: '0.8rem' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button className="btn text-white w-100 py-2 fw-medium" style={{ backgroundColor: '#ff5e29', borderRadius: '0.375rem' }}>
              Go somewhere
            </button>
          </div>
        </div>
      </div>

      
      <div className="row g-4 mb-4">
       
        <div className="col-xl-4 col-md-6">
          <div className="card border-0 shadow-sm rounded-3 overflow-hidden bg-white h-100">
            <div className="card-header bg-light border-0 py-2 px-3 fw-medium text-muted small">
              Featured
            </div>
            <div className="card-body p-3">
              <h6 className="fw-bold text-dark mb-2">Special title treatment</h6>
              <p className="text-muted small mb-3" style={{ fontSize: '0.78rem' }}>
                With supporting text below as a natural lead-in to additional content.
              </p>
              <button className="btn text-white btn-sm px-3 py-1 fw-medium" style={{ backgroundColor: '#ff5e29', borderRadius: '0.375rem' }}>
                Go somewhere
              </button>
            </div>
          </div>
        </div>

        
        <div className="col-xl-4 col-md-6">
          <div className="card border-0 shadow-sm rounded-3 overflow-hidden bg-white h-100">
            <div className="card-header bg-light border-0 py-2 px-3 fw-medium text-muted small">
              Quote
            </div>
            <div className="card-body p-3 d-flex flex-column justify-content-between">
              <p className="text-muted mb-3" style={{ fontSize: '0.78rem', lineHeight: '1.5' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
              </p>
              <div className="text-muted small mt-2" style={{ fontSize: '0.725rem' }}>
                — Someone famous in <cite title="Source Title" className="font-italic">Source Title</cite>
              </div>
            </div>
          </div>
        </div>

        
        <div className="col-xl-4 col-md-12">
          <div className="card border-0 shadow-sm rounded-3 overflow-hidden bg-white h-100">
            <div className="card-header bg-light border-0 py-2 px-3 fw-medium text-muted small">
              Featured
            </div>
            <div className="card-body p-3 d-flex flex-column justify-content-between">
              <button className="btn text-white btn-sm px-3 py-1 fw-medium mb-3" style={{ backgroundColor: '#ff5e29', borderRadius: '0.375rem', width: 'fit-content' }}>
                Go somewhere
              </button>
              <div className="text-muted small" style={{ fontSize: '0.7rem' }}>
                2 days ago
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <h6 className="fw-bold text-dark mb-3">Card Colored</h6>
        <div className="row g-4">
          <div className="col-xl-4 col-md-6">
            <div className="card border-0 shadow-sm rounded-3 p-3 text-white h-100 d-flex flex-column justify-content-between" style={{ backgroundColor: '#ff5e29' }}>
              <div>
                <h6 className="fw-bold text-white mb-2">Special title treatment</h6>
                <p className="small mb-3" style={{ fontSize: '0.78rem', opacity: 0.95 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <button className="btn btn-light btn-sm text-dark px-3 py-1 fw-medium mt-2" style={{ borderRadius: '0.375rem', width: 'fit-content' }}>
                Button
              </button>
            </div>
          </div>

          <div className="col-xl-4 col-md-6">
            <div className="card border-0 shadow-sm rounded-3 p-3 text-white h-100 d-flex flex-column justify-content-between" style={{ backgroundColor: '#475569' }}>
              <p className="small mb-3" style={{ fontSize: '0.78rem', opacity: 0.95 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
              </p>
              <div className="mt-3" style={{ fontSize: '0.725rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                — Someone famous in <cite title="Source Title" className="text-white fw-medium">Source Title</cite>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-md-6">
            <div className="card border-0 shadow-sm rounded-3 p-3 text-white h-100 d-flex flex-column justify-content-between" style={{ backgroundColor: '#10b981' }}>
              <p className="small mb-3" style={{ fontSize: '0.78rem', opacity: 0.95 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
              </p>
              <div className="mt-3" style={{ fontSize: '0.725rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                — Someone famous in <cite title="Source Title" className="text-white fw-medium">Source Title</cite>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-md-6">
            <div className="card border-0 shadow-sm rounded-3 p-3 text-white h-100 d-flex flex-column justify-content-between" style={{ backgroundColor: '#06b6d4' }}>
              <p className="small mb-3" style={{ fontSize: '0.78rem', opacity: 0.95 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
              </p>
              <div className="mt-3" style={{ fontSize: '0.725rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                — Someone famous in <cite title="Source Title" className="text-white fw-medium">Source Title</cite>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-md-6">
            <div className="card border-0 shadow-sm rounded-3 p-3 text-white h-100 d-flex flex-column justify-content-between" style={{ backgroundColor: '#f59e0b' }}>
              <p className="small mb-3" style={{ fontSize: '0.78rem', opacity: 0.95 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
              </p>
              <div className="mt-3" style={{ fontSize: '0.725rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                — Someone famous in <cite title="Source Title" className="text-white fw-medium">Source Title</cite>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-md-6">
            <div className="card border-0 shadow-sm rounded-3 p-3 text-white h-100 d-flex flex-column justify-content-between" style={{ backgroundColor: '#ef4444' }}>
              <p className="small mb-3" style={{ fontSize: '0.78rem', opacity: 0.95 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
              </p>
              <div className="mt-3" style={{ fontSize: '0.725rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                — Someone famous in <cite title="Source Title" className="text-white fw-medium">Source Title</cite>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <h6 className="fw-bold text-dark mb-3">Card Bordered</h6>
        <div className="row g-4">
          <div className="col-xl-4 col-md-6">
            <div className="card rounded-3 p-3 bg-white" style={{ border: '1px solid #ff5e29' }}>
              <h6 className="fw-bold mb-2" style={{ color: '#ff5e29' }}>Special title treatment</h6>
              <p className="text-muted small mb-3" style={{ fontSize: '0.78rem' }}>
                With supporting text below as a natural lead-in to additional content.
              </p>
              <button className="btn text-white btn-sm px-3 py-1 fw-medium" style={{ backgroundColor: '#ff5e29', borderRadius: '0.375rem', width: 'fit-content' }}>
                Button
              </button>
            </div>
          </div>

          <div className="col-xl-4 col-md-6">
            <div className="card rounded-3 p-3 bg-white" style={{ border: '1px solid #475569' }}>
              <h6 className="fw-bold mb-2" style={{ color: '#475569' }}>Special title treatment</h6>
              <p className="text-muted small mb-3" style={{ fontSize: '0.78rem' }}>
                With supporting text below as a natural lead-in to additional content.
              </p>
              <button className="btn text-white btn-sm px-3 py-1 fw-medium" style={{ backgroundColor: '#475569', borderRadius: '0.375rem', width: 'fit-content' }}>
                Button
              </button>
            </div>
          </div>

          <div className="col-xl-4 col-md-12">
            <div className="card rounded-3 p-3 bg-white" style={{ border: '1px solid #10b981' }}>
              <h6 className="fw-bold mb-2" style={{ color: '#10b981' }}>Special title treatment</h6>
              <p className="text-muted small mb-3" style={{ fontSize: '0.78rem' }}>
                With supporting text below as a natural lead-in to additional content.
              </p>
              <button className="btn text-white btn-sm px-3 py-1 fw-medium" style={{ backgroundColor: '#10b981', borderRadius: '0.375rem', width: 'fit-content' }}>
                Button
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <h6 className="fw-bold text-dark mb-3">Horizontal Card</h6>
        <div className="row g-4">
          <div className="col-md-6">
            <div className="card border-0 shadow-sm rounded-3 overflow-hidden bg-white">
              <div className="row g-0 align-items-center">
                <div className="col-4 bg-secondary-subtle d-flex align-items-center justify-content-center" style={{ minHeight: '140px' }}>
                  <BsImage style={{ fontSize: '2.5rem', color: '#000000', opacity: 0.85 }} />
                </div>
                <div className="col-8 p-3">
                  <h6 className="fw-bold text-dark mb-1">Card title</h6>
                  <p className="text-muted small mb-2" style={{ fontSize: '0.75rem', lineHeight: '1.4' }}>
                    This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                  </p>
                  <span className="text-muted small" style={{ fontSize: '0.68rem' }}>Last updated 3 mins ago</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card border-0 shadow-sm rounded-3 overflow-hidden bg-white">
              <div className="row g-0 align-items-center">
                <div className="col-8 p-3">
                  <h6 className="fw-bold text-dark mb-1">Card title</h6>
                  <p className="text-muted small mb-2" style={{ fontSize: '0.75rem', lineHeight: '1.4' }}>
                    This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                  </p>
                  <span className="text-muted small" style={{ fontSize: '0.68rem' }}>Last updated 3 mins ago</span>
                </div>
                <div className="col-4 bg-secondary-subtle d-flex align-items-center justify-content-center" style={{ minHeight: '140px' }}>
                  <BsImage style={{ fontSize: '2.5rem', color: '#000000', opacity: 0.85 }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <h6 className="fw-bold text-dark mb-3">Stretched link</h6>
        <div className="row g-4">
          <div className="col-xl-3 col-md-6">
            <div className="card border-0 shadow-sm rounded-3 overflow-hidden bg-white h-100">
              <div className="bg-secondary-subtle d-flex align-items-center justify-content-center" style={{ height: '140px' }}>
                <BsImage style={{ fontSize: '2.5rem', color: '#000000', opacity: 0.85 }} />
              </div>
              <div className="card-body p-3">
                <h6 className="card-title fw-bold text-dark mb-2">Card with stretched link</h6>
                <button className="btn text-white btn-sm px-3 py-1 fw-medium stretched-link" style={{ backgroundColor: '#ff5e29', borderRadius: '0.375rem' }}>
                  Go somewhere
                </button>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-md-6">
            <div className="card border-0 shadow-sm rounded-3 overflow-hidden bg-white h-100">
              <div className="bg-secondary-subtle d-flex align-items-center justify-content-center" style={{ height: '140px' }}>
                <BsImage style={{ fontSize: '2.5rem', color: '#000000', opacity: 0.85 }} />
              </div>
              <div className="card-body p-3">
                <h6 className="card-title fw-bold mb-2" style={{ color: '#ff5e29' }}>Card with stretched link</h6>
                <p className="card-text text-muted small" style={{ fontSize: '0.78rem' }}>
                  Some quick example text to build on the card up the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-md-6">
            <div className="card border-0 shadow-sm rounded-3 overflow-hidden bg-white h-100">
              <div className="bg-secondary-subtle d-flex align-items-center justify-content-center" style={{ height: '140px' }}>
                <BsImage style={{ fontSize: '2.5rem', color: '#000000', opacity: 0.85 }} />
              </div>
              <div className="card-body p-3">
                <h6 className="card-title fw-bold text-dark mb-2">Card with stretched link</h6>
                <button className="btn text-white btn-sm px-3 py-1 fw-medium stretched-link" style={{ backgroundColor: '#ff5e29', borderRadius: '0.375rem' }}>
                  Go somewhere
                </button>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-md-6">
            <div className="card border-0 shadow-sm rounded-3 overflow-hidden bg-white h-100">
              <div className="bg-secondary-subtle d-flex align-items-center justify-content-center" style={{ height: '140px' }}>
                <BsImage style={{ fontSize: '2.5rem', color: '#000000', opacity: 0.85 }} />
              </div>
              <div className="card-body p-3">
                <h6 className="card-title fw-bold text-dark mb-2">Card with stretched link</h6>
                <p className="card-text text-muted small" style={{ fontSize: '0.78rem' }}>
                  Some quick example text to build on the card up the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <h6 className="fw-bold text-dark mb-3">Card Group</h6>
        <div className="card-group rounded-3 overflow-hidden shadow-sm">
          <div className="card border border-light-subtle bg-white">
            <div className="bg-secondary-subtle d-flex align-items-center justify-content-center" style={{ height: '160px' }}>
              <BsImage style={{ fontSize: '2.8rem', color: '#000000', opacity: 0.85 }} />
            </div>
            <div className="card-body p-3">
              <h6 className="card-title fw-bold text-dark mb-2">Card title</h6>
              <p className="card-text text-muted small mb-2" style={{ fontSize: '0.78rem' }}>
                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
              </p>
              <span className="text-muted small" style={{ fontSize: '0.7rem' }}>Last updated 3 mins ago</span>
            </div>
          </div>

          <div className="card border border-light-subtle bg-white">
            <div className="bg-secondary-subtle d-flex align-items-center justify-content-center" style={{ height: '160px' }}>
              <BsImage style={{ fontSize: '2.8rem', color: '#000000', opacity: 0.85 }} />
            </div>
            <div className="card-body p-3">
              <h6 className="card-title fw-bold text-dark mb-2">Card title</h6>
              <p className="card-text text-muted small mb-2" style={{ fontSize: '0.78rem' }}>
                This card has supporting text below as a natural lead-in to additional content.
              </p>
              <span className="text-muted small" style={{ fontSize: '0.7rem' }}>Last updated 3 mins ago</span>
            </div>
          </div>

          <div className="card border border-light-subtle bg-white">
            <div className="bg-secondary-subtle d-flex align-items-center justify-content-center" style={{ height: '160px' }}>
              <BsImage style={{ fontSize: '2.8rem', color: '#000000', opacity: 0.85 }} />
            </div>
            <div className="card-body p-3">
              <h6 className="card-title fw-bold text-dark mb-2">Card title</h6>
              <p className="card-text text-muted small mb-2" style={{ fontSize: '0.78rem' }}>
                This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
              </p>
              <span className="text-muted small" style={{ fontSize: '0.7rem' }}>Last updated 3 mins ago</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <h6 className="fw-bold text-dark mb-3">Card Decks</h6>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card border-0 shadow-sm rounded-3 overflow-hidden bg-white h-100">
              <div className="bg-secondary-subtle d-flex align-items-center justify-content-center" style={{ height: '160px' }}>
                <BsImage style={{ fontSize: '2.8rem', color: '#000000', opacity: 0.85 }} />
              </div>
              <div className="card-body p-3">
                <h6 className="card-title fw-bold text-dark mb-2">Card title</h6>
                <p className="card-text text-muted small mb-2" style={{ fontSize: '0.78rem' }}>
                  This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                </p>
                <span className="text-muted small" style={{ fontSize: '0.7rem' }}>Last updated 3 mins ago</span>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 shadow-sm rounded-3 overflow-hidden bg-white h-100">
              <div className="bg-secondary-subtle d-flex align-items-center justify-content-center" style={{ height: '160px' }}>
                <BsImage style={{ fontSize: '2.8rem', color: '#000000', opacity: 0.85 }} />
              </div>
              <div className="card-body p-3">
                <h6 className="card-title fw-bold text-dark mb-2">Card title</h6>
                <p className="card-text text-muted small mb-2" style={{ fontSize: '0.78rem' }}>
                  This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                </p>
                <span className="text-muted small" style={{ fontSize: '0.7rem' }}>Last updated 3 mins ago</span>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 shadow-sm rounded-3 overflow-hidden bg-white h-100">
              <div className="bg-secondary-subtle d-flex align-items-center justify-content-center" style={{ height: '160px' }}>
                <BsImage style={{ fontSize: '2.8rem', color: '#000000', opacity: 0.85 }} />
              </div>
              <div className="card-body p-3">
                <h6 className="card-title fw-bold text-dark mb-2">Card title</h6>
                <p className="card-text text-muted small mb-2" style={{ fontSize: '0.78rem' }}>
                  This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                </p>
                <span className="text-muted small" style={{ fontSize: '0.7rem' }}>Last updated 3 mins ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;