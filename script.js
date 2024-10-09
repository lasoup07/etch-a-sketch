const container = document.getElementById('grid-container');
const button = document.getElementById('new-grid-button');

// Function to create a grid
function createGrid(size) {
    // Clear existing grid
    container.innerHTML = '';

    // Set grid item size based on the number of squares per side
    const gridItemSize = 960 / size; // 960px total width/height

    for (let i = 0; i < size * size; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.style.width = `${gridItemSize}px`;
        gridItem.style.height = `${gridItemSize}px`;

        // Add hover effect
        gridItem.addEventListener('mouseover', () => {
            gridItem.classList.add('hovered');
        });

        // Optional: Add event listener to reset color on mouse leave
        gridItem.addEventListener('mouseleave', () => {
            gridItem.classList.remove('hovered');
        });

        container.appendChild(gridItem);
    }
}

// Initial grid creation
createGrid(16); // Default to a 16x16 grid

// Button click event
button.addEventListener('click', () => {
    const size = parseInt(prompt("Enter the number of squares per side less than 100 (e.g., 16):"), 10);

    if (!isNaN(size) && size > 0 && size < 100) {
        createGrid(size); // Create a new grid with the specified size
    } else  if (size => 100) {
        alert("Please enter a number less than 100.")
    } else {
        alert("Please enter a valid number.");
    }
});

