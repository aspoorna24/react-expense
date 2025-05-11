import { FaTrash } from 'react-icons/fa';
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

export default TransactionList;