const purchasePrice = document.querySelector("#purchase-price")

const stockQuantity = document.querySelector("#stock-quantity")

const currentPrice = document.querySelector("#current-stockPrice")

const tellMe = document.querySelector("#tell-me")

const output = document.querySelector("#output")


tellMe.addEventListener("click", function () {

    const profit = currentPrice.value - purchasePrice.value;

    const loss = purchasePrice.value - currentPrice.value;

    const profitInPercentage = (profit % purchasePrice) * 100;

    console.log(profitInPercentage)

    const lossInPercentage = (loss % purchasePrice) * 100;


    if (purchasePrice > currentPrice) {
        output.textContent = "You are in profit of " + profit + "in absolute term and in percentage it is " + profitInPercentage
    }
    if (currentPrice > purchasePrice) {
        output.textContent = "You are in profit of " + loss + "in absolute term and in percentage it is " + lossInPercentage
    }

})
