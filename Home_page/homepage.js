function updateCryptoPrice() {
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,litecoin&vs_currencies=usd&include_24hr_change=true')
    .then(Response => Response.json())
    .then(data => {
        // Bitcoin
        document.getElementById('btc').textContent = '$' + data.bitcoin.usd.toLocalString('en-US', {maximumFractionDigits: 2});

        // Ethereum
        document.getElementById('eth').textContent = '$' + data.ethereum.usd.toLocaleString('en-US', {maximumFractionDigits: 2});

    })

}

setInterval(updateCryptoPrice, 20000);
updateCryptoPrice();
