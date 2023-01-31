let keepWithdrawing = null;

do {
    let money = parseInt(prompt("How much money would you like to withdrawl", 60));
    let isPossible = false;

    if(money >= 5 && money % 5 == 0){
        isPossible = true;
    }

    //isPossible = money >= 5 ? true : false;

    if(isPossible){
        
        let bills = [100, 50, 20, 10, 5];
        //let billsToDispense = [];
        let moneyLeftToDispense = money;
        for(let i = 0; i < bills.length; i++ ){
            if (moneyLeftToDispense >= bills[i]){
                let amountOfBills = parseInt(moneyLeftToDispense / bills[i]);
                moneyLeftToDispense = moneyLeftToDispense % bills[i];

                document.write(`<p> ${bills[i]} X ${amountOfBills}</p>`)
            }
        }
                document.write(`<p>Your Withdrawl of ${money} is compelete </p>`)

        // hundreds = parseInt(money / 100);
        // let moneyLeftToDispense = money % 100;
        // if(moneyLeftToDispense >= 50){
        // fifties = parseInt(moneyLeftToDispense / 50);
        // moneyLeftToDispense = money % 50;
        // }
        // if(moneyLeftToDispense >= 20){
        // twenties = parseInt (moneyLeftToDispense / 20);
        // moneyLeftToDispense = money % 20
        // }
        // if(moneyLeftToDispense >= 10){
        // tens = parseInt (moneyLeftToDispense / 10);
        // moneyLeftToDispense = money % 10;
        // }
        // if(moneyLeftToDispense >= 5){
        // fives = parseInt (moneyLeftToDispense / 5);
        // moneyLeftToDispense = money % 5;
        // }

        // const html =`
        // <p><label># Of 100's:&nbsp;</label>${hundreds}</p>
        // <p><label># Of 50's:&nbsp;</label>${fifties}</p>
        // <p><label># Of 20's:&nbsp;</label>${twenties}</p>
        // <p><label># Of 10's:&nbsp;</label>${tens}</p>
        // <p><label># Of 5's:&nbsp;</label>${fives}</p>`;

        // document.write(html);
  


    }else {
        alert("We Cant Dispense That Amount");
    }



    keepWithdrawing= prompt("Do you want to keep withdrawing?", "y").toLowerCase();

}while(keepWithdrawing !="n")