
const container = document.getElementById("icon_id");
const items = [
  {
    icon: "fa-solid fa-earth-americas",
    main_text: "Discover the possibilities",
    desc: "With nearly half a million attractions, hotels & more, you're sure to find joy.",
  },
  {
      icon:"fa-regular fa-face-smile-beam",
      main_text:"Enjoy deals & delights",
      desc:"Quality activities. Great prices. Plus, earn credits to save more."
  },
  {
      icon:"fa-solid fa-binoculars",
      main_text:"Exploring made easy",
      desc:" Book last minute, skip lines & get free cancellation for easier exploring."
  },
  {
      icon:"fa-solid fa-award",
      main_text:"Travel you can trust",
      desc:"Read reviews & get reliable customer support. We're with you at every step."
  },
];

container.innerHTML = items.map(
  (item) =>
    `<div class="sub_des">
          <i class="${item.icon}" ></i>
          <div class="textsec">
            <p class="p1">${item.main_text}</p>
            <p class="p2">
              ${item.desc}
            </p>
          </div>
        </div>`
).join("");

// document.getElementById("items").innerHTML = mapfeedItems.join("");
