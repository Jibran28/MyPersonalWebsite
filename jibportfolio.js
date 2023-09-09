

// JavaScript for custom cursor
const cursor = document.querySelector(".custom-cursor");

// Listen for mousemove events on the document
document.addEventListener("mousemove", (e) => {
    // Update the cursor position to follow the mouse pointer
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});

// Listen for mouseenter events on elements with the class "hover-effect"
const hoverElements = document.querySelectorAll(".hover-effect");

hoverElements.forEach((element) => {
    element.addEventListener("mouseenter", () => {
        // Add a class to change the cursor shape when hovering over an element
        cursor.classList.add("hovered");
    });

    element.addEventListener("mouseleave", () => {
        // Remove the class when the mouse leaves the element
        cursor.classList.remove("hovered");
    });
});
