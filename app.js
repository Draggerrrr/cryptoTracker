const formtype = document.querySelector("#searchBox");
const coinName = document.querySelector("#coinName");
const coinPrice = document.querySelector("#coinPrice");
const coinVolume = document.querySelector("#coinVolume");
const coinChange = document.querySelector("#coinChange");
const tableVisibility = document.querySelector(".table");


formtype.addEventListener("submit", (e)=>{
    e.preventDefault();

    const ctype = formtype.elements.coinType.value;

    fetchPrice(ctype);
})

const fetchPrice = async(ctype) =>{
    const revert = await axios.get(`https://api.coinstats.app/public/v1/coins/${ctype}?currency=USD`);
    
    const name = revert.data.coin.name;
    const price = revert.data.coin.price;
    const volume = revert.data.coin.volume;
    const change = revert.data.coin.priceChange1d;

    tableVisibility.style.visibility = "visible";

    if(change < 0){
        coinPrice.style.color = "red";
    }else{
        coinPrice.style.color = "green";
    }


    if(change < 0){
        coinChange.style.color = "red";
    }else{
        coinChange.style.color = "green";
    }


    coinName.innerHTML = `${name}`;
    coinPrice.textContent = `${price}` + " USD";
    coinVolume.textContent = `${volume}`;
    coinChange.textContent = `${change}`;

}