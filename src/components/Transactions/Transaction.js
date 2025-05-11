import TransactionList from "./TransactionList";
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

export default Transaction;