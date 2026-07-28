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

class Pizza {
    size;
    crust;
    sauce;
    cheese;
    toppings;

    constructor(size, crust, sauce, cheese, toppings) {
        this.size = size;
        this.crust = crust;
        this.sauce = sauce;
        this.cheese = cheese;
        this.toppings = toppings;
    }

    generatePizza() {
        let img = document.createElement("img");
        let url = "img/cheese-pizza.svg";

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

        this.toppings.forEach((topping) => {
            if(topping == "pepperoni") {
                url = "img/pepperoni-pizza.svg";
            }
            if(topping == "chicken") {
                url = "img/bbq-pizza.svg";
            }
            if(topping == "blackolives") {
                url = "img/pizza.svg";
            }
            if(topping == "pineapple") {
                url = "img/hawaiian-pizza.svg";
            }
        });

        imageDiv.appendChild(img);
    }

    describePizza() {
        let desc = document.createElement("p");
        let toppingList = document.createElement("ul");
        let pizzaSize;
        let pizzaCrust;
        let pizzaSauce;
        let pizzaCheese;

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

        this.toppings.forEach((topping) => {
            let ingrediant = document.createElement("li");
            ingrediant.textContent = `${topping}`;
            toppingList.appendChild(ingrediant);
        });

        desc.textContent = `${pizzaSize} sized pizza, ${pizzaCrust} crust, ${pizzaSauce} sauce, ${pizzaCheese} cheese, and the following toppings:`;

        descDiv.appendChild(desc);
        descDiv.appendChild(toppingList);
    }
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(event);
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