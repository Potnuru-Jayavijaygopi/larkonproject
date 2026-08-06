import React from 'react';

function Avatar() {
  const avatarImg = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150";

  return (
    <div className="container-fluid p-4">
      <div className="row g-4">
        <div className="col-xl-9 col-lg-8">
          <div className="card border-0 shadow-sm rounded-3 p-4 bg-white mb-4" id="basic-example">
            <h6 className="fw-bold text-dark mb-1">Basic Example</h6>
            <p className="text-muted small mb-4" style={{ fontSize: '0.78rem' }}>
              Create and group avatars of different sizes and shapes with the css classes. Using Bootstrap's naming convention, you can control size of avatar including standard avatar, or scale it up to different sizes.
            </p>

            <div className="d-flex flex-wrap align-items-end gap-4">
              <div className="d-flex flex-column align-items-center gap-2">
                <img src={avatarImg} alt="avatar-xs" className="rounded-3 object-fit-cover" style={{ width: '24px', height: '24px' }} />
                <code className="px-1 rounded" style={{ fontSize: '0.7rem', color: '#db2777', backgroundColor: '#fce7f3' }}>.avatar-xs</code>
              </div>

              <div className="d-flex flex-column align-items-center gap-2">
                <img src={avatarImg} alt="avatar-sm" className="rounded-3 object-fit-cover" style={{ width: '32px', height: '32px' }} />
                <code className="px-1 rounded" style={{ fontSize: '0.7rem', color: '#db2777', backgroundColor: '#fce7f3' }}>.avatar-sm</code>
              </div>

              <div className="d-flex flex-column align-items-center gap-2">
                <img src={avatarImg} alt="avatar-md" className="rounded-3 object-fit-cover" style={{ width: '48px', height: '48px' }} />
                <code className="px-1 rounded" style={{ fontSize: '0.7rem', color: '#db2777', backgroundColor: '#fce7f3' }}>.avatar-md</code>
              </div>

              <div className="d-flex flex-column align-items-center gap-2">
                <img src={avatarImg} alt="avatar-lg" className="rounded-3 object-fit-cover" style={{ width: '64px', height: '64px' }} />
                <code className="px-1 rounded" style={{ fontSize: '0.7rem', color: '#db2777', backgroundColor: '#fce7f3' }}>.avatar-lg</code>
              </div>

              <div className="d-flex flex-column align-items-center gap-2">
                <img src={avatarImg} alt="avatar-xl" className="rounded-3 object-fit-cover" style={{ width: '80px', height: '80px' }} />
                <code className="px-1 rounded" style={{ fontSize: '0.7rem', color: '#db2777', backgroundColor: '#fce7f3' }}>.avatar-xl</code>
              </div>
            </div>
          </div>

          <div className="card border-0 shadow-sm rounded-3 p-4 bg-white mb-4" id="rounded-circle">
            <h6 className="fw-bold text-dark mb-1">Rounded Circle</h6>
            <p className="text-muted small mb-4" style={{ fontSize: '0.78rem' }}>
              Using an additional class <code className="px-1 rounded" style={{ color: '#db2777', backgroundColor: '#fce7f3' }}>.rounded-circle</code> in <code>&lt;img&gt;</code> element creates the rounded avatar.
            </p>

            <div className="d-flex flex-wrap align-items-end gap-4">
              <div className="d-flex flex-column align-items-center gap-2">
                <img src={avatarImg} alt="avatar-md" className="rounded-circle object-fit-cover" style={{ width: '48px', height: '48px' }} />
                <code className="px-1 rounded" style={{ fontSize: '0.7rem', color: '#db2777', backgroundColor: '#fce7f3' }}>.avatar-md .rounded-circle</code>
              </div>

              <div className="d-flex flex-column align-items-center gap-2">
                <img src={avatarImg} alt="avatar-lg" className="rounded-circle object-fit-cover" style={{ width: '64px', height: '64px' }} />
                <code className="px-1 rounded" style={{ fontSize: '0.7rem', color: '#db2777', backgroundColor: '#fce7f3' }}>.avatar-lg .rounded-circle</code>
              </div>

              <div className="d-flex flex-column align-items-center gap-2">
                <img src={avatarImg} alt="avatar-xl" className="rounded-circle object-fit-cover" style={{ width: '80px', height: '80px' }} />
                <code className="px-1 rounded" style={{ fontSize: '0.7rem', color: '#db2777', backgroundColor: '#fce7f3' }}>.avatar-xl .rounded-circle</code>
              </div>
            </div>
          </div>

          <div className="card border-0 shadow-sm rounded-3 p-4 bg-white mb-4" id="images-shapes">
            <h6 className="fw-bold text-dark mb-1">Images Shapes</h6>
            <p className="text-muted small mb-4" style={{ fontSize: '0.78rem' }}>
              Avatars with different sizes and shapes.
            </p>

            <div className="d-flex flex-column gap-4">
              <div className="d-flex flex-wrap align-items-end gap-4">
                <div className="d-flex flex-column align-items-center gap-2">
                  <img src={avatarImg} alt="rounded" className="rounded-3 object-fit-cover" style={{ width: '120px', height: '80px' }} />
                  <code className="px-1 rounded" style={{ fontSize: '0.7rem', color: '#db2777', backgroundColor: '#fce7f3' }}>.rounded</code>
                </div>

                <div className="d-flex flex-column align-items-center gap-2">
                  <img src={avatarImg} alt="rounded" className="rounded-3 object-fit-cover" style={{ width: '70px', height: '70px' }} />
                  <code className="px-1 rounded" style={{ fontSize: '0.7rem', color: '#db2777', backgroundColor: '#fce7f3' }}>.rounded</code>
                </div>

                <div className="d-flex flex-column align-items-center gap-2">
                  <img src={avatarImg} alt="rounded-circle" className="rounded-circle object-fit-cover" style={{ width: '70px', height: '70px' }} />
                  <code className="px-1 rounded" style={{ fontSize: '0.7rem', color: '#db2777', backgroundColor: '#fce7f3' }}>.rounded-circle</code>
                </div>

                <div className="d-flex flex-column align-items-center gap-2">
                  <img src={avatarImg} alt="img-thumbnail" className="img-thumbnail object-fit-cover" style={{ width: '120px', height: '80px' }} />
                  <code className="px-1 rounded" style={{ fontSize: '0.7rem', color: '#db2777', backgroundColor: '#fce7f3' }}>.img-thumbnail</code>
                </div>
              </div>

              <div className="d-flex flex-wrap align-items-end gap-4">
                <div className="d-flex flex-column align-items-center gap-2">
                  <img src={avatarImg} alt="rounded-circle img-thumbnail" className="rounded-circle img-thumbnail object-fit-cover" style={{ width: '80px', height: '80px' }} />
                  <code className="px-1 rounded" style={{ fontSize: '0.7rem', color: '#db2777', backgroundColor: '#fce7f3' }}>.rounded-circle .img-thumbnail</code>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-lg-4">
          <div className="card border-0 shadow-sm rounded-3 p-3 bg-white sticky-top" style={{ top: '80px', zIndex: 10 }}>
            <div className="d-flex flex-column gap-2" style={{ fontSize: '0.8rem' }}>
              <a href="#basic-example" className="text-decoration-none text-secondary py-1">Basic Example</a>
              <a href="#rounded-circle" className="text-decoration-none text-secondary py-1">Rounded Circle</a>
              <a href="#images-shapes" className="text-decoration-none text-secondary py-1">Images Shapes</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Avatar;
