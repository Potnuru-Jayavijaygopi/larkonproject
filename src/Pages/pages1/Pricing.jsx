import React from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';

function Pricing() {
  return (
    <div className='container-fluid p-4'>
      <div className='text-center my-4'>
        <h3 className='fw-bold text-dark mb-2'>Simple Pricing Plans</h3>
        <p className='text-muted mx-auto' style={{maxWidth:'560px', fontSize:'0.875rem'}}>
           Get the power and control you need to manage your organization's technical documentation
        </p>
      </div>

      <div className='row g-4 justify-content-center mt-2'>
        <div className='col-xl-3 col-lg-6 col-md-6'>
          <div className='card h-100 border-0 shadow-sm rounded-3 p-4 bg-white position-relative'>
            <span className='text-uppercase text-muted fw-bold mb-3 d-block' style={{fontSize:'0.75rem',letterSpacing:'1px'}}>
              FREE PACK
            </span>

            <div className='d-flex align-items-baseline mb-4'>
              <h1 className='fw-bold text-dark mb-0 me-1' style={{fontSize:'2.25rem'}}>$0</h1>
              <span className='text-muted small'>/ Month</span>
            </div>

            <ul className='list-unstyled mb-4 flex-grow-1' style={{fontSize:'0.825rem'}}>
              <li className='d-flex align-items-center mb-3 text-secondary'>
                <BsCheckCircleFill className='me-2 text-danger opacity-75' style={{fontSize:'0.85rem'}}/>
                5 GB Storage 
              </li>

              <li className='d-flex align-items-center mb-3 text-secondary'>
                <BsCheckCircleFill className='me-2 text-danger opacity-75' style={{fontSize:'0.85rem'}}/>
                100 GB Storage 
              </li>

              <li className='d-flex align-items-center mb-3 text-secondary'>
                <BsCheckCircleFill className='me-2 text-danger opacity-75' style={{fontSize:'0.85rem'}}/>
                 1 Domain 
              </li>

              <li className='d-flex align-items-center mb-3 text-secondary'>
                <BsCheckCircleFill className='me-2 text-danger opacity-75' style={{fontSize:'0.85rem'}}/>
                 No Support 
              </li>

              <li className='d-flex align-items-center mb-3 text-secondary'>
                <BsCheckCircleFill className='me-2 text-danger opacity-75' style={{fontSize:'0.85rem'}}/>
                 24x7 Support 
              </li>

              <li className='d-flex align-items-center mb-3 text-secondary'>
                <BsCheckCircleFill className='me-2 text-danger opacity-75' style={{fontSize:'0.85rem'}}/>
                 1 User
              </li>
            </ul>

            <button className='btn text-white w-100 py-2 rounded-3 border-0 fw-medium mt-auto'
             style={{backgroundColor:'#ff5e29',fontSize:'0.85rem'}}
            >
              Get Started
            </button>
          </div>
        </div>

        <div className='col-xl-3 col-lg-6 col-md-6'>
          <div className='card h-100 border-0 shadow-sm rounded-3 p-4 bg-white position-relative'>
            <span
              className="badge position-absolute top-0 end-0 m-3 text-white px-2 py-1 text-uppercase"
              style={{ backgroundColor: '#ff5e29', fontSize: '0.65rem', fontWeight: '600' }}
            >
              Popular
            </span>

            <span className="text-uppercase text-muted fw-bold mb-3 d-block" style={{ fontSize: '0.75rem', letterSpacing: '1px' }}>
              PROFESSIONAL PACK
            </span>

            <div className='d-flex align-items-baseline mb-4'>
              <h1 className='fw-bold text-dark mb-0 me-1' style={{fontSize:'2.25rem'}}>$19</h1>
              <span className='text-muted small'>/ Month</span>
            </div>

            <ul className="list-unstyled mb-4 flex-grow-1" style={{ fontSize: '0.825rem' }}>
              <li className="d-flex align-items-center mb-3 text-secondary">
                <BsCheckCircleFill className="me-2 text-danger opacity-75" style={{ fontSize: '0.85rem' }} />
                50 GB Storage
              </li>
              <li className="d-flex align-items-center mb-3 text-secondary">
                <BsCheckCircleFill className="me-2 text-danger opacity-75" style={{ fontSize: '0.85rem' }} />
                900 GB Bandwidth
              </li>
              <li className="d-flex align-items-center mb-3 text-secondary">
                <BsCheckCircleFill className="me-2 text-danger opacity-75" style={{ fontSize: '0.85rem' }} />
                2 Domains
              </li>
              <li className="d-flex align-items-center mb-3 text-secondary">
                <BsCheckCircleFill className="me-2 text-danger opacity-75" style={{ fontSize: '0.85rem' }} />
                Email Support
              </li>
              <li className="d-flex align-items-center mb-3 text-secondary">
                <BsCheckCircleFill className="me-2 text-danger opacity-75" style={{ fontSize: '0.85rem' }} />
                24x7 Support
              </li>
              <li className="d-flex align-items-center text-secondary">
                <BsCheckCircleFill className="me-2 text-danger opacity-75" style={{ fontSize: '0.85rem' }} />
                5 Users
              </li>
            </ul>
            
            <button
              className="btn text-white w-100 py-2 rounded-3 border-0 fw-medium mt-auto"
              style={{ backgroundColor: '#ff9066', fontSize: '0.85rem' }}
            >
              Current Plan
            </button>

          </div>
        </div>

        <div className="col-xl-3 col-lg-6 col-md-6">
          <div className="card h-100 border-0 shadow-sm rounded-3 p-4 bg-white position-relative">
            <span className="text-uppercase text-muted fw-bold mb-3 d-block" style={{ fontSize: '0.75rem', letterSpacing: '1px' }}>
              BUSINESS PACK
            </span>
            <div className="d-flex align-items-baseline mb-4">
              <h1 className="fw-bold text-dark mb-0 me-1" style={{ fontSize: '2.25rem' }}>$29</h1>
              <span className="text-muted small">/ Month</span>
            </div>

            <ul className="list-unstyled mb-4 flex-grow-1" style={{ fontSize: '0.825rem' }}>
              <li className="d-flex align-items-center mb-3 text-secondary">
                <BsCheckCircleFill className="me-2 text-danger opacity-75" style={{ fontSize: '0.85rem' }} />
                500 GB Storage
              </li>
              <li className="d-flex align-items-center mb-3 text-secondary">
                <BsCheckCircleFill className="me-2 text-danger opacity-75" style={{ fontSize: '0.85rem' }} />
                2.5 TB Bandwidth
              </li>
              <li className="d-flex align-items-center mb-3 text-secondary">
                <BsCheckCircleFill className="me-2 text-danger opacity-75" style={{ fontSize: '0.85rem' }} />
                5 Domains
              </li>
              <li className="d-flex align-items-center mb-3 text-secondary">
                <BsCheckCircleFill className="me-2 text-danger opacity-75" style={{ fontSize: '0.85rem' }} />
                Email Support
              </li>
              <li className="d-flex align-items-center mb-3 text-secondary">
                <BsCheckCircleFill className="me-2 text-danger opacity-75" style={{ fontSize: '0.85rem' }} />
                24x7 Support
              </li>
              <li className="d-flex align-items-center text-secondary">
                <BsCheckCircleFill className="me-2 text-danger opacity-75" style={{ fontSize: '0.85rem' }} />
                10 Users
              </li>
            </ul>

            <button
              className="btn text-white w-100 py-2 rounded-3 border-0 fw-medium mt-auto"
              style={{ backgroundColor: '#ff5e29', fontSize: '0.85rem' }}
            >
              Get Started
            </button>
          </div>
        </div>

        <div className="col-xl-3 col-lg-6 col-md-6">
          <div className="card h-100 border-0 shadow-sm rounded-3 p-4 bg-white position-relative">
            <span className="text-uppercase text-muted fw-bold mb-3 d-block" style={{ fontSize: '0.75rem', letterSpacing: '1px' }}>
              ENTERPRISE PACK
            </span>
            <div className="d-flex align-items-baseline mb-4">
              <h1 className="fw-bold text-dark mb-0 me-1" style={{ fontSize: '2.25rem' }}>$49</h1>
              <span className="text-muted small">/ Month</span>
            </div>

            <ul className="list-unstyled mb-4 flex-grow-1" style={{ fontSize: '0.825rem' }}>
              <li className="d-flex align-items-center mb-3 text-secondary">
                <BsCheckCircleFill className="me-2 text-danger opacity-75" style={{ fontSize: '0.85rem' }} />
                2 TB Storage
              </li>
              <li className="d-flex align-items-center mb-3 text-secondary">
                <BsCheckCircleFill className="me-2 text-danger opacity-75" style={{ fontSize: '0.85rem' }} />
                Unlimited Bandwidth
              </li>
              <li className="d-flex align-items-center mb-3 text-secondary">
                <BsCheckCircleFill className="me-2 text-danger opacity-75" style={{ fontSize: '0.85rem' }} />
                50 Domains
              </li>
              <li className="d-flex align-items-center mb-3 text-secondary">
                <BsCheckCircleFill className="me-2 text-danger opacity-75" style={{ fontSize: '0.85rem' }} />
                Email Support
              </li>
              <li className="d-flex align-items-center mb-3 text-secondary">
                <BsCheckCircleFill className="me-2 text-danger opacity-75" style={{ fontSize: '0.85rem' }} />
                24x7 Support
              </li>
              <li className="d-flex align-items-center text-secondary">
                <BsCheckCircleFill className="me-2 text-danger opacity-75" style={{ fontSize: '0.85rem' }} />
                Unlimited Users
              </li>
            </ul>

            <button
              className="btn text-white w-100 py-2 rounded-3 border-0 fw-medium mt-auto"
              style={{ backgroundColor: '#ff5e29', fontSize: '0.85rem' }}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing ;