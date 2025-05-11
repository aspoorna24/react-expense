import React,{useState} from "react";
import { FaTrash } from 'react-icons/fa';
import Balance from "./components/Balance/Balance";
import AddTransaction from "./components/Addtransaction/AddTransaction";
import Transaction from "./components/Transactions/Transaction";

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






