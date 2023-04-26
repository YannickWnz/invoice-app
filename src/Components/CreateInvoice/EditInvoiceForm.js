import { useState } from 'react'
import './EditInvoiceForm.scss'

export default function EditInvoiceForm({showInvoiceForm, handleShowInvoiceForm, fetchedInvoiceData}) {

    const listItemElement = [
        {id: Math.floor(Math.random() * 1000000)}
    ]

    const itemsEl = [
        {id: Math.floor(Math.random() * 1000000), itemName: '', itemQty: '', itemPrice: '', totalPrice: ''}
    ]


    const [listel, setListel] = useState(itemsEl)
    // empty variables states
    const [streetAddress, setStreetAddress] = useState('')
    const [countryBillFrom, setCountryBillFrom] = useState('')
    const [cityBillFrom, setCityBillFrom] = useState('')
    const [postCodeBillFrom, setpostCodeBillFrom] = useState('')
    const [clientName, setclientName] = useState('')
    const [clientEmail, setClientEmail] = useState('')
    const [clientAddress, setClientAddress] = useState('')
    const [clientCity, setClientCity] = useState('')
    const [clientPostCode, setClientPostCode] = useState('')
    const [clientCountry, setClientCountry] = useState('')
    // const [dateOfIssue, setDateOfIssue] = useState('')
    const [termsOfPayment, setTermsOfPayment] = useState('1')
    const [projectDescription, setProjectDescription] = useState('')

    const [newInvoiceFormData, setNewInvoiceFormData] = useState([])

    const [itemElement, setItemElement] = useState(listItemElement)
    const [itemQty, setItemQty] = useState('')
    const [itemPrice, setItemPrice] = useState('')
    // const [itemListTotal, setItemListTotal] = useState('0.00')
    const [itemListTotal, setItemListTotal] = useState('0.00')
    const [itemQtyError, setItemQtyError] = useState(false)
    const [itemQty1Error, setItemQty1Error] = useState(false)
    const [elName, setElName] = useState([])
    const [invoiceStatus, setInvoiceStatus] = useState('')
    const [input, setInput] = useState([])

    const [streetAddressError, setStreetAddressError] = useState(false)
    const [emptyCountryError, setEmptyCountryError] = useState(false)
    const [emptyClientNameError, setemptyClientNameError] = useState(false)
    const [emptyClientEmailError, setemptyClientEmailError] = useState(false)
    const [emptyClientAddressError, setEmptyClientAddressError] = useState(false)
    const [emptyClientCountryError, setEmptyClientCountryError] = useState(false)
    const [emptyDateError, setEmptyDateError] = useState(false)
    const [emptyProjectDescriptionError, setEmptyProjectDescriptionError] = useState(false)
    const [emptyFieldError, setEmptyFieldError] = useState(false)
    const [noItemError, setNoItemError] = useState(false)
    const [error, setError] = useState(false)
    const [emptyItemListFieldError, setEmptyItemListFieldError] = useState(false)
    const [emptyItemNameFieldError, setEmptyItemNameFieldError] = useState(false)
    const [emptyItemQtyFieldError, setEmptyItemQtyFieldError] = useState(false)
    const [testerr, setTestError] = useState([])

    const handleItemLists = (index, e) => {
        if(e.target.value < 0) {
            e.target.value *= -1
        }
        let value = e.target.value

        let newData = [...listel]
        newData[index][e.target.name] = e.target.value
        if(newData[index].itemQty || newData[index].itemPrice) {
            newData[index].totalPrice = newData[index].itemQty * newData[index].itemPrice
        }
        setListel(newData)
    }

    function filterClickedItem(id) {

        setListel((prev) => {
            return prev.filter(element => {
                return element.id !== id
            })
        })
        if(itemElement.length !== 1) {}

    }

    const handleNewInvoiceSubmit = (e) => {
        e.preventDefault()

        if(streetAddress.length === 0) {
            setStreetAddressError(true)
            setEmptyFieldError(true)
            return false;
        }
        if(countryBillFrom.length === 0) {
            setEmptyCountryError(true)
            setEmptyFieldError(true)
            return false;
        }
        if(clientName.length == 0) {
            setemptyClientNameError(true)
            setEmptyFieldError(true)
            return false;
        }
        if(clientEmail.length == 0) {
            setemptyClientEmailError(true)
            setEmptyFieldError(true)
            return false;
        }
        if(clientAddress.length === 0) {
            setEmptyClientAddressError(true)
            setEmptyFieldError(true)
            return false;
        }
        if(clientCountry.length === 0) {
            setEmptyClientCountryError(true)
            setEmptyFieldError(true)
            return false;
        }

        if(projectDescription.length === 0) {
            setEmptyProjectDescriptionError(true)
            setEmptyFieldError(true)
            return false;
        }

        if(listel.length === 0) {
            setNoItemError(true)
            return false;
        }
        
        console.log('data submitted success')
        
        
        
        handleResetFormData()
        setEmptyFieldError(false)
        // form.current.reset()
        // if(!showInvoiceForm) {
        //     invoiceFormState(false)
        // }

    }

    const handleResetFormData = () => {
        setListel(itemsEl)
        setStreetAddress('')
        setCountryBillFrom('')
        setCityBillFrom('')
        setpostCodeBillFrom('')
        setclientName('')
        setClientEmail('')
        setClientAddress('')
        setClientCity('')
        setClientPostCode('')
        setClientCountry('')
        // setDateOfIssue('')
        setTermsOfPayment('1')
        setProjectDescription('')
        setInvoiceStatus('')
    }

    // function handleInputChange(e, index) {

    // }


    if(fetchedInvoiceData.length > 0) {
        // setStreetAddress('siza')
    }




    return (
        <div className={`edit-invoice-form ${showInvoiceForm ? "show" : ""} `}>
            <div className='container'>
                <form onSubmit={handleNewInvoiceSubmit}>
                    <div className='container-contents'>
                        {fetchedInvoiceData && fetchedInvoiceData.length > 0 && fetchedInvoiceData.map((fetchedInvoice, index) => {return  <div key={index} className='wrapper-contents'>
                            <h1>Edit #{fetchedInvoice.receipt_number}</h1>
                            <div className='form-contents'>
                                <div  className='form'>
                                    <div className='bill-from-section'>
                                        <p className='bill-from'>Bill from</p>
                                        <div className='street-address-input'>
                                            <label className={`${streetAddressError ? 'label-error' : ''}`}>
                                                Street Address
                                                <br/>
                                                <input
                                                defaultValue={fetchedInvoice.bill_from_street_address} 
                                                className={`${streetAddressError ? 'input-error' : ''}`} 
                                                type='text' 
                                                name='streetAddress'
                                                onChange={(e) => {
                                                    console.log(e.target.value)
                                                    // handleInputChange(e, index)
                                                    setStreetAddress(e.target.value)
                                                    setStreetAddressError(false)
                                                }} 
                                                // onChange={handleInputChange}
                                                />
                                            </label>
                                            {streetAddressError && <p className='empty-address error-msg'>Can't be empty</p>}
                                        </div>
                                        <div className='city-pcode-country'>
                                            <div className='city'>
                                                <label>
                                                    City
                                                    <br/>
                                                    <input 
                                                    type='text' 
                                                    defaultValue={fetchedInvoice.bill_from_city} 
                                                    onChange={(e) => {
                                                        setCityBillFrom(e.target.value)
                                                    }} />
                                                </label>
                                            </div>
                                            <div className='pcode'>
                                                <label>
                                                    Post Code
                                                    <br/>
                                                    <input type='text' onChange={(e) => {
                                                        setpostCodeBillFrom(e.target.value)
                                                    }} />
                                                </label>
                                                {/* <p className='empty-error error-msg'>Can't be empty</p> */}
                                            </div>
                                            <div className='country'>
                                                <label className={`${emptyCountryError ? 'label-error' : ''}`}>
                                                    Country
                                                    <br/>
                                                    <input type='text' className={`${emptyCountryError ? 'input-error' : ''}`} onChange={(e) => {
                                                        setEmptyCountryError(false)
                                                        setCountryBillFrom(e.target.value)
                                                    }} />
                                                </label>
                                                {emptyCountryError && <p className='empty-error error-msg'>Can't be empty</p>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='bill-to-section'>
                                        <p>Bill to</p>
                                        <div className='client-name'>
                                            <label className={`${emptyClientNameError ? 'label-error' : ''}`}>
                                                Client's Name
                                                <br/>
                                                <input type='text' className={`${emptyClientNameError ? 'input-error' : ''}`} onChange={(e) => {
                                                    setclientName(e.target.value)
                                                    setemptyClientNameError(false)
                                                }} />
                                            </label>
                                            {emptyClientNameError && <p className='error-msg'>Can't be empty</p>}
                                        </div>
                                        <div className='client-email'>
                                            <label className={`${emptyClientEmailError ? 'label-error' : ''}`}>
                                                Client's Email
                                                <br/>
                                                <input type='email' className={`${emptyClientEmailError ? 'input-error' : ''}`} onChange={(e) => {
                                                    setemptyClientEmailError(false)
                                                    setClientEmail(e.target.value)
                                                }} />
                                            </label>
                                            {emptyClientEmailError && <p className='error-msg'>Can't be empty</p>}
                                        </div>
                                        <div className='street'>
                                            <label className={`${emptyClientAddressError ? 'label-error' : ''}`}>
                                                Street Address
                                                <br/>
                                                <input type='text' className={`${emptyClientAddressError ? 'input-error' : ''}`} onChange={((e) => {
                                                    setClientAddress(e.target.value)
                                                    setEmptyClientAddressError(false)
                                                })} />
                                            </label>
                                            {emptyClientAddressError && <p className='error-msg'>Can't be empty</p>}
                                        </div>
                                        <div className='city-pcode-country'>
                                            <div className='city'>
                                                <label>
                                                    City
                                                    <br/>
                                                    <input type='text' onChange={(e) => {setClientCity(e.target.value)}} />
                                                </label>
                                            </div>
                                            <div className='pcode'>
                                                <label>
                                                    Post Code
                                                    <br/>
                                                    <input type='text' onChange={(e) => {setClientPostCode(e.target.value)}} />
                                                </label>
                                            </div>
                                            <div className='country'>
                                                <label className={`${emptyClientCountryError ? 'label-error' : ''}`}>
                                                    Country
                                                    <br/>
                                                    <input type='text' className={`${emptyClientCountryError ? 'input-error' : ''}`} onChange={(e) => {
                                                        setEmptyClientCountryError(false)
                                                        setClientCountry(e.target.value)
                                                    }} />
                                                </label>
                                                {emptyClientCountryError && <p className='error-msg'>Can't be empty</p>}
                                            </div>
                                        </div>

                                        <div className='date-issue-payment'>
                                            <div className='issue-date'>
                                                <label className={`${emptyDateError ? 'label-error' : ''}`}>
                                                    Issue Date
                                                    <br/>
                                                    <input 
                                                    type='text'
                                                    />
                                                </label>
                                                {emptyDateError && <p className='error-msg'>Can't be empty</p>}
                                            </div>
                                            <div className='payment-terms'>
                                                <label>
                                                    Payment Terms
                                                    <br />
                                                    <select 
                                                    id='terms' 
                                                    onChange={(e) => {
                                                        setTermsOfPayment(e.target.value)
                                                    }} >
                                                        <option value='1'>Net 1 day</option>
                                                        <option value='7'>Net 7 days</option>
                                                        <option value='14'>Net 14 days</option>
                                                        <option value='30'>Net 30 days</option>
                                                    </select>
                                                </label>
                                            </div>
                                        </div>

                                        <div className='project-description'>
                                            <label className={`${emptyProjectDescriptionError ? 'label-error' : ''}`}>
                                                Project Description
                                                <input type='text' className={`${emptyProjectDescriptionError ? 'input-error' : ''}`} onChange={(e) => {
                                                    setEmptyProjectDescriptionError(false)
                                                    setProjectDescription(e.target.value)
                                                }} />
                                            </label>
                                            {emptyProjectDescriptionError && <p className='error-msg'>Can't be empty</p>}
                                        </div>

                                        <div className='item-list'>
                                            <h3>Item List</h3>
                                            <div className='items'>
                                                {/* item defs */}
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

                                                {listel && listel.map((element, index) => {
                                                    return (
                                                        <div key={element.id} className='inputs'>
                                                            <div className='item-name-input'>
                                                                <input 
                                                                type=''
                                                                name='itemName'
                                                                // className={`${emptyItemNameFieldError && element.itemNameIndex === index ? 'input-error' : ''}`}
                                                                onChange={(e) => {
                                                                    handleItemLists(index, e)
                                                                    setEmptyItemNameFieldError(false)
                                                                }} 
                                                                />
                                                            </div>
                                                            <div className='item-qty-input'>
                                                                <input 
                                                                type='number' 
                                                                name='itemQty'
                                                                onChange={(e) => {
                                                                    handleItemLists(index, e)
                                                                    setEmptyItemQtyFieldError(false)
                                                                }} />
                                                            </div>
                                                            <div className='item-price-input'>
                                                                <input 
                                                                type='number' 
                                                                placeholder='0.00' 
                                                                name='itemPrice'
                                                                onChange={(e) => {
                                                                    setEmptyItemListFieldError(false)
                                                                    handleItemLists(index, e)
                                                                }} /> 
                                                            </div>
                                                            <div className='item-total-price'>
                                                                <p>{`${element.totalPrice ? element.totalPrice : '0.00'}`}</p>
                                                            </div>
                                                            <div className='item-delete-icon' onClick={(e) => {
                                                                filterClickedItem(element.id)
                                                            }}>
                                                                <img src='/starter-code/assets/icon-delete.svg' />
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                                
                                                {listel.length < 10 && <button className='add-new-invoice' onClick={(e) => {
                                                    e.preventDefault()
                                                    const newListEl = {id: Math.floor(Math.random() * 1000000), itemName: '', itemQty: '', itemPrice: '', totalPrice: ''}
                                                    setListel((prev) => [...prev, newListEl])
                                                }}>+ Add New Item</button>}
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className='errors-wrapper'>
                                    {emptyFieldError && <p>- All field must be added</p>}
                                    {noItemError && <p>- An item must be added</p>}
                                    {emptyItemListFieldError && <p>- Item list field can't be empty</p>}
                                    {error && <p>- Something went wrong. Please try again later.</p>}
                                </div>
                            </div>
                        </div>})}
                    </div>
                    <div className='buttons-wrapper'>
                        <div className='wrapper-contents'>
                            {/* <h1>BUTTONS HERE!!!!</h1> */}
                            {/* {!showInvoiceForm && <button 
                            className='discard' 
                            type='reset'
                            onClick={() => {
                                invoiceFormState(false)
                                form.current.reset()
                                }}
                                >
                                Discard
                            </button>} */}
                            <div className='draft-send'>

                                {/* {!showInvoiceForm && <button 
                                className='draft' 
                                onClick={() => setInvoiceStatus('Draft')}
                                >
                                    Save as Draft
                                </button>} */}

                                {showInvoiceForm && <button 
                                className='draft' 
                                onClick={handleShowInvoiceForm}
                                >
                                    Cancel
                                </button>}

                                <button 
                                className='send' 
                                type='submit'
                                onClick={() => {}}
                                >
                                    Save & Send
                                </button>
                                {/* <input className='send' type='submit' value='Save & Send' /> */}
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

