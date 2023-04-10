import { useState } from 'react';
import './NewInvoice.scss'

export default function NewInvoice({invoiceFormState, newInvoice}) {

    const element = (
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
    )

    const listItemElement = [
        {id: Math.floor(Math.random() * 1000000)}
    ]

    const itemsEl = [
        {id: Math.floor(Math.random() * 1000000), itemName: '', itemQty: '', itemPrice: '', totalPrice: ''}
    ]

    let nextID = 1;

    const addNewItem = () => {
            itemElement.push({
                id: nextID++
            })
    }

    function filterClickedItem(id) {

        setListel((prev) => {
            return prev.filter(element => {
                return element.id !== id
            })
        })
        if(itemElement.length !== 1) {}
    }

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
    const [dateOfIssue, setDateOfIssue] = useState('')
    const [termsOfPayment, setTermsOfPayment] = useState('')
    const [projectDescription, setProjectDescription] = useState('')
    const [newInvoiceFormData, setNewInvoiceFormData] = useState([])
    const [itemElement, setItemElement] = useState(listItemElement)
    const [itemQty, setItemQty] = useState('')
    const [itemQty1, setItemQty1] = useState('')
    const [itemQty2, setItemQty2] = useState('')
    const [itemQty3, setItemQty3] = useState('')
    const [itemPrice, setItemPrice] = useState('')
    const [itemPrice1, setItemPrice1] = useState('')
    const [itemPrice2, setItemPrice2] = useState('')
    const [itemPrice3, setItemPrice3] = useState('')
    // const [itemListTotal, setItemListTotal] = useState('0.00')
    const [itemListTotal, setItemListTotal] = useState('0.00')

    // error states
    const [streetAddressError, setStreetAddressError] = useState(false)
    const [emptyCountryError, setEmptyCountryError] = useState(false)
    const [emptyClientNameError, setemptyClientNameError] = useState(false)
    const [emptyClientEmailError, setemptyClientEmailError] = useState(false)
    const [emptyClientAddressError, setEmptyClientAddressError] = useState(false)
    const [emptyClientCountryError, setEmptyClientCountryError] = useState(false)
    const [emptyDateError, setEmptyDateError] = useState(false)
    const [emptyProjectDescriptionError, setEmptyProjectDescriptionError] = useState(false)

    // const [emptyCityError, setEmptyCityError] = useState(false)


    const handleItemListTotalPrices = () => {}

    const handleItemLists = (index, e) => {
        // console.log(e.target.value, index)
        if(e.target.value < 0) {
            e.target.value *= -1
        }
        let newData = [...listel]
        newData[index][e.target.name] = e.target.value
        if(newData[index].itemQty || newData[index].itemPrice) {
            newData[index].totalPrice = newData[index].itemQty * newData[index].itemPrice
        }
        // console.log(newData[index])
        setListel(newData)
        // console.log(newData)
    }


    // console.log(newInvoice)
    const handleNewInvoiceSubmit = (e) => {
        e.preventDefault();
        console.log('submitted')
        // console.log(listel)
        listel.map((el, index) => {
            console.log(el)
        })

        // console.log(streetAddress)

        if(streetAddress.length === 0) {
            setStreetAddressError(true)
            return false;
        }
        if(countryBillFrom.length === 0) {
            setEmptyCountryError(true)
            return false;
        }
        if(clientName.length == 0) {
            setemptyClientNameError(true)
            return false;
        }
        if(clientEmail.length == 0) {
            setemptyClientEmailError(true)
            return false;
        }
        if(clientAddress.length === 0) {
            setEmptyClientAddressError(true)
            return false;
        }
        if(clientCountry.length === 0) {
            setEmptyClientCountryError(true)
            return false;
        }
        if(dateOfIssue.length === 0) {
            setEmptyDateError(true)
            return false;
        }
        if(projectDescription.length === 0) {
            setEmptyProjectDescriptionError(true)
            return false;
        }


        console.log(streetAddress, countryBillFrom, cityBillFrom, postCodeBillFrom, clientName, clientEmail, clientAddress, clientCity, clientPostCode, clientCountry, dateOfIssue, termsOfPayment, projectDescription)

        // const InvoiceFormData = {
        //     billFormStreetAddress: streetAddress,
        //     countryBillFrom: countryBillFrom,
        //     cityBillFrom: cityBillFrom,
        //     postCodeBillFrom: postCodeBillFrom,
        //     clientName: clientName,
        //     clientEmail: clientEmail,
        //     clientAddress: clientAddress,
        //     clientCity: clientCity,
        //     clientPostCode: clientPostCode,
        //     clientCountry: clientCountry,
        //     dateOfIssue: dateOfIssue,
        //     termsOfPayment: termsOfPayment,
        //     projectDescription: projectDescription
        // }


    }


    return (
        <div className={`new-invoice ${newInvoice ? "show" : ""} `}>
            <div className='container'>
                <div className='container-contents'>
                    <div className='wrapper-contents'>
                        <h1>New Invoice</h1>
                        <div className='form-contents'>
                            <form className='form'>
                                <div className='bill-from-section'>
                                    <p className='bill-from'>Bill from</p>
                                    <div className='street-address-input'>
                                        <label className={`${streetAddressError ? 'label-error' : ''}`}>
                                            Street Address
                                            <br/>
                                            <input className={`${streetAddressError ? 'input-error' : ''}`} type='text' onChange={(e) => {
                                                // console.log(e.target.value)
                                                setStreetAddress(e.target.value)
                                                setStreetAddressError(false)
                                            }} />
                                        </label>
                                        {streetAddressError && <p className='empty-address error-msg'>Can't be empty</p>}
                                    </div>
                                    <div className='city-pcode-country'>
                                        <div className='city'>
                                            <label>
                                                City
                                                <br/>
                                                <input type='text' onChange={(e) => {
                                                    setCityBillFrom(e.target.value)
                                                }} />
                                            </label>
                                            {/* <p className='empty-error error-msg'>Can't be empty</p> */}
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
                                            {/* <p className='error-msg'>Can't be empty</p> */}
                                        </div>
                                        <div className='pcode'>
                                            <label>
                                                Post Code
                                                <br/>
                                                <input type='text' onChange={(e) => {setClientPostCode(e.target.value)}} />
                                            </label>
                                            {/* <p className='error-msg'>Can't be empty</p> */}
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
                                                <input type='date' className={`${emptyDateError ? 'input-error' : ''}`} onChange={(e) => {
                                                    setEmptyDateError(false)
                                                    setDateOfIssue(e.target.value)
                                                }} />
                                            </label>
                                            {emptyDateError && <p className='error-msg'>Can't be empty</p>}
                                        </div>
                                        <div className='payment-terms'>
                                            <label>
                                                Payment Terms
                                                <br />
                                                <select id='terms' onChange={(e) => {
                                                    setTermsOfPayment(e.target.value)
                                                }} >
                                                    <option value='Net 1 day'>Net 1 day</option>
                                                    <option value='Net 7 days'>Net 7 days</option>
                                                    <option value='Net 14 days'>Net 14 days</option>
                                                    <option value='Net 30 days'>Net 30 days</option>
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
                                            {/* inputs */}
                                            {/* <div className='inputs'>
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
                                            </div> */}
                                            {/* {itemElement} */}
                                            {listel && listel.map((element, index) => {
                                                return (
                                                    <div key={element.id} className='inputs'>
                                                        <div className='item-name-input'>
                                                            <input 
                                                            type=''
                                                            name='itemName'
                                                            onChange={(e) => {
                                                                handleItemLists(index, e)
                                                            }} 
                                                            />
                                                        </div>
                                                        <div className='item-qty-input'>
                                                            <input 
                                                            type='number' 
                                                            name='itemQty'
                                                            onChange={(e) => {
                                                                handleItemLists(index, e)
                                                            }} />
                                                        </div>
                                                        <div className='item-price-input'>
                                                            <input 
                                                            type='number' 
                                                            placeholder='0.00' 
                                                            name='itemPrice'
                                                            onChange={(e) => {
                                                                // console.log(e.target.name)
                                                                // setItemPrice(e.target.value)
                                                                handleItemLists(index, e)
                                                                // console.log(e.target.value)
                                                            }} /> 
                                                        </div>
                                                        <div className='item-total-price'>
                                                            {/* <p>156.00</p> */}
                                                            {/* <p>{itemQtyId === itemPriceId && itemPrice * itemQty}</p> */}
                                                            {/* <p>{itemQty * itemPrice}</p> */}
                                                            <p>{`${element.totalPrice ? element.totalPrice : '0.00'}`}</p>
                                                        </div>
                                                        <div className='item-delete-icon' onClick={(e) => {
                                                            // console.log(element.id)
                                                            filterClickedItem(element.id)
                                                        }}>
                                                            <img src='/starter-code/assets/icon-delete.svg' />
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                            
                                            {listel.length < 3 && <button className='add-new-invoice' onClick={(e) => {
                                                e.preventDefault()
                                                const newElement = {id: Math.floor(Math.random() * 1000000)}
                                                setItemElement((prev) => [...prev, newElement])
                                                if(itemElement.length === 2) {}
                                                const newListEl = {id: Math.floor(Math.random() * 1000000), itemName: '', itemQty: '', itemPrice: '', totalPrice: ''}
                                                setListel((prev) => [...prev, newListEl])
                                                // console.log(listel, listel.length)
                                            }}>+ Add New Item</button>}
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
                        <button className='discard' onClick={() => {invoiceFormState(false)}}>Discard</button>
                        <div className='draft-send'>
                            <button className='draft'>Draft</button>
                            <button className='send' onClick={handleNewInvoiceSubmit}>Save & Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}