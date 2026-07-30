import React, { useState, usestate } from 'react' ;
import { useNavigate } from 'react-router-dom';
import{
  BsImage,
  BsTrash,
  BsHeart,
  BsReceipt,
  BsTag, 
  BsTrusk,
  BsFileEarMarkText,
} from 'react-icons/bs';

function OrderCart({onNavigate}){
  const navigate = useNavigate();
  const initialIteams = [
    {
      id : 1,
      name : 'Men Black Slim Fit T-shirt',
      color : 'Dark',
      size : 'M',
      price : 80.0,
      tax : 3.0,
      quantity : 1,
      total :83.0,
    },
    {
      id : 2,
      name : 'Dark Green Cargo Pent',
      color : 'Dark Green',
      size : 'M',
      price : 330.0,
      tax : 4.0,
      quantity : 3,
      total :334.0, 
    },
    {
      id : 3,
      name : 'Men Dark Brown Wallet',
      color : 'Brown',
      size : 'S',
      price : 132.0,
      tax : 5.0,
      quantity : 1,
      total :137.0, 

    },
    {
      id : 4,
      name : 'Kid\' Yellow T-shirt',
      color : 'Yellow',
      size : 'S',
      price : 220.0,
      tax : 3.0,
      quantity : 2,
      total :223.0, 
    },
  ];
const [cartitems, setCartItems] = useState(initialItems);
const [promoCode, setPromoCode] = useState('CODE123');
const handleQuantityChange = (id, delta) => {
  setCartItems(
    cartItems.map((item) => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    })
  );
};

const handleRemove = (id) => {
   setCartItems(cartItems.filter((ite) => item.id !== id));
};

const handleContinueShopping = () => {
  if (navigate){
    navigate('/products/grid');
  }else if (onNavigate){
    onNavigate('create-invoice');
  }
};

