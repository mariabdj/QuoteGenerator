//Random quote api
let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("button2");

const url = "https://api.quotable.io/random";

let getQuote = () => {
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      quote.innerText = `"${item.content}"` ;
      author.innerText = `“${item.author}”`;
    });
};

window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);

//Copy Button Code
// Find the copy button element
const copyButton = document.querySelector(".copy");

// Add a click event listener to the copy button
copyButton.addEventListener("click", () => {
  // Find the quote text and author elements
  const quoteTextElement = document.querySelector(".p1");
  const quoteAuthorElement = document.querySelector(".p2");

  // Combine the quote and author
  const quoteWithAuthor = `${quoteTextElement.textContent} ${quoteAuthorElement.textContent}`;

  // Create a temporary element to hold the text
  const tempTextarea = document.createElement("textarea");
  tempTextarea.value = quoteWithAuthor;

  // Append to the body
  document.body.appendChild(tempTextarea);

  // Select the text
  tempTextarea.select();

  // Copy the selected text
  document.execCommand("copy");

  // Remove the temporary textarea from the body
  document.body.removeChild(tempTextarea);

  // Alert the user that the text has been copied
  alert("Quote copied!");
});

//Change for the bar quotes favourite about me
document.addEventListener("DOMContentLoaded", function () {
  // Get all the content divs
  const contentDivs = document.querySelectorAll(".box-content .content");

  // Hide all content divs except the first one
  for (let i = 1; i < contentDivs.length; i++) {
    contentDivs[i].style.display = "none";
  }

  // Add event listener to radio inputs
  const radioInputs = document.querySelectorAll(
    ".radio-inputs input[name='radio']"
  );
  radioInputs.forEach(function (input) {
    input.addEventListener("change", function () {
      // Get the selected data-content value
      const selectedContent =
        this.nextElementSibling.getAttribute("data-content");

      // Show the selected content div and hide the others
      contentDivs.forEach(function (div) {
        if (div.classList.contains(selectedContent)) {
          div.style.display = "block";
        } else {
          div.style.display = "none";
        }
      });
    });
  });
});

//Adding quotes to favorite
// Event listener for the "Add to Favorites" button
document.getElementById("add-button").addEventListener("click", addToFavorites);

// Function to add a quote to favorites
function addToFavorites() {
  // get the quote and the author
  const quote = document.getElementById("quote").textContent;
  const author = document.getElementById("author").textContent;

  //creat a place for the quote and author and adding them
  const listItem = document.createElement("li");
  const quoteElement = document.createElement("span");
  quoteElement.textContent = quote;
  quoteElement.classList.add("quote");
  listItem.appendChild(quoteElement);

  listItem.innerHTML += " - ";

  const authorElement = document.createElement("span");
  authorElement.textContent = author;
  authorElement.classList.add("author");
  listItem.appendChild(authorElement);

  // Creating the delete button for each quote/author
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = `
    <button class="del">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" height="25" width="25">
        <path fill="#6361D9" d="M8.78842 5.03866C8.86656 4.96052 8.97254 4.91663 9.08305 4.91663H11.4164C11.5269 4.91663 11.6329 4.96052 11.711 5.03866C11.7892 5.11681 11.833 5.22279 11.833 5.33329V5.74939H8.66638V5.33329C8.66638 5.22279 8.71028 5.11681 8.78842 5.03866ZM7.16638 5.74939V5.33329C7.16638 4.82496 7.36832 4.33745 7.72776 3.978C8.08721 3.61856 8.57472 3.41663 9.08305 3.41663H11.4164C11.9247 3.41663 12.4122 3.61856 12.7717 3.978C13.1311 4.33745 13.333 4.82496 13.333 5.33329V5.74939H15.5C15.9142 5.74939 16.25 6.08518 16.25 6.49939C16.25 6.9136 15.9142 7.24939 15.5 7.24939H15.0105L14.2492 14.7095C14.2382 15.2023 14.0377 15.6726 13.6883 16.0219C13.3289 16.3814 12.8414 16.5833 12.333 16.5833H8.16638C7.65805 16.5833 7.17054 16.3814 6.81109 16.0219C6.46176 15.6726 6.2612 15.2023 6.25019 14.7095L5.48896 7.24939H5C4.58579 7.24939 4.25 6.9136 4.25 6.49939C4.25 6.08518 4.58579 5.74939 5 5.74939H6.16667H7.16638ZM7.91638 7.24996H12.583H13.5026L12.7536 14.5905C12.751 14.6158 12.7497 14.6412 12.7497 14.6666C12.7497 14.7771 12.7058 14.8831 12.6277 14.9613C12.5495 15.0394 12.4436 15.0833 12.333 15.0833H8.16638C8.05588 15.0833 7.94989 15.0394 7.87175 14.9613C7.79361 14.8831 7.74972 14.7771 7.74972 14.6666C7.74972 14.6412 7.74842 14.6158 7.74584 14.5905L6.99681 7.24996H7.91638Z" clip-rule="evenodd" fill-rule="evenodd"></path>
      </svg>
    </button>
  `;
  //Making the delete button functional
  deleteButton.addEventListener("click", function () {
    listItem.remove();
    checkFavoritesEmpty();
  });

  listItem.appendChild(deleteButton);
  document.getElementById("favorites-list").appendChild(listItem);

  checkFavoritesEmpty();
}

// Function to check if favorites list is empty
function checkFavoritesEmpty() {
  const favoritesList = document.getElementById("favorites-list");
  const noQuotesMessage = document.getElementById("no-quotes-message");

  if (favoritesList.children.length === 0) {
    noQuotesMessage.textContent = "No Quotes Added To Favorites";
  } else {
    noQuotesMessage.textContent = "";
  }
}

//UNcheck the like button when we generate a new quote
function checkUncheck()
{
    var checkbox = document.getElementById('checkbox');
    if(checkbox.checked)
    {    
    checkbox.checked = false;
    }
}

