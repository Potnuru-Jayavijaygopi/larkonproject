import { useState } from "react";
import Sidebar from "../../components/Sidebar";
import{
  BsGear,
  BsShop,
  BsGlobe,
  BsTags,
  BsTicketPerforated,
  BsPercent,
  BsPeople,
  BsStar,
} from 'react-icons/bs';

function Settings({ onNavigate}) {
  const[metaTitle, setMetaTitle] = useState('');
  const[metaTagKeyword, setMetaTagKeyword] = useState('');
  const[storeTheme, setStoreTheme] = useState('Default');
  const[layout, setLayout] = useState('Default');
  const[description, setDescription] = useState('');

  const[storeName,setStoreName] = useState('');
  const[ownerFullName,setOwnerFullName] = useState('');
  const[ownerPhone,setOwnerPhone] = useState('');
  const[ownerEmail,setOwnerEmail] = useState('');
  const[fullAddress,setFullAddress] = useState('');
  const[zipCode,setZipCode] = useState('');
  const[city,setCity] = useState('');
  const[country,setCountry] = useState('');


  const[locCountry,setLocCountry] = useState('');
  const[language,setLanguage] = useState('English');
  const[currency,setCurrency] = useState('Us Dollar');
  const[lengthClass,setLengthClass] = useState('Centimeter');
  const[weightClass,setWeightClass] = useState('Kilogram');


  const[categotyProductCount,setCategoryProductCount] = useState('yes');
  const[defaultItemsPerPage,setDefaultItemsPerPage] = useState('000');

  const[allowReviews,setAllowReviews] = useState('yes');
  const[allowGuestReviews,setAllowGuestReviews] = useState('no');

  const[minimumVouchers,setMinimumVouchers] = useState('1');
  const[maximumVouchers,setMaximumVouchers] = useState('12');

  const[pricesWithTax,setPricesWithTax] = useState('yes');
  const[defaultTaxRate,setDefaultTaxRate] = useState('18%');

   const[customersOnline,setCustomersOnline] = useState('yes');
   const[customersActivity,setCustomersActivity] = useState('yes');
   const[customerSearches,setCustomerSearches] = useState('yes');
   const[allowGuestCheckout,setAllowGuestCheckout] = useState('no');
   const[loginDisplayPrice,setLoginDisplayPrice] = useState('no');
   const[maxLoginAttempts,setMaxLoginAttempts] = useState('1 hour');

   const handleSave =(e) => {
    e.preventDefault();
    alert('Settings Saved Successfully!');
   };

   const handleCancel = () => {
    if (onabort) {
      onNavigate('dashboard')
    }
   };

   return(
    <div className="app-container">
      <Sidebar activePage="settings" onNavigate={onNavigate}/>
      <div className="main-content">
        <main className="page-container">
          <form onSubmit={handleSave}>
            <div className="content-card p-4 mb-4 shadow-sm">
              <div className="d-flex align-items-center gap-2 mb-3">
                <BsGear className="text-warning fs-5" style={{color: '#f97316'}}/>
                <h6 className="fw-bold text-dark mb-0" style={{fontSize: '0.85rem'}}>General Settings</h6>
              </div>

              <div className="row g-3 mb-3">
                <div className="col-md-6">
                  <label htmlFor="metaTitleInput" className="form-label text-muted small" style={{fontSize: '0.75rem'}}>Meta Title</label>
                  <input
                  id="metaTitleInput"
                  type="text"
                  className="form-control form-control-sm"
                  placeholder="Title"
                  style={{fontSize: '0.78rem'}}
                  value={metaTitle}
                  onChange={(e) => setMetaTitle(e.target.value)}
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="metaTagKeywordInput" className="form-label text-muted small" style={{fontSize: '0.75rem'}}>Meta Tag Keyword</label>
                  <input
                  id="metaTagKeywordInput"
                  type="text"
                  className="form-control form-control-sm"
                  placeholder="Enter word"
                  style={{fontSize: '0.78rem'}}
                  value={metaTagKeyword}
                  onChange={(e) => setMetaTagKeyword(e.target.value)}
                />
              </div>
            </div>

            <div className="row g-3 mb-3">
              <div className="col-md-6">
                 <label htmlFor="storeThemeSelect" className="form-label text-muted small" style={{fontSize: '0.75rem'}}>Store Themes</label>
                 <select
                 id="storeThemeSelect"
                 className="form-select form-select-sm"
                 style={{fontSize: '0.78rem'}}
                 value={storeTheme}
                 onChange={(e) => setStoreTheme(e.target.value)}
                 >
                  <option value="Default">Default</option>
                 </select>
                </div>
                
                
              <div className="col-md-6">
                 <label htmlFor="layoutSelect" className="form-label text-muted small" style={{fontSize: '0.75rem'}}>Layout</label>
                 <select
                 id="layoutSelect"
                 className="form-select form-select-sm"
                 style={{fontSize: '0.78rem'}}
                 value={layout}
                 onChange={(e) => setLayout(e.target.value)}
                 >
                  <option value="Default">Default</option>
                 </select>
                </div>
            </div>


            <div>
              <label htmlFor="descTextarea" className="form-label text-muted small" style={{fontSize: '0.75rem'}}>Description</label>
              <textarea
              id="descTextarea"
              className="form-control form-control-sm"
              rows="3"
              placeholder="Type description"
              style={{fontSize: '0.78rem'}}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
          </div>
             <div className="content-card p-4 mb-4 shadow-sm">
              <div className="d-flex align-items-center gap-2 mb-3">
                <BsShop className="text-warning fs-5" style={{color: '#f97316'}}/>
                <h6 className="fw-bold text-dark mb-0" style={{fontSize: '0.85rem'}}>Store Settings</h6>
              </div>

              <div className="row g-3 mb-3">
                <div className="col-md-6">
                  <label htmlFor="storeNameInput" className="form-label text-muted small" style={{fontSize: '0.75rem'}}>Store Name</label>
                  <input
                  id="storeNameInput"
                  type="text"
                  className="form-control form-control-sm"
                  placeholder="Enter name"
                  style={{fontSize: '0.78rem'}}
                  value={storeName}
                  onChange={(e) => setStoreName(e.target.value)}
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="ownerNameInput" className="form-label text-muted small" style={{fontSize: '0.75rem'}}>Store Owner Full Name</label>
                  <input
                  id="ownerNameInput"
                  type="text"
                  className="form-control form-control-sm"
                  placeholder="Full name"
                  style={{fontSize: '0.78rem'}}
                  value={ownerFullName}
                  onChange={(e) => setOwnerFullName(e.target.value)}
                />
              </div>
            </div>

            <div className="row g-3 mb-3">
              <div className="col-md-6">
                 <label htmlFor="ownerPhoneInput" className="form-label text-muted small" style={{fontSize: '0.75rem'}}>Owner Phone number</label>
                 <input
                 id="ownerPhoneInput"
                 className="form-select form-select-sm"
                 placeholder="Number"
                 style={{fontSize: '0.78rem'}}
                 value={ownerPhone}
                 onChange={(e) => setOwnerPhone(e.target.value)}
                 />
                </div>
                
                
              <div  className="col-md-6">
                 <label htmlFor="ownerEmailInput" className="form-label text-muted small" style={{fontSize: '0.75rem'}}>Owner Email</label>
                 <input
                 id="ownerEmailInput"
                 type="email"
                 className="form-select form-select-sm"
                 placeholder="Email"
                 style={{fontSize: '0.78rem'}}
                 value={ownerEmail}
                 onChange={(e) => setOwnerEmail(e.target.value)}
                 />
                  
                 </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="descTextarea" className="form-label text-muted small" style={{fontSize: '0.75rem'}}>Full Address</label>
              <textarea
              id="addressTextarea"
              className="form-control form-control-sm"
              rows="3"
              placeholder="Type address"
              style={{fontSize: '0.78rem'}}
              value={fullAddress}
              onChange={(e) => setFullAddress(e.target.value)}
              ></textarea>

              </div>
              <div className="row g-3">
                <div className="col-md-4">
                  <label htmlFor="zipInput" className="form-label text-muted small" style={{fontSize: '0.75rem'}}>Zip-Code</label>
                 <input
                 id="zipInput"
                 type="text"
                 className="form-select form-select-sm"
                 placeholder="zip-code"
                 style={{fontSize: '0.78rem'}}
                 value={zipCode}
                 onChange={(e) => setZipCode(e.target.value)}
                 />

                </div>

                <div className="col-md-4">
                 <label htmlFor="citySelect" className="form-label text-muted small" style={{fontSize: '0.75rem'}}>City</label>
                 <select
                 id="citySelect"
                 className="form-select form-select-sm"
                 style={{fontSize: '0.78rem'}}
                 value={city}
                 onChange={(e) => setCity(e.target.value)}
                 >
                  <option value="">Choose a city</option>
                 </select>
                </div>

                <div className="col-md-4">
                 <label htmlFor="countrySelect" className="form-label text-muted small" style={{fontSize: '0.75rem'}}>Country</label>
                 <select
                 id="countrySelect"
                 className="form-select form-select-sm"
                 style={{fontSize: '0.78rem'}}
                 value={country}
                 onChange={(e) => setCountry(e.target.value)}
                 >
                  <option value="">Choose a country</option>
                 </select>
                </div>
              </div>
            </div>

            <div className="content-card p-4 mb-4 shadow-sm">
              <div className="d-flex align-items-center gap-2 mb-3">
                <BsGlobe className="text-warning fs-5" style={{color: '#f97316'}}/>
                <h6 className="fw-bold text-dark mb-0" style={{fontSize: '0.85rem'}}>Localization Settings</h6>
            </div>

            <div className="row g-3 mb-3">
              <div className="col=md-6">
                <label htmlFor="loccountrySelect" className="form-label text-muted small" style={{fontSize: '0.75rem'}}>Country</label>
                 <select
                 id="loccountrySelect"
                 className="form-select form-select-sm"
                 style={{fontSize: '0.78rem'}}
                 value={locCountry}
                 onChange={(e) => setLocCountry(e.target.value)}
                 >
                  <option value="">Choose a country</option>
                 </select>

              </div>
              <div className="col=md-6">
                <label htmlFor="langSelect" className="form-label text-muted small" style={{fontSize: '0.75rem'}}>Language</label>
                 <select
                 id="langSelect"
                 className="form-select form-select-sm"
                 style={{fontSize: '0.78rem'}}
                 value={language}
                 onChange={(e) => setLanguage(e.target.value)}
                 >
                  <option value="English">English</option>
                 </select>
                </div>
              </div>

              <div className="row g-3 mb-3">
              <div className="col=md-6">
                <label htmlFor="currencySelect" className="form-label text-muted small" style={{fontSize: '0.75rem'}}>Currency</label>
                 <select
                 id="currencySelect"
                 className="form-select form-select-sm"
                 style={{fontSize: '0.78rem'}}
                 value={currency}
                 onChange={(e) => setCurrency(e.target.value)}
                 >
                  <option value="Us Dollar">Us Dollar</option>
                 </select>

              </div>
              <div className="col-md-6">
                <label htmlFor="lengthSelect" className="form-label text-muted small" style={{fontSize: '0.75rem'}}>Length Class</label>
                 <select
                 id="lengthSelect"
                 className="form-select form-select-sm"
                 style={{fontSize: '0.78rem'}}
                 value={lengthClass}
                 onChange={(e) => setLengthClass(e.target.value)}
                 >
                  <option value="Centimeter">Centimeter</option>
                 </select>
                </div>
              </div>


              <div className="row g-3 mb-3">
              <div className="col=md-6">
                <label htmlFor="weightSelect" className="form-label text-muted small" style={{fontSize: '0.75rem'}}>Weight Class</label>
                 <select
                 id="weightSelect"
                 className="form-select form-select-sm"
                 style={{fontSize: '0.78rem'}}
                 value={weightClass}
                 onChange={(e) => setWeightClass(e.target.value)}
                 >
                  <option value="Kilogram">Kilogram</option>
                 </select>
                </div>
              </div>
            </div>

            <div className="row g-3 mb-4">
              <div className="col-xl-3 col-md-6">
                <div className="content-card p-4 mb-4 shadow-sm">
              <div className="d-flex align-items-center gap-2 mb-3">
                <BsTags className="text-warning fs-5" style={{color: '#f97316'}}/>
                <h6 className="fw-bold text-dark mb-0" style={{fontSize: '0.85rem'}}>Categories Settings</h6>
            </div>

            <div className="mb-3">
              <label className="form-label text-muted small d-block mb-1" style={{fontSize: '0.75rem'}}>Category Product Count</label>
              <div className="d-flex gap-3" style={{fontSize: '0.78rem'}}>
                <div className="form-check">
                  <input
                  className="form-check-point"
                  type="radio"
                  name="catCountRadio"
                  id="catCountYes"
                  checked={categotyProductCount === 'yes'}
                  onChange={() => setCategoryProductCount('yes')}
                  />

                  <lablel className="form-check-label text-dark" htmlFor="catCountYes">Yes</lablel>
                  </div>

                  <div className="form-check">
                  <input
                  className="form-check-point"
                  type="radio"
                  name="catCountRadio"
                  id="catCountNo"
                  checked={categotyProductCount === 'no'}
                  onChange={() => setCategoryProductCount('no')}
                  />

                  <lablel className="form-check-label text-dark" htmlFor="catCounNo">No</lablel>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="defaultItemsInput" className="form-label text-muted small" style={{fontSize: '0.75rem'}}>Default Items Per Page</label>
                 <input
                 id="defaultItemsInput"
                 type="text"
                 className="form-select form-select-sm"
                 placeholder="000"
                 style={{fontSize: '0.78rem'}}
                 value={defaultItemsPerPage}
                 onChange={(e) => setDefaultItemsPerPage(e.target.value)}
                 />
              </div>
            </div>
          </div>

          
              <div className="col-xl-3 col-md-6">
                <div className="content-card p-4 mb-4 shadow-sm">
              <div className="d-flex align-items-center gap-2 mb-3">
                <BsStar className="text-warning fs-5" style={{color: '#f97316'}}/>
                <h6 className="fw-bold text-dark mb-0" style={{fontSize: '0.85rem'}}>Reviews Settings</h6>
            </div>

            <div className="mb-3">
              <label className="form-label text-muted small d-block mb-1" style={{fontSize: '0.75rem'}}>Allow Reviews</label>
              <div className="d-flex gap-3" style={{fontSize: '0.78rem'}}>
                <div className="form-check">
                  <input
                  className="form-check-point"
                  type="radio"
                  name="revRadio"
                  id="revYes"
                  checked={allowReviews === 'yes'}
                  onChange={() => setAllowReviews('yes')}
                  />

                  <lablel className="form-check-label text-dark" htmlFor="revYes">Yes</lablel>
                  </div>

                  <div className="form-check">
                  <input
                  className="form-check-point"
                  type="radio"
                  name="revRadio"
                  id="revNo"
                  checked={allowReviews === 'no'}
                  onChange={() => setAllowReviews('no')}
                  />

                  <lablel className="form-check-label text-dark" htmlFor="revNo">No</lablel>
                  </div>
                </div>
              </div>
              <div>

              </div>
              <label className="form-label text-muted small d-block mb-1" style={{fontSize: '0.75rem'}}>Allow Guest Reviews</label>
              <div className="d-flex gap-3" style={{fontSize: '0.78rem'}}>
                <div className="form-check">
                  <input
                  className="form-check-point"
                  type="radio"
                  name="guestRevRadio"
                  id="guestRevYes"
                  checked={allowGuestReviews === 'yes'}
                  onChange={() => setAllowGuestReviews('yes')}
                  />

                  <lablel className="form-check-label text-dark" htmlFor="guestRevYes">Yes</lablel>
                  </div>

                  <div className="form-check">
                  <input
                  className="form-check-point"
                  type="radio"
                  name="guestRevRadio"
                  id="guestRevNo"
                  checked={allowGuestReviews === 'no'}
                  onChange={() => setAllowGuestReviews('no')}
                  />

                  <lablel className="form-check-label text-dark" htmlFor="guestRevNo">No</lablel>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6">
                <div className="content-card p-4 h-100 shadow-sm">
              <div className="d-flex align-items-center gap-2 mb-3">
                <BsTicketPerforated className="text-warning " style={{color: '#f97316'}}/>
                <h6 className="fw-bold text-dark mb-0" style={{fontSize: '0.85rem'}}>Vouchers Settings</h6>
            </div>

            <div className="mb-2">
                <label htmlFor="minVoucherInput" className="form-label text-muted small" style={{fontSize: '0.75rem'}}>Minimum Vouchers</label>
                 <input 
                 id="minVouchersInput"
                 type="text"
                 className="form-select form-select-sm"
                 style={{fontSize: '0.78rem'}}
                 value={minimumVouchers}
                 onChange={(e) => setMinimumVouchers(e.target.value)}
                 />
                  
                </div>
                <div>
                <label htmlFor="maxVoucherInput" className="form-label text-muted small" style={{fontSize: '0.75rem'}}>Maximum Vouchers</label>
                 <input 
                 id="minVouchersInput"
                 type="text"
                 className="form-select form-select-sm"
                 style={{fontSize: '0.78rem'}}
                 value={maximumVouchers}
                 onChange={(e) => setMaximumVouchers(e.target.value)}
                 />
                </div>
              </div>
            </div>


            <div className="col-xl-3 col-md-6">
                <div className="content-card p-4 h-100 shadow-sm">
              <div className="d-flex align-items-center gap-2 mb-3">
                <BsPercent className="text-warning " style={{color: '#f97316'}}/>
                <h6 className="fw-bold text-dark mb-0" style={{fontSize: '0.85rem'}}>Tax Settings</h6>
            </div>

            <div className="mb-3">
              <label className="form-label text-muted small d-block mb-1" style={{fontSize: '0.75rem'}}>Prices with Tax</label>
              <div className="d-flex gap-3" style={{fontSize: '0.78rem'}}>
                <div className="form-check">
                  <input
                  className="form-check-point"
                  type="radio"
                  name="taxRadio"
                  id="taxYes"
                  checked={pricesWithTax === 'yes'}
                  onChange={() => setPricesWithTax('yes')}
                  />

                  <label className="form-check-label text-dark" htmlFor="taxYes">Yes</label>
                  </div>
                  <div className="form-check">
                  <input
                  className="form-check-point"
                  type="radio"
                  name="taxRadio"
                  id="taxNo"
                  checked={pricesWithTax === 'no'}
                  onChange={() => setPricesWithTax('no')}
                  />

                  <lablel className="form-check-label text-dark" htmlFor="taxNo">No</lablel>
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="taxRateInput" className="form-label text-muted small" style={{fontSize: '0.75rem'}}>Default Tax Rate</label>
                 <input 
                 id="taxRateInput"
                 type="text"
                 className="form-control form-control-sm"
                 style={{fontSize: '0.78rem'}}
                 value={defaultTaxRate}
                 onChange={(e) => setDefaultTaxRate(e.target.value)}
                 />
                </div>
              </div>
            </div>
          

          <div className="content-card p-4 mb-4 shadow-sm">
              <div className="d-flex align-items-center gap-2 mb-3">
                <BsPeople className="text-warning " style={{color: '#f97316'}}/>
                <h6 className="fw-bold text-dark mb-0" style={{fontSize: '0.85rem'}}>Customers Settings</h6>
            </div>

            <div className="row g-3 mb-3">
              <div className="col-md-2 col-sm-4">
                <label className="form-label text-muted small d-block mb-1" style={{fontSize: '0.75rem'}}>Customers Online</label>
              <div className="d-flex gap-2" style={{fontSize: '0.78rem'}}>
                <div className="form-check">
                  <input
                  className="form-check-point"
                  type="radio"
                  name="cOnline"
                  id="cOnlineYes"
                  checked={customersOnline=== 'yes'}
                  onChange={() => setCustomersOnline('yes')}
                  />

                  <label className="form-check-label text-dark" htmlFor="cOlineYes">Yes</label>
                  </div>

                  <div className="form-check">
                  <input
                  className="form-check-point"
                  type="radio"
                  name="cOnline"
                  id="cOnlineNo"
                  checked={customersOnline=== 'no'}
                  onChange={() => setCustomersOnline('no')}
                  />

                  <label className="form-check-label text-dark" htmlFor="cOlineNo">No</label>
                  </div>
                </div>
              </div>

            <div className="col-md-2 col-sm-4">
                <label className="form-label text-muted small d-block mb-1" style={{fontSize: '0.75rem'}}>Customers Activity</label>
              <div className="d-flex gap-2" style={{fontSize: '0.78rem'}}>
                <div className="form-check">
                  <input
                  className="form-check-point"
                  type="radio"
                  name="cAct"
                  id="cActYes"
                  checked={customersActivity=== 'yes'}
                  onChange={() => setCustomersActivity('yes')}
                  />

                  <label className="form-check-label text-dark" htmlFor="cActYes">Yes</label>
                  </div>

                  <div className="form-check">
                  <input
                  className="form-check-point"
                  type="radio"
                  name="cAct"
                  id="cActNo"
                  checked={customersActivity=== 'no'}
                  onChange={() => setCustomersActivity('no')}
                  />

                  <label className="form-check-label text-dark" htmlFor="cActNo">No</label>
                  </div>
                </div>
              </div>

              <div className="col-md-2 col-sm-4">
                <label className="form-label text-muted small d-block mb-1" style={{fontSize: '0.75rem'}}>Customers Searches</label>
              <div className="d-flex gap-2" style={{fontSize: '0.78rem'}}>
                <div className="form-check">
                  <input
                  className="form-check-point"
                  type="radio"
                  name="cSearch"
                  id="cSerachYes"
                  checked={customerSearches=== 'yes'}
                  onChange={() => setCustomerSearches('yes')}
                  />

                  <label className="form-check-label text-dark" htmlFor="cSearchYes">Yes</label>
                  </div>

                  <div className="form-check">
                  <input
                  className="form-check-point"
                  type="radio"
                  name="cSearch"
                  id="cSearchNo"
                  checked={customerSearches=== 'no'}
                  onChange={() => setCustomerSearches('no')}
                  />

                  <label className="form-check-label text-dark" htmlFor="cSearchNo">No</label>
                  </div>
                </div>
            </div>

            <div className="col-md-2 col-sm-4">
                <label className="form-label text-muted small d-block mb-1" style={{fontSize: '0.75rem'}}>Allow Guest Checkout</label>
              <div className="d-flex gap-2" style={{fontSize: '0.78rem'}}>
                <div className="form-check">
                  <input
                  className="form-check-point"
                  type="radio"
                  name="guestChk"
                  id="guestChkYes"
                  checked={allowGuestCheckout=== 'yes'}
                  onChange={() => setAllowGuestCheckout('yes')}
                  />

                  <label className="form-check-label text-dark" htmlFor="guestChkYes">Yes</label>
                  </div>

                  <div className="form-check">
                  <input
                  className="form-check-point"
                  type="radio"
                  name="guestChk"
                  id="guestChkNo"
                  checked={allowGuestCheckout=== 'no'}
                  onChange={() => setAllowGuestCheckout('no')}
                  />

                  <label className="form-check-label text-dark" htmlFor="guestChkNo">No</label>
                  </div>
                </div>
            </div>

            <div className="col-md-3 col-sm-6">
                <label className="form-label text-muted small d-block mb-1" style={{fontSize: '0.75rem'}}>Login Display Price</label>
              <div className="d-flex gap-2" style={{fontSize: '0.78rem'}}>
                <div className="form-check">
                  <input
                  className="form-check-point"
                  type="radio"
                  name="loginPrice"
                  id="loginPriceYes"
                  checked={loginDisplayPrice=== 'yes'}
                  onChange={() => setLoginDisplayPrice('yes')}
                  />

                  <label className="form-check-label text-dark" htmlFor="loginPriceYes">Yes</label>
                  </div>

                  <div className="form-check">
                  <input
                  className="form-check-point"
                  type="radio"
                  name="loginPrice"
                  id="loginPriceNo"
                  checked={loginDisplayPrice=== 'no'}
                  onChange={() => setLoginDisplayPrice('no')}
                  />

                  <label className="form-check-label text-dark" htmlFor="loginPriceNo">No</label>
                  </div>
                </div>
            </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <label htmlFor="maxAttemptsInput" className="form-label text-muted small" style={{fontSize: '0.75rem'}}>Max Login Attempts</label>
                 <input 
                 id="maxAttemptsInput"
                 type="text"
                 className="form-control form-control-sm"
                 style={{fontSize: '0.78rem'}}
                 value={maxLoginAttempts}
                 onChange={(e) => setMaxLoginAttempts(e.target.value)}
                 />
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-end gap-2 mb-4">
              <button
              className="btn btn-danger btn-sm px-4 py-1"
              type="button"
              style={{fontSize: '0.8rem', backgroundColor: '#ef4444'}}
              onClick={handleCancel}
              >
                Cancel
              </button>

              <button
              className="btn btn-danger btn-sm px-4 py-1"
              type="submit"
              style={{fontSize: '0.8rem', backgroundColor: '#10b981'}}
              
              >
                Save Change
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
   );
  }
  export default Settings;





  
