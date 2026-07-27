// Element references
const footer = document.querySelector("footer");
const imageDiv = document.querySelector("#image");

// Function to dynamically add my name and student id to the document
function createFooter() {
    let p = document.createElement("p");
    let studentName = "Cameron Yon-Vachon";
    let studentId = "#########";
    p.textContent = `Page created by: ${studentName} | ${studentId}`;
    footer.appendChild(p);
}

// Run function
createFooter();

// Function creates the image that swaps when the user selects options
function createPizzaImage() {
    let img = document.createElement("img");
    let url = "img/animator-pizzaria.svg";
    img.src = url;
    img.id = "pizza";
    img.height = 200;
    img.width = 200;
    imageDiv.appendChild(img);
}

// Function changes the image based on the user's choices
function setPizzaImage() {
    const img = document.querySelector("#pizza");
    //  TODO: Get all user selections and change pizza accordingly
    let url = "img/pepperoni-pizza.svg";
    img.src = url;
}

createPizzaImage();
setPizzaImage();