
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "../components/modal.css"

const CheckOutpage = () => {
    const [show, setShow] = useState()
    const [activeTab, setActiveTab] = useState("Visa");

    const handleTabChange = (tabId) => {
        setActiveTab(tabId)
    }

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);



    
  return (
    <div className='modalcard'>
       <Button variant='primary' className='py-2' onClick={handleShow}> Proceed to Checkout</Button>
       <Modal

            show={show}
            onHide={handleClose}
            onimation={false}
            className='modal fade'
            centered
       >
        <div className='modal-dialog'>
            <h5 className='px-3 md-3'>Select Your Payment Method</h5>
            <div className='modal-content'>
                <div className='modal-body'>
                        <div className="tads mt-3">
                            <ul className='nav nav-tabs' id='myTab' role='tablist'>
                                <li className='nav-item' role='presentation'>
                            <a className={`nav-link ${activeTab === "visa" ? "active" : "" }`} 

                                        id='visa-tab'
                                        data-toggle="tab"
                                        role='tab'
                                        aria-controls='visa'
                                        aria-selected={activeTab === "visa"}
                                        onClick={() => handleTabChange("visa")}
                            href="#visa"><img src="https://i.imgur.com/sB4jftM.png" alt="" 
                            width="80" />
                            </a>
                            
                            </li>
                            <li className='nav-item' role='presentation'>
                            <a className={`nav-link ${activeTab === "paypal" ? "active" : "" }`} 

                                        id='paypal-tab'
                                        data-toggle="tab"
                                        role='tab'
                                        aria-controls='paypal'
                                        aria-selected={activeTab === "paypal"}
                                        onClick={() => handleTabChange("paypal")}
                            href="#paypal"><img src="https://upload.wikimedia.org/wikipedia/commons/3/31/PayPal_Logo2014.svg" alt="" 
                            width="70" />
                            </a>
                            
                            </li>
                            </ul>
                            <div className='tab-content' id="myTabContent">
                                <div className={`tab-pane fade ${activeTab === "visa" ? "show active" : ""}`}

                                    id='visa'
                                    role='tabpanel'
                                    aria-labelledby='visa-tab'
                                >
                                    <div className='mt-4 mx-4'>
                                        <div className='text-center'>
                                            <h5>Credit card</h5>
                                        </div>
                                        <div className='form mt-3'>
                                            <div className='inputbox'>
                                                <input type="text" name="name" id="name" className='form-control' required />
                                                <span>Cardholder Name</span>
                                            </div>
                                            <div className='inputbox'>
                                                <input type="text" name="name" id="number" 
                                                 min="1" max="999" className='form-control' required />
                                                <span>Card Number </span> <i className='fa fa-eye'></i>
                                            </div>
                                            <div className='d-flex flex-row'>
                                            <div className='inputbox'>
                                                <input type="text" name="name" id="number" 
                                                 min="1" max="999" className='form-control' required />
                                                <span>Expiration Data </span> 
                                            </div>
                                            <div className='inputbox'>

                                                <input type="text" name="name" id="number" 
                                                 min="1" max="999" className='form-control' required />
                                                <span>cw </span> 
                                            </div>
                                            <div className='px-5 pay'>
                                                <button className='btn btn-success btn-block'>Order</button>
                                            </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                    <div className={`tab-pane fade ${activeTab === "paypal" ? "show active" : ""}`}
                                    
                                    
                                        
                                    id='paypal'
                                    role='tabpanel'
                                    aria-labelledby='paypal-tab'
                                    
                                    >

                                <div className='mt-4 mx-4'>
                                        <div className='text-center'>
                                            <h5>Paypal Acount Info</h5>
                                        </div>
                                        <div className='form mt-3'>
                                            <div className='inputbox'>
                                                <input type="text" name="name" id="name" className='form-control' required />
                                                <span>Enter your email</span>
                                            </div>
                                            <div className='inputbox'>
                                                <input type="text" name="name" id="number" 
                                                 min="1" max="999" className='form-control' required />
                                                <span>Your Name   </span> 
                                            </div>
                                            <div className='d-flex flex-row'>
                                            <div className='inputbox'>
                                                <input type="text" name="name" id="number" 
                                                 min="1" max="999" className='form-control' required />
                                                <span>Extra info</span> 
                                            </div>
                                            <div className='px-5 pay'>
                                                <button className='btn btn-success btn-block'> paypla</button>
                                            </div>
                                            </div>

                                        </div>
                                    </div>
                                    </div>
                          </div>

                               <p className='mt-3 px-4 p-Disclaimer'>Payment Disclaimer: In no event shall payment or partial payment by Owner for any material or</p> 
                        </div>
                </div>
            </div>
        </div>

       </Modal>
    </div>
  )
}

export default CheckOutpage


