import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import tick from "../../assets/tick.png";
import {
  BsBoxFill,
  BsExclamationCircleFill,
  BsImage,
  BsDownload
} from 'react-icons/bs';
import { getInvoiceById, sendInvoiceEmail, downloadInvoicePDF } from "../../services/api";

function InvoiceDetails() {
  const [searchParams] = useSearchParams();
  const invoiceId = searchParams.get('id') || '10';

  const [invoiceData, setInvoiceData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sendingEmail, setSendingEmail] = useState(false);
  const [emailStatus, setEmailStatus] = useState(null);
  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    let isMounted = true;

    getInvoiceById(invoiceId)
      .then((data) => {
        if (isMounted) {
          setInvoiceData(data);
          setError(null);
          setEmailStatus(null);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (isMounted) {
          console.error("Error fetching invoice details:", err);
          setError(err.message || "Failed to load invoice details");
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [invoiceId]);

  const handlePrint = () => {
    window.print();
  };

  const handleSendEmail = async () => {
    try {
      setSendingEmail(true);
      setEmailStatus(null);
      await sendInvoiceEmail(invoiceId);
      setEmailStatus({ success: true, message: "Invoice email sent successfully!" });
    } catch (err) {
      console.error("Send email error:", err);
      setEmailStatus({ success: false, message: err.message || "Failed to send email" });
    } finally {
      setSendingEmail(false);
    }
  };

  const handleDownloadPDF = async () => {
    try {
      setDownloading(true);
      const invoiceNumber = invoiceData?.invoice?.invoice_number || invoiceId;
      await downloadInvoicePDF(invoiceId, invoiceNumber);
    } catch (err) {
      console.error("Download PDF error:", err);
      alert(err.message || "Failed to download PDF");
    } finally {
      setDownloading(false);
    }
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return 'N/A';
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return dateStr;
    return date.toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' });
  };

  if (loading) {
    return (
      <div className="w-100 py-5 text-center text-muted">
        <div className="spinner-border spinner-border-sm me-2" role="status"></div>
        Loading invoice details...
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-100 py-5 text-center">
        <div className="alert alert-danger mx-auto" style={{ maxWidth: '600px' }}>
          {error}
        </div>
      </div>
    );
  }

  const invoice = invoiceData?.invoice || {};
  const billing = invoiceData?.billing || {};
  const items = invoiceData?.items || [];
  const summary = invoiceData?.summary || {};

  const isPaid = (invoice.payment_status || '').toLowerCase() === 'paid' || (invoice.payment_status || '').toLowerCase() === 'completed';

  return (
    <div className="w-100">
      <div className="mx-auto" style={{ maxWidth: '1000px' }}>

        {emailStatus && (
          <div className={`alert ${emailStatus.success ? 'alert-success' : 'alert-danger'} alert-dismissible fade show mb-3`} role="alert">
            {emailStatus.message}
            <button type="button" className="btn-close" onClick={() => setEmailStatus(null)} aria-label="Close"></button>
          </div>
        )}

        <div className="content-card p-0 mb-4 overflow-hidden shadow-sm">
          <div
            className="p-4 position-relative"
            style={{ backgroundColor: '#e6f4f1', borderBottom: '1px solid #d1e7e2' }}
          >
            <div className="row align-items-center">
              <div className="col-sm-6 mb-3 mb-sm-0">
                <div className="d-flex align-items-center gap-2 fw-bold text-dark fs-5 mb-2">
                  <span className="logo-icon bg-primary-orange text-white rounded p-1 d-inline-flex">
                    <BsBoxFill style={{ fontSize: '1.1rem' }} />
                  </span>
                  Larkon
                </div>
                <h6 className="fw-bold text-dark mb-1" style={{ fontSize: '0.85rem' }}>Larkon Admin</h6>
                <p className="text-muted small mb-0" style={{ fontSize: '0.75rem', lineHeight: '1.4' }}>
                  1729 Bangor St.<br />
                  Houlton,ME,04370,United States<br />
                  Phone:+(1)(142)-532-9019
                </p>
              </div>
              <div className="col-sm-6 text-start ps-3">
                <div className="text-muted small" style={{ fontSize: '0.78rem', lineHeight: '1.6' }}>
                  <div>
                    <strong className="text-dark me-3">Invoice :</strong>
                    <span>{invoice.invoice_number ? (invoice.invoice_number.startsWith('#') ? invoice.invoice_number : `#${invoice.invoice_number}`) : '#INV-0000'}</span>
                  </div>

                  <div>
                    <strong className="text-dark me-3">Issue Date :</strong>
                    <span>{formatDate(invoice.order_date)}</span>
                  </div>

                  <div>
                    <strong className="text-dark me-3">Due Date :</strong>
                    <span>{formatDate(invoice.order_date)}</span>
                  </div>

                  <div>
                    <strong className="text-dark me-3">Amount :</strong>
                    <span>${summary.grand_total || '0.00'}</span>
                  </div>
                  <div className="mt-1">
                    <strong className="text-dark me-3">Status :</strong>{''}
                    <span
                      className={`badge ${isPaid ? 'bg-success' : 'bg-warning text-dark'} px-2 py-1`}
                      style={{ fontSize: '0.68rem', backgroundColor: isPaid ? '#10b981' : undefined }}
                    >
                      {invoice.payment_status ? invoice.payment_status.charAt(0).toUpperCase() + invoice.payment_status.slice(1) : 'Pending'}
                    </span>
                  </div>
                </div>
              </div>
              {isPaid && (
                <div
                  className="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center"
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    zIndex: 10,
                  }}
                >
                  <img
                    src={tick}
                    alt="Paid"
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "contain",
                    }}
                  />
                </div>
              )}
            </div>
          </div>

          <div className="p-4 pt-5">
            <div className="row g-4 mb-4">
              <div className="col-sm-6">
                <h6 className="fw-bold text-dark mb-2" style={{ fontSize: '0.825rem' }}>Issue From :</h6>
                <h6 className="fw-bold text-dark mb-1" style={{ fontSize: '0.875rem' }}>Larkon Admin.INC </h6>
                <p className="text-muted small mb-0" style={{ fontSize: '0.75rem', lineHeight: '1.5' }}>
                  2437 Romano Street Cambridge, MA 02141<br />
                  Phone : +(31) 781-417-2004<br />
                  Email : JulianeKuhn@jourrapide.com
                </p>
              </div>

              <div className="col-sm-6">
                <h6 className="fw-bold text-dark mb-2" style={{ fontSize: '0.825rem' }}>Issue For :</h6>
                <h6 className="fw-bold text-dark mb-1" style={{ fontSize: '0.875rem' }}>{billing.name || 'Customer'}</h6>
                <p className="text-muted small mb-0" style={{ fontSize: '0.75rem', lineHeight: '1.5' }}>
                  {invoice.shipping_address || '1344 Hershell Hollow Road WA 98168, USA'}<br />
                  Phone : {billing.phone || '+(123) 732-760-5760'}<br />
                  Email : {billing.email || 'hello@dundermuffin.com'}
                </p>
              </div>
            </div>

            <div className="table-responsive mb-4">
              <table className="table align-middle mb-0" style={{ fontSize: '0.8rem' }}>
                <thead>
                  <tr className="text-muted border-bottom" style={{ fontSize: '0.725rem' }}>
                    <th>Product Name</th>
                    <th className="text-center">Quantity</th>
                    <th className="text-center">Price</th>
                    <th className="text-center">Tax</th>
                    <th className="text-end">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {items.length === 0 ? (
                    <tr>
                      <td colSpan="5" className="text-center py-3 text-muted">
                        No items attached to this invoice.
                      </td>
                    </tr>
                  ) : (
                    items.map((item, idx) => (
                      <tr key={item.id || idx}>
                        <td>
                          <div className="d-flex align-items-center gap-2">
                            <div className="bg-light rounded p-2 text-secondary d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px' }}>
                              <BsImage style={{ fontSize: '14px' }} />
                            </div>
                            <div>
                              <div className="fw-bold text-dark" style={{ fontSize: '0.8rem' }}>{item.product_name}</div>
                              <div className="text-muted small" style={{ fontSize: '0.7rem' }}>Size : {item.size || 'Standard'}</div>
                            </div>
                          </div>
                        </td>
                        <td className="text-center">{item.quantity}</td>
                        <td className="text-center">${item.price}</td>
                        <td className="text-center">${item.tax}</td>
                        <td className="text-end fw-medium text-dark">${item.total}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            <div className="row justify-content-end mb-4">
              <div className="col-sm-6 col-md-5 text-end">
                <div className="d-flex justify-content-between text-muted mb-2 small" style={{ fontSize: '0.78rem' }}>
                  <span>Sub Total :</span>
                  <span className="fw-medium text-dark">${summary.subtotal || '0.00'}</span>
                </div>

                <div className="d-flex justify-content-between text-muted mb-2 small" style={{ fontSize: '0.78rem' }}>
                  <span>Discount :</span>
                  <span className="fw-medium text-dark">${summary.discount || '0.00'}</span>
                </div>

                <div className="d-flex justify-content-between text-muted mb-2 small" style={{ fontSize: '0.78rem' }}>
                  <span>Estimated Tax :</span>
                  <span className="fw-medium text-dark">${summary.tax || '0.00'}</span>
                </div>
                <hr className="my-2" />
                <div className="d-flex justify-content-between text-muted mb-2 small" style={{ fontSize: '0.78rem' }}>
                  <span>Grand Amount :</span>
                  <span className="fw-bold text-dark">${summary.grand_total || '0.00'}</span>
                </div>
              </div>
            </div>

            <div className="p-3 mb-4 rounded-3 d-flex align-items-start gap-2"
              style={{ backgroundColor: '#fce7f3', color: '#ff5e5e', fontSize: '0.75rem', lineHeight: '1.5' }}
            >
              <BsExclamationCircleFill className="mt-1 flex-shrink-0" style={{ fontSize: '14px' }} />
              <span>
                All accounts are to be paid within 7 days from receipt of invoice. To be paid by cheque or credit card or direct payment online. If account is not paid within 7 days the credit details supplied as confirmation of work undertaken will be charged the agreed quoted fee noted above.
              </span>
            </div>

            <div className="d-flex justify-content-end gap-2">
              <button
                className="btn text-white px-3 py-1 small rounded-2 border-0 d-inline-flex align-items-center gap-1"
                type="button"
                style={{ backgroundColor: '#0ea5e9', fontSize: '0.78rem', fontWeight: '500' }}
                onClick={handleDownloadPDF}
                disabled={downloading}
              >
                <BsDownload />
                {downloading ? 'Downloading...' : 'PDF'}
              </button>

              <button
                className="btn text-white px-4 py-1 small rounded-2 border-0"
                type="button"
                style={{ backgroundColor: '#2dd4bf', fontSize: '0.78rem', fontWeight: '500' }}
                onClick={handlePrint}
              >
                Print
              </button>

              <button
                className="btn px-4 py-1 small rounded-2"
                type="button"
                style={{
                  border: '1px solid #f87171',
                  color: '#ef4444',
                  backgroundColor: '#ffffff',
                  fontSize: '0.78rem',
                  fontWeight: '500',
                }}
                onClick={handleSendEmail}
                disabled={sendingEmail}
              >
                {sendingEmail ? 'Sending...' : 'Send Email'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvoiceDetails;