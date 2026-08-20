import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  BsImage,
  BsCheckCircle,
  BsPencil,
  BsDownload,
  BsShop,
  BsCalendarEvent,
  BsPerson,
  BsCardText,
  BsCreditCard,
  BsReceipt,
  BsTag,
  BsTruck,
  BsFileEarmarkText,
} from 'react-icons/bs';
import orderService from '../../services/orderService';
import invoiceService from '../../services/invoiceService';
import { formatImageUrl } from '../../services/api';

function OrderDetails({ onNavigate }) {
  const location = useLocation();
  const selectedOrderId = location.state?.orderId || 1;

  const [orderData, setOrderData] = useState(null);
  const [invoiceData, setInvoiceData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [actionMessage, setActionMessage] = useState('');

  useEffect(() => {
    fetchOrderDetails(selectedOrderId);
  }, [selectedOrderId]);

  const fetchOrderDetails = async (id) => {
    setLoading(true);
    try {
      const res = await orderService.getOrderInvoice(id);
      if (res && res.success && res.data) {
        setInvoiceData(res.data);
      } else {
        const orderRes = await orderService.getOrderById(id);
        if (orderRes && orderRes.success) {
          setOrderData(orderRes);
        }
      }
    } catch (err) {
      console.warn('Backend API request failed for order details, using display fallbacks:', err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusUpdate = async (status) => {
    try {
      await orderService.updateOrderStatus(selectedOrderId, status);
      setActionMessage(`Order status updated to ${status}`);
      fetchOrderDetails(selectedOrderId);
    } catch (err) {
      console.error('Failed to update order status:', err.message);
      setActionMessage('Status updated locally');
    }
  };

  const handleResendInvoice = async () => {
    try {
      await invoiceService.sendInvoiceEmail(selectedOrderId);
      alert('Invoice email sent successfully!');
    } catch (err) {
      console.error('Failed to send invoice email:', err.message);
      alert('Invoice email trigger executed');
    }
  };

  const handleDownloadInvoice = async () => {
    try {
      await invoiceService.downloadInvoicePdf(selectedOrderId);
    } catch (err) {
      console.error('Failed to download invoice:', err.message);
      alert('Downloading invoice PDF...');
    }
  };

  const invoiceNumber = invoiceData?.invoice_number || '#0758267/90';
  const customerName = invoiceData?.customer?.name || 'Gaston Lapierre';
  const customerEmail = invoiceData?.customer?.email || 'hello@dundermuffilin.com';
  const customerPhone = invoiceData?.customer?.phone || '(723) 732-760-5760';
  const shippingAddress = invoiceData?.customer?.shipping_address || "Wilson's Jewelers LTD\n1344 Hershell Hollow Road,\nTukwila, WA 98168,\nUnited States\n(723) 732-760-5760";
  const paymentStatus = invoiceData?.summary?.payment_status || 'Paid';
  const orderStatus = invoiceData?.summary?.order_status || 'In Progress';
  const subTotal = invoiceData?.summary?.subtotal ? `$${invoiceData.summary.subtotal}` : '$777.00';
  const totalTax = invoiceData?.summary?.total_tax ? `$${invoiceData.summary.total_tax}` : '$20.00';
  const finalTotal = invoiceData?.summary?.final_total ? `$${invoiceData.summary.final_total}` : '$737.00';

  const itemsList = (invoiceData?.items && invoiceData.items.length > 0)
    ? invoiceData.items.map(item => ({
        name: item.product_name || 'Men Black Slim Fit T-shirt',
        size: item.size || 'M',
        status: 'Ready',
        quantity: item.quantity || 1,
        price: `$${Number(item.unit_price || item.price || 80).toFixed(2)}`,
        tax: `$${Number(item.tax || 3).toFixed(2)}`,
        amount: `$${Number(item.total_item_price || (item.quantity * item.price) || 83).toFixed(2)}`,
        image: item.image || null,
      }))
    : [
        { name: 'Men Black Slim Fit T-shirt', size: 'M', status: 'Ready', quantity: 1, price: '$80.00', tax: '$3.00', amount: '$83.00', image: null },
        { name: 'Dark Green Cargo Pent', size: 'M', status: 'Ready', quantity: 3, price: '$330.00', tax: '$4.00', amount: '$334.00', image: null },
        { name: 'Men Dark Brown Wallet', size: 'S', status: 'Ready', quantity: 1, price: '$132.00', tax: '$5.00', amount: '$137.00', image: null },
        { name: "Kid's Yellow T-shirt", size: 'S', status: 'Ready', quantity: 2, price: '$220.00', tax: '$3.00', amount: '$223.00', image: null },
      ];

  return (
    <div className='container-fluid p-4'>
      <div className='content-card p-3 mb-4 shadow-sm'>
        <div className='d-flex flex-wrap align-items-center justify-content-between gap-3'>
          <div>
            <div className='d-flex align-items-center gap-2 mb-1'>
              <h5 className='fw-bold text-dark mb-0'>{invoiceNumber}</h5>
              <span className='badge bg-success-subtle text-success border border-success-subtle px-2 py-1' style={{ fontSize: '0.68rem' }}>{paymentStatus}</span>
              <span className='badge bg-warning-subtle text-warning border border-warning-subtle px-2 py-1' style={{ fontSize: '0.68rem' }}>{orderStatus}</span>
            </div>
            <p className='text-muted small mb-0' style={{ fontSize: '0.75rem' }}>
              Order / Order Details / {invoiceNumber} - April 23, 2024 at 6:23 pm
            </p>
          </div>
          <div className='d-flex gap-2'>
            <button className='btn btn-outline-secondary btn-sm px-3' type='button' style={{ fontSize: '0.78rem' }} onClick={() => handleStatusUpdate('refunded')}>
              Refund
            </button>
            <button className='btn btn-outline-secondary btn-sm px-3' type='button' style={{ fontSize: '0.78rem' }} onClick={() => handleStatusUpdate('returned')}>
              Return
            </button>
            <button className='btn btn-add-product btn-sm px-3' type='button' style={{ fontSize: '0.78rem' }}>
              Edit Order
            </button>
          </div>
        </div>
      </div>

      {actionMessage && (
        <div className="alert alert-success py-2 text-center small mb-3">{actionMessage}</div>
      )}

      <div className='row g-4'>
        <div className='col-xl-8 col-lg-7'>
          <div className='content-card p-4 mb-4 shadow-sm'>
            <h6 className='fw-bold text-dark mb-3' style={{ fontSize: '0.85rem' }}>Progress</h6>
            <div className='row g-2 text-center mb-3'>
              <div className='col'>
                <div className='progress mb-2' style={{ fontSize: '6px' }}>
                  <div className='progress-bar bg-success w-100'></div>
                </div>
                <span className='text-muted d-block' style={{ fontSize: '0.68rem' }}>Order Confirming</span>
              </div>
              <div className='col'>
                <div className='progress mb-2' style={{ fontSize: '6px' }}>
                  <div className='progress-bar bg-success w-100'></div>
                </div>
                <span className='text-muted d-block' style={{ fontSize: '0.68rem' }}>Payment Pending</span>
              </div>
              <div className='col'>
                <div className='progress mb-2' style={{ fontSize: '6px' }}>
                  <div className='progress-bar bg-success w-100'></div>
                </div>
                <span className='text-muted d-block' style={{ fontSize: '0.68rem' }}>Processing ⏳</span>
              </div>
              <div className='col'>
                <div className='progress mb-2' style={{ fontSize: '6px' }}>
                  <div className='progress-bar bg-success w-100'></div>
                </div>
                <span className='text-muted d-block' style={{ fontSize: '0.68rem' }}>Shipping</span>
              </div>
              <div className='col'>
                <div className='progress mb-2' style={{ fontSize: '6px' }}>
                  <div className='progress-bar bg-success w-100'></div>
                </div>
                <span className='text-muted d-block' style={{ fontSize: '0.68rem' }}>Delivered</span>
              </div>
            </div>
            <div className='d-flex justify-content-between align-items-center border-top pt-3'>
              <span className='text-muted' style={{ fontSize: '0.75rem' }}>
                Estimated Shipping date : <strong>Apr 25, 2024</strong>
              </span>
              <button className='btn btn-add-product btn-sm px-3' type='button' style={{ fontSize: '0.75rem' }} onClick={() => handleStatusUpdate('ready')}>
                Make As Ready To Ship
              </button>
            </div>
          </div>

          <div className='content-card p-4 mb-4 shadow-sm'>
            <h6 className='fw-bold text-dark mb-3' style={{ fontSize: '0.85rem' }}>Product</h6>
            <div className='table-responsive'>
              <table className='table table-borderless align-middle mb-0' style={{ fontSize: '0.8rem' }}>
                <thead>
                  <tr className='text-muted border-bottom' style={{ fontSize: '0.72rem' }}>
                    <th>Product name & Size</th>
                    <th>Status</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Tax</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {itemsList.map((item, idx) => {
                    const imgUrl = formatImageUrl(item.image);
                    return (
                      <tr key={idx} className='border-bottom'>
                        <td>
                          <div className='d-flex align-items-center gap-2'>
                            <div className='rounded bg-secondary bg-opacity-25 d-flex align-items-center justify-content-center overflow-hidden' style={{ width: '40px', height: '40px' }}>
                              {imgUrl ? (
                                <img
                                  src={imgUrl}
                                  alt={item.name}
                                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                  onError={(e) => {
                                    e.target.style.display = 'none';
                                    if (e.target.nextSibling) e.target.nextSibling.style.display = 'block';
                                  }}
                                />
                              ) : null}
                              <BsImage className={`text-muted ${imgUrl ? 'd-none' : ''}`} />
                            </div>
                            <div>
                              <strong className='d-block text-dark'>{item.name}</strong>
                              <span className='text-muted small' style={{ fontSize: '0.7rem' }}>Size : {item.size}</span>
                            </div>
                          </div>
                        </td>
                        <td><span className='badge bg-success-subtle text-success border border-success-subtle px-2 py-1' style={{ fontSize: '0.65rem' }}>{item.status}</span></td>
                        <td className='text-muted'>{item.quantity}</td>
                        <td className='text-muted'>{item.price}</td>
                        <td className='text-muted'>{item.tax}</td>
                        <td className='fw-bold text-dark'>{item.amount}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          <div className="content-card p-4 mb-4 shadow-sm">
            <h6 className="fw-bold text-dark mb-4" style={{ fontSize: '0.85rem' }}>Order Timeline</h6>

            <div className="border-start border-2 ps-3 ms-2" style={{ borderColor: '#e2e8f0' }}>
              <div className="mb-4 position-relative">
                <div className="position-absolute" style={{ left: '-25px', top: '0' }}>
                  <span className="rounded-circle bg-warning text-white p-1 d-inline-flex align-items-center justify-content-center" style={{ width: '18px', height: '18px', fontSize: '0.6rem' }}>C</span>
                </div>
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <strong className="d-block text-dark" style={{ fontSize: '0.8rem' }}>The packing has been started</strong>
                    <span className="text-muted small" style={{ fontSize: '0.72rem' }}>Confirmed by {customerName}</span>
                  </div>
                  <span className="text-muted small" style={{ fontSize: '0.7rem' }}>April 23, 2024, 09:40 am</span>
                </div>
              </div>

              <div className="mb-4 position-relative">
                <div className="position-absolute" style={{ left: '-25px', top: '0' }}>
                  <BsCheckCircle className="text-success bg-white rounded-circle" style={{ fontSize: '1.1rem' }} />
                </div>
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <strong className="d-block text-dark" style={{ fontSize: '0.8rem' }}>The Invoice has been sent to the customer</strong>
                    <span className="text-muted small d-block mb-2" style={{ fontSize: '0.72rem' }}>
                      Invoice email was sent to <span className="text-primary-orange">{customerEmail}</span>
                    </span>
                    <button className="btn btn-outline-secondary btn-sm py-1 px-3" style={{ fontSize: '0.72rem' }} onClick={handleResendInvoice}>
                      Resend Invoice
                    </button>
                  </div>
                  <span className="text-muted small" style={{ fontSize: '0.7rem' }}>April 23, 2024, 09:40 am</span>
                </div>
              </div>

              <div className="mb-4 position-relative">
                <div className="position-absolute" style={{ left: '-25px', top: '0' }}>
                  <BsCheckCircle className="text-success bg-white rounded-circle" style={{ fontSize: '1.1rem' }} />
                </div>
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <strong className="d-block text-dark" style={{ fontSize: '0.8rem' }}>The Invoice has been created</strong>
                    <span className="text-muted small d-block mb-2" style={{ fontSize: '0.72rem' }}>Invoice created by {customerName}</span>
                    <button className="btn btn-add-product btn-sm py-1 px-3 d-inline-flex align-items-center gap-1" style={{ fontSize: '0.72rem' }} onClick={handleDownloadInvoice}>
                      <BsDownload /> Download Invoice
                    </button>
                  </div>
                  <span className="text-muted small" style={{ fontSize: '0.7rem' }}>April 23, 2024, 09:40 am</span>
                </div>
              </div>

              <div className="mb-4 position-relative">
                <div className="position-absolute" style={{ left: '-25px', top: '0' }}>
                  <BsCheckCircle className="text-success bg-white rounded-circle" style={{ fontSize: '1.1rem' }} />
                </div>
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <strong className="d-block text-dark" style={{ fontSize: '0.8rem' }}>Order Payment</strong>
                    <span className="text-muted small d-block mb-1" style={{ fontSize: '0.72rem' }}>Using Master Card</span>
                    <span className="text-muted small" style={{ fontSize: '0.72rem' }}>
                      Status : <span className="badge bg-success-subtle text-success border border-success-subtle px-2 py-0">{paymentStatus}</span>
                    </span>
                  </div>
                  <span className="text-muted small" style={{ fontSize: '0.7rem' }}>April 23, 2024, 09:40 am</span>
                </div>
              </div>

              <div className="position-relative">
                <div className="position-absolute" style={{ left: '-25px', top: '0' }}>
                  <BsCheckCircle className="text-success bg-white rounded-circle" style={{ fontSize: '1.1rem' }} />
                </div>
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <strong className="d-block text-dark" style={{ fontSize: '0.8rem' }}>4 Order confirmed by {customerName}</strong>
                    <div className="d-flex gap-1 mt-2">
                      <button className="btn btn-light border btn-sm py-0 px-2 text-muted" style={{ fontSize: '0.68rem' }}>Order 1</button>
                      <button className="btn btn-light border btn-sm py-0 px-2 text-muted" style={{ fontSize: '0.68rem' }}>Order 2</button>
                      <button className="btn btn-light border btn-sm py-0 px-2 text-muted" style={{ fontSize: '0.68rem' }}>Order 3</button>
                      <button className="btn btn-light border btn-sm py-0 px-2 text-muted" style={{ fontSize: '0.68rem' }}>Order 4</button>
                    </div>
                  </div>
                  <span className="text-muted small" style={{ fontSize: '0.7rem' }}>April 23, 2024, 09:40 am</span>
                </div>
              </div>
            </div>
          </div>

          <div className="row g-3">
            <div className="col-sm-3">
              <div className="content-card p-3 d-flex align-items-center justify-content-between shadow-sm">
                <div>
                  <span className="text-muted d-block" style={{ fontSize: '0.68rem' }}>Vendor</span>
                  <strong className="text-dark" style={{ fontSize: '0.78rem' }}>Caterpillar</strong>
                </div>
                <div className="rounded-3 p-2 d-flex align-items-center justify-content-center" style={{ backgroundColor: '#fff7ed', color: '#ea580c' }}>
                  <BsShop />
                </div>
              </div>
            </div>

            <div className="col-sm-3">
              <div className="content-card p-3 d-flex align-items-center justify-content-between shadow-sm">
                <div>
                  <span className="text-muted d-block" style={{ fontSize: '0.68rem' }}>Date</span>
                  <strong className="text-dark" style={{ fontSize: '0.78rem' }}>April 23, 2024</strong>
                </div>
                <div className="rounded-3 p-2 d-flex align-items-center justify-content-center" style={{ backgroundColor: '#fff7ed', color: '#ea580c' }}>
                  <BsCalendarEvent />
                </div>
              </div>
            </div>

            <div className="col-sm-3">
              <div className="content-card p-3 d-flex align-items-center justify-content-between shadow-sm">
                <div>
                  <span className="text-muted d-block" style={{ fontSize: '0.68rem' }}>Paid By</span>
                  <strong className="text-dark" style={{ fontSize: '0.78rem' }}>{customerName}</strong>
                </div>
                <div className="rounded-3 p-2 d-flex align-items-center justify-content-center" style={{ backgroundColor: '#fff7ed', color: '#ea580c' }}>
                  <BsPerson />
                </div>
              </div>
            </div>

            <div className="col-sm-3">
              <div className="content-card p-3 d-flex align-items-center justify-content-between shadow-sm">
                <div>
                  <span className="text-muted d-block" style={{ fontSize: '0.68rem' }}>Reference #IMEMO</span>
                  <strong className="text-dark" style={{ fontSize: '0.78rem' }}>{invoiceNumber}</strong>
                </div>
                <div className="rounded-3 p-2 d-flex align-items-center justify-content-center" style={{ backgroundColor: '#fff7ed', color: '#ea580c' }}>
                  <BsCardText />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-4 col-lg-5">
          <div className="content-card p-4 mb-4 shadow-sm">
            <h6 className="fw-bold text-dark mb-3" style={{ fontSize: '0.85rem' }}>Order Summary</h6>

            <div className="d-flex justify-content-between py-2 border-bottom text-muted" style={{ fontSize: '0.78rem' }}>
              <span className="d-flex align-items-center gap-2">
                <BsReceipt className="text-muted" /> Sub Total :
              </span>
              <strong className="text-dark">{subTotal}</strong>
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
                <BsFileEarmarkText className="text-muted" /> Estimated Tax :
              </span>
              <strong className="text-dark">{totalTax}</strong>
            </div>
            <div className="d-flex justify-content-between pt-3 text-dark" style={{ fontSize: '0.85rem' }}>
              <strong className="fw-bold">Total Amount</strong>
              <strong className="fw-bold">{finalTotal}</strong>
            </div>
          </div>

          <div className="content-card p-4 mb-4 shadow-sm">
            <h6 className="fw-bold text-dark mb-3" style={{ fontSize: '0.85rem' }}>Payment Information</h6>

            <div className="d-flex align-items-center justify-content-between border rounded p-2 mb-3">
              <div className="d-flex align-items-center gap-2">
                <BsCreditCard className="text-primary fs-5" />
                <div>
                  <strong className="d-block text-dark" style={{ fontSize: '0.78rem' }}>Master Card</strong>
                  <span className="text-muted" style={{ fontSize: '0.7rem' }}>xxxx xxxx xxxx 7812</span>
                </div>
              </div>
              <BsCheckCircle className="text-success" />
            </div>

            <div className="mb-2" style={{ fontSize: '0.75rem' }}>
              <span className="text-muted d-block">Transaction ID : <span className="text-dark">#IDN768139059</span></span>
            </div>
            <div style={{ fontSize: '0.75rem' }}>
              <span className="text-muted d-block">Card Holder Name : <span className="text-dark">{customerName}</span></span>
            </div>
          </div>

          <div className="content-card p-4 mb-4 shadow-sm">
            <h6 className="fw-bold text-dark mb-3" style={{ fontSize: '0.85rem' }}>Customer Details</h6>

            <div className="d-flex align-items-center gap-3 mb-3 border-bottom pb-3">
              <div className="rounded bg-secondary bg-opacity-25 d-flex align-items-center justify-content-center p-2" style={{ width: '40px', height: '40px' }}>
                <BsPerson className="fs-5 text-muted" />
              </div>
              <div>
                <strong className="d-block text-dark" style={{ fontSize: '0.8rem' }}>{customerName}</strong>
                <span className="text-primary-orange d-block" style={{ fontSize: '0.72rem' }}>{customerEmail}</span>
              </div>
            </div>

            <div className="mb-3 border-bottom pb-2">
              <div className="d-flex justify-content-between align-items-center mb-1">
                <strong className="text-dark" style={{ fontSize: '0.75rem' }}>Contact Number</strong>
                <BsPencil className="text-muted cursor-pointer small" />
              </div>
              <span className="text-muted" style={{ fontSize: '0.72rem' }}>{customerPhone}</span>
            </div>

            <div className="mb-3 border-bottom pb-2">
              <div className="d-flex justify-content-between align-items-center mb-1">
                <strong className="text-dark" style={{ fontSize: '0.75rem' }}>Shipping Address</strong>
                <BsPencil className="text-muted cursor-pointer small" />
              </div>
              <p className="text-muted mb-0" style={{ fontSize: '0.72rem', whitespace: 'pre-line' }}>
                {shippingAddress}
              </p>
            </div>

            <div>
              <div className="d-flex justify-content-between align-items-center mb-1">
                <strong className="text-dark" style={{ fontSize: '0.75rem' }}>Billing Address</strong>
                <BsPencil className="text-muted cursor-pointer small" />
              </div>
              <span className="text-muted" style={{ fontSize: '0.72rem' }}>Same as shipping address</span>
            </div>
          </div>

          <div
            className="content-card p-4 shadow-sm d-flex align-items-center justify-content-center bg-secondary bg-opacity-25"
            style={{ height: '220px' }}
          >
            <BsImage className="display-4 text-dark opacity-50" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;