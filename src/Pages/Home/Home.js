import './Home.scss'
import {Link, useNavigate} from 'react-router-dom'
import { useEffect, useState, useContext } from 'react'
import NewInvoice from '../../Components/CreateInvoice/NewInvoice'
import axios from 'axios'
import ThemeContext from '../../context/Context'
import UserProfile from '../../Components/UserProfile/UserProfile'
import { getUserTokenFromLocalStorage } from '../../Components/Utilities/Utilities'

function Home() {
    // console.log(test)

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
    const [invoices, setInvoices] = useState(invoiceBox)
    const [newInvoiceForm, setNewInvoiceForm] = useState(false)
    const [newInvoiceFormData, setNewInvoiceFormData] = useState([])
    const [filterBox, setFilterBox] = useState(false)
    const [invoiceData, setInvoiceData] = useState([])
    const navigate = useNavigate()
    // const [userToken, setUserToken] = useState('')
    const [selectedStatus, setSelectedStatus] = useState([]);
    const [isChecked, setIsChecked] = useState(false)


    function capitalizeFirstLetter(string) {
        let stringtoLower = string.toLowerCase()
        return stringtoLower.charAt(0).toUpperCase() + stringtoLower.slice(1);
    }

    // getting user token
    let userToken = getUserTokenFromLocalStorage()



    // function handling checkbox to filter invoices by status  START
    const handleCheckboxChange = (event) => {

        const {name, checked} = event.target

        setIsChecked(checked)

        if(checked) {
            const filtered = invoiceData.filter((invoice) => {
                return invoice.invoiceStatus === capitalizeFirstLetter(name);
            });
            setSelectedStatus(filtered);
        } else {
            setSelectedStatus([])
        }
    };
    // function handling checkbox to filter invoices by status  END

    const handleFormData = (data) => {
        setNewInvoiceFormData([
            ...newInvoiceFormData,
            data
        ])
    }

    // function fetching user's invoices data START 

    const getCreatedInvoices = async () => {

        try {
            
            // const response = await axios.get('http://localhost:1556/signin', userEmail)

            // console.log(response.data)


        } catch (error) {
            console.log(error)
        }

    }

    const getUserInvoices = async () => {

        try {
            
            const response = await axios.get(`http://localhost:1556/invoice/userInvoice/${getUserTokenFromLocalStorage()}`)

            if(response.status === 200) {
                // console.log(response.data)
                setInvoiceData(response.data)
                setIsDataFetched(false)
            } 


        } catch (error) {
            console.log(error)
            setIsDataFetched(false)
        }

    }

    async function getInvoiceFromDB() {

        const token = localStorage.getItem('token');

        await axios.get(`http://localhost:80/api/${token}`).then(function(response) {
            
            if(!Array.isArray(response.data)) {
                console.log(response.data)
            } else {
                setInvoiceData(response.data)
            }

            setIsDataFetched(false)
        })
    }


    useEffect(() => {
        // getInvoiceFromDB()
        getUserInvoices()
    }, [isDataFetched])
    // function fetching user's invoices data END 


    const handleFilterBoxState = () => {
        setFilterBox(!filterBox);
    }

    const handleInvoiceFormState = (state) => {
        setNewInvoiceForm(state);
    }


    const invoicesToDisplay = isChecked ? selectedStatus : invoiceData;


    return (
        <div className="home" >
            <NewInvoice invoiceFormState={handleInvoiceFormState} newInvoice={newInvoiceForm} formdata={handleFormData} />

            <div className='home-container' >
                <div className='header'>
                    <div className='invoice'>
                        <h1>Invoices</h1>
                        {invoicesToDisplay.length > 0 ? <p>There are {invoicesToDisplay.length} total invoices</p> : <p>No invoices</p>}
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
                                                    handleCheckboxChange(e)
                                                }}>
                                                    <input type='checkbox' name={`${status.status.toLowerCase()}`} />
                                                    {status.status}
                                                </label>
                                            </div>
                                        )
                                    })}
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
                    {invoicesToDisplay.length === 0 && <div className='zero-invoices-section'>
                        <img src='/starter-code/assets/illustration-empty.svg' />
                        <div className='text-content'>
                            <h2>There is nothing here</h2>
                            <p>Create an invoive by clicking the <b>New invoice</b> button and get started</p>
                        </div>
                    </div>}
                    {invoicesToDisplay && invoicesToDisplay.length > 0 && <div className='user-invoices'>
                        {invoicesToDisplay && invoicesToDisplay.length > 0 && invoicesToDisplay.map(invoice => {
                            return (
                                <Link key={invoice.invoiceID} to={`/invoice/${invoice.invoiceID}`}>
                                    <div className='invoice-box'>
                                        <div className='details1'>
                                            <div className='invoice-receipt-no'>
                                                <p> <span>#</span>{invoice.receiptNumber} </p>
                                            </div>
                                            <div className='invoice-due-date'>
                                                <p>Due {invoice.dueDate}</p>
                                            </div>
                                            <div className='invoice-client-name'>
                                                <p>{invoice.clientName}</p>
                                            </div>
                                        </div>
                                        <div className='details2'>
                                            <div className='invoice-price'>
                                                <p>${invoice.itemsTotalPrice}</p>
                                            </div>
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
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default Home