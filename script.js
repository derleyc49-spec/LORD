let cart = 0

function addCart(){
  cart++
  document.getElementById("cartCount").innerText = cart
}

function scrollToSection(){
  document.getElementById("cars").scrollIntoView({behavior:"smooth"})
}

function card(item){
  return `
    <div class="card">
      <img src="${item.img}">
      <div class="cardContent">
        <h3>${item.name}</h3>
        <p>${item.price}</p>
        <button onclick="addCart()">Adicionar</button>
      </div>
    </div>
  `
}

function generateCars(){
  const brands = ["Mercedes","BMW","Audi","Ferrari","Porsche","Lambo"]

  let cars = []

  for(let i=1;i<=100;i++){
    cars.push({
      name: brands[i % brands.length] + " Model " + i,
      price: (100000 + i * 3000) + "€",
      img: "https://source.unsplash.com/400x300/?car,luxury," + i
    })
  }

  document.getElementById("carsProducts").innerHTML =
    cars.map(card).join("")
}

function generateHomes(){
  let homes = []

  for(let i=1;i<=100;i++){
    homes.push({
      name: "Luxury House " + i,
      price: (500000 + i * 10000) + "€",
      img: "https://source.unsplash.com/400x300/?house,luxury," + i
    })
  }

  document.getElementById("homesProducts").innerHTML =
    homes.map(card).join("")
}

function generateTech(){
  let tech = []

  for(let i=1;i<=30;i++){
    tech.push({
      name: "Device " + i,
      price: (500 + i * 50) + "€",
      img: "https://source.unsplash.com/400x300/?technology,gadget," + i
    })
  }

  document.getElementById("techProducts").innerHTML =
    tech.map(card).join("")
}

generateCars()
generateHomes()
generateTech()
