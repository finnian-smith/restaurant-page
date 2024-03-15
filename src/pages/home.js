import homeImage from "../assets/images/restaurant-home-image.jpeg";
import "../styles/main.css";
import "../styles/home.css";

function home() {
  const contentDiv = document.getElementById("content");

  contentDiv.innerHTML = "";

  const homeContainer = document.createElement("div");
  homeContainer.classList.add("home-container");

  // sections a + b
  const sectionA = document.createElement("div");
  sectionA.classList.add("section-a");
  const sectionB = document.createElement("div");
  sectionB.classList.add("section-b");

  // title
  const title = document.createElement("p");
  title.textContent = "Exquisite dining since 1989";
  title.classList.add("home-title");
  sectionA.appendChild(title);

  // description
  const description = document.createElement("p");
  description.textContent =
    "Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.";
  description.classList.add("home-description");
  sectionA.appendChild(description);

  // book table button
  const bookTableButton = document.createElement("button");
  bookTableButton.textContent = "Book a Table";
  bookTableButton.classList.add("book-table-button");
  sectionA.appendChild(bookTableButton);

  // image
  const mainImage = document.createElement("img");
  mainImage.src = homeImage;
  mainImage.classList.add("home-image");
  sectionB.appendChild(mainImage);

  homeContainer.appendChild(sectionA);
  homeContainer.appendChild(sectionB);

  contentDiv.appendChild(homeContainer);
}

export default home;
