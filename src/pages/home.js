import homeImage from "../assets/images/restaurant-home-image.jpeg";

function home() {
  const contentDiv = document.getElementById("content");

  contentDiv.innerHTML = "";

  // title
  const title = document.createElement("p");
  title.textContent = "Exquisite dining since 1989";
  contentDiv.appendChild(title);

  // description
  const description = document.createElement("p");
  description.textContent =
    "Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse";
  contentDiv.appendChild(description);

  // book table button
  const bookTableButton = document.createElement("button");
  bookTableButton.textContent = "Book a Table";
  contentDiv.appendChild(bookTableButton);

  // image
  const mainImage = document.createElement("img");
  mainImage.src = homeImage;
  contentDiv.appendChild(mainImage);
}

export default home;
