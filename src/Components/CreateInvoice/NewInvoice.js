import { useRef, useState, useEffect, useContext } from 'react';
import './NewInvoice.scss'
import axios from 'axios'
import moment from 'moment'
import { Navigate, useNavigate } from 'react-router-dom';
import ThemeContext from '../../context/Context';

let nextID = 0;
let testdate =  moment().add(86, 'days').calendar();
let invoiceDate = moment().format('LL');   // April 16, 2023


export default function NewInvoice({invoiceFormState, newInvoice, formdata, showInvoiceForm, handleShowInvoiceForm, fetchedInvoiceData, setFetchedItems, fetchedItems}) {
    const navigate = useNavigate()

    const listItemElement = [
        {id: Math.floor(Math.random() * 1000000)}
    ]

    // console.log(id)

    const itemsEl = [
        {id: Math.floor(Math.random() * 1000000), itemName: '', itemQty: '', itemPrice: '', totalPrice: ''}
    ]

    const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

    const genRand = () => {
        // return Math.floor(Math.random() *
        // console.log(`${letters[Math.floor(Math.random() * 26)]} - ${letters[Math.floor(Math.random() * 26)]}`)
        // console.log(Math.floor(Math.random() * 999))
        let receiptNo = `#${letters[Math.floor(Math.random() * 26)]}${letters[Math.floor(Math.random() * 26)]}${Math.floor(Math.random() * 999)}`
        // console.log(receiptNo)
    }

    function filterClickedItem(id) {

        if(!showInvoiceForm) {
            setListel((prev) => {
                return prev.filter(element => {
                    return element.id !== id
                })
            })
        } else {
            setFetchedItems((prev) => {
                return prev.filter(element => {
                    return element.id !== id
                })
            })

        }

    }

    const {isDataFetched, setIsDataFetched} = useContext(ThemeContext)
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
    const form = useRef(null)
    const [elName, setElName] = useState([])
    const [invoiceStatus, setInvoiceStatus] = useState('')




    // const [newInvoiceFormData, setNewInvoiceFormData] = useState
    

    // error states
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


    useEffect(() => {
        // getSelectedInvoice()
    }, [])

    function getSelectedInvoice() {
        // axios.get(`http://localhost:80/api/fetchSelectedInvoice.php/${id}`).then(function(response) {
        
        // if(response.data == 'error') {
        //     console.log('could not find invoice')
        // } else {
        //     setStreetAddress(response.data[0].streetAddressBillFrom)
        //     setCountryBillFrom(response.data[0].CountryBillFrom)
        //     setCityBillFrom(response.data[0].cityBillFrom)
        //     // console.log(streetAddress)
        // } 
        // })
    }


    const handleItemLists = (index, e) => {
        if(e.target.value < 0) {
            e.target.value *= -1
        }
        let value = e.target.value

        if(!showInvoiceForm) {
            let newData = [...listel]
            newData[index][e.target.name] = e.target.value
            if(newData[index].itemQty || newData[index].itemPrice) {
                newData[index].totalPrice = newData[index].itemQty * newData[index].itemPrice
            }
            setListel(newData)
        } else {
            let newData = [...fetchedItems]
            newData[index][e.target.name] = e.target.value
            if(newData[index].itemQty || newData[index].itemPrice) {
                newData[index].totalPrice = newData[index].itemQty * newData[index].itemPrice
            }
            setFetchedItems(newData)

        }
    }

    
    async function handleInvoiceFormData(data) {
        // console.log('handle function data clicked')
        // console.log(data)

        let newdata = [...data]

        for(let i = 0; i < newdata.length; i++) {

            if(data[i].itemName == '') {
                // setEmptyItemNameFieldError(true)
                // setEmptyFieldError(true)
                setEmptyItemListFieldError(true)
                // data[i].itemNameIndex = i
                return 
            } else if (data[i].itemQty == '') {
                // data[i].qtyIndex = i
                setEmptyItemListFieldError(true)
                return
            } else if (data[i].itemPrice == '') {
                setEmptyItemListFieldError(true)
                return
            }
            else {
                data[i].itemNameCheck = ''
                setEmptyFieldError(false)
                setEmptyItemListFieldError(false)
            }
        }


        let sumOfTotalPrice = 0;

        if(!showInvoiceForm) {
            listel.map(el => {
                let element = el.totalPrice
                sumOfTotalPrice = sumOfTotalPrice + element
            })
        } else {
            fetchedItems.map(el => {
                let element = el.totalPrice
                sumOfTotalPrice = sumOfTotalPrice + element
            })
        }

        console.log(sumOfTotalPrice)

        // let formattedDate = moment().format(dateOfIssue);


        // let invoiceStatus = 'Pending'
        let dueDate = moment().add(termsOfPayment, 'days').calendar();
        const token = localStorage.getItem('token');

        if(!showInvoiceForm) {
            const invoicedata = 
                {
                    id: nextID++,
                    receiptNo: `${letters[Math.floor(Math.random() * 26)]}${letters[Math.floor(Math.random() * 26)]}${Math.floor(Math.random() * 999)}`,
                    billFormStreetAddress: capitalizeFirstLetter(streetAddress),
                    countryBillFrom: capitalizeFirstLetter(countryBillFrom),
                    cityBillFrom: capitalizeFirstLetter(cityBillFrom),
                    postCodeBillFrom: postCodeBillFrom,
                    clientName: capitalizeFirstLetter(clientName),
                    clientEmail: clientEmail,
                    clientAddress: capitalizeFirstLetter(clientAddress),
                    clientCity: capitalizeFirstLetter(clientCity),
                    clientPostCode: clientPostCode,
                    clientCountry: setToUpperCase(clientCountry),
                    dateOfIssue: invoiceDate,
                    termsOfPayment: termsOfPayment,
                    dueDate: dueDate,
                    // termsOfPayment: '2023-01-01',
                    projectDescription: projectDescription,
                    listitems: JSON.stringify(listel),
                    sumOfTotalPrice: sumOfTotalPrice,
                    invoiceStatus: invoiceStatus,
                    token: token
                }        
    
            let jsonInvoiceData = JSON.stringify(invoicedata)
            
            formdata(invoicedata)
    
            axios.post('http://localhost:80/api/', jsonInvoiceData).then(function(response) {
                console.log(response.data)
                setIsDataFetched(true)
            })
        } else {
            const edittedInvoiceData = {
                invoiceID: fetchedInvoiceData[0].invoiceID,
                billFromStreetAddress: streetAddress,
                countryBillFrom: countryBillFrom,
                cityBillFrom: cityBillFrom,
                postCodeBillFrom: postCodeBillFrom,
                clientName: clientName,
                clientEmail: clientEmail,
                clientAddress: clientAddress,
                clientCity: clientCity,
                clientPostCode: clientPostCode,
                clientCountry: clientCountry,
                projectDescription: projectDescription,
                listitems: JSON.stringify(fetchedItems),
                // listitems: 'JSON.stringify(fetchedItems)',
                sumOfTotalPrice: sumOfTotalPrice,
                dueDate: dueDate,
                termsOfPayment: termsOfPayment,
                token: token
            }

            let jsonEdittedInvoiceData = JSON.stringify(edittedInvoiceData)

            axios.put('http://localhost:80/api/', jsonEdittedInvoiceData).then(function(response) {
                console.log(response.data)
                setIsDataFetched(true)
            })
            
            navigate('/');
        }
        
        console.log('form submitted successfully')
        
        if(!showInvoiceForm) {
            invoiceFormState(false)
        }
        handleResetFormData()
        setEmptyFieldError(false)
        form.current.reset()
    }

    function capitalizeFirstLetter(string) {
        let stringtoLower = string.toLowerCase()
        return stringtoLower.charAt(0).toUpperCase() + stringtoLower.slice(1);
    }

    function setToUpperCase(string) {
        return string.toUpperCase()
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
        
        // console.log('data submitted success')
        if(!showInvoiceForm) {
            handleInvoiceFormData(listel)
        } 
        else {
            console.log('editing invoice form blah blah blah')
            handleInvoiceFormData(fetchedItems)
        }
        
        
        // handleResetFormData()
        // setEmptyFieldError(false)
        // form.current.reset()
        // invoiceFormState(false)

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

    const handleEditInvoiceSubmit = (e) => {
        e.preventDefault()
        console.log('Edit Invoice')
        // checkEmptyInputs()
        console.log(streetAddress)


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


        console.log('edited invoice submitted')

    }

    // reset form input fields function
    const checkEmptyInputs = (e) => {

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

    }

    // fill input fields state with fetched data FUNCTION START
    useEffect(() => {
        // getSelectedInvoice()
        fillInputStatesWithFetchedData()
        // console.log(streetAddress)
        // console.log(fetchedInvoiceData)
    }, [showInvoiceForm])


    const fillInputStatesWithFetchedData = () => {
        if(fetchedInvoiceData && fetchedInvoiceData.length > 0) {
            setStreetAddress(fetchedInvoiceData[0].streetAddressBillFrom)
            setCountryBillFrom(fetchedInvoiceData[0].CountryBillFrom)
            setCityBillFrom(fetchedInvoiceData[0].cityBillFrom)
            setpostCodeBillFrom(fetchedInvoiceData[0].postCodeBillFrom)
            setclientName(fetchedInvoiceData[0].clientName)
            setClientEmail(fetchedInvoiceData[0].clientEmail)
            setClientPostCode(fetchedInvoiceData[0].clientPostCode)
            setClientCity(fetchedInvoiceData[0].clientCity)
            setClientAddress(fetchedInvoiceData[0].clientAddress)
            setClientCountry(fetchedInvoiceData[0].clientCountry)
            setTermsOfPayment(fetchedInvoiceData[0].paymentTerms)
            setProjectDescription(fetchedInvoiceData[0].projectDescription)
        }
    }
    // fill input fields state with fetched data FUNCTION END


    return (
        <div className={`new-invoice ${newInvoice || showInvoiceForm ? "show" : ""} `}>
            <div className='container'>
                <form ref={form} onSubmit={handleNewInvoiceSubmit}>
                {/* <form ref={form} onSubmit={!showInvoiceForm ? handleNewInvoiceSubmit : handleEditInvoiceSubmit}> */}
                {/* <form ref={form} onSubmit={handleNewInvoiceSubmit}> */}
                    <div className='container-contents'>
                        <div className='wrapper-contents'>
                            {fetchedInvoiceData && fetchedInvoiceData.length > 0 ? <h1>Edit #{fetchedInvoiceData[0].receiptNumber}</h1> : <h1>New Invoice</h1>}
                            <div className='form-contents'>
                                <div  className='form'>
                                    <div className='bill-from-section'>
                                        <p className='bill-from'>Bill from</p>
                                        <div className='street-address-input'>
                                            <label className={`${streetAddressError ? 'label-error' : ''}`}>
                                                Street Address
                                                <br/>
                                                <input 
                                                className={`${streetAddressError ? 'input-error' : ''}`} 
                                                type='text' 
                                                defaultValue={fetchedInvoiceData && fetchedInvoiceData.length > 0 ? fetchedInvoiceData[0].streetAddressBillFrom : ''}
                                                // value={fetchedInvoiceData && fetchedInvoiceData.length !== 0 ? fetchedInvoiceData[0].bill_from_street_address : streetAddress}
                                                // {fetchedInvoiceData && value={fetchedInvoiceData[0].bill_from_street_address}}
                                                onChange={(e) => {
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
                                                    <input 
                                                    type='text' 
                                                    defaultValue={fetchedInvoiceData && fetchedInvoiceData.length > 0 ? fetchedInvoiceData[0].cityBillFrom : ''}
                                                    onChange={(e) => {
                                                        setCityBillFrom(e.target.value)
                                                    }} />
                                                </label>
                                                {/* <p className='empty-error error-msg'>Can't be empty</p> */}
                                            </div>
                                            <div className='pcode'>
                                                <label>
                                                    Post Code
                                                    <br/>
                                                    <input 
                                                    type='text' 
                                                    defaultValue={fetchedInvoiceData && fetchedInvoiceData.length > 0 ? fetchedInvoiceData[0].postCodeBillFrom : ''}
                                                    onChange={(e) => {
                                                        setpostCodeBillFrom(e.target.value)
                                                    }} />
                                                </label>
                                                {/* <p className='empty-error error-msg'>Can't be empty</p> */}
                                            </div>
                                            <div className='country'>
                                                <label className={`${emptyCountryError ? 'label-error' : ''}`}>
                                                    Country
                                                    <br/>
                                                    <input 
                                                    type='text' 
                                                    className={`${emptyCountryError ? 'input-error' : ''}`} 
                                                    defaultValue={fetchedInvoiceData && fetchedInvoiceData.length > 0 ? fetchedInvoiceData[0].CountryBillFrom : ''}
                                                    onChange={(e) => {
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
                                                <input 
                                                type='text' 
                                                className={`${emptyClientNameError ? 'input-error' : ''}`} 
                                                defaultValue={fetchedInvoiceData && fetchedInvoiceData.length > 0 ? fetchedInvoiceData[0].clientName : ''}
                                                onChange={(e) => {
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
                                                <input 
                                                type='email' 
                                                className={`${emptyClientEmailError ? 'input-error' : ''}`} 
                                                defaultValue={fetchedInvoiceData && fetchedInvoiceData.length > 0 ? fetchedInvoiceData[0].clientEmail : ''}
                                                onChange={(e) => {
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
                                                <input 
                                                type='text' 
                                                className={`${emptyClientAddressError ? 'input-error' : ''}`} 
                                                defaultValue={fetchedInvoiceData && fetchedInvoiceData.length > 0 ? fetchedInvoiceData[0].clientAddress : ''}
                                                onChange={((e) => {
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
                                                    <input 
                                                    type='text' 
                                                    defaultValue={fetchedInvoiceData && fetchedInvoiceData.length > 0 ? fetchedInvoiceData[0].clientCity : ''}
                                                    onChange={(e) => {setClientCity(e.target.value)}} />
                                                </label>
                                                {/* <p className='error-msg'>Can't be empty</p> */}
                                            </div>
                                            <div className='pcode'>
                                                <label>
                                                    Post Code
                                                    <br/>
                                                    <input 
                                                    type='text' 
                                                    defaultValue={fetchedInvoiceData && fetchedInvoiceData.length > 0 ? fetchedInvoiceData[0].clientPostCode : ''}
                                                    onChange={(e) => {setClientPostCode(e.target.value)}} />
                                                </label>
                                                {/* <p className='error-msg'>Can't be empty</p> */}
                                            </div>
                                            <div className='country'>
                                                <label className={`${emptyClientCountryError ? 'label-error' : ''}`}>
                                                    Country
                                                    <br/>
                                                    <input 
                                                    type='text' 
                                                    className={`${emptyClientCountryError ? 'input-error' : ''}`} 
                                                    defaultValue={fetchedInvoiceData && fetchedInvoiceData.length > 0 ? fetchedInvoiceData[0].clientCountry : ''}
                                                    onChange={(e) => {
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
                                                    // value={invoiceDate}
                                                    value={fetchedInvoiceData && fetchedInvoiceData.length > 0 ? fetchedInvoiceData[0].dateOfIssue : invoiceDate}
                                                    disabled
                                                    // placeholder="yyyy-mm-dd"
                                                    // className={`${emptyDateError ? 'input-error' : ''}`} onChange={(e) => {
                                                    //     setEmptyDateError(false)
                                                    //     setDateOfIssue(e.target.value)
                                                    // }} 
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
                                                    // defaultValue={showInvoiceForm && `Net ${fetchedInvoiceData[0].paymentTerms} day`}
                                                    defaultValue={'default'}
                                                    onChange={(e) => {
                                                        setTermsOfPayment(e.target.value)
                                                    }} >
                                                        {/* {fetchedInvoiceData && fetchedInvoiceData.length > 0 && <option value={fetchedInvoiceData[0].paymentTerms}>Net {fetchedInvoiceData[0].paymentTerms} day</option>} */}
                                                        {/* {showInvoiceForm && <option value={fetchedInvoiceData[0].paymentTerms}>Net {fetchedInvoiceData[0].paymentTerms} day</option>} */}
                                                        {showInvoiceForm && <option value={'default'}>Net {fetchedInvoiceData[0].paymentTerms} day</option>}
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
                                                <input 
                                                type='text' 
                                                className={`${emptyProjectDescriptionError ? 'input-error' : ''}`} 
                                                defaultValue={fetchedInvoiceData && fetchedInvoiceData.length > 0 ? fetchedInvoiceData[0].projectDescription : ''}
                                                onChange={(e) => {
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
                                                {showInvoiceForm && fetchedItems.length > 0 && fetchedItems.map((element, index) => {
                                                    return (
                                                        <div key={element.id} className='inputs'>
                                                            <div className='item-name-input'>
                                                                <input 
                                                                type=''
                                                                defaultValue={element.itemName}
                                                                name='itemName'
                                                                onChange={(e) => {
                                                                    handleItemLists(index, e)
                                                                    setEmptyItemNameFieldError(false)
                                                                }} 
                                                                />
                                                            </div>
                                                            <div className='item-qty-input'>
                                                                <input 
                                                                type='number' 
                                                                defaultValue={element.itemQty}
                                                                name='itemQty'
                                                                onChange={(e) => {
                                                                    handleItemLists(index, e)
                                                                    setEmptyItemQtyFieldError(false)
                                                                }} />
                                                            </div>
                                                            <div className='item-price-input'>
                                                                <input 
                                                                type='number' 
                                                                defaultValue={element.itemPrice}
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

                                                {!showInvoiceForm && listel && listel.map((element, index) => {
                                                {/* {listel && listel.map((element, index) => { */}
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
                                                                    // console.log(listel[index][e.target.name])
                                                                    // setElName(prev => [...prev, e.target.value])
                                                                }} 
                                                                />
                                                            </div>
                                                            {/* {element.itemNameCheck} */}
                                                            <div className='item-qty-input'>
                                                                <input 
                                                                type='number' 
                                                                name='itemQty'
                                                                // className={`${emptyItemQtyFieldError && element.qtyIndex === index ? 'input-error' : ''}`}
                                                                // className={`${itemQtyError ? 'input-error' : ''}`}
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
                                                                // className={`${emptyItemListFieldError ? 'input-error' : ''}`}
                                                                onChange={(e) => {
                                                                    // console.log(e.target.name)
                                                                    setEmptyItemListFieldError(false)
                                                                    // setItemPrice(e.target.value)
                                                                    handleItemLists(index, e)
                                                                    // console.log(e.target.value)
                                                                }} /> 
                                                            </div>
                                                            <div className='item-total-price'>
                                                                {/* <p>156.00</p> */}
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
                                                
                                                {!showInvoiceForm && listel.length < 10 && <button className='add-new-invoice' onClick={(e) => {
                                                    e.preventDefault()
                                                    const newElement = {id: Math.floor(Math.random() * 1000000)}
                                                    setItemElement((prev) => [...prev, newElement])
                                                    const newListEl = {id: Math.floor(Math.random() * 1000000), itemName: '', itemQty: '', itemPrice: '', totalPrice: ''}
                                                    setListel((prev) => [...prev, newListEl])
                                                    // console.log(listel, listel.length)
                                                }}>+ Add New Item</button>}

                                                {showInvoiceForm && fetchedItems.length < 10 && <button className='add-new-invoice' onClick={(e) => {
                                                    e.preventDefault()
                                                    const newListEl = {id: Math.floor(Math.random() * 1000000), itemName: '', itemQty: '', itemPrice: '', totalPrice: ''}
                                                    setFetchedItems((prev) => [...prev, newListEl])
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
                        </div>
                    </div>
                    <div className='buttons-wrapper'>
                        <div className='wrapper-contents'>
                            {/* <h1>BUTTONS HERE!!!!</h1> */}
                            {!showInvoiceForm && <button 
                            className='discard' 
                            type='reset'
                            onClick={() => {
                                invoiceFormState(false)
                                form.current.reset()
                                }}
                                >
                                Discard
                            </button>}
                            <div className='draft-send'>

                                {!showInvoiceForm && <button 
                                className='draft' 
                                onClick={() => setInvoiceStatus('Draft')}
                                >
                                    Save as Draft
                                </button>}

                                {showInvoiceForm && <button 
                                className='draft' 
                                onClick={handleShowInvoiceForm}
                                >
                                    Cancel
                                </button>}

                                <button 
                                className='send' 
                                type='submit'
                                onClick={() => {
                                    if(!showInvoiceForm) {
                                        setInvoiceStatus('Pending')
                                    } 
                                }}
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