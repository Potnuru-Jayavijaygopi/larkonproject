import {useState} from "react";

function Tabs(){
  const[navTab, setNavTab]=useState('profile');
  const[justifiedTab, setJustifiedTab]=useState('profile');
  const[pillTab, setPillTab]=useState('profile');
  const[justifiedPillTab, setJustifiedPillTab]=useState('profile');
  const[vertLeftTab, setVertLeftTab]=useState('profile');
  const[vertRightTab, setVertRightTab]=useState('profile');

  const sampleContent = {
    home: 'Raw denim you probably haven\'t heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor,williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth.',
    profile:'Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. Omnicos directe al desirabilite de un nov lingua franca: On refusa continuar payar custosi traductores.',
    mesages:'Food truck fixie locavore, accusamus mcdswisney marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan tuesday. Keytar synth nesciu nt meggings elit cred craft beer.',
    settings:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
  };

  return(
    <div className="container-fluid p-4">
      <div className="row g-4">
        <div className="col-xl-8 col-lg-8">
          <div className="card border-0 shadow-sm rounded-3 p-3 bg-white mb-4" id="nav-tabs">
            <h6 className="fw-bold text-dark mb-1">Nav Tabs</h6>
            <p className="text-muted small mb-3" style={{fontSize: '0.78rem'}}>
              Use the <code>.nav-tabs</code> class to generate a tabbed interface.
            </p>

            <ul className="nav nav-tabs border-bottom mb-3" style={{fontSize: '0.85rem'}}>
              <li className="nav-item">
                <button 
                className={`nav-link border-0 border-bottom border-2 ${navTab === 'home' ? 'active fw-bold text-dark border-primary' : 'text-secondary'}`}
                  style={{ borderBottomColor: navTab === 'home' ? '#ff5e29' : 'transparent' }}
                  onClick={() => setNavTab('home')}
                >
                  Home
                </button>
              </li>

              <li className="nav-item">
                <button 
               className={`nav-link border-0 border-bottom border-2 fw-bold ${navTab === "profile" ? "active" : "text-secondary"}`}
               style={{color: navTab === "profile" ? "#ff5e29" : "transparent",borderBottomColor: navTab === "profile" ? "#ff5e29" : "transparent",borderBottomWidth: "2px"}}
              onClick={() => setNavTab("profile")}
                >
                  Profile
                </button>
              </li>

              <li className="nav-item">
                <button 
                className={`nav-link border-0 border-bottom border-2 ${navTab === 'messages' ? 'active fw-bold text-dark border-primary' : 'text-secondary'}`}
                  style={{ borderBottomColor: navTab === 'messages' ? '#ff5e29' : 'transparent' }}
                  onClick={() => setNavTab('messages')}
                >
                  Messages
                </button>
              </li>
            </ul>

            <div className="text-muted small" style={{fontSize: '0.78rem', lineHeight: '1.6'}}>
              {sampleContent[navTab]}
            </div>
          </div>

            <div className="card border-0 shadow-sm rounded-3 p-3 bg-white mb-4" id="tabs-justified">
            <h6 className="fw-bold text-dark mb-1">Tabs Justified</h6>
            <p className="text-muted small mb-3" style={{fontSize: '0.78rem'}}>
             Using class <code>.nav-justified</code>, you can force your tab menu items to use the full available width.
            </p>

            <ul className="nav nav-tabs nav-justified border-bottom mb-3" style={{fontSize: '0.85rem'}}>
              <li className="nav-item">
                <button 
                className={`nav-link border-0 border-bottom border-2 ${justifiedTab === 'home' ? 'active fw-bold text-dark border-primary' : 'text-secondary'}`}
                  style={{ borderBottomColor: justifiedTab === 'home' ? '#ff5e29' : 'transparent' }}
                  onClick={() => setJustifiedTab('home')}
                >
                  Home
                </button>
              </li>

              <li className="nav-item">
                <button 
                className={`nav-link border-0 border-bottom border-2 w-100 ${justifiedTab === 'profile' ? 'active fw-bold text-dark border-primary' : 'text-secondary'}`}
                  style={{ color: justifiedTab === 'profile' ?'#ff5e29' : undefined, borderBottomColor: justifiedTab === 'profile' ? '#ff5e29' : 'transparent' }}
                  onClick={() => setJustifiedTab('profile')}
                >
                  Profile
                </button>
              </li>

              <li className="nav-item">
                <button 
                className={`nav-link border-0 border-bottom border-2 ${justifiedTab === 'messages' ? 'active fw-bold text-dark border-primary' : 'text-secondary'}`}
                  style={{ borderBottomColor: justifiedTab === 'messages' ? '#ff5e29' : 'transparent' }}
                  onClick={() => setJustifiedTab('messages')}
                >
                  Messages
                </button>
              </li>
            </ul>

            <div className="text-muted small" style={{fontSize: '0.78rem', lineHeight: '1.6'}}>
              {sampleContent[justifiedTab]}
            </div>
          </div>
           
            <div className="card border-0 shadow-sm rounded-3 p-3 bg-white mb-4" id="nav-pills">
            <h6 className="fw-bold text-dark mb-1">Nav Pills</h6>
            <p className="text-muted small mb-3" style={{fontSize: '0.78rem'}}>
              Use the <code>.nav-pills</code>  class to genrate a pill interface.
              </p>

            <ul className="nav nav-pills gap-2 mb-3" style={{fontSize: '0.85rem'}}>
              <li className="nav-item">
                <button 
                className={`nav-link rounded-3 px-3 py-1 ${pillTab === 'home' ? 'active fw-bold text-dark border-primary' : 'text-secondary'}`}
                  style={{ backgroundColor: pillTab === 'home' ? '#ff5e29' : 'transparent' }}
                  onclick={() => setPillTab('home')}
                >
                  Home
                </button>
              </li>

              <li className="nav-item">
                <button 
                className={`nav-link rounded-3 px-3 py-1 ${pillTab === 'profile' ? 'active fw-bold text-dark border-primary' : 'text-secondary'}`}
                  style={{ backgroundColor: pillTab === 'profile' ? '#ff5e29' : 'transparent' }}
                  onclick={() => setPillTab('profile')}
                >
                  Profile
                </button>
              </li>

              <li className="nav-item">
                <button 
                className={`nav-link rounded-3 px-3 py-1 ${pillTab === 'messages' ? 'active fw-bold text-dark border-primary' : 'text-secondary'}`}
                  style={{ backgroundColor: pillTab === 'messages' ? '#ff5e29' : 'transparent' }}
                  onclick={() => setPillTab('messages')}
                >
                  Messages
                </button>
              </li>
            </ul>

            <div className="text-muted small" style={{fontSize: '0.78rem', lineHeight: '1.6'}}>
              {sampleContent[pillTab]}
            </div>
          </div>

          <div className="card border-0 shadow-sm rounded-3 p-3 bg-white mb-4" id="pills-justified">
            <h6 className="fw-bold text-dark mb-1">Pills Justified</h6>
            <p className="text-muted small mb-3" style={{fontSize: '0.78rem'}}>
              Using class <code>.nav-justified</code>, you can force your pill menu items to use the full available width.
            
              </p>

            <ul className="nav nav-pills nav-justified gap-2 mb-3" style={{fontSize: '0.85rem'}}>
              <li className="nav-item">
                <button 
                className={`nav-link rounded-3 w-100 py-1 ${justifiedPillTab === 'home' ? 'text-white' : 'text-secondary'}`}
                  style={{ backgroundColor:justifiedPillTab === 'home' ? '#ff5e29' : 'transparent' }}
                  onclick={() => setJustifiedPillTab('home')}
                >
                  Home
                </button>
              </li>

              <li className="nav-item">
                <button 
                className={`nav-link rounded-3 w-100 py-1 ${justifiedPillTab === 'profile' ? 'active fw-bold text-dark border-primary' : 'text-secondary'}`}
                  style={{ backgroundColor: justifiedPillTab === 'profile' ? '#ff5e29' : 'transparent' }}
                  onclick={() => setJustifiedPillTab('profile')}
                >
                  Profile
                </button>
              </li>

              <li className="nav-item">
                <button 
                className={`nav-link rounded-3 px-3 py-1 ${pillTab === 'messages' ? ' text-white ' : 'text-secondary'}`}
                  style={{ backgroundColor: justifiedPillTab === 'messages' ? '#ff5e29' : 'transparent' }}
                  onclick={() => justifiedPillTab('messages')}
                >
                  Messages
                </button>
              </li>
            </ul>

            <div className="text-muted small" style={{fontSize: '0.78rem', lineHeight: '1.6'}}>
              {sampleContent[justifiedPillTab]}
            </div>
          </div>
          <div className="card border-0 shadow-sm rounded-3 p-3 bg-white mb-4" id="tabs-vertical-left">
            <h6 className="fw-bold text-dark mb-1">Tabs Vertical Left</h6>
            <p className="text-muted small mb-3" style={{fontSize: '0.78rem'}}>
              You can stack your navigation by changing the flex item direction with the <code>.flex-column</code>.
            
              </p>
              <div className="row g-4">
                <div className="col-md-4">
                  <div className="nav flex-column nav-pills" style={{fontSize: '0.825rem'}}>
                    <button 
                      className={`nav-link rounded-3 px-3 py-1 ${vertLeftTab === 'home' ? ' text-white' : 'text-secondary'}`}
                      style={{ backgroundColor: vertLeftTab === 'home' ? '#ff5e29' : 'transparent' }}
                       onclick={() => setVertLeftTab('home')}
                    >
                      Home  
                    </button>
             
              
                <button 
                  className={`nav-link rounded-3 px-3 py-1 ${vertLeftTab === 'profile' ? 'text-white ' : 'text-secondary'}`}
                  style={{ backgroundColor:vertLeftTab === 'profile' ? '#ff5e29' : 'transparent' }}
                  onclick={() => setVertLeftTab('profile')}
                >
                  Profile
                </button>
                <button 
                  className={`nav-link rounded-3 px-3 py-1 ${vertLeftTab === 'settings' ? 'text-white' : 'text-secondary'}`}
                  style={{ backgroundColor:vertLeftTab === 'settings' ? '#ff5e29' : 'transparent' }}
                  onclick={() => setVertLeftTab('settings')}
                >
                  Settings
                </button>
                    
              </div>
            </div>

            <div className="col-md-8">
              <div className="text-muted small" style={{fontSize: '0.78rem', lineHeight: '1.6'}}>
                {sampleContent[vertLeftTab]}
              </div>
            </div>
          </div>
        </div>

        <div className="card border-0 shadow-sm rounded-3 p-3 bg-white mb-4" id="tabs-vertical-right">
            <h6 className="fw-bold text-dark mb-1">Vertical Right</h6>
            <p className="text-muted small mb-3" style={{fontSize: '0.78rem'}}>
              You can stack your navigation by changing the flex item direction with the <code>.flex-column</code>utility.
            
            </p>
            <div className="row g-4">
              <div className="col-md-8">
              <div className="text-muted small" style={{fontSize: '0.78rem', lineHeight: '1.6'}}>
                {sampleContent[vertRightTab]}
              </div>
            </div>

            <div className="col-md-4">
                  <div className="nav flex-column nav-pills" style={{fontSize: '0.825rem'}}>
                    <button 
                      className={`nav-link rounded-3 px-3 py-1 ${vertRightTab === 'home' ? ' text-white' : 'text-secondary'}`}
                      style={{ backgroundColor: vertRightTab === 'home' ? '#ff5e29' : 'transparent' }}
                       onclick={() => setVertRightTab('home')}
                    >
                      Home  
                    </button>
             
              
                <button 
                  className={`nav-link rounded-3 px-3 py-1 ${vertRightTab === 'profile' ? 'text-white ' : 'text-secondary'}`}
                  style={{ backgroundColor:vertRightTab === 'profile' ? '#ff5e29' : 'transparent' }}
                  onclick={() => setVertRightTab('profile')}
                >
                  Profile
                </button>
                <button 
                  className={`nav-link rounded-3 px-3 py-1 ${vertRightTab === 'settings' ? 'text-white' : 'text-secondary'}`}
                  style={{ backgroundColor:vertRightTab === 'settings' ? '#ff5e29' : 'transparent' }}
                  onclick={() => setVertRightTab('settings')}
                >
                  Settings
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-xl-4 col-lg-4">
        <div className="card border-0 shadow=sm rounded-3 p-3 bg-white sticky-top" style={{top:'80px', zIndex: 10}}>
          <div className="d-flex flex-column gap-2" style={{fontSize: '0.8rem'}}>
            <a href="#nav-tabs" className="text-decoration-none text-secondary py-1">Nav Tabs</a>
            <a href="#tabs-justified" className="text-decoration-none text-secondary py-1">Tabs Justified</a>
            <a href="#nav-pills" className="text-decoration-none text-secondary py-1">Nav Pills</a>
            <a href="#nav-pills" className="text-decoration-none text-secondary py-1">Nav Pills</a>
            <a href="#pills-justified" className="text-decoration-none text-secondary py-1">Pills Justified</a>
            <a href="#tabs-vertical-left" className="text-decoration-none text-secondary py-1">Tabs Vertical Left</a>
            <a href="#tabs-vertical-right" className="text-decoration-none text-secondary py-1">Tabs Vertical Right</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
  }
  export default Tabs; 
