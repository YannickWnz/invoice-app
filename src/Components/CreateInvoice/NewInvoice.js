import './NewInvoice.scss'

export default function NewInvoice() {
    return (
        <div className="new-invoice">
            <div className='container'>
                <div className='container-contents'>
                    <div className='wrapper-contents'>
                        <h1>New Invoice</h1>
                        <div className='form-contents'>
                            <form className='form'>
                                <div className='bill-from-section'>
                                    <p className='bill-from'>Bill from</p>
                                    <div className='street-address-input'>
                                        <label>
                                            Street Address
                                            <br/>
                                            <input type='text' />
                                        </label>
                                        <p className='empty-address error-msg'>Can't be empty</p>
                                    </div>
                                    <div className='city-pcode-country'>
                                        <div className='city'>
                                            <label>
                                                City
                                                <br/>
                                                <input type='text' />
                                            </label>
                                            <p className='empty-error error-msg'>Can't be empty</p>
                                        </div>
                                        <div className='pcode'>
                                            <label>
                                                Post Code
                                                <br/>
                                                <input type='text' />
                                            </label>
                                            <p className='empty-error error-msg'>Can't be empty</p>
                                        </div>
                                        <div className='country'>
                                            <label>
                                                Country
                                                <br/>
                                                <input type='text' />
                                            </label>
                                            <p className='empty-error error-msg'>Can't be empty</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='bill-to-section'>
                                    <p>Bill to</p>
                                    <div className='client-name'>
                                        <label>
                                            Client's Name
                                            <br/>
                                            <input type='text' />
                                        </label>
                                        <p className='error-msg'>Can't be empty</p>
                                    </div>
                                    <div className='client-email'>
                                        <label>
                                            Client's Email
                                            <br/>
                                            <input type='email' />
                                        </label>
                                        <p className='error-msg'>Can't be empty</p>
                                    </div>
                                    <div className='street'>
                                        <label>
                                            Street Address
                                            <br/>
                                            <input type='text' />
                                        </label>
                                        <p className='error-msg'>Can't be empty</p>
                                    </div>
                                    <div className='city-pcode-country'>
                                        <div className='city'>
                                            <label>
                                                City
                                                <br/>
                                                <input type='text' />
                                            </label>
                                            <p className='error-msg'>Can't be empty</p>
                                        </div>
                                        <div className='pcode'>
                                            <label>
                                                Post Code
                                                <br/>
                                                <input type='text' />
                                            </label>
                                            <p className='error-msg'>Can't be empty</p>
                                        </div>
                                        <div className='country'>
                                            <label>
                                                Country
                                                <br/>
                                                <input type='text' />
                                            </label>
                                            <p className='error-msg'>Can't be empty</p>
                                        </div>
                                    </div>

                                    <div className='date-issue-payment'>
                                        <div className='issue-date'>
                                            <label>
                                                Issue Date
                                                <br/>
                                                <input type='date' />
                                            </label>
                                            <p className='error-msg'>Can't be empty</p>
                                        </div>
                                        <div className='payment-terms'>
                                            <label>
                                                Payment Terms
                                                <br />
                                                <select id='terms'>
                                                    <option value='Net 1 day'>Net 1 day</option>
                                                    <option value='Net 7 days'>Net 7 days</option>
                                                    <option value='Net 14 days'>Net 14 days</option>
                                                    <option value='Net 30 days'>Net 30 days</option>
                                                </select>
                                            </label>
                                        </div>
                                    </div>

                                    <div className='project-description'>
                                        <label>
                                            Project Description
                                            <input type='text' />
                                        </label>
                                        <p className='error-msg'>Can't be empty</p>
                                    </div>

                                    <div className='item-list'>
                                        <h3>Item List</h3>
                                        <div className='items'>
                                            <div className='list-name'>
                                                <div className="item-name">
                                                    <p>Item Name</p>
                                                </div>
                                                <div className="item-qty">
                                                    <p>Qty.</p>
                                                </div>
                                                <div className="item-price">
                                                    <p>Price</p>
                                                </div>
                                                <div className="total-price">
                                                    <p>Total</p>
                                                </div>
                                                <div className='delete-icon'></div>
                                            </div>
                                            <div className='inputs'>
                                                <div className='item-name-input'>
                                                    <input type='text' />
                                                </div>
                                                <div className='item-qty-input'>
                                                    <input type='number' />
                                                </div>
                                                <div className='item-price-input'>
                                                    <input type='text' /> 
                                                </div>
                                                <div className='item-total-price'>
                                                    <p>156.00</p>
                                                </div>
                                                <div className='item-delete-icon'>
                                                    <img src='/starter-code/assets/icon-delete.svg' />
                                                </div>
                                            </div>
                                            <div className='inputs'>
                                                <div className='item-name-input'>
                                                    <input type='text' />
                                                </div>
                                                <div className='item-qty-input'>
                                                    <input type='number' />
                                                </div>
                                                <div className='item-price-input'>
                                                    <input type='text' /> 
                                                </div>
                                                <div className='item-total-price'>
                                                    <p>156.00</p>
                                                </div>
                                                <div className='item-delete-icon'>
                                                    <img src='/starter-code/assets/icon-delete.svg' />
                                                </div>
                                            </div>
                                            <div className='inputs'>
                                                <div className='item-name-input'>
                                                    <input type='text' />
                                                </div>
                                                <div className='item-qty-input'>
                                                    <input type='number' />
                                                </div>
                                                <div className='item-price-input'>
                                                    <input type='text' /> 
                                                </div>
                                                <div className='item-total-price'>
                                                    <p>156.00</p>
                                                </div>
                                                <div className='item-delete-icon'>
                                                    <img src='/starter-code/assets/icon-delete.svg' />
                                                </div>
                                            </div>
                                            <button className='add-new-invoice'>+ Add New Item</button>
                                        </div>
                                    </div>

                                </div>
                            </form>
                            <div className='errors-wrapper'>
                                <p>- All field must be added</p>
                                <p>- An item must be added</p>
                                <p>- Something went wrong. Please try again.</p>
                                <p>- Wrong email address format</p>
                                <p>- Data section is empty</p>
                                <p>- Client's name looks weird. You sure it's human?</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='buttons-wrapper'>
                    <div className='wrapper-contents'>
                        {/* <h1>BUTTONS HERE!!!!</h1> */}
                        <button className='discard'>Discard</button>
                        <div className='draft-send'>
                            <button className='draft'>Draft</button>
                            <button className='send'>Save & Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}