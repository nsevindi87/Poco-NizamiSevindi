//data as list of objects
//display data in our DOM
//manipulate data through the user (aka events)
//store data back in our list of objects
//To Do: wishlist in a gift store (for a wedding)
// -create ul and add the gifts as li
// -add a checkbox in the li to change the status
// -database - list of objects
class createGift {
  constructor(name, price = 0, img = "", shoppingURL = "") {
    this.name = name; //h2 - order 2
    this.price = price; //p - order 3
    this.img = img; //img - order 1 - if there is no img, show default
    this.shoppingURL = shoppingURL; //link - order 4, if there is no link, show no link
    this.selected = false; //button / checkbox - order 5
    this.guestWhoSelects = ""; //input text
  }
  changeGiftStatus(guest) {
    this.selected = !this.selected;
    this.guestWhoSelects = guest;
  }
}

const pTag = document.querySelector("p");
const inputTag = document.querySelector("#guest");
const fallbackImg =
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.istockphoto.com%2Fvectors%2Ferror-icon-vector-illustration-vector-id922024224%3Fk%3D6%26m%3D922024224%26s%3D612x612%26w%3D0%26h%3DLXl8Ul7bria6auAXKIjlvb6hRHkAodTqyqBeA6K7R54%3D&f=1&nofb=1&ipt=03c2ec5a0509ea89efbae96073420ca035420fb8a6e4267804fa13ae174c10ad&ipo=images";
const gifts = [
  new createGift(
    "Mixer",
    89.9,
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frukminim1.flixcart.com%2Fimage%2F1408%2F1408%2Fmixer-grinder-juicer%2Fs%2Ff%2Fs%2Fsumeet-domestix-dxe-original-imadxe64hgff8pdx.jpeg%3Fq%3D90&f=1&nofb=1&ipt=add854910e9ab24352f66735d89c2a6ad6784d8b593505735706f41eaafefad0&ipo=images"
  ),
  new createGift(
    "Coffee machine",
    60,
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0041%2F9115%2F8383%2Fproducts%2FDeLonghiPerfectaEvoCoffeeMachineESAM42080TB-Silver.jpg%3Fv%3D1617949259&f=1&nofb=1&ipt=f44969878aed04961d4f035657ce67301cd2e9ffb85d95c47aaecb2a68b95dea&ipo=images"
  ),
  new createGift(
    "Toy car",
    125.5,
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pinoyguyguide.com%2Fwp-content%2Fuploads%2F2017%2F09%2FLamborghini-Aventador-LP700-4-Roadster-Orange-Petron-Supercars-2017-2.jpg&f=1&nofb=1&ipt=c449bba2c6ed28fbf1f2ef517a24dfdce23fb7af4dd205e75a338fed3597f9b7&ipo=images"
  ),
  new createGift("Bed linen set", 60),
];

addGiftsToDOM();
function addGiftsToDOM() {
  let ulTag = document.createElement("ul");
  /* const markup = gifts.map(gift => `
  <li>
    <h2>${gift.name}</h2>
    <p>CHF ${gift.price}</p>
    ${gift.shoppingURL?`<a href="${gift.shoppingURL}" target="_blank">Buy now</a>`:``}
    <img src="${!gift.img?fallbackImg:gift.img}" alt="${gift.name}">
    <button>Select this gift</button>
  </li>`).join("");

  ulTag.insertAdjacentHTML("beforeend",markup); */

  gifts.forEach((gift) => {
    let liTag = document.createElement("li");
    ulTag.appendChild(liTag);

    let h2Tag = document.createElement("h2");
    h2Tag.textContent = gift.name;
    liTag.appendChild(h2Tag);

    let pTag = document.createElement("p");
    pTag.textContent = `CHF ${gift.price}`;
    liTag.appendChild(pTag);

    if (gift.shoppingURL !== "") {
      let aTag = document.createElement("a");
      aTag.textContent = "Buy now";
      aTag.setAttribute("href", gift.shoppingURL);
      aTag.setAttribute("target", "_blank");
      liTag.appendChild(aTag);
    }

    let imgTag = document.createElement("img");
    if (gift.img === "") {
      imgTag.setAttribute("src", fallbackImg);
    } else {
      imgTag.setAttribute("src", gift.img);
    }
    imgTag.setAttribute("alt", gift.name);
    liTag.appendChild(imgTag);

    let btnTag = document.createElement("button");
    btnTag.textContent = "Select this gift";
    btnTag.addEventListener("click", (e) => {
      gift.changeGiftStatus(inputTag.value);
      liTag.classList.toggle("selected");
      console.table(gift);
    });

    liTag.appendChild(btnTag);
  });

  pTag.after(ulTag);
}
