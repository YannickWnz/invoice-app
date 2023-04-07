import './CreateInvoice.scss'

export default function CreateInvoice() {
    return (
        <div className="create-invoice">
            <div className='create-invoice-container'>
                <h1>New Invoice</h1>
                <div className='contents-wrapper'>
                    <p>
                        
                    </p>
                    <div className='form-wrapper'>
                        <form className='form'>
                            <div className='bill-from-section'>
                                <p className='bill-from'>Bill from</p>
                                <div className='street-address-input'>
                                    <label>
                                        Street Address
                                        <br/>
                                        <input type='text' />
                                    </label>
                                </div>
                                <div className='city-pcode-country'>
                                    <div className='city'>
                                        <label>
                                            City
                                            <br/>
                                            <input type='text' />
                                        </label>
                                    </div>
                                    <div className='pcode'>
                                        <label>
                                            Post Code
                                            <br/>
                                            <input type='text' />
                                        </label>
                                    </div>
                                    <div className='country'>
                                        <label>
                                            Country
                                            <br/>
                                            <input type='text' />
                                        </label>
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
                                </div>
                                <div className='client-email'>
                                    <label>
                                        Client's Email
                                        <br/>
                                        <input type='email' />
                                    </label>
                                </div>
                                <div className='street'>
                                    <label>
                                        Street Address
                                        <br/>
                                        <input type='text' />
                                    </label>
                                </div>
                                <div className='city-pcode-country'>
                                    <div className='city'>
                                        <label>
                                            City
                                            <br/>
                                            <input type='text' />
                                        </label>
                                    </div>
                                    <div className='pcode'>
                                        <label>
                                            Post Code
                                            <br/>
                                            <input type='text' />
                                        </label>
                                    </div>
                                    <div className='country'>
                                        <label>
                                            Country
                                            <br/>
                                            <input type='text' />
                                        </label>
                                    </div>
                                </div>

                                <div className='date-issue-payment'>
                                    <div className='issue-date'>
                                        <label>
                                            Issue Date
                                            <br/>
                                            <input type='date' />
                                        </label>
                                    </div>
                                    <div className='payment-terms'>
                                        <label>
                                            Payment Terms
                                            <br />
                                            <select id='terms'>
                                                <option value='Net 1 day'>Net 1 day</option>
                                                <option value='Net 7 days'>Net 7 days</option>
                                                <option value='Net 14 days'>Net 14 days</option>
                                                <option selected value='Net 30 days'>Net 30 days</option>
                                            </select>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='options'>
                    <div className='options-contents-wrapper'>
                        <div className='discard-wrapper'>
                            <button className='discard-btn'>discard</button>
                        </div>
                        <div className='draft-send'>
                            <button className='draft-btn'>draft</button>
                            <button className='send-btn'>send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}