// Element references
const footer = document.querySelector("footer");
const imageDiv = document.querySelector("#image");
const descDiv = document.querySelector("#desc");

// Form element references
const form = document.querySelector("form");
const size = document.getElementById('size');
const crust = document.getElementById('crust');
const sauce = document.getElementById('sauce');
const cheese = document.getElementById('cheese');
const pepperoni = document.getElementById('pepperoni');
const greenolives = document.getElementById('greenolives');
const blackolives = document.getElementById('blackolives');
const sausage = document.getElementById('sausage');
const bacon = document.getElementById('bacon');
const mushroom = document.getElementById('mushroom');
const pineapple = document.getElementById('pineapple');
const chicken = document.getElementById('chicken');
const onion = document.getElementById('onion');
const greenpeppers = document.getElementById('greenpeppers');
const steak = document.getElementById('steak');

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

// Object
class Pizza {
    // Object Variables
    size;
    crust;
    sauce;
    cheese;
    toppings;

    // Constructor
    constructor(size, crust, sauce, cheese, toppings) {
        this.size = size;
        this.crust = crust;
        this.sauce = sauce;
        this.cheese = cheese;
        this.toppings = toppings;
    }

    // Method generates the image for the pizza and displays it
    generatePizza() {
        // Create the element, initialize the link to the img
        let img = document.createElement("img");
        let url = "img/cheese-pizza.svg";

        // change the image size depending on the size of the pizza
        switch (this.size) {
            case "s":
                img.height = 150;
                img.width = 150;
                break;
            case "m":
                img.height = 200;
                img.width = 200;
                break;
            case "l":
                img.height = 250;
                img.width = 250;
                break;
            default:
                img.height = 200;
                img.width = 200;
                break;
        }

        // change the border of the image based on the crust choice
        switch (this.crust) {
            case "thin":
                img.style.border = "2px dashed brown";
                break;
            case "thick":
                img.style.border = "4px solid brown";
                break;
            case "stuffed":
                img.style.border = "4px solid goldenrod";
                break;
            default:
                img.style.border = "2px dashed brown";
                break;
        }

        // change the image's background color based on the user's sauce choice
        switch (this.sauce) {
            case "na":
                img.style.backgroundColor = "none";
                break;
            case "reg":
                img.style.backgroundColor = "red";
                break;
            case "gah":
                img.style.backgroundColor = "grey";
                break;
            case "pes":
                img.style.backgroundColor = "green";
                break;
            case "bbq":
                img.style.backgroundColor = "maroon";
                url = "bbq-pizza.svg";
                break;
            default:
                img.style.backgroundColor = "red";
                break;
        }

        // only changes the image to hawaiian if the user chooses provolone cheese
        switch (this.cheese) {
            case "na":
                break;
            case "mozza":
                break;
            case "provo":
                url = "hawaiian-pizza.svg";
                break;
            case "ched":
                break;
            default:
                break;
        }

        // changes the image itself depending on if the user chooses specific ingrediants
        this.toppings.forEach((topping) => {
            if(topping == "Pepperoni") {
                url = "img/pepperoni-pizza.svg";
            }
            if(topping == "Chicken") {
                url = "img/bbq-pizza.svg";
            }
            if(topping == "Black Olives") {
                url = "img/pizza.svg";
            }
            if(topping == "Pineapple") {
                url = "img/hawaiian-pizza.svg";
            }
        });

        // sets the image source and appends it to its div element on the page
        img.src = url;
        imageDiv.appendChild(img);
    }

    // Method sets the description for the pizza
    describePizza() {
        // Variables and elements
        let desc = document.createElement("p");
        let toppingList = document.createElement("ul");
        let pizzaSize;
        let pizzaCrust;
        let pizzaSauce;
        let pizzaCheese;

        // Size
        switch (this.size) {
            case "s":
                pizzaSize = "Small";
                break;
            case "m":
                pizzaSize = "Medium";
                break;
            case "l":
                pizzaSize = "Large";
                break;
            default:
                pizzaSize = "Unknown";
                break;
        }

        // Crust
        switch (this.crust) {
            case "thin":
                pizzaCrust = "thin";
                break;
            case "thick":
                pizzaCrust = "thick";
                break;
            case "stuffed":
                pizzaCrust = "stuffed";
                break;
            default:
                pizzaCrust = "unknown";
                break;
        }

        // Sauce
        switch (this.sauce) {
            case "na":
                pizzaSauce = "no";
                break;
            case "reg":
                pizzaSauce = "regular tomato";
                break;
            case "gah":
                pizzaSauce = "garlic and herb";
                break;
            case "pes":
                pizzaSauce = "green pesto";
                break;
            case "bbq":
                pizzaSauce = "barbecue";
                break;
            default:
                pizzaSauce = "unknown";
                break;
        }

        // Cheese
        switch (this.cheese) {
            case "na":
                pizzaCheese = "no";
                break;
            case "mozza":
                pizzaCheese = "mozzarella";
                break;
            case "provo":
                pizzaCheese = "provolone";
                break;
            case "ched":
                pizzaCheese = "Canadian chedder";
                break;
            default:
                pizzaCheese = "unknown";
                break;
        }

        // Creates a list item element for each topping and appends it to the unordered list created at the start of this method
        this.toppings.forEach((topping) => {
            let ingrediant = document.createElement("li");
            ingrediant.textContent = `${topping}`;
            toppingList.appendChild(ingrediant);
        });

        // Sets the description content with all appropriate vairables
        desc.textContent = `${pizzaSize} sized pizza, ${pizzaCrust} crust, ${pizzaSauce} sauce, ${pizzaCheese} cheese, and the following toppings:`;

        // Appends the description and topping list to the div
        descDiv.appendChild(desc);
        descDiv.appendChild(toppingList);
    }
}

// Adds the event listener to the form, preventing the default and creating the pizza objects. writes the pizza objects to the page
form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(event);

    // Empty array to store all the toppings
    toppingList = [];

    // big if statement to add all of the toppings to a list before creating the pizza object
    if(pepperoni.checked) {
        // found this command on mdn | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
        toppingList.push("Pepperoni");
    }
    if(greenolives.checked) {
        toppingList.push("Green Olives");
    }
    if(blackolives.checked) {
        toppingList.push("Black Olives");
    }
    if(sausage.checked)  {
        toppingList.push("Sausage");
    }
    if(bacon.checked)  {
        toppingList.push("Bacon");
    }
    if(mushroom.checked)  {
        toppingList.push("Mushroom");
    }
    if(pineapple.checked)  {
        toppingList.push("Pineapple");
    }
    if(chicken.checked)  {
        toppingList.push("Chicken");
    }
    if(onion.checked)  {
        toppingList.push("Onion");
    }
    if(greenpeppers.checked)  {
        toppingList.push("Green Peppers");
    }
    if(steak.checked)  {
        toppingList.push("Shredded Steak");
    }

    // Creates the new pizza object
    let newPizza = new Pizza(size.value, crust.value, sauce.value, cheese.value, toppingList);

    // Generates the image and description for the new pizza
    newPizza.generatePizza();
    newPizza.describePizza();
    console.log(newPizza);
});

// All of this was accidental, but I thought I would leave it in since it's not a bad idea


// // Function creates the image that swaps when the user selects options
// function createPizzaImage() {
//     let img = document.createElement("img");
//     let url = "img/animator-pizzaria.svg";
//     img.src = url;
//     img.id = "pizza";
//     img.height = 200;
//     img.width = 200;
//     imageDiv.appendChild(img);
// }

// // Function changes the image based on the user's choices
// function setPizzaImage() {
//     const img = document.querySelector("#pizza");
//     //  TODO: Get all user selections and change pizza accordingly
//     let url = "img/pepperoni-pizza.svg";
//     img.src = url;
// }

// createPizzaImage();
// setPizzaImage();