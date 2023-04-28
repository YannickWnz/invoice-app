import './Home.scss'
import {Link} from 'react-router-dom'
import { useEffect, useState, useContext } from 'react'
import NewInvoice from '../../Components/CreateInvoice/NewInvoice'
import axios from 'axios'
import ThemeContext from '../../context/Context'

function Home() {

    const invoiceBox = [
        { receiptNo: 'RT545', date: '19 Aug 2023', clientName: 'Jason Kidd', price: '356.00', status: 'Paid'},
        { receiptNo: 'US535', date: '20 Sept 2023', clientName: 'Mario', price: '483.00', status: 'Pending'},
        { receiptNo: 'YA493', date: '25 Dec 2023', clientName: 'Yannick', price: '833.00', status: 'Draft'},
        { receiptNo: 'TG001', date: '02 Feb 2023', clientName: 'Marc Antoine', price: '250.00', status: 'Paid'}
    ]

    const filteringStatus = [
        {id: 1, status: 'Draft'},
        {id: 2, status: 'Pending'},
        {id: 3, status: 'Paid'}
    ]


    const {isDataFetched, setIsDataFetched} = useContext(ThemeContext)
    // const [invoices, setInvoices] = useState([])
    const [invoices, setInvoices] = useState(invoiceBox)
    const [selectedStatus, setSelectedStatus] = useState([])
    const [newInvoiceForm, setNewInvoiceForm] = useState(false)
    const [newInvoiceFormData, setNewInvoiceFormData] = useState([])
    const [filterBox, setFilterBox] = useState(false)
    // const [invoiceData, setInvoiceData] = useState([])
    const [invoiceData, setInvoiceData] = useState([])
    // const [isDataFetched, setIsDataFetched] = useState(false)


    const handleFormData = (data) => {
        setNewInvoiceFormData([
            ...newInvoiceFormData,
            data
        ])
    }

    function getInvoiceFromDB() {
        axios.get('http://localhost:80/api/').then(function(response) {
            // console.log(response.data)
            
            if(!Array.isArray(response.data)) {
                console.log(response.data)
            } else {
                setInvoiceData(response.data)
            }

            setIsDataFetched(false)
        })
    }
    useEffect(() => {
        getInvoiceFromDB()
    }, [isDataFetched])


    const handleFilterBoxState = () => {
        setFilterBox(!filterBox);
    }

    const handleInvoiceFormState = (state) => {
        setNewInvoiceForm(state);
    }

    const filterInvoices = (status) => {
        setNewInvoiceFormData((prev) => {
            return prev.filter(invoice => {
                return invoice.invoiceStatus == status
            })
        })
    }

    return (
        <div className="home" >
            <NewInvoice invoiceFormState={handleInvoiceFormState} newInvoice={newInvoiceForm} formdata={handleFormData} />

            <div className='home-container' >
                <div className='header'>
                    <div className='invoice'>
                        <h1>Invoices</h1>
                        {invoiceData.length > 0 ? <p>There are {invoiceData.length} total invoices</p> : <p>No invoices</p>}
                    </div>
                    <div className='status'>
                        <div className='filter-status'>
                            <span onClick={() => {handleFilterBoxState(true)}}>
                                Filter by status
                            </span>
                            <img src='/starter-code/assets/icon-arrow-down.svg' />
                            {filterBox && <div className='select-status'>
                                <form>
                                    {filteringStatus.map(status => {
                                        return (
                                            <div key={status.id} className='status-checkbox'>
                                                <label onChange={(e) => {
                                                    if(e.target.checked) {
                                                        filterInvoices(status.status)
                                                    } else {
                                                        setInvoices(newInvoiceFormData)
                                                    }

                                                }}>
                                                    <input type='checkbox' name={`${status.status.toLowerCase()}`} />
                                                    {status.status}
                                                </label>
                                            </div>
                                        )
                                    })}
                                    {/* <div className='pending-checkbox'>
                                        <label>
                                            <input type='checkbox' onChange={(e) => {
                                                if(e.target.checked) {
                                                    filterInvoices('Pending')
                                                } else {
                                                    setInvoices(invoiceBox)
                                                }
                                            }} />
                                            Pending
                                        </label>
                                    </div> */}
                                    {/* <div className='paid-checkbox'>
                                        <label>
                                            <input type='checkbox' />
                                            Paid
                                        </label>
                                    </div> */}
                                </form>
                            </div>}
                        </div>
                        <div className='add-invoice-btn' onClick={handleInvoiceFormState}>
                            <div className='arrow-plus-wrapper'>
                                <img src='/starter-code/assets/icon-plus.svg' />
                            </div>
                            <span>New Invoice</span>
                        </div>
                    </div>
                </div>
                <div className='invoices-wrapper'>
                    {invoiceData.length === 0 && <div className='zero-invoices-section' >
                        <img src='/starter-code/assets/illustration-empty.svg' />
                        <div className='text-content'>
                            <h2>There is nothing here</h2>
                            <p>Create an invoive by clicking the <b>New invoice</b> button and get started</p>
                        </div>
                    </div>}
                    {invoiceData && invoiceData.length > 0 && <div className='user-invoices'>
                        {invoiceData && invoiceData.length > 0 && invoiceData.map(invoice => {
                            return (
                                <Link key={invoice.invoiceID} to={`/invoice/${invoice.invoiceID}`}>
                                    <div className='invoice-box'>
                                        <div className='details1'>
                                            <div className='invoice-receipt-no'>
                                                <p> <span>#</span>{invoice.receiptNumber} </p>
                                            </div>
                                            <div className='invoice-due-date'>
                                                <p>Due {invoice.dateOfIssue}</p>
                                            </div>
                                            <div className='invoice-client-name'>
                                                <p>{invoice.clientName}</p>
                                            </div>
                                        </div>
                                        <div className='details2'>
                                            <div className='invoice-price'>
                                                <p>${invoice.itemsTotalPrice}</p>
                                            </div>
                                            {/* <div className='invoice-status paid'> */}
                                            {/* <div className={`invoice-status ${setToLower(invoice.invoice_status)}`}> */}
                                            <div className={`invoice-status ${!invoice == '' && invoice.invoiceStatus.toLowerCase()}`}>
                                                <span className='dot'></span>
                                                <p>{invoice.invoiceStatus}</p>
                                            </div>
                                            <img src='/starter-code/assets/icon-arrow-right.svg' /> 
                                        </div>
                                    </div>
                                </Link> 
                            )
                        }) }
                        {/* <Link to='/invoice/12'>
                            <div className='invoice-box'>
                                <div className='details1'>
                                    <div className='invoice-receipt-no'>
                                        <p> <span>#</span>RT3080 </p>
                                    </div>
                                    <div className='invoice-due-date'>
                                        <p>Due 19 Aug 2021</p>
                                    </div>
                                    <div className='invoice-client-name'>
                                        <p>Jensen Huang</p>
                                    </div>
                                </div>
                                <div className='details2'>
                                    <div className='invoice-price'>
                                        <p>$334.40</p>
                                    </div>
                                    <div className='invoice-status paid'>
                                        <span className='dot'></span>
                                        <p>Paid</p>
                                    </div>
                                    <img src='/starter-code/assets/icon-arrow-right.svg' /> 
                                </div>
                            </div>
                        </Link> */}
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default Home