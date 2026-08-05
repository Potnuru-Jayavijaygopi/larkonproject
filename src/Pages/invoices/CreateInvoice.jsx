import { useState } from "react";
import Sidebar from '../../components/Sidebar';
import logo from "../../assets/logo.png";


import{
 
  BsExclamationCircleFill,
  BsImage,
} from 'react-icons/bs';

function CreateInvoice({onNavigate}) {
  const[invoiceNumber, setInvoiceNumber] = useState('#INV-0758267/90');
  const[issueDate, setIssueDate] = useState('');
  const[dueDate, setDueDate] = useState('');
  const[amount, setAmount] = useState('000');
  const[status, setStatus] = useState('Paid');


  const[senderName, setSenderName] = useState('');
  const[senderAddress, setSenderAddress] = useState('');
  const[senderPhone, setSenderPhone] = useState('');

  const[fromName, setFromName] = useState('');
  const[fromAddress, setFromAddress] = useState('');
  const[fromPhone, setFromPhone] = useState('');
  const[fromEmail, setFromEmail] = useState('');

  const[formName, setForName] = useState('');
  const[forAddress, setForAddress] = useState('');
  const[forPhone, setForPhone] = useState('');
  const[forEmail, setForEmail] = useState('');

  const[items, setItems] = useState([
    {id:1, name: '', size: '', quantity: 1, price:'000', tax:'000', total: '000'},

  ]);

  const[subTotal, setSubTotal] = useState('000');
  const[discount, setDiscount] = useState('000');
  const[taxAmount, setTaxAmount] = useState('000');
  const[grandAmount, setGrandAmount] = useState('000');

  const handleAddMore = () => {
    setItems([
      ...items,
      {id: Date.now(), name: '', size: '', quantity:1, price: '000', tax: '000', total: '000'},
     ]);
    };
    
    const handleClearProducts = () => {
     setItems([
      
      {id: 1, name: '', size: '', quantity:1, price: '000', tax: '000', total: '000'},
     ]); 
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      alert('Invoice Created Successfully!');
      if (onNavigate) {
        onNavigate('invoices');
      }
    };


    return (
      <div className="app-container">
        <Sidebar activePage="create-invoice" onNavigate={onNavigate}/>
        <div className="main-content">
          
          <main className="page-container">
           <div className="mx-auto" style={{maxWidth: '920px'}}>
            <form onSubmit={handleSubmit}>
              <div className="content-card p-4 mb-4 shadow-sm">
               <div className="row g-3 mb-4">
                <div className="col-sm-6">
                  <div
  className="d-inline-flex align-items-center px-3 py-2 mb-3"
  style={{ border: "1px dashed #FF8A4C", borderRadius: "12px", gap: "6px", }} >
  <img src={logo} alt="logo" width="60" height="auto" />

  <span className="fw-bold" style={{ fontSize: "18px", color: "#111827", lineHeight: "22px", }} > Larkon </span>
</div>

                 <div className="mb-2">
                  <label htmlFor="senderNameInput" className="form-label text-muted" style={{fontSize: '0.75rem'}}>Sender Name</label>
                  <input
                  id="senderNameInput"
                  type="text"
                  className="form-control form-control-sm"
                  placeholder="First name"
                  style={{fontSize: '0.78rem'}}
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  />
                </div>

                <div className="mb-2">
                  <label htmlFor="senderAddressInput" className="form-label text-muted" style={{fontSize: '0.75rem'}}>Sender Full Address</label>
                  <textarea
                  id="senderAddressInput"
                  className="form-control form-control-sm"
                  rows="2"
                  placeholder="Enter address"
                  style={{fontSize: '0.78rem'}}
                  value={senderAddress}
                  onChange={(e) => setSenderAddress(e.target.value)}
                  ></textarea>
                </div>

                <div className="mb-2">
                  <label htmlFor="senderPhoneInput" className="form-label text-muted" style={{fontSize: '0.75rem'}}>Phone number</label>
                  <input
                  id="senderPhoneInput"
                  type="text"
                  className="form-control form-control-sm"
                  placeholder="Number"
                  style={{fontSize: '0.78rem'}}
                  value={senderPhone}
                  onChange={(e) => setSenderPhone(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mb-2">
                  <label htmlFor="invoNoInput" className="form-label text-muted" style={{fontSize: '0.75rem'}}>Invoice Number :</label>
                  <input
                  id="invoNoInput"
                  type="text"
                  className="form-control form-control-sm"
                  style={{fontSize: '0.78rem'}}
                  value={invoiceNumber}
                  onChange={(e) => setInvoiceNumber(e.target.value)}
                  />
                </div>

                <div className="mb-2">
                  <label htmlFor="issueDateInput" className="form-label text-muted" style={{fontSize: '0.75rem'}}>Issue Date :</label>
                  <input
                  id="issueDateInput"
                  type="text"
                  className="form-control form-control-sm"
                  placeholder="dd-mm-yy"
                  style={{fontSize: '0.78rem'}}
                  value={issueDate}
                  onChange={(e) => setIssueDate(e.target.value)}
                  />
                </div>

                <div className="mb-2">
                  <label htmlFor="dueDateInput" className="form-label text-muted" style={{fontSize: '0.75rem'}}>Due Date :</label>
                  <input
                  id="dueDateInput"
                  type="text"
                  className="form-control form-control-sm"
                  placeholder="dd-mm-yy"
                  style={{fontSize: '0.78rem'}}
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="invAmountInput" className="form-label text-muted" style={{fontSize: '0.75rem'}}>Amount :</label>
                  <div className="input-group input-group-sm">
                    <span className="input-group-text" style={{fontSize: '0.78rem'}}>$</span>
                    <input
                  id="invAmountInput"
                  type="text"
                  className="form-control"
                  placeholder="000"
                  style={{fontSize: '0.78rem'}}
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  />
                </div>
               </div>

               <div className="mb-2">
                <label htmlFor="invStatysSelect" className="form-label text-muted" style={{fontSize: '0.75rem'}}>Status :</label>
                <select
                id="invStatusSelect"
                className="form-select form-select-sm"
                style={{fontSize: '0.78rem'}}
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="Paid">Paid</option>
                   <option value="Pending">Pending</option>
                    <option value="Cancel">Cancel</option>
                 </select>
                
               </div>
               </div>
               </div>

               <div className="row g-3 mb-4">
                <div className="col-sm-6">
                  <h6 className="fw-bold text-dark mb-2" style={{fontSize: '0.825rem'}}>Issue From :</h6>
                  <div className="mb-2">
                    <input
                    type="text"
                    className="form-control form-control-sm"
                    placeholder="First name"
                    style={{fontSize: '0.78rem'}}
                    value={fromName}
                    onChange={(e) => setFromName (e.target.value)}
                    
                    />
                  </div>

                  <div className="mb-2">
                    <textarea
                    className="form-control form-control-sm"
                    rows="2"
                    placeholder="Enter address"
                    style={{fontSize: '0.78rem'}}
                    value={fromAddress}
                    onChange={(e) => setFromAddress (e.target.value)}
                    

                    ></textarea>
                  </div>

                  <div className="mb-2">
                    <input
                    type="text"
                    className="form-control form-control-sm"
                    placeholder="Number"
                    style={{fontSize: '0.78rem'}}
                    value={fromPhone}
                    onChange={(e) => setFromPhone (e.target.value)}
                    />
                    
                  </div>

                  <div className="mb-2">
                    <input
                    type="email"
                    className="form-control form-control-sm"
                    placeholder="Email Address"
                    style={{fontSize: '0.78rem'}}
                    value={fromEmail}
                    onChange={(e) => setFromEmail (e.target.value)}
                    />

                    
                  </div>
                  
                </div>

                <div className="col-sm-6">
                  <h6 className="fw-bold text-dark mb-2" style={{fontSize: '0.825rem'}}>Issue For :</h6>
                  <div className="mb-2">
                    <input
                    type="text"
                    className="form-control form-control-sm"
                    placeholder="First name"
                    style={{fontSize: '0.78rem'}}
                    value={formName}
                    onChange={(e) => setForName(e.target.value)}
                    />
                    </div>

                    <div className="mb-2">
                    <textarea
                    type="text"
                    className="form-control form-control-sm"
                    rows="2"
                    placeholder="Enter address"
                    style={{fontSize: '0.78rem'}}
                    value={forAddress}
                    onChange={(e) => setForAddress(e.target.value)}
                    ></textarea>
                    </div>

                    <div className="mb-2">
                    <input
                    type="text"
                    className="form-control form-control-sm"
                    placeholder="Number"
                    style={{fontSize: '0.78rem'}}
                    value={forPhone}
                    onChange={(e) => setForPhone(e.target.value)}
                    />
                    </div>

                    <div className="mb-2">
                    <input
                    type="text"
                    className="form-control form-control-sm"
                    placeholder="Email Address"
                    style={{fontSize: '0.78rem'}}
                    value={forEmail}
                    onChange={(e) => setForEmail(e.target.value)}
                    />
                    </div>
                 </div>
                </div>

                <div className="table-responsive mb-3">
                  <table className="table align-middle mb-0" style={{fontSize: '0.78rem'}}>
                    <thead>
                      <tr className="bg-light text-muted" style={{fontSize: '0.78rem'}}>
                        <th style={{width: '40%'}}>Product Name</th>
                        <th className="text-center" style={{width: '15%'}}>Quantity</th>
                        <th className="text-center" style={{width: '15%'}}>Price</th>
                        <th className="text-center" style={{width: '15%'}}>Tax</th>
                        <th className="text-center" style={{width: '15%'}}>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {items.map((item, index) => (
                        <tr key={item.id}>
                          <td>
                            <div className="d-flex align-items-center gap-2">
                              <div className="bg-light rounded p-2 text-secondary d-flex align-items-center justify-content-center flex-shrink-0"
                              style={{width: '32px', height: '32px'}}
                              >
                                <BsImage style={{fontSize: '12px'}}/>
                              </div>
                              <div className="flex=grow-1">
                                <input
                                type="text"
                               className="form-control form-control-sm mb-1"
                              placeholder="Product Name"
                               style={{fontSize: '0.78rem'}}
                               value={item.name}
                             onChange={(e) => {
                              const updated = [...items];
                              updated[index].name= e.target.value;
                              setItems(updated);
                             }}
                             />

                             <input
                                type="text"
                               className="form-control form-control-sm mb-1"
                              placeholder="Product Size"
                               style={{fontSize: '0.78rem'}}
                               value={item.size}
                             onChange={(e) => {
                              const updated = [...items];
                              updated[index].size= e.target.value;
                              setItems(updated);
                             }}
                             />

                              </div>
                            </div>
                          </td>
                          <td className="text-center">
                            <div className="d-inline-flex align-items-center border rounded bg-light p-1">
                              <button 
                              type="button"
                              className="btn btn-sm btn-light border-0 px-2 py-0"
                              style={{fontSize: '0.75rem'}}
                              onClick={() => {
                                const updated = [...items];
                                updated[index].quantity = Math.max(1, updated[index].quantity -1);
                                setItems(updated)

                              }}
                              >
                                -
                              </button>
                              <span className="px-2 fw-bold small"style={{fontSize: '0.75rem'}}>{item.quantity}</span>
                              <button
                              type="button"
                              className="btn btn-sm btn-light border-0 px-2 py-0"
                              style={{fontSize: '0.75rem'}}
                              onClick={() => {
                                const updated = [...items];
                                updated[index].quantity += 1;
                                setItems(updated);

                              }}
                              >
                                +

                              
                              </button>
                            </div>
                          </td>
                          <td>
                            <div className="input-group input-group-sm">
                              <span className="input-group-text" style={{fontSize: '0.75rem'}}>$</span>
                              <input
                              type="text"
                              className="form-control"
                              placeholder="000"
                              style={{fontSize: '0.75rem'}}
                              value={item.price}
                              onChange={(e) => {
                                const updated = [...items];
                                updated[index].price = e.target.value;
                                setItems(updated);
                              }}
                              />
                            </div>
                          </td>
                          <td>
                            <div className="input-group input-group-sm">
                              <span className="input-group-text" style={{fontSize: '0.75rem'}}>$</span>
                              <input
                              type="text"
                              className="form-control"
                              placeholder="000"
                              style={{fontSize: '0.75rem'}}
                              value={item.tax}
                              onChange={(e) => {
                                const updated = [...items];
                                updated[index].tax = e.target.value;
                                setItems(updated);
                              }}
                              />
                            </div>
                          </td>
                          <td>
                            <div className="input-group input-group-sm">
                              <span className="input-group-text" style={{fontSize: '0.75rem'}}>$</span>
                              <input
                              type="text"
                              className="form-control"
                              placeholder="000"
                              style={{fontSize: '0.75rem'}}
                              value={item.total}
                              onChange={(e) => {
                                const updated = [...items];
                                updated[index].total = e.target.value;
                                setItems(updated);
                              }}
                              />
                              </div>

                          </td>
                          
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  </div> 


                  <div className="d-flex justify-content-end gap-2 mb-3 w-100">
                    <button
                    className="btn btn-add-product btn-sm px-3 py-1"
                    type="button"
                    style={{fontSize: '0.78rem'}}
                    onClick={handleClearProducts}
                    >
                      Clear Product
                    </button>

                    <button
                    className="btn btn-outline-danger btn-sm px-3 py-1"
                    type="button"
                    style={{fontSize: '0.78rem', borderColor: '#ff5e29', color: '#ff5e29'}}
                    onClick={handleAddMore}
                    >
                      Add More
                    </button>

                  </div>

                  <div className="row justify-content-end mb-4">
                    <div className="col-sm-6 col-md-5">
                      <div className="mb-2">
                        <label htmlFor="subTotalInput" className="form-label text-muted" style={{fontSize: '0.75rem'}}>Sub Total :</label>
                        <div className="input-group input-group-sm">
                          <span className="input-group-text" style={{fontSize: '0.75rem'}}>$</span>
                          <input
                          id="subTotalInput"
                          type="text"
                          className="form-control"
                          placeholder="000"
                          style={{fontSize: '0.75rem'}}
                          value={subTotal}
                          onChange={(e) => setSubTotal(e.target.value)}
                          />
                        </div>
                    </div>

                    <div className="mb-2">
                      <label htmlFor="discountInput" className="form-label text-muted" style={{fontSize: '0.75rem'}}>Discount :</label>
                      <div className="input-group input-group-sm">
                          <span className="input-group-text" style={{fontSize: '0.75rem'}}>$</span>
                          <input
                          id="discountInput"
                          type="text"
                          className="form-control"
                          placeholder="000"
                          style={{fontSize: '0.75rem'}}
                          value={discount}
                          onChange={(e) => setDiscount(e.target.value)}
                          />
                        </div>
                     </div>

                     <div className="mb-2">
                      <label htmlFor="taxAmountInput" className="form-label text-muted" style={{fontSize: '0.75rem'}}>Estimated Tax (15.5%) :</label>
                      <div className="input-group input-group-sm">
                          <span className="input-group-text" style={{fontSize: '0.75rem'}}>$</span>
                          <input
                          id="taxAmountInput"
                          type="text"
                          className="form-control"
                          placeholder="000"
                          style={{fontSize: '0.75rem'}}
                          value={taxAmount}
                          onChange={(e) => setTaxAmount(e.target.value)}
                          />
                        </div>
                     </div>

                     <div className="mb-2">
                      <label htmlFor="grandAmountInput" className="form-label text-muted" style={{fontSize: '0.75rem'}}>Grand Amount :</label>
                      <div className="input-group input-group-sm">
                          <span className="input-group-text" style={{fontSize: '0.75rem'}}>$</span>
                          <input
                          id="grandAmountInput"
                          type="text"
                          className="form-control"
                          placeholder="000"
                          style={{fontSize: '0.75rem'}}
                          value={grandAmount}
                          onChange={(e) => setGrandAmount(e.target.value)}
                          />
                        </div>
                     </div>
                    </div>
                  </div>

                  <div
                  className="p-3 rounded-3 d-flex align-items-start gap-2"
                  style={{backgroundColor: '#fff5f5', color: '#d9534f', fontSize: '0.75rem', lineHeight: '1.5'}}
                  >
                    <BsExclamationCircleFill className="mt-1 flex-shrink-0" style={{fontSize: '14px'}}/>
                    <span>
                      All accounts are to be paid within 7 days from receipt of invoice. To be paid by cheque or credit or direct payment online. If account is not paid within 7 days the credits details supplied as confirmation of work undertaken will be charged the agreed quoted fee noted above.
                    </span>
                  </div>
                  </div>
            </form>
            </div> 
          </main>

          
        </div>
      </div>
    );


}
export default CreateInvoice;

