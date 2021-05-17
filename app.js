let mods = []

let cheese = 0;
  let pickaxes = 0;
 let miners = 0;
 let drill = 0;
 let cart = 0;
 let quanity = 0;
 

let clickUpgrades = {
  pickaxes:{
    price: 25,
    quanity: 0,
    multiplier: 1
  },
  drill:{
    price:250,
    quanity: 0,
    multiplier: 2
  }
}

let automaticUpgrades = {
  cheeseMiner:{
    price: 100,
    quanity: 0,
    multiplier: 3
  },
  cart:{
    price: 5000,
    quanity: 0,
    multiplier: 4
  }
}







function mine(){
  cheese++
  update()
}


function BuyPickaxe(){
if(price = 25){
cheese = cheese - price;
pickaxes = pickaxes + 1;
price = Math.round(price * 1.15)
}
  update()
}

function BuyMiner(){
  if(price = 100){
    cheese = cheese - price
  }
  miners++
  update()
}

function BuyDrill(){
if(price = 0){
  cheese = cheese - price
}
  drill++
  update()
  startInterval()
}

function BuyCart(){
  if(price = 5000){
    cheese = cheese - 5000
  }
  cart++
  update()
}



   


  



//  function disableBtn(){
//      document.getElementById("pick").disabled = true;
//      document.getElementById("drill").disabled = true;
//      document.getElementById("cart").disabled = true;
//      document.getElementById("miner").disabled = true;
//  }



 function collectAutoUpgrades(){
    startInterval()
    update()
 }

 function startInterval() {
   cheese = cheese + 1;
   collectionInterval = setInterval(collectAutoUpgrades, 3000);
   document.getElementById("minedCheese").innerText = cheese < 0 ? 0 : cheese
   
  }
  
  
  // disableBtn()
  
  function update(){
    document.getElementById("minedCheese").innerText = cheese < 0 ? 0 : cheese
    document.getElementById("pick").innerText = pickaxes
    document.getElementById("miner").innerText = miners
    document.getElementById("cart").innerText = cart
    document.getElementById("drill").innerText = drill
  }