return(
  <>
  <div className="rounded-3 p-3 mb-4 d-flex justify-content-between align-items-center text-white shadow-sm" style={{backgroundColor: '#ff5e29' , fontSize:'0.85rem' }}>
    <span className="fw-medium">There are {cartItems.length} product in your cart </span>
    <button className="btn btn-link text-white text-decoration-underline p-0 border-0 fw-normal"style={{ fontSize:'0.85rem'}}
    onClick={handleClearCart} type="button">
      Clear cart
    </button>
  </div>
  <div className="row g-4">
    <div className="col-xl-8 col-lg-7">
      {cartItems.map((item) => (
        <div key={item.id} className='content-card p-4 mb-4 shadow-sm'>
          <div className='d-flex flex-wrap align-items-start justify-content-between gap-3 mb-3'>
            <div className='d-flex align-items-center gap-3'>
              <div className='rounderd bg-secondary bg-opacity-25 d-flex align-items-center justify-content-center' style={{width:"64px", height:"64px"}}>
                <BsImage className='fs-3 text-dark opacity-50' />
              </div>
              <div>
                <strong className='d-block text-dark mb-1'style={{fontSize:'0.9rem'}}> {item.name}</strong>
                <span className='text-muted small d-block mb-2' style={{fontSize:'0.75rem'}}> Color : {item.color} &nbsp; Size :{item.size}</span>
                <div className="d-inline-flex align-items-center border rounded">
                  <button className='btn btn-sm btn-light border-0 px-2 py-0 text-muted' type="button"onClick={() => handleQuatityChange(item.id, -1)}>
                    - 
                  </button>
                  <span className='px-3 text-dark fw-medium' style={{fontSize:'0.8rem'}}>
                    {item.quantity}
                  </span>
                  <button className='btn btn-sm btn-light border-0 px-2 py-0 text-muted'type="button" onClick={() => handleQuantityChange(item.id, 1)}>
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="text-end">
              <span className='text-muted small d-block' style={{fontSize:'0.7rem'}}>Items Price</span>
              <strong className="text-dark" style={{fontSize: '0.9rem'}}>
                ${item.price.toFixed(2)}
              </strong>{' '}
              <span className='text-muted' style={{fontSize:'0.75rem'}}>
                / ${item.tax.toFixed(2)} Tax
              </span>
            </div>
          </div>

          <div className="d-flex justify-content-between align-items-center border-top pt-3 mt-3"style={{ fontSize: '0.78rem' }}>
            <div className='d-flex gap-3'>
              <button className="btn btn-link text-muted p-0 text-decoration-none d-inline-flex align-items-center gap-1"type="button" style={{fontSize: '0.78rem'}} onClick={() => handleRemove(item.id)}>
                <BsHeart /> Add Wishlist
              </button>
            </div>
            <div >
              <span className='text-muted'>Total : </span>
              <strong className='text-dark'>${item.total.toFixed(2)}</strong>
            </div>
          </div>
        </div>
      ))}  
    </div>

    <div className="col-xl-4 col-lg-5">
      <div className='rounded-3 p-4 mb-4 text-white shadow-sm position-relative overflow-hidden'style={{backgroundColor:'#ff5e29'}}>
        <div className='postion-absolute'style={{ 
                right: '-20px',
                top: '-20px',
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                border: '10px solid rgba(255, 255, 255, 0.15)',
                pointerEvents: 'none',}}>
        </div>
        <h6 className='fw-bold mb-3' style={{fontSize:'0.9rem'}}>Have a Promo Code ?</h6>
        <div className='d-flex gap-2'>
          <input type='text'className='form-control form-control-sm border-0 text-white'placeholder='CODE123'valu={promoCode} onChange={(e) => setPromoCode(e.target.value)}style={{backgroundColor:'rgba(255, 255, 255, 0.25)',fontSize:'0.8rem'}}/>
          <button className="btn btn-light btn-sm px-3 fw-bold" type="button"style={{fontSize:'0.8rem',color:'#ff5e29'}}>
            Apply
          </button>
        </div>
      </div>
      <div className="content-card p-4 mb-4 shadow-sm">
                  <h6 className="fw-bold text-dark mb-3" style={{ fontSize: '0.85rem' }}>Order Summary</h6>
      
                  <div className="d-flex justify-content-between py-2 border-bottom text-muted" style={{ fontSize: '0.78rem' }}>
                    <span className="d-flex align-items-center gap-2">
                      <BsReceipt className="text-muted" /> Sub Total :
                    </span>
                    <strong className="text-dark">$777.00</strong>
                  </div>
                  <div className="d-flex justify-content-between py-2 border-bottom text-muted" style={{ fontSize: '0.78rem' }}>
                    <span className="d-flex align-items-center gap-2">
                      <BsTag className="text-muted" /> Discount :
                    </span>
                    <strong className="text-dark">-$60.00</strong>
                  </div>
                  <div className="d-flex justify-content-between py-2 border-bottom text-muted" style={{ fontSize: '0.78rem' }}>
                    <span className="d-flex align-items-center gap-2">
                      <BsTruck className="text-muted" /> Delivery Charge :
                    </span>
                    <strong className="text-dark">$00.00</strong>
                  </div>
                  <div className="d-flex justify-content-between py-2 border-bottom text-muted" style={{ fontSize: '0.78rem' }}>
                    <span className="d-flex align-items-center gap-2">
                      <BsFileEarmarkText className="text-muted" /> Estimated Tax (15.5%) :
                    </span>
                    <strong className="text-dark">$20.00</strong>
                  </div>
                  <div className="d-flex justify-content-between pt-3 mb-3 text-dark" style={{ fontSize: '0.85rem' }}>
                    <strong className="fw-bold">Total Amount</strong>
                    <strong className="fw-bold">$737.00</strong>
                  </div>
                  <div
                                className="rounded-3 p-2 d-flex align-items-center gap-2 text-dark"
                                style={{ backgroundColor: '#fef3c7', fontSize: '0.75rem' }}
                              >
                                <BsTruck className="text-warning fs-5" />
                                <span>Estimated Delivery by <strong>25 April, 2024</strong></span>
                              </div>
                            </div>
                  <div className="d-flex gap-2">
            <button
              className="btn btn-add-product flex-fill btn-sm py-2"
              type="button"
              style={{ fontSize: '0.8rem' }}
              onClick={handleContinueShopping}
            >
              Continue Shopping
            </button>
            <button
              className="btn btn-success flex-fill btn-sm py-2"
              type="button"
              style={{ fontSize: '0.8rem', backgroundColor: '#10b981', borderColor: '#10b981' }}
              onClick={handleBuyNow}
            >
              Buy Now
            </button>
          </div>
    </div>
  </div>
  </>
);
}
export default OrderCart;