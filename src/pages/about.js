import aboutTableImage from "../assets/images/table-about-image.jpeg";
import aboutFoodImage from "../assets/images/food-about-image.jpeg";
import "../styles/main.css";
import "../styles/about.css";

function about() {
  const contentDiv = document.getElementById("content");

  contentDiv.innerHTML = "";

  const aboutContainer = document.createElement("div");
  aboutContainer.classList.add("about-container");

  const tableTextContent = document.createElement("div");
  tableTextContent.classList.add("about-text-content");
  const foodTextContent = document.createElement("div");
  foodTextContent.classList.add("about-text-content");

  // table and food sections
  const tableSection = document.createElement("div");
  tableSection.classList.add("table-section");
  const foodSection = document.createElement("div");
  foodSection.classList.add("food-section");

  // title 1
  const titleOne = document.createElement("p");
  titleOne.textContent = "Enjoyable place for all the family";
  titleOne.classList.add("about-title");
  tableTextContent.appendChild(titleOne);

  // description 1
  const descriptionOne = document.createElement("p");
  descriptionOne.textContent =
    "Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.";
  descriptionOne.classList.add("about-description");
  tableTextContent.appendChild(descriptionOne);

  tableSection.appendChild(tableTextContent);

  // image 1
  const imageOne = document.createElement("img");
  imageOne.src = aboutTableImage;
  imageOne.classList.add("about-image");
  const imageOneContainer = document.createElement("div");
  imageOneContainer.classList.add("about-image-container");
  imageOneContainer.appendChild(imageOne);
  tableSection.appendChild(imageOneContainer);

  // title 2
  const titleTwo = document.createElement("p");
  titleTwo.textContent = "The most locally sourced food";
  titleTwo.classList.add("about-title");
  foodTextContent.appendChild(titleTwo);

  // description 2
  const descriptionTwo = document.createElement("p");
  descriptionTwo.textContent =
    "All our ingredients come directly from our farm. So you can be sure that you're eating the freshest, most sustainable food.";
  descriptionTwo.classList.add("about-description");
  foodTextContent.appendChild(descriptionTwo);

  foodSection.appendChild(foodTextContent);

  // image 2
  const imageTwo = document.createElement("img");
  imageTwo.src = aboutFoodImage;
  imageTwo.classList.add("about-image");
  const imageTwoContainer = document.createElement("div");
  imageTwoContainer.classList.add("about-image-container");
  imageTwoContainer.appendChild(imageTwo);
  foodSection.appendChild(imageTwoContainer);

  aboutContainer.appendChild(tableSection);
  aboutContainer.appendChild(foodSection);

  contentDiv.appendChild(aboutContainer);
}

export default about;
