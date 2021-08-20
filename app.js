const purchasePrice = document.querySelector("#purchase-price")

const stockQuantity = document.querySelector("#stock-quantity")

const currentPrice = document.querySelector("#current-stockPrice")

const tellMe = document.querySelector("#tell-me")

const output = document.querySelector("#output")

const allInput = document.querySelector("#all-input")



function calculateProfitAndLoss(){

    const pp = purchasePrice.value;
    const qty = stockQuantity.value;
    const mp = currentPrice.value;

    if(mp>pp){
        const profit = (mp - pp)*qty;
        const profitInPercentage = (profit/pp)*100;

        output.textContent = "Congrats, you have gained profit of " + profit + " and in percentage it is " + profitInPercentage + "%";
    } else if (pp>mp){
        const loss = (pp - mp)*qty;
        const lossInPercentage = (loss/pp)*100;
        console.log(lossInPercentage)

        output.textContent = "Sorry, but you have suffered a loss of rupees" + loss  + " and in percentage thos loss is " + lossInPercentage + "%";
    } else {
        output.textContent = "Please fill out all Fields"
    }
}


tellMe.addEventListener("click", calculateProfitAndLoss);


