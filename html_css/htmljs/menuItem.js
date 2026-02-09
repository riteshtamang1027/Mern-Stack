const container = document.getElementById("itemslist");
const Items = [
  {
    img: "https://plus.unsplash.com/premium_photo-1673769108070-580fe90b8de7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9tb3xlbnwwfHwwfHx8MA%3D%3D",
    i_name: "Momo",
    desc: "Taste the warmth and love in every bite of our freshly made momo.",
    price: 140,
  },
  {
    i_name: "Fried Noodles",
    desc: "Taste the warmth and love in every bite of our freshly made Noodles.",
    price: 160,
    img: "https://plus.unsplash.com/premium_photo-1694670234085-4f38b261ce5b?w=600",
  },
  {
    i_name: "Salad",
    desc: "Taste the warmth and love in every bite of our freshly made Salad.",
    price: 200,
    img: "https://images.unsplash.com/photo-1547496502-affa22d38842?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNhbGFkfGVufDB8fDB8fHww",
  },

   {
    i_name: "Salad",
    desc: "Taste the warmth and love in every bite of our freshly made Salad.",
    price: 200,
    img: "https://images.unsplash.com/photo-1547496502-affa22d38842?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNhbGFkfGVufDB8fDB8fHww",
  },
  
];

container.innerHTML = Items.map(
  (item) => ` <div class="itemdiv">
           <div class="imageDiv">
             <img
              src=${item.img}
              alt="Image"
            />
           </div>
           <div class="iteminfo">
              <p class="itemName">${item.i_name}</p>
              <p class="itemDesc">${item.desc}
              </p>
              <p class="price">price: <span>${("$", item.price)}</span></p>
            </div>
          </div>`
).join("");


