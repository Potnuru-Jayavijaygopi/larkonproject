import React, { useState } from "react";
import {
  BsImage,
  BsCartPlus,
  BsBag,
  BsHeart,
  BsStarFill,
  BsCheckLg,
  BsBookmarkFill,
  BsTruck,
  BsTags,
  BsGift,
  BsHeadset,
  BsHandThumbsUp,
} from 'react-icons/bs';

function ProductDetails(){
  const [selectedImg, setSelectedImg]=useState(0);
  const [selectedSize, setSelectedSize]=useState('M');
  const [selectedColor, setSelectedColor]=useState('navy');
  const [quantity, setQuantity]=useState(1);

  return(
    <>
    <div className="row g-4 mb-4">
      <div className="col-lg-5">
        <div className="content-card p-4 h-100">
          <div className="bg-light rounded-3 d-flex align-items-center justify-content-center mb-3"
            style={{height:'260px'}}
          >
            <BsImage className="fs-1 text-secondary opacity-50"/>
          </div>
          <div className="row g-2 mb-4">
            {[0,1,2,3].map((idx)=>(
              <div className="col-3" key={idx}>
                <div
                 className={`bg-light rounded-2 d-flex align-items-center justify-content-center cursor-pointer border ${selectedImg === idx ? 'border-primary border-2' : ''}`}
                 style={{height:'58px'}}
                 onClick={()=>setSelectedImg(idx)}
                >
                 <BsImage className="text-secondary opacity-50"/>
                </div>
              </div>
            ))}
          </div>
          <div className="d-flex gap-2">
            <button className="btn btn-add-product flex-grow-1 py-2 d-inline-flex align-items-center justify-content-center gap-1" type="button">
              <BsCartPlus/>Add To Cart
            </button>
            <button className="btn btn-light border flex-grow-1 py-2 fw-medium d-inline-flex align-items-center justify-content-center gap-1" type="button">
             <BsBag/>Buy Now
            </button>
            <button className="btn btn-light border px-3 text-danger"type="button">
             <BsHeart/>
            </button>
          </div>
        </div>
      </div>
      <div className="col-lg-7">
        <div className="content-card p-4 h-100">
          <span className="badge bg-success-subtle text-success border border-success-subtle mb-2 px-2 py-1">
            New Arrival 
          </span>
          <h4 className="fw-bold text-dark mb-2">Men Black Slim Fit T-shirt</h4>
          <div className="d-flex align-items-center gap-1 mb-3">
            {[...Array(5)].map((_,i)=>(
              <BsStarFill key={i} className="text-warning small"/>
            ))}
            <span className="fw-bold ms-1 small">4.5</span>
            <span className="text-muted small">(55 Review)</span>
          </div>
          <div className="d-flex align-items-center gap-2 mb-3">
            <span className="fs-4 fw-bold text-dark">$80.00</span>
            <span className="text-decoration-line-through text-muted">$100.00</span>
            <span className="text-danger fw-bold small">(20% Off)</span>
          </div>
          <div className="row g-3 mb-3">
           <div className="col-sm-6">
             <label className="form-label small text-muted d-block mb-1">
              Colors &gt; <strong className="text-dark">Dark</strong>
             </label>
             <div className="d-flex gap-2">
              {[
                { id: 'navy', color: '#1e2530' },
                { id: 'amber', color: '#f59e0b' },
                { id: 'slate', color: '#cbd5e1' },
                { id: 'emerald', color: '#10b981' },
              ].map((colObj)=>(
                <button
                  key={colObj.id}
                  type="button"
                  className={`btn rounded-circle p-0 border ${selectedColor ===colObj.id ? 'border-dark shadow-sm' :''}`}
                  style={{width:'22px',height:'22px',backgroundColor:colObj.color}}
                  onClick={()=>setSelectedColor(colObj.id)}></button>             
                ))}
             </div>
           </div>
           <div className="col-sm-6">
             <label className="form-label small text-muted d-block mb-1">
               Size &gt; <strong className="text-dark">{selectedSize}</strong>
             </label>
             <div className="d-flex gap-1">
              {['S','M','XL','XXL'].map((sz)=>(
                <button 
                key={sz}
                type="button"
                className={`btn btn-sm ${selectedSize == sz ? 'btn-secondary' :'btn-light border'} px-3 py-1`}
                onClick={()=>setSelectedSize(sz)}
                >{sz}</button>
              ))}
             </div>
            </div>
          </div>
          <div className="mb-4">
           <label className="form-label small text-muted d-block mb-1">Quantity :</label>
           <div className="d-inline-flex align-items-center border rounded-2 bg-light p-1">
             <button
                type="button"
               className="btn btn-sm btn-light border-0 px-2"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </button>
              <span className="px-3 fw-bold small">{quantity}</span>
              <button
                type="button"
                className="btn btn-sm btn-light border-0 px-2"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
           </div>
          </div>
          <div className="mb-4 small text-muted">
            <div className="mb-1 text-success fw-medium d-flex align-items-center gap-1">
              <BsCheckLg/> In Stock
            </div>
            <div className="mb-1 text-success fw-medium d-flex align-items-center gap-1">
              <BsCheckLg/> Free delivery available
            </div>
            <div className="text-success fw-medium d-flex align-items-center gap-1">
              <BsCheckLg/> Sales 10% Off Use Code: <strong>CODE123</strong>
            </div>
          </div>
          <div className="mb-4">
            <h6 className="fw-bold text-dark mb-1">Description :</h6>
            <p className="small text-muted mb-0" style={{ lineHeight:'1.6'}}>
              Top in sweatshirt fabric made from a cotton blend with a soft brushed inside. Relaxed fit with dropped shoulders, long sleeves and ribbing around the neckline, cuffs and hem. Small metal text applique.{' '}
              <a href="#readmore" className="text-primary text-decoration-none ms-1">Read more</a>
            </p>
          </div>
          <div>
           <h6 className="fw-bold text-dark mb-2">Available offers :</h6>
           <div className="d-flex align-items-start gap-2 mb-2 small text-muted">
             <BsBookmarkFill className="text-success mt-1 flex-shrink-0"/>
             <span>
               Bank Offer 10% instant discount on Bank Debit Cards, up to $30 on orders of $50 and above
             </span>
           </div>
           <div className="d-flex align-items-start gap-2 small text-muted">
             <BsBookmarkFill className="text-success mt-1 flex-shrink-0"/>
             <span>
               Bank Offer Grab our exclusive offer now and save 20% on your next purchase! Don't miss out, shop today!
             </span>
           </div>
          </div>
        </div>
      </div>
    </div>
    <div className="content-card p-3 mb-4">
     <div className="row align-items-center g-3">
       <div className="col-lg-3 col-sm-6">
         <div className="d-flex align-items-center gap-3">
          <div className="bg-danger-subtle text-danger rounded-circle p-2 fs-4 flex-shrink-0">
            <BsTruck/>
          </div>
          <div>
            <h6 className="fw-bold text-dark mb-0 small">Free shipping for all orders over $200</h6>
            <span className="text-muted" style={{ fontSize:'11px'}}>Only in this week</span>
          </div>
        </div>
      </div>

      <div className="col-lg-3 col-sm-6">
        <div className="d-flex align-items-center gap-3">
          <div className="bg-warning-subtle text-warning rounded-circle p-2 fs-4 flex-shrink-0">
            <BsTags />
          </div>
          <div>
            <h6 className="fw-bold text-dark mb-0 small">Special discounts for customers</h6>
            <span className="text-muted" style={{ fontSize: '11px' }}>Coupons up to $ 100</span>
          </div>
        </div>
      </div>

      <div className="col-lg-3 col-sm-6">
        <div className="d-flex align-items-center gap-3">
          <div className="bg-danger-subtle text-danger rounded-circle p-2 fs-4 flex-shrink-0">
            <BsGift />
          </div>
          <div>
            <h6 className="fw-bold text-dark mb-0 small">Free gift wrapping</h6>
            <span className="text-muted" style={{ fontSize: '11px' }}>With 100 letters custom note</span>
          </div>
        </div>
      </div>

      <div className="col-lg-3 col-sm-6">
        <div className="d-flex align-items-center gap-3">
          <div className="bg-info-subtle text-info rounded-circle p-2 fs-4 flex-shrink-0">
            <BsHeadset />
          </div>
          <div>
            <h6 className="fw-bold text-dark mb-0 small">Expert Customer Service</h6>
            <span className="text-muted" style={{ fontSize: '11px' }}>8:00 - 20:00, 7 days/week</span>
          </div>
        </div>
      </div>
     </div>
   </div>
   <div className="row g-4">
     <div className="col-lg-6">
       <div className="content-card p-4 h-100">
         <h6 className="fw-bold text-dark mb-3">Items Detail</h6>
          <div className="table-responsive">
             <table className="table table-borderless table-sm mb-0 text-muted small" style={{ fontSize:'12px'}}>
               <tbody>
                 <tr>
                   <td className="fw-semibold text-dark ps-0" style={{ width:'170px'}}>Product Dimensions</td>
                   <td>: 53.3 x 40.6 x 6.4 cm; 500 Grams</td>
                 </tr>
                 <tr>
                   <td className="fw-semibold text-dark ps-0">Date First Available</td>
                   <td>: 22 September 2023</td>
                 </tr>
                 <tr>
                   <td className="fw-semibold text-dark ps-0">Department</td>
                   <td>: Men</td>
                 </tr>
                 <tr>
                    <td className="fw-semibold text-dark ps-0">Manufacturer</td>
                    <td>: Greensboro, NC 27401 Prospa-Pal</td>
                 </tr>
                 <tr>
                    <td className="fw-semibold text-dark ps-0">ASIN</td>
                    <td>: B0CJMML118</td>
                 </tr>
                 <tr>
                    <td className="fw-semibold text-dark ps-0">Item model number</td>
                    <td>: 1137AZ</td>
                 </tr>
                 <tr>
                    <td className="fw-semibold text-dark ps-0">Country of Origin</td>
                    <td>: U.S.A</td>
                 </tr>
                 <tr>
                   <td className="fw-semibold text-dark ps-0">Manufacturer</td>
                   <td>: Suite 941 89157 Baumbach Views, Gilbertmouth, TX 31542-2135</td>
                 </tr>
                 <tr>
                   <td className="fw-semibold text-dark ps-0">Packer</td>
                   <td>: Apt. 726 80915 Hung Stream, Rowetown, WV 44364</td>
                 </tr>
                 <tr>
                   <td className="fw-semibold text-dark ps-0">Importer</td>
                   <td>: Apt. 726 80915 Hung Stream, Rowetown, WV 44364</td>
                 </tr>
                 <tr>
                   <td className="fw-semibold text-dark ps-0">Item Weight</td>
                   <td>: 500 g</td>
                 </tr>
                 <tr>
                   <td className="fw-semibold text-dark ps-0">Item Dimensions LxWxH</td>
                   <td>: 53.3 x 40.6 x 6.4 Centimeters</td>
                 </tr>
                 <tr>
                   <td className="fw-semibold text-dark ps-0">Generic Name</td>
                   <td>: T-Shirt</td>
                 </tr>
                 <tr>
                   <td className="fw-semibold text-dark ps-0">Best Sellers Rank</td>
                   <td>: #13 in Clothing &amp; Accessories</td>
                 </tr>
               </tbody>
             </table>
          </div>

          <a href="#more-details" className="small text-primary text-decoration-none d-inline-block mt-3 fw-medium">
            View More Details &rarr;
          </a>
       </div>
     </div>

     <div className="col-lg-6">
       <div className="content-card p-4 h-100">
        <h6 className="fw-bold text-dark mb-4">Top Review From World</h6>

        <div className="mb-4 pb-3 border-bottom">
          <div className="d-flex align-items-center gap-2 mb-2">
            <div className="bg-light rounded-2 p-2 text-secondary">
              <BsImage />
            </div>
            <span className="fw-bold text-dark small">Henny K. Mark</span>
          </div>

          <div className="d-flex align-items-center gap-2 mb-1">
            <div>
              {[...Array(5)].map((_, i) => (
                <BsStarFill key={i} className="text-warning" style={{ fontSize: '10px' }} />
              ))}
            </div>
            <span className="fw-bold small text-dark">Excellent Quality</span>
          </div>

          <div className="text-muted mb-2" style={{ fontSize: '11px' }}>
            Reviewed in Canada on 16 November 2023
          </div>

          <p className="text-muted small mb-2" style={{ fontSize: '12px', lineHeight: '1.5' }}>
           Medium thickness. Did not shrink after wash. Good elasticity . XL size Perfectly fit for 5.10 height and heavy body. Did not fade after wash. Only for maroon colour t-shirt colour lightly gone in first wash but not faded. I bought 5 tshirt of different colours. Highly recommended in so low price.
          </p>

          <div className="d-flex gap-3 text-muted" style={{ fontSize: '11px' }}>
            <span className="cursor-pointer d-inline-flex align-items-center gap-1"><BsHandThumbsUp />Helpful</span>
            <span className="cursor-pointer">Report</span>
          </div>
        </div>
        <div>
          <div className="d-flex align-items-center gap-2 mb-2">
            <div className="bg-light rounded-2 p-2 text-secondary">
              <BsImage />
            </div>
            <span className="fw-bold text-dark small">Jorge Herry</span>
          </div>
          <div className="d-flex align-items-center gap-2 mb-1">
            <div>
             {[...Array(5)].map((_, i) => (
               <BsStarFill key={i} className="text-warning" style={{ fontSize: '10px' }} />
             ))}
            </div>
            <span className="fw-bold small text-dark">Good Quality</span>
          </div>
          <div className="text-muted mb-2" style={{ fontSize: '11px' }}>
            Reviewed in U.S.A on 21 December 2023
          </div>
          <p className="text-muted small mb-2" style={{ fontSize: '12px', lineHeight: '1.5' }}>
            I liked the tshirt. it's pure cotton &amp; skin friendly, but the size is smaller to compare standard size, best rated
          </p>
          <div className="d-flex gap-3 text-muted" style={{ fontSize: '11px' }}>
            <span className="cursor-pointer d-inline-flex align-items-center gap-1"><BsHandThumbsUp />Helpful</span>
            <span className="cursor-pointer">Report</span>
          </div>
         </div>
       </div>
     </div>
   </div>
    </>
  )
}
export default ProductDetails;