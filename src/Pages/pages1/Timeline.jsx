import React from 'react'

function Timeline() {
  return (
    <div className='container-fluid p-4'>
      <div className='position-relative my-5 py-2'>
        <div className='position-absolute top-0 bottom-0 start-50 translate-middle-x'
         style={{ width:'2px',backgroundColor:'#e2e8f0',zIndex:0}}
        ></div>

        <div className='text-center position-relative mb-4' style={{zIndex:1}}>
          <span className='fw-bold text-uppercase px-2 py-1 bg-white text-secondary small' style={{ fontSize:'0.75rem',letterSpacing:'1px'}}>
            TODAY 
          </span>
        </div>

        <div className='row g-0 align-items-center mb-4 position-relative' style={{zIndex:1}}>
          <div className='col-6 pe-4 text-end'>
            <div className='card border-0 shadow-sm p-3 rounded-3 d-inline-block text-start'style={{maxWidth:'440px',backgroundColor:'#ffffff'}}>

              <h6 className='fw-bold text-dark mb-1' style={{ fontSize:'0.875rem'}}>
                Completed UX design project for our client{' '}
                <span className='badge ms-1' style={{backgroundColor:'#475569',fontSize:'0.65rem',fontWeight:'500'}}>
                  important
                </span>
              </h6>

              <p className='text-muted mb-0'style={{ fontSize:'0.78rem',lineHeight:'1.5'}}>
                Dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde?
              </p>
            </div>
          </div>
          <div className='position-absolute start-50 translate-middle-x rounded-circle' style={{ width:'12px',height:'12px',backgroundColor:'#ff5e29',border:'2px solid #ffffff'}}></div>
          <div className='col-6'></div>
        </div>

        <div className='row g-0 align-items-center mb-4 position-relative' style={{zIndex:1}}>
          <div className='col-6'></div>
          <div className='position-absolute start-50 translate-middle-x rounded-circle' style={{ width:'12px',height:'12px',backgroundColor:'#ff5e29',border:'2px solid #ffffff'}}></div>
          <div className='col-6 ps-4'>
            <div className='card border-0 shadow-sm p-3 rounded-3 d-inline-block text-start' style={{maxWidth:'440px',backgroundColor:'#ffffff'}}>
              <h6 className='fw-bold text-dark mb-1' style={{ fontSize:'0.85rem'}}>
                Yes! We are celebrating our first admin release.
              </h6>
              <p className='text-muted mb-0' style={{ fontSize:'0.78rem',lineHeight:'1.5'}}>
                Consectetur adipisicing elit. Iusto, optio, dolorum <strong>John deon</strong> provident.
              </p>
            </div>
          </div>
        </div>

        <div className='row g-0 align-items-center mb-4 position-relative' style={{zIndex:1}}>
          <div className='col-6 pe-4 text-end'>
            <div className='card border-0 shadow-sm p-3 rounded-3 d-inline-block text-start' style={{ maxWidth:'440px',backgroundColor:'#ffffff'}}>
              <h6 className='fw-bold text-dark mb-1' style={{ fontSize:'0.875rem'}}>
                We released new version of our theme Larkon.
              </h6>
              <p className='text-muted mb-0' style={{ fontSize:'0.78rem',lineHeight:'1.5'}}>
                3 new photo Uploaded on facebook fan page
              </p>
            </div>
          </div>
          <div className='position-absolute start-50 translate-middle-x rounded-circle' style={{ width:'12px',height:'12px',backgroundColor:'#ff5e29',border:'2px solid #ffffff'}}></div>
          <div className='col-6'></div>
        </div>

        <div className='row g-0 align-items-center mb-4 position-relative' style={{zIndex:1}}>
          <div className='col-6'></div>
          <div className='position-absolute start-50 translate-middle-x rounded-circle' style={{width:'12px',height:'12px',backgroundColor:'#ff5e29',border:'2px solid #ffffff'}}></div>
          <div className='col-6 ps-4'>
            <div className='card border-0 shadow-sm p-3 rounded-3 d-inline-block text-start' style={{ maxWidth:'440px',backgroundColor:'#ffffff'}}>
              <h6 className='fw-bold text-dark mb-1'style={{ fontSize:'0.875rem'}}>
                We have archieved 25k sales in our themes
              </h6>
              <p className='text-muted mb-0' style={{fontSize:'0.78rem',lineHeight:'1.5'}}>
                Dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde?
              </p>
            </div>
          </div>
        </div>

        <div className='row g-0 align-items-center mb-4 position-relative' style={{zIndex:1}}>
          <div className='col-6 pe-4 text-end'>
            <div className='card border-0 shadow-sm p-3 rounded-3 d-inline-block text-start' style={{maxWidth:'440px',backgroundColor:'#ffffff'}}>
              <h6 className='fw-bold text-dark mb-1' style={{fontSize:'0.875rem'}}>
                Yes! We are celebrating our first admin release.
              </h6>
              <p className='text-muted mb-0' style={{ fontSize:'0.78rem',lineHeight:'1.5'}}>
                Outdoor visit at California State Route 85 with John Boltana &amp; Harry Piterson.
              </p>
            </div>
          </div>

          <div className='position-absolute start-50 translate-middle-x rounded-circle' style={{width:'12px',height:'12px',backgroundColor:'#ff5e29',border:'2px solid #ffffff'}}></div>
          <div className='col-6'></div>
        </div>
      </div>

    <div className='mt-5 pt-3'>
      <h6 className='fw-bold text-dark mb-3'style={{ fontSize:'0.9rem'}}>
        Left Timeline 
      </h6>

      <div className='position-relative ms-2 ps-4' style={{borderLeft:'2px solid #e2e8f0'}}>
        <div className='mb-4'>
          <h6 className='fw-bold text-dark mb-3' style={{ fontsize:'0.825rem'}}>
            Today 
          </h6>

          <div className='position-relative mb-3'>
            <div 
             className='position-absolute rounded-circle'
             style={{
               width:'12px',
               height:'12px',
               backgroundColor:'#ff5e29',
               left:'-31px',
               top:'14px',
               border:'2px solid #ffffff',
             }}
            ></div>
            <div className='card border-0 shadow-sm p-3 rounded-3' style={{backgroundColor:'#ffffff',maxWidth:'600px'}}>
              <h6 className='fw-bold text-dark mb-1' style={{fontsize:'0.875rem'}}>
                Completed UX design project for our client{' '}
                <span className="badge ms-1" style={{ backgroundColor: '#475569', fontSize: '0.65rem', fontWeight: '500' }}>
                  Important
                </span>
              </h6>
              <p className='text-muted mb-0' style={{fontsize:'0.78rem',lineHeight:'1.5'}}>
                Dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde?
              </p>
            </div>
          </div>

          <div className="position-relative mb-3">
            <div
              className="position-absolute rounded-circle"
              style={{
                width: '12px',
                height: '12px',
                backgroundColor: '#ff5e29',
                left: '-31px',
                top: '14px',
                border: '2px solid #ffffff',
              }}
            ></div>
            <div className='card border-0 shadow-sm p-3 rounded-3' style={{backgroundColor:'#ffffff',width:'600px'}}>
              <h6 className="fw-bold text-dark mb-1" style={{ fontSize: '0.875rem' }}>
                Yes! We are celebrating our first admin release.
              </h6>
              <p className="text-muted mb-0" style={{ fontSize: '0.78rem', lineHeight: '1.5' }}>
                Consectetur adipisicing elit. Iusto, optio, dolorum <strong>John deon</strong> provident.renum aut hic quasi placeat iure tempora laudantium
              </p>
            </div>
          </div>

          <div className="position-relative mb-3">
            <div
              className="position-absolute rounded-circle"
              style={{
                width: '12px',
                height: '12px',
                backgroundColor: '#ff5e29',
                left: '-31px',
                top: '14px',
                border: '2px solid #ffffff',
              }}
            ></div>
            <div className='card border-0 shadow-sm p-3 rounded-3' style={{ backgroundColor:'#ffffff',maxWidth:'600px'}}>
              <h6 className="fw-bold text-dark mb-1" style={{ fontSize: '0.875rem' }}>
                We released new version of our theme Larkon.
              </h6>
              <p className="text-muted mb-0" style={{ fontSize: '0.78rem', lineHeight: '1.5' }}>
                3 new photo Uploaded on facebook fan page
              </p>
            </div>
          </div>
        </div>
        <div className='mb-4'>
          <h6 className='fw-bold text-dark mb-3' style={{fontsize:'0.825rem'}}>
            Yesterday 
          </h6>
          <div className='position-relative mb-3'>
            <div
             className='position-absolute rounded-circle'
             style={{
              width:'12px',
              height:'12px',
              backgroundColor:'#ff5e29',
              left: '-31px',
              top: '14px',
              border: '2px solid #ffffff',
             }}    
            ></div>
            <div className="card border-0 shadow-sm p-3 rounded-3" style={{ backgroundColor: '#ffffff', maxWidth: '600px' }}>
              <h6 className="fw-bold text-dark mb-1" style={{ fontSize: '0.875rem' }}>
                We have archieved 25k sales in our themes
              </h6>
              <p className="text-muted mb-0" style={{ fontSize: '0.78rem', lineHeight: '1.5' }}>
                Dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde?
              </p>
            </div>
          </div>
          
          <div className="position-relative mb-3">
            <div
              className="position-absolute rounded-circle"
              style={{
                width: '12px',
                height: '12px',
                backgroundColor: '#ff5e29',
                left: '-31px',
                top: '14px',
                border: '2px solid #ffffff',
              }}
            ></div>
            <div className="card border-0 shadow-sm p-3 rounded-3" style={{ backgroundColor: '#ffffff', maxWidth: '600px' }}>
              <h6 className="fw-bold text-dark mb-1" style={{ fontSize: '0.875rem' }}>
                Yes! We are celebrating our first admin release.
              </h6>
              <p className="text-muted mb-0" style={{ fontSize: '0.78rem', lineHeight: '1.5' }}>
                Outdoor visit at California State Route 85 with John Boltana &amp; Harry Piterson regarding to setup a new show room.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <h6 className="fw-bold text-dark mb-3" style={{ fontSize: '0.825rem' }}>
            5 days ago
          </h6>

          <div className="position-relative mb-3">
            <div
              className="position-absolute rounded-circle"
              style={{
                width: '12px',
                height: '12px',
                backgroundColor: '#ff5e29',
                left: '-31px',
                top: '14px',
                border: '2px solid #ffffff',
              }}
            ></div>

            <div className="card border-0 shadow-sm p-3 rounded-3" style={{ backgroundColor: '#ffffff', maxWidth: '600px' }}>
              <h6 className="fw-bold text-dark mb-1" style={{ fontSize: '0.875rem' }}>
                Join new team member Alex Smith
              </h6>
              <p className="text-muted mb-0" style={{ fontSize: '0.78rem', lineHeight: '1.5' }}>
                Alex Smith is a Senior Software (Full Stack) engineer with a deep passion for building usable, functional &amp; pretty web applications.
              </p>
            </div>
          </div>

          <div className="position-relative mb-3">
            <div
              className="position-absolute rounded-circle"
              style={{
                width: '12px',
                height: '12px',
                backgroundColor: '#ff5e29',
                left: '-31px',
                top: '14px',
                border: '2px solid #ffffff',
              }}
            ></div>
            <div className="card border-0 shadow-sm p-3 rounded-3" style={{ backgroundColor: '#ffffff', maxWidth: '600px' }}>
              <h6 className="fw-bold text-dark mb-1" style={{ fontSize: '0.875rem' }}>
                First release of Larkon admin dashboard template
              </h6>
              <p className="text-muted mb-0" style={{ fontSize: '0.78rem', lineHeight: '1.5' }}>
                Outdoor visit at California State Route 85 with John Boltana &amp; Harry Piterson regarding to setup a new show room.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Timeline