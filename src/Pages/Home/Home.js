import './Home.scss'
import {Link} from 'react-router-dom'
import { useState } from 'react'

function Home() {

    const [invoices, setInvoices] = useState([])

    // const invoiceBox = [
    //     {}
    // ]


    return (
        <div className="home">
            <div className='home-container'>
                <div className='header'>
                    <div className='invoice'>
                        <h1>Invoices</h1>
                        <p>There are 4 total invoices</p>
                        {/* <p>No invoices</p> */}
                    </div>
                    <div className='status'>
                        <div className='filter-status'>
                            <span>Filter by status</span>
                            <img src='/starter-code/assets/icon-arrow-down.svg' />
                        </div>
                        <div className='add-invoice-btn'>
                            <div className='arrow-plus-wrapper'>
                                <img src='/starter-code/assets/icon-plus.svg' />
                            </div>
                            <span>New Invoice</span>
                        </div>
                    </div>
                </div>
                <div className='invoices-wrapper'>
                    <div className='zero-invoices-section' style={{display: 'none'}}>
                        <img src='/starter-code/assets/illustration-empty.svg' />
                        <div className='text-content'>
                            <h2>There is nothing here</h2>
                            <p>Create an invoive by clicking the <b>New invoice</b> button and get started</p>
                        </div>
                    </div>
                    <div className='user-invoices'>
                        <Link to='/invoice/12'>
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
                        </Link>
                        <Link to='/invoice/12'>
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
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home