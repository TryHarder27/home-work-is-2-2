let BankTransaction = {
    amount: 500000,
    date: "08/05/2023",
    sender: "Дмитрий Васильевич",
    recipient: "Павел Владимирочик"
 };


  for (let key in BankTransaction) {
    console.log(`${key}: ${BankTransaction[key]}`);
 }


  if (BankTransaction.amount > 100000) {
    console.log("Сумма транзакции не превышает 500000"); 
 }  else {
    console.log("Сумма транзакции больше 500000");
 }
