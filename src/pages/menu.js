import pastaImage from "../assets/images/pasta-menu-image.jpeg";
import pizzaImage from "../assets/images/pizza-menu-image.jpeg";
import tiramisuImage from "../assets/images/tiramisu-menu-image.jpeg";

function menu() {
  const contentDiv = document.getElementById("content");

  contentDiv.innerHTML = "";

  // title
  const title = document.createElement("p");
  title.textContent = "A few highlights from our menu";
  contentDiv.appendChild(title);

  // description
  const description = document.createElement("p");
  description.textContent =
    "We cater for all dietary requirements, but here's a glimpse at some of our diner's favourites.";
  contentDiv.appendChild(description);

  // image 1
  const imageOne = document.createElement("img");
  imageOne.src = pastaImage;
  contentDiv.appendChild(imageOne);

  // image 1 description
  const imageOneDescription = document.createElement("p");
  imageOneDescription.textContent = "Lorem ipsum lorem ipsum lorem ipsum.";
  contentDiv.appendChild(imageOneDescription);

  // image 2
  const imageTwo = document.createElement("img");
  imageTwo.src = pizzaImage;
  contentDiv.appendChild(imageTwo);

  // image 2 description
  const imageTwoDescription = document.createElement("p");
  imageTwoDescription.textContent = "Lorem ipsum lorem ipsum lorem ipsum.";
  contentDiv.appendChild(imageTwoDescription);

  // image 1
  const imageThree = document.createElement("img");
  imageThree.src = tiramisuImage;
  contentDiv.appendChild(imageThree);

  // image 1 description
  const imageThreeDescription = document.createElement("p");
  imageThreeDescription.textContent = "Lorem ipsum lorem ipsum lorem ipsum.";
  contentDiv.appendChild(imageThreeDescription);
}

export default menu;
