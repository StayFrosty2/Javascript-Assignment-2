// Element references
const footer = document.querySelector("footer");

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