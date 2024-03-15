import pastaImage from "../assets/images/pasta-menu-image.jpeg";
import pizzaImage from "../assets/images/pizza-menu-image.jpeg";
import tiramisuImage from "../assets/images/tiramisu-menu-image.jpeg";
import "../styles/main.css";
import "../styles/menu.css";

function menu() {
  const contentDiv = document.getElementById("content");

  contentDiv.innerHTML = "";

  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");

  const menuTextContent = document.createElement("div");
  menuTextContent.classList.add("menu-text-content");
  const menuItemsContent = document.createElement("div");
  menuItemsContent.classList.add("menu-items-content");

  // title
  const title = document.createElement("p");
  title.textContent = "A few highlights from our menu";
  title.classList.add("menu-title");
  menuTextContent.appendChild(title);

  // description
  const description = document.createElement("p");
  description.textContent =
    "We cater for all dietary requirements, but here's a glimpse at some of our diner's favourites. Our menu is revamped every season with the exception of our specials.";
  description.classList.add("menu-description");
  menuTextContent.appendChild(description);

  menuContainer.appendChild(menuTextContent);

  const menuItemOne = document.createElement("div");
  menuItemOne.classList.add("menu-item");
  const menuItemTwo = document.createElement("div");
  menuItemTwo.classList.add("menu-item");
  const menuItemThree = document.createElement("div");
  menuItemThree.classList.add("menu-item");

  const menuItemOneText = document.createElement("div");
  menuItemOneText.classList.add("menu-item-text");
  const menuItemTwoText = document.createElement("div");
  menuItemTwoText.classList.add("menu-item-text");
  const menuItemThreeText = document.createElement("div");
  menuItemThreeText.classList.add("menu-item-text");

  // image 1
  const imageOne = document.createElement("img");
  imageOne.src = pastaImage;
  imageOne.classList.add("menu-item-image");
  menuItemOne.appendChild(imageOne);

  // image 1 title
  const imageOneTitle = document.createElement("p");
  imageOneTitle.textContent = "Classic Bolognese";
  imageOneTitle.classList.add("menu-item-title");
  menuItemOneText.appendChild(imageOneTitle);

  // image 1 description
  const imageOneDescription = document.createElement("p");
  imageOneDescription.textContent =
    "In-house crafted pasta adorned with a flavorful sauce made from local fresh herbs, tomatoes, and garlic.";
  imageOneDescription.classList.add("menu-item-description");
  menuItemOneText.appendChild(imageOneDescription);

  menuItemOne.appendChild(menuItemOneText);
  menuItemsContent.appendChild(menuItemOne);

  // image 2
  const imageTwo = document.createElement("img");
  imageTwo.src = pizzaImage;
  imageTwo.classList.add("menu-item-image");
  menuItemTwo.appendChild(imageTwo);

  // image 2 title
  const imageTwoTitle = document.createElement("p");
  imageTwoTitle.textContent = "Rustic Margherita";
  imageTwoTitle.classList.add("menu-item-title");
  menuItemTwoText.appendChild(imageTwoTitle);

  // image 2 description
  const imageTwoDescription = document.createElement("p");
  imageTwoDescription.textContent =
    "A timeless pizza, adorned with fresh tomato sauce, creamy mozzarella cheese, and fragrant basil leaves.";
  imageTwoDescription.classList.add("menu-item-description");
  menuItemTwoText.appendChild(imageTwoDescription);

  menuItemTwo.appendChild(menuItemTwoText);
  menuItemsContent.appendChild(menuItemTwo);

  // image 3
  const imageThree = document.createElement("img");
  imageThree.src = tiramisuImage;
  imageThree.classList.add("menu-item-image");
  menuItemThree.appendChild(imageThree);

  // image 3 title
  const imageThreeTitle = document.createElement("p");
  imageThreeTitle.textContent = "Traditional Tiramisu";
  imageThreeTitle.classList.add("menu-item-title");
  menuItemThreeText.appendChild(imageThreeTitle);

  // image 3 description
  const imageThreeDescription = document.createElement("p");
  imageThreeDescription.textContent =
    "Coffee-soaked ladyfinger biscuits, stratified with luscious mascarpone cheese mixture, dusted with cocoa powder.";
  imageThreeDescription.classList.add("menu-item-description");
  menuItemThreeText.appendChild(imageThreeDescription);

  menuItemThree.appendChild(menuItemThreeText);
  menuItemsContent.appendChild(menuItemThree);

  // append menu items to menu container
  menuContainer.appendChild(menuItemsContent);

  // append menu container to content div
  contentDiv.appendChild(menuContainer);
}

export default menu;
