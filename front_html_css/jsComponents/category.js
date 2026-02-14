const card = document.getElementById("card_");

const cardItems = [{
    image: "../images/destination/01.png",
    cname: "Tokyo",
    desc: "Discover the Tokyo with our special tours"
},

{
    image: "../images/destination/02.png",
    cname: "Bali",
    desc: "Discover the Bali with our special tours"
},

{
    image: "../images/destination/03.png",
    cname: "Bangkok",
    desc: "Discover the Bangkok with our special tours"
},

{
    image: "../images/destination/04.png",
    cname: "Cancun",
    desc: "Discover the Cancun with our special tours"
},


];

card.innerHTML = cardItems.map((item )=>
  ` <div class="catmain">
    <img class="image" src="${item.image}" alt="${item.cname}" />
    <div class="stylediv"></div>
    <div class="info">
      <p class="cname">${item.cname}</p>
      <p class="desc">${item.desc}</p>
      <button class="btn">See All Tours</button>
    </div>
  </div>
  `
).join("");
