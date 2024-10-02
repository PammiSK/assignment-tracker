// script.js

// Array of assignment due dates in 'YYYY-MM-DD' format
const assignmentDates = [
    '2024-10-01', // ITP PROJ PROPOSAL
    '2024-10-05', // KRR A1
    '2024-10-13', // ITP RETROSPECTIVE 1
    '2024-10-23', // RUST A1
    '2024-10-25', // KRR A2
    '2024-11-03', // ITP RETROSPECTIVE 2
    '2024-11-15', // KRR A3
    '2024-11-17', // ITP FINAL
    '2024-11-18'  // RUST A2
];

// Function to calculate "Due in" days
function calculateDueIn(dueDate) {
    const today = new Date();
    const due = new Date(dueDate);
    // Reset time to midnight for accurate calculation
    today.setHours(0, 0, 0, 0);
    due.setHours(0, 0, 0, 0);
    const diffTime = due - today;
    const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}

// Function to update the "Due in" cells
function updateDueIn() {
    assignmentDates.forEach((date, index) => {
        const dueInCell = document.getElementById(`duein-${index}`);
        const checkbox = document.getElementById(`done-${index}`);
        const isDone = getDoneStatus(index);
        const dueInDays = calculateDueIn(date);

        if (isDone) {
            dueInCell.textContent = 'Done';
            dueInCell.className = 'done';
        } else if (dueInDays < 0) {
            dueInCell.textContent = 'Overdue';
            dueInCell.className = 'overdue';
        } else if (dueInDays === 0) {
            dueInCell.textContent = 'Due today';
            dueInCell.className = 'due-today';
        } else {
            dueInCell.textContent = `${dueInDays} days`;
            dueInCell.className = '';
        }
    });
}

// Functions to save and retrieve 'Done' status from localStorage
function saveDoneStatus(index, isDone) {
    let doneAssignments = JSON.parse(localStorage.getItem('doneAssignments')) || {};
    doneAssignments[index] = isDone;
    localStorage.setItem('doneAssignments', JSON.stringify(doneAssignments));
}

function getDoneStatus(index) {
    let doneAssignments = JSON.parse(localStorage.getItem('doneAssignments')) || {};
    return doneAssignments[index] || false;
}

// Function to initialize checkboxes and add event listeners
function initializeCheckboxes() {
    assignmentDates.forEach((_, index) => {
        const checkbox = document.getElementById(`done-${index}`);
        checkbox.checked = getDoneStatus(index);

        checkbox.addEventListener('change', () => {
            saveDoneStatus(index, checkbox.checked);
            updateDueIn();
        });
    });
}

// Dark Mode Toggle Functionality
function toggleMode() {
    document.body.classList.toggle('dark-mode');
    // Save user preference in localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

// Initialize Theme on Page Load
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
}

// Initialize the page on load
window.onload = function() {
    initializeTheme();
    initializeCheckboxes();
    updateDueIn();

    // Add event listener for the mode toggle button
    document.getElementById('mode-toggle').addEventListener('click', toggleMode);
};