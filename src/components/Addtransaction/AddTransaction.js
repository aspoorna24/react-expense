function AddTransaction({selectpayment,handleSelectPayment,addtoPayment,title,amount,setAmount,setTitle,}){
  return(
    <>
    <div className="addtransaction" style={{padding:'10px'}}>
      <p className="title" style={{textAlign:'center'}}>Add your Transactions</p>
      <p style={{color:'gray'}}>Add all the transaction you did, like salary, any profit, giving money to friend,rent  or any other source of income</p>
      <div className="paymentform">
         <form onSubmit={addtoPayment}>
           <label>Title</label>
           <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} required/>
           <label>Amount</label>
           <input type="number" name="amount" value={amount} onChange={(e)=>setAmount(e.target.value)} required/>
           <br></br>
           <select onChange={handleSelectPayment} required>
            <option value="">Choose the option ... </option>
            <option value="credit">credit</option>
            <option value="debit">debit</option>
           </select>
           <br></br>
           <button style={{backgroundColor: selectpayment === 'credit'?'green':selectpayment==='debit'?'red':'gray',color:'white','border':'none','cursor':'pointer'}}> ADD TO PAYMENT</button>
         </form>
      </div>
    </div>
    </>
  )
}

export default AddTransaction;