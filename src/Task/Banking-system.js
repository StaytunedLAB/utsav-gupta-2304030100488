

function  bankingsystem(account){
    let  bal=parseInt(account.Finalbalance);
    let  applied=[];
    let rejected=[];



    try {
        if(isNaN(bal)  ){
           
            
            throw new Error("Not  a number  or  missing")
         
        }
       if(account.transactions  && Array.isArray(account.transactions)){
        account.transactions.forEach(trans=> {
            try{
                
                const amt=parseInt(trans.amount)

                if(amt<=0 || isNaN(amt) ){
                    rejected.push({...trans,reason:"Inavalid  amount"})
                     return
                }
                if(trans.type==="Deposit"){
                    bal=bal+amt
                    applied.push({...trans})
                }
                else  if(trans.type==="Withdraw"){
                         if(bal<amt){
                            rejected.push({...trans,reason:"Insuffcient  amount  Withdrawn"})

                         }
                         else{
                            bal=bal-amt
                            applied.push({...trans})
                         }
                }
                else{
                    rejected.push({ ...trans, reason: "Unknown transaction type" })
          }
                }

                
           
            catch{
rejected.push({ ...trans, reason: "System error" });
            }
        }
);
       }
    else {
      throw new Error("Transactions missing");
    }
       
        
    } catch (error) {
    console.log("System Error:", error.message);
  } finally {
    console.log("Bank account processing completed for:", account.accountHolder);
  }
        
    return{
    accountNumber: account.accountNumber,
    accountHolder: account.accountHolder,
    currency: account.currency,
   
    finalBalance: bal,
    appliedTransactions: applied,
    rejectedTransactions: rejected
  };


}

const account = {
  accountNumber: "456465",
  accountHolder: "Rahul  yadav",
 
  currency: "indian",
  Finalbalance:"10000",
  transactions: [
    { type: "Deposit", amount: "5000" },
    { type: "Withdraw", amount: "2000" },
      { type: "Withdraw", amount: "20000" }, 
    { type: "Deposit", amount: "-500" },   
   
       
  ],
 
};

console.log(bankingsystem(account))