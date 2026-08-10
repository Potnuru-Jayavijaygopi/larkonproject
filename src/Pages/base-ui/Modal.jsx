import { useState } from "react";

function Modal(){
  const[activeModal, setActiveModal] = useState(null);

  const closeModal = () => setActiveModal(null);
  
  return(
    <div className="container-fluid p-4 pt-5">
      <div className="row g-4">
        <div className="col-xl-9 col-lg-8">
          <div className="card border-0 shadow-sm rounded-3 p-4 bg-white mb-4" id="default-example">
            <h6 className="fw-bold text-dark mb-1">Default Modals</h6>
            <p className="text-muted small mb-3" style={{fontSize: '0.78rem'}}>
              Toggle a working modal demo by clicking the button below. It will slide down and fade in from the top of page.
            </p>

            <button
            className="btn text-white btn-sm px-3 py-1.5 align-self-start"
            style={{backgroundColor: '#ff5e29', borderRadius:'0.375rem', fontSize:'0.78rem', width:'fit-content'}}
            onClick={() => setActiveModal('default')}
            >
              Launch demo modal
            </button>
          </div>

          <div className="card border-0 shadow-sm rounded-3 p-4 bg-white mb-4" id="static-backdrop">
            <h6 className="fw-bold text-dark mb-1">Static Backdrop</h6>
            <p className="text-muted small mb-3" style={{fontSize: '0.78rem'}}>
              When backdrop is set to static, the modal will not close when clicking outside of it. Click the button below to try it.
            </p>

            <button
            className="btn text-white btn-sm px-3 py-1.5 align-self-start"
            style={{backgroundColor: '#ff5e29', borderRadius:'0.375rem', fontSize:'0.78rem', width:'fit-content'}}
            onClick={() => setActiveModal('static')}
            >
              Launch static backdrop modal
            </button>
          </div>

          <div className="card border-0 shadow-sm rounded-3 p-4 bg-white mb-4" id="scrolling-long-content">
            <h6 className="fw-bold text-dark mb-1">Scrolling Long Content</h6>
            <p className="text-muted small mb-3" style={{fontSize: '0.78rem'}}>
              When modals become too long for the user's viewport or device, they scroll independent of the page itself. Try the demo below to see what we mean.
            </p>

            <button
            className="btn text-white btn-sm px-3 py-1.5 align-self-start"
            style={{backgroundColor: '#ff5e29', borderRadius:'0.375rem', fontSize:'0.78rem', width:'fit-content'}}
            onClick={() => setActiveModal('scrolling-long')}
            >
              Launch demo modal
            </button>

            <p className="text-muted small mb-3" style={{fontSize: '0.78rem'}}>
              You can also create a scrollable modal that allows you to scroll the modal body by adding <code>.modal-dialog-scrollable</code> to <code>.modal-dialog</code>.
            </p>
            <button
            className="btn text-white btn-sm px-3 py-1.5 align-self-start"
            style={{backgroundColor: '#ff5e29', borderRadius:'0.375rem', fontSize:'0.78rem', width:'fit-content'}}
            onClick={() => setActiveModal('scrolling-body')}
            >
              Launch demo modal
            </button>
          </div>

          <div className="card border-0 shadow-sm rounded-3 p-4 bg-white mb-4" id="modal-position">
            <h6 className="fw-bold text-dark mb-1">Modal Position</h6>
            <p className="text-muted small mb-3" style={{fontSize: '0.78rem'}}>
              Add <code>.modal-dialog-centered</code> to <code>.modal-dialog</code> to vertically center the modal.
            </p>

            <div className="d-flex flex-wrap gap-2 mb-3">
              <button
            className="btn text-white btn-sm px-3 py-1.5"
            style={{backgroundColor: '#ff5e29', borderRadius:'0.375rem', fontSize:'0.78rem'}}
            onClick={() => setActiveModal('centered')}
            >
              Vertically centered modal
            </button>

            <button
            className="btn text-white btn-sm px-3 py-1.5 "
            style={{backgroundColor: '#ff5e29', borderRadius:'0.375rem', fontSize:'0.78rem'}}
            onClick={() => setActiveModal('centered-scrollable')}
            >
              Vertically centered scrollable modal
            </button>
          </div>

          <p className="text-muted small mb-3" style={{fontSize: '0.78rem'}}>
              Specify the position for the modal. You can display modal at top, bottom of page by specifying classes <code>.modal-top</code> and <code>.modal-bottom</code> respectively.
            </p>

            <div className="d-flex flex-wrap gap-2">
              <button
            className="btn text-white btn-sm px-3 py-1.5 "
            style={{backgroundColor: '#ff5e29', borderRadius:'0.375rem', fontSize:'0.78rem'}}
            onClick={() => setActiveModal('top')}
            >
              Top modal
            </button>

            <button
            className="btn text-white btn-sm px-3 py-1.5 "
            style={{backgroundColor: '#10b981', borderRadius:'0.375rem', fontSize:'0.78rem'}}
            onClick={() => setActiveModal('bottom')}
            >
              Bottom modal
            </button>
          </div>
        </div>

        <div className="card border-0 shadow-sm rounded-3 p-4 bg-white mb-4" id="toggle-between-modals">
            <h6 className="fw-bold text-dark mb-1">Toggle Between Modals</h6>
            <p className="text-muted small mb-3" style={{fontSize: '0.78rem'}}>
               Toggle between multiple modals with some clever placement of the <code>data-bs-target</code> and <code>data-bs-toggle</code> attributes. For example, you could toggle a password reset modal from within an already open sign in modal. <strong>Please note a multiple modals cannot be open at the same time</strong>-this method simply toggles between two separate modals.
            </p>

            <button
            className="btn text-white btn-sm px-3 py-1.5 align-self-start"
            style={{backgroundColor: '#ff5e29', borderRadius:'0.375rem', fontSize:'0.78rem', width:'fit-content'}}
            onClick={() => setActiveModal('toggle-1')}
            >
              Open first modal
            </button>
          </div>

          <div className="card border-0 shadow-sm rounded-3 p-4 bg-white mb-4" id="optional-sizes">
            <h6 className="fw-bold text-dark mb-1">Optional Sizes</h6>
            <p className="text-muted small mb-3" style={{fontSize: '0.78rem'}}>
              Modals have three optional sizes, available via modifier classes to be placed on a <code>.modal-dialog</code>. These sizes kick in at certain breakpoints to avoid horizontal scrollbars on narrower viewports.            
            </p>
          

          <div className="d-flex flex-wrap gap-2">
              <button
            className="btn text-white btn-sm px-3 py-1.5 "
            style={{backgroundColor: '#ff5e29', borderRadius:'0.375rem', fontSize:'0.78rem'}}
            onClick={() => setActiveModal('size-xl')}
            >
              Extra large modal
            </button>

            <button
            className="btn text-white btn-sm px-3 py-1.5 "
            style={{backgroundColor: '#ff5e29', borderRadius:'0.375rem', fontSize:'0.78rem'}}
            onClick={() => setActiveModal('size-lg')}
            >
              Large modal
            </button>

            <button
            className="btn text-white btn-sm px-3 py-1.5 "
            style={{backgroundColor: '#ff5e29', borderRadius:'0.375rem', fontSize:'0.78rem'}}
            onClick={() => setActiveModal('size-sm')}
            >
              Small modal
            </button>
          </div>
        </div>

        <div className="card border-0 shadow-sm rounded-3 p-4 bg-white mb-4" id="fullscreen-modal">
            <h6 className="fw-bold text-dark mb-1">Fullscreen Modal</h6>
            <p className="text-muted small mb-3" style={{fontSize: '0.78rem'}}>
              Another override is the option to pop up a modal that covers the user viewport, available via modifier classes that are placed on a <code>.modal-dialog</code>.            
            </p>
          

          <div className="d-flex flex-wrap gap-2">
              <button
            className="btn text-white btn-sm px-3 py-1.5 "
            style={{backgroundColor: '#ff5e29', borderRadius:'0.375rem', fontSize:'0.78rem'}}
            onClick={() => setActiveModal('full')}
            >
              Full screen
            </button>

            <button
            className="btn text-white btn-sm px-3 py-1.5 "
            style={{backgroundColor: '#ff5e29', borderRadius:'0.375rem', fontSize:'0.78rem'}}
            onClick={() => setActiveModal('full-sm')}
            >
              Full screen below sm
            </button>

            <button
            className="btn text-white btn-sm px-3 py-1.5 "
            style={{backgroundColor: '#ff5e29', borderRadius:'0.375rem', fontSize:'0.78rem'}}
            onClick={() => setActiveModal('full-md')}
            >
              Full screen below md
            </button>

            <button
            className="btn text-white btn-sm px-3 py-1.5 "
            style={{backgroundColor: '#ff5e29', borderRadius:'0.375rem', fontSize:'0.78rem'}}
            onClick={() => setActiveModal('full-lg')}
            >
              Full screen below lg
            </button>

            <button
            className="btn text-white btn-sm px-3 py-1.5 "
            style={{backgroundColor: '#ff5e29', borderRadius:'0.375rem', fontSize:'0.78rem'}}
            onClick={() => setActiveModal('full-xl')}
            >
              Full screen below xl
            </button>
          </div>

          <div className="d-flex flex-wrap gap-2 mt-2">
              <button
            className="btn text-white btn-sm px-3 py-1.5 "
            style={{backgroundColor: '#ff5e29', borderRadius:'0.375rem', fontSize:'0.78rem'}}
            onClick={() => setActiveModal('full-xxl')}
            >
              Full screen below xxl
            </button>
          </div>
        </div>

        <div className="card border-0 shadow-sm rounded-3 p-4 bg-white mb-4" id="modal-based-alerts">
            <h6 className="fw-bold text-dark mb-1">Modal Based Alerts</h6>
            <p className="text-muted small mb-3" style={{fontSize: '0.78rem'}}>
              Modals have three optional sizes, available via modifier classes to be placed on a <code>.modal-dialog</code>. These sizes kick in at certain breakpoints to avoid horizontal scrollbars on narrower viewports.            
            </p>
          

          <div className="d-flex flex-wrap gap-2">
              <button
            className="btn text-white btn-sm px-3 py-1.5 "
            style={{backgroundColor: '#ff5e29', borderRadius:'0.375rem', fontSize:'0.78rem'}}
            onClick={() => setActiveModal('alert-primary')}
            >
              Primary Alert
            </button>

            <button
            className="btn text-white btn-sm px-3 py-1.5 "
            style={{backgroundColor: '#64748b', borderRadius:'0.375rem', fontSize:'0.78rem'}}
            onClick={() => setActiveModal('alert-secondary')}
            >
              Secondary Alert
            </button>

            <button
            className="btn text-white btn-sm px-3 py-1.5 "
            style={{backgroundColor: '#10b981', borderRadius:'0.375rem', fontSize:'0.78rem'}}
            onClick={() => setActiveModal('alert-success')}
            >
              Success Alert
            </button>

            <button
            className="btn text-white btn-sm px-3 py-1.5 "
            style={{backgroundColor: '#14b8a6', borderRadius:'0.375rem', fontSize:'0.78rem'}}
            onClick={() => setActiveModal('alert-info')}
            >
              Info Alert
            </button>
          </div>
        </div>
      </div>

      <div className="col-xl-3 col-lg-4">
        <div className="card border-0 shadow-sm rounded-3 p-4 bg-white sticky-top" style={{ top:'80px',zIndex: 10}}>
          <div className="d-flex flex-column gap-2" style={{fontSize: '0.8rem'}}>
            <a href="#default-example" className="text-decoration-none text-secondary py-1">Default Example</a>
            <a href="#static-backdrop" className="text-decoration-none text-secondary py-1">Static Backdrop</a>
            <a href="#scrolling-long-content" className="text-decoration-none text-secondary py-1">Scrolling Long Content</a>
            <a href="#toggle-between-modals" className="text-decoration-none text-secondary py-1">Toggle Between Modals</a>
            <a href="#optional-sizes" className="text-decoration-none text-secondary py-1">Optional Sizes</a>
            <a href="#fullscreen-modal" className="text-decoration-none text-secondary py-1">Fullscreen Modal</a>
            <a href="#custom-modal" className="text-decoration-none text-secondary py-1">Custom Modal</a>
            <a href="#modal-based-alerts" className="text-decoration-none text-secondary py-1">Modal Based Alerts</a>
            </div>
          </div>
        </div>
      </div>

      {activeModal && (
        <div
        className="modal fade show d-block"
        tabIndex="-1"
        style={{backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1050}}
        onClick={(e) => {
          if (activeModal !== 'static' && e.target === e.currentTarget){
            closeModal();
          }
        }}
        >
        <div
        className={`modal-dialog ${
              activeModal === 'centered' || activeModal === 'centered-scrollable' ? 'modal-dialog-centered' : ''
            } ${activeModal === 'scrolling-body' || activeModal === 'centered-scrollable' ? 'modal-dialog-scrollable' : ''} ${
              activeModal === 'size-xl' ? 'modal-xl' : activeModal === 'size-lg' ? 'modal-lg' : activeModal === 'size-sm' ? 'modal-sm' : ''
            } ${activeModal.startsWith('full') ? 'modal-fullscreen' : ''} ${
              activeModal === 'top' ? 'mt-3' : activeModal === 'bottom' ? 'mb-3 align-self-end' : ''
            }`}
        >
        <div className="modal-content border-0 shadow rounded-3">
        <div className="modal-header border-bottom-0 pb-0">
        <h5 className="modal-title fw-bold" style={{fontSize:'1rem'}}>

        {activeModal === 'toggle-1'
        ? 'First Modal'
        : activeModal === 'toggle-2'
        ? 'Second Modal'
        : activeModal.startsWith('alert')
        ? `${activeModal.replace('alert-', '').toUpperCase()} Alert Modal`
        : 'Modal Heading'}
        </h5>
        <button type="button" className="btn-close" onClick={closeModal} aria-label="close"></button>
      </div>

      <div className="modal-body py-3">
      {activeModal === 'toggle-1' ? (
        <div>
        <p className="text-muted small mb-3">Show a second modal and hide this one with the button below</p>
        <button
        className="btn text-white btn-sm px-3 py-1.5"
        style={{ backgroundColor: '#ff5e29', fontSize: '0.78rem' }}
        onClick={() => setActiveModal('toggle-2')}
        >
        Open second modal
        </button>
        </div>
      ) : activeModal === 'toggle-2' ? (
        <div>
        <p className="text-muted small mb-3">Hide this modal and show the first modal with the button below.</p>
        <button
          className="btn text-white btn-sm px-3 py-1.5"
          style={{ backgroundColor: '#ff5e29', fontSize: '0.78rem' }}
          onClick={() => setActiveModal('toggle-1')}
          >
            Back to first
        </button>
      </div>

      ): activeModal === 'scrolling-long' || activeModal === 'scrolling-body' ? (
        <div>
         <p className="text-muted small">Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
         <p className="text-muted small">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
         <p className="text-muted small">Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
         <p className="text-muted small">Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
        </div>
      ) : (
        <p className="text-muted small mb-0">Woohoo, you're reading this text in a modal!</p>
      )}
      </div>
      <div className="modal-footer border-top-0 pt-0">
        <button type="button" className="btn btn-secondary btn-sm px-3 py-1.5" style={{ fontSize: '0.78rem' }} onClick={closeModal}>
          Close
        </button>
          <button type="button" className="btn text-white btn-sm px-3 py-1.5" style={{ backgroundColor: '#ff5e29', fontSize: '0.78rem' }} onClick={closeModal}>
            Save changes
          </button>
      </div>
    </div>
  </div>
</div>
      )}
      </div>
  );

}
export default Modal;