# TechPath - Educational Computing Website 

This repository contains the source code for a uni project. TechPath is an educational website dedicated to providing information and resources (books, videos) across various topics in Computer Science, with a focus on Programming (Python) and Communication Networks (Wireless Networks).

## 🚀 Key Features

* **Homepage (`index.html`):** Introduction to TechPath and its main objectives.
* **Categories (`categories.html`):** Sections for educational material (Programming, Communication Networks).
* **Content Pages:**
    * **Python Programming (`python_programming.html`):** Curated books and video resources for Python.
    * **Wireless Networks Index (`wireless_networks.html`):** Main page providing resources (books, videos) for Wireless Networks.
    * **Wireless Networks Video Content (`wireless_networks_video.html`):** Dedicated page featuring embedded video excerpts (e.g., on CDMA and link challenges) for in-depth learning.
    * **Book Presentations:** Pages like `book.html` and `python_book.html` for detailed book reviews.
* **Registration Form (`form.html`):** A form for collecting user personal details and knowledge level, including **client-side validation** via JavaScript.
* **About Us (`aboutus.html`):** Information about the team (the creator/s) behind TechPath.

## 🛠️ Technologies Used

The website is built using core Web technologies:

* **HTML5:** Structured markup for all pages.
* **CSS3:** Styling and layout, primarily utilizing **Flexbox** and **CSS Grid** for responsive designs (e.g., in `style.css` and `style_form.css`).
* **JavaScript:** Adds interactivity, specifically for implementing the registration form's validation logic (`javascript.js`).

## 💡 Project Highlights (Technical Notes)

* **Grid & Flexbox Layout:** The site utilizes **CSS Grid** and **Flexbox** extensively in `style.css` to create responsive layouts with sidebars and main content areas.
* **JavaScript Validation:** The `javascript.js` file enforces client-side validation on the registration form, including:
    1.  An age check (user must be at least **18 years old**).
    2.  A check to ensure **Password** and **Confirm Password** fields match.
* **Embedded Media:** The site successfully integrates external media, such as embedded YouTube video excerpts in `wireless_networks_video.html` to provide focused educational content.
