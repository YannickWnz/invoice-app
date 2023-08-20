import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import './Invoice.scss'
import axios from 'axios'
import NewInvoice from '../../Components/CreateInvoice/NewInvoice'
import EditInvoiceForm from '../../Components/CreateInvoice/EditInvoiceForm'

function Invoice() {

  const { id } = useParams()

  const [fetchedInvoiceData, setFetchedInvoiceData] = useState([])
  const [fetchError, setFetchError] = useState('')
  const [showInvoiceForm, setShowInvoiceForm] = useState(false)
  const [fetchedItems, setFetchedItems] = useState([])
  const [itemList, setItemList] = useState([])
  const navigate = useNavigate()

  
  
  const handleShowInvoiceForm = () => {
    setShowInvoiceForm(!showInvoiceForm)
  }


  useEffect(() => {
    getSelectedInvoice()
  }, [])

  async function getSelectedInvoice() {

    await axios.get(`http://localhost:80/api/fetchSelectedInvoice.php/${id}`).then(function(response) {
    // await axios.get(`https://api.invoice-app.xyz/api/fetchSelectedInvoice.php/${id}`).then(function(response) {
      
      if(response.data == 'error') {
        console.log('could not find invoice')
        setFetchError('Could not find invoice')
      } else {
        setFetchedInvoiceData(response.data)
        setFetchError('')
        // console.log(response.data)
        let parsedItemsList = JSON.parse(response.data[0].item_list)
        setFetchedItems(parsedItemsList)
        setItemList(parsedItemsList)
      } 

    })

  }

  const deleteInvoice = async id => {

    await axios.delete(`http://localhost:80/api/${id}`).then(function(response) {
    // await axios.delete(`https://api.invoice-app.xyz/api/${id}`).then(function(response) {
      console.log(response.data)
      if(response.data !== 'error') {
        navigate('/');
      }
    })

  }

  const updateInvoiceStatus = async id => {

    await axios.put(`http://localhost:80/api/${id}`).then(function(response) {
    // await axios.put(`https://api.invoice-app.xyz/api/${id}`).then(function(response) {
        console.log(response.data)
        navigate('/');

    })

  }

  return (
    <div className='selected-invoice'>
      <NewInvoice showInvoiceForm={showInvoiceForm} handleShowInvoiceForm={handleShowInvoiceForm} fetchedInvoiceData={fetchedInvoiceData} setFetchedItems={setFetchedItems} fetchedItems={fetchedItems} />
      {/* <EditInvoiceForm showInvoiceForm={showInvoiceForm} handleShowInvoiceForm={handleShowInvoiceForm} fetchedInvoiceData={fetchedInvoiceData} /> */}
      <div className='invoice-container'>
        <div className='content-wrapper'>
          <Link to='/'>
            <img src='/starter-code/assets/icon-arrow-left.svg' /> 
            Go back
          </Link>

          {fetchError !== '' && <div className='error-section'>
            <h1>Invoice not found</h1>
            <img src='/starter-code/assets/illustration-no-data.svg' />
          </div>}

          {fetchedInvoiceData.length > 0 && fetchedInvoiceData.map((fetcheddata, index) => {return <div key={fetcheddata.invoiceID} className='actions-wrapper'>
            <div className='status-wrapper'>
              <span>Status</span>
              {/* <p>Pending</p> */}
              {/* <div className=' invoice-status paid'> */}
              <div className={`invoice-status ${fetcheddata.invoiceStatus.toLowerCase()}`}>
                <span className='dot'></span>
                <p>{fetcheddata.invoiceStatus}</p>
                {/* <p>Paid</p> */}
              </div>
            </div>

            <div className='actions-btn'>
              <div className='edit'>
                <button onClick={handleShowInvoiceForm}>Edit</button>
              </div>
              <div className='delete'>
                <button onClick={() => deleteInvoice(fetcheddata.invoiceID)}>Delete</button>
              </div>
              <div className='mark-paid'>
                <button onClick={() => updateInvoiceStatus(fetcheddata.invoiceID)}>Mark Paid</button>
              </div>
            </div>
          </div>})}

          {fetchedInvoiceData.length > 0 && fetchedInvoiceData.map((fetcheddata, index) => {return <div key={fetcheddata.invoiceID} className='invoice-details-container'>
            <div className='details-section-1'>
              <div className='receipt-description'>
                {/* <p> <span>#</span>RT985 </p> */}
                <p> <span>#</span>{fetcheddata.receiptNumber}</p>
                <p>{fetcheddata.projectDescription}</p>
              </div>
              <div className='bill-from-address'>
                <p>{fetcheddata.streetAddressBillFrom}</p>
                <p>{fetcheddata.cityBillFrom}</p>
                <p>{fetcheddata.postCodeBillFrom}</p>
                <p>{fetcheddata.CountryBillFrom}</p>
              </div>
            </div>
            <div className='details-section-2'>
              <div className='dates-section'>
                <div className='invoice-date'>
                  <p>Invoice Date</p>
                  <p>{fetcheddata.dateOfIssue}</p>
                </div>
                <div className='due-date'>
                  <p>Payment Due</p>
                  <p>{fetcheddata.dueDate}</p>
                </div>
              </div>
              <div className='bill-to-section'>
                <p>Bill To</p>
                <p>{fetcheddata.clientName}</p>
                <p>{fetcheddata.clientAddress}</p>
                <p>{fetcheddata.clientCity}</p>
                <p>{fetcheddata.clientPostCode}</p>
                <p>{fetcheddata.clientCountry}</p>
              </div>
              <div className='sent-to-section'>
                <p>Sent To</p>
                <p>{fetcheddata.clientEmail}</p>
              </div>
            </div>
            <div className='details-section-3'>
              <div className='items-section'>
                <div className='name-qty-price-total'>
                  <div className='name'>
                    <p>Item Name</p>
                  </div>
                  <div className='qty'>
                    <p>QTY.</p>
                  </div>
                  <div className='price'>
                    <p>Price</p>
                  </div>
                  <div className='total'>
                    <p>Total</p>
                  </div>
                </div>
                {itemList.length > 0 && itemList.map((item) => {return <div key={item.id} className='items-details'>
                  <div className='items'>
                    {/* <p>Banner Design</p> */}
                    {/* <p>Banner Design</p> */}
                    <p>{item.itemName}</p>
                  </div>
                  <div className='items-qty'>
                    {/* <p>1</p> */}
                    <p>{item.itemQty}</p>
                  </div>
                  <div className='items-price'>
                    {/* <p>$235</p> */}
                    <p>$ {item.itemPrice}</p>
                  </div>
                  <div className='items-total-price'>
                    {/* <p>$235</p> */}
                    <p>$ {item.totalPrice}</p>
                  </div>
                </div>})}
              </div>
              <div className='items-total-amount'>
                <p>Amount Due</p>
                <p>$ {fetcheddata.itemsTotalPrice}</p>
              </div>
            </div>
          </div>})}
        </div>
      </div>
    </div>
  )
}

export default Invoice