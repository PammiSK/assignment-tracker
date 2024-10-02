# Assignment Tracker Website

## Description

This is a simple assignment tracker website designed for personal use to help you keep track of your assignments, their due dates, and completion status. The website features:

- A non-transposed table displaying assignments, due dates, week numbers, days remaining until due, and checkboxes to mark assignments as done.
- Automatic calculation of the number of days remaining until each assignment is due.
- Indicators for overdue assignments and assignments due today.
- A persistent dark mode toggle to switch between light and dark themes, with your preference saved across sessions.

## Features

- **Assignment Tracking**: Keep all your assignments organized in a clear and concise table format.
- **Due Date Calculations**: The "Due in" column automatically updates based on the current date.
  - If an assignment is not done and the due date has passed, it shows "Overdue".
  - If an assignment is not done and the due date is today, it shows "Due today".
  - If an assignment is marked as done, it shows "Done".
- **Completion Status**: Mark assignments as done using checkboxes. The status persists across page reloads using `localStorage`.
- **Persistent Dark Mode**: Toggle between light and dark themes. Your preference is saved and will persist across sessions.

## How to Use

1. **Setup**:
   - Ensure you have the following files in the same directory:
     - `index.html`
     - `style.css`
     - `script.js`
   - Open the `index.html` file in your web browser.

2. **Assignment Table**:
   - The table displays the assignments with their respective due dates and week numbers.
   - The "Due in" row will show the number of days left until each assignment is due.
   - If an assignment is overdue or due today, it will be indicated accordingly.
   - Use the checkboxes in the "Done?" row to mark assignments as completed.

3. **Dark Mode Toggle**:
   - Click the "Toggle Dark Mode" button at the top of the page to switch between light and dark themes.
   - Your theme preference is saved and will be applied automatically on your next visit.

## Security Considerations

- **Local Storage Usage**:
  - The website uses the browser's `localStorage` to store the "Done" status of assignments and your dark mode preference.
  - This data is stored locally on your device and is not transmitted over the internet.
  - Be cautious when using shared or public computers, as the stored data can be accessed by others using the same browser profile.

- **Data Privacy**:
  - No personal or sensitive information is collected or stored by this website.
  - All assignment data is hard-coded into the application for personal tracking purposes.

- **Browser Compatibility**:
  - Ensure that `localStorage` is enabled in your browser settings.
  - The application may not function correctly in incognito or private browsing modes if `localStorage` is disabled.

- **Third-Party Content**:
  - The website does not include any third-party scripts or content, minimizing security risks associated with external dependencies.

## License

© PAMMI SIVAKUMAR 2023

**Personal Use License**

This project is licensed for personal use only. You are permitted to use, modify, and customize this code for your own personal, non-commercial purposes.

**Restrictions**:

- **No Commercial Use**: You may not use the code or any derivative works for commercial purposes.
- **No Distribution**: You may not distribute the original code or modified versions to others.
- **No Warranty**: This project is provided "as is" without warranty of any kind, express or implied.

**Note**: If you wish to use this project beyond personal use, please contact the author for permission.

---

By using this project, you agree to the terms outlined in this license.

---
