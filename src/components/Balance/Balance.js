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

export default Balance;