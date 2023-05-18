const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img: "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img: "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img: "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img: "https://images.squarespace-cdn.com/content/v1/5cb78f61cd9e530001e10924/1604949115609-TR78NSF0SGWOQCE5I4Z4/dan+dan+mian+2.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img: "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img: "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img: "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img: "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];
// console.log(menuItems);

// {
//   id: 1,
//   title: "Tteokbokki",
//   category: "Korea",
//   price: 10.99,
//   img:
//     "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
//   desc: `Spicy rice cakes, serving with fish cake.`,
// },

// <!-- filter buttons-->
// <div class="btn-container">
//   <button class="btn btn-outline-dark btn-item" data-id="All">
//     All</button
//   ><button class="btn btn-outline-dark btn-item" data-id="Korea">
//     Korea</button
//   ><button class="btn btn-outline-dark btn-item" data-id="Japan">
//     Japan</button
//   ><button class="btn btn-outline-dark btn-item" data-id="China">
//     China
//   </button>
// </div>



function getItems(params = "") {
  let menuItems = document.querySelector(".section-center");
  menuItems.replaceChildren();

  console.log("fonksıyon ıcı params", params);
  menu.forEach((element) => {
    if (params == "All"|| params == element.category) {
      console.log(element.id  );
      console.log(element.category);
      const singleItem = document.createElement("div");
      singleItem.classList.add("menu-items", "col-lg-6", "col-sm-12");

      let itemImg = document.createElement("img");
      itemImg.classList.add("photo");
      itemImg.alt = element.title;
      itemImg.src = element.img;
      singleItem.appendChild(itemImg);

      let singleItemMenuInfo = document.createElement("div");
      singleItemMenuInfo.classList.add("menu-info");

      let singleItemMenuTitle = document.createElement("div");
      singleItemMenuTitle.classList.add("menu-title");

      let h4_1 = document.createElement("h4");
      h4_1.innerHTML = element.title;
      singleItemMenuTitle.appendChild(h4_1);

      let h4_2 = document.createElement("h4");
      h4_2.classList.add("price");
      h4_2.innerHTML = element.price;

      singleItemMenuTitle.appendChild(h4_2);

      singleItemMenuInfo.appendChild(singleItemMenuTitle);

      let singleItemMenuText = document.createElement("div");
      singleItemMenuText.classList.add("menu-text");
      singleItemMenuText.innerHTML = element.desc;
      singleItemMenuInfo.appendChild(singleItemMenuText);

      singleItem.appendChild(singleItemMenuInfo);

      menuItems.appendChild(singleItem);
      // console.log(element.title);}
    }
  });
}
getItems("All");

const buttons = ["All", "Korea", "Japan", "China"];
let buttonContainer = document.querySelector(".btn-container");

buttons.forEach((element) => {
  let singleButton = document.createElement("button");
  singleButton.classList.add("btn", "btn-outline-dark", "btn-item");
  singleButton.setAttribute("data-id", element);
  singleButton.innerHTML = element;
  // console.log(singleButton);
  singleButton.addEventListener("click", () => {
    getItems(element)
    console.log("tıklendı" , element);
  });

  buttonContainer.appendChild(singleButton);
});

// single item
// <div class="menu-items col-lg-6 col-sm-12">
// <img
//   src="https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg"
//   alt="Tteokbokki"
//   class="photo"
// />
// <div class="menu-info">
//   <div class="menu-title">
//     <h4>Tteokbokki</h4>
//     <h4 class="price">10.99</h4>
//   </div>
//   <div class="menu-text">
//     Spicy rice cakes, serving with fish cake.
//   </div>
// </div>
// </div>
