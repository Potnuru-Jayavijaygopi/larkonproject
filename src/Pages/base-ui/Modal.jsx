import { useState } from "react";

function Modal(){
  const[activeModal, setActiveModal] = useState(null);

  const closeModal = () => setActiveModal(null);
  
  return(
    <div className="container-fluid p-4">
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
              You can also create a scrollable modal that allows scroll the modal body by adding <code>.modal-dialog-scrollable</code> to <code>.modal-dialog</code>.
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

        <div className="card border-0 shadow-sm rounded-3 p-4 bg-white mb-4" id=" toggle-between-modals">
            <h6 className="fw-bold text-dark mb-1">Toggle Between Modals</h6>
            <p className="text-muted small mb-3" style={{fontSize: '0.78rem'}}>
               Toggle between multiple modals with some clever placement of the <code>data-bs-target</code> and <code>data-bs-toggle</code> sttributes. For example,
            </p>

            <button
            className="btn text-white btn-sm px-3 py-1.5 align-self-start"
            style={{backgroundColor: '#ff5e29', borderRadius:'0.375rem', fontSize:'0.78rem', width:'fit-content'}}
            onClick={() => setActiveModal('toggle-1')}
            >
              Open first modal
            </button>
          </div>






         </div>
        </div>
      </div>
  );

}
export default Modal;