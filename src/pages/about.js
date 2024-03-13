import aboutTableImage from "../assets/images/table-about-image.jpeg";
import aboutFoodImage from "../assets/images/food-about-image.jpeg";

function about() {
  const contentDiv = document.getElementById("content");

  contentDiv.innerHTML = "";

  // title 1
  const titleOne = document.createElement("p");
  titleOne.textContent = "Enjoyable place for all the family";
  contentDiv.appendChild(titleOne);

  // description 1
  const descriptionOne = document.createElement("p");
  descriptionOne.textContent =
    "Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.";
  contentDiv.appendChild(descriptionOne);

  // image 1
  const imageOne = document.createElement("img");
  imageOne.src = aboutTableImage;
  contentDiv.appendChild(imageOne);

  // title 2
  const titleTwo = document.createElement("p");
  titleTwo.textContent = "The most locally sourced food";
  contentDiv.appendChild(titleTwo);

  // description 2
  const descriptionTwo = document.createElement("p");
  descriptionTwo.textContent =
    "All our ingredients come directly from our farm. So you can be sure that you're eating the freshest, most sustainable food.";
  contentDiv.appendChild(descriptionTwo);

  // image 2
  const imageTwo = document.createElement("img");
  imageTwo.src = aboutFoodImage;
  contentDiv.appendChild(imageTwo);
}

export default about;
