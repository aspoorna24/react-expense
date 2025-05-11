import React,{useState} from "react";
import { FaTrash } from 'react-icons/fa';
function App() {
  const[selectpayment,setSelectpayment] = useState('');
  const [transactionlist,setTransactionlist] = useState([]);
  const[title,setTitle] = useState('')
  const[amount,setAmount] = useState(0)

  const handleSelectPayment = (e) =>{
    setSelectpayment(e.target.value);
  }


  const addtoPayment = (e) =>{
      e.preventDefault()
      setTransactionlist([...transactionlist,{title:title,amount:amount,status:selectpayment}])
      
  }
  
  const handleDelete = (index) => {
    const newTransactionList = [...transactionlist];
    newTransactionList.splice(index, 1);
    setTransactionlist(newTransactionList);
  };


  return (
    <div className="App">
      <header className="App-header">
         <h1>MY EXPENSE</h1>
         <p>Your expenditure reports</p>
      </header>
         <div className="content">
         <Balance transactionlist={transactionlist} />
         <Transaction transactionlist={transactionlist} handleDelete={handleDelete}/>
         <AddTransaction selectpayment={selectpayment} handleSelectPayment={handleSelectPayment} addtoPayment={addtoPayment} title={title} setTitle={setTitle} amount={amount} setAmount={setAmount}/>
         </div>
     
    </div>
  );
}

export default App;

function Balance({transactionlist}){
  let totalIncome = 0;
  let totalExpense = 0;
  transactionlist.forEach((transaction) => {
    if (transaction.status === 'credit') {
      totalIncome += parseInt(transaction.amount);
    } else if (transaction.status === 'debit') {
      totalExpense += parseInt(transaction.amount);
    }
  });
  
 return(
  <>
  <h4 style={{textTransform:'uppercase'}}>Your Balance</h4>
  <h2 className="amount">$ {totalIncome - totalExpense}</h2>
  <br></br>
  <div className="box">
  <div>
    <h4>INCOME</h4>
    <p className="amount" style={{color:'green'}}> $ {totalIncome}</p>
  </div>
  <div>
    <h4>EXPENSE</h4>
    <p className="amount" style={{color:'red'}}> $ {totalExpense}</p>
  </div>
  </div>
  </>
 )
}


function TransactionList({transactionlist,handleDelete}){
  return(
  
    <>
    <ul>
      {transactionlist.length === 0 && <p style={{textAlign:'center'}}>No transactions added</p>}
      {transactionlist.length > 0 && <p style={{textAlign:'center'}}>Total Transactions: {transactionlist.length}</p>}
    
      {transactionlist.map((transaction,index)=> <li key={index} className={transaction.status==='credit' ? 'green' :'red'}>
        <div><p className="transactiontitle">{transaction.title}</p>
        <p className="transactionamount">$ {transaction.amount}</p>
        </div>
          <FaTrash  onClick={() => handleDelete(index)} 
    
      style={{ justifyContent: 'flex-end',alignItems: 'flex-end', cursor: 'pointer', color: 'red' ,'fontSize':'20px',margin:'7px'}} 
    />
      </li>)}
    </ul>
    </>
  )
  
}
function Transaction({transactionlist, handleDelete}){
  
  return(
    <>
    <div className="transaction" style={{padding:'15px'}}>
    <p className="title"> Transactions Saved</p>
    <TransactionList transactionlist={transactionlist} handleDelete={handleDelete} />
    </div>
    </>
  )

}
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


