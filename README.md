
# MIARC – Interior Design Website

MIARC is a one-page website for an interior design company. It presents the company, its services and recent projects, and its team. It also includes a small "Design Studio" where visitors can try different styles and wall colours for a living room and see an estimated price.

## Technologies Used

- **HTML5** – page structure and content
- **CSS3** – custom styling, hover animations, Flexbox and Grid layouts, and media queries for tablet and phone
- **JavaScript** – interactive behaviour (mobile menu and Design Studio)
- **Bootstrap** (via CDN) – base styles
- **Google Fonts (Montserrat)** – typography
- **Formspree** – sends contact form submissions by email, so no backend is needed

## Main Features

- Fixed navigation bar with smooth scrolling to each section, and a hamburger menu on smaller screens
- Loading screen (preloader) shown while the page loads
- Hero section with "Start Designing" and "Contact Us" buttons
- About section with the company presentation and years of experience
- Services section with six service cards and a hover fill animation
- Latest projects gallery with a hover overlay on each project
- "Get 20% off" call-to-action banner
- **Design Studio**: choose a room style (Modern, Scandinavian, Industrial, Classic, Japandi) and a wall colour to preview the room and its price
- Team section with member cards and social media buttons
- Working contact form (name, email, message)
- Responsive layout for desktop, tablet (≤ 991px) and phone (≤ 575px)

## How to Open and Run the Project

1. Download or clone the project folder.
2. Keep `index.html`, `style.css`, `script.js` and the `images` folder together in the same folder.
3. Open `index.html` in a web browser (Chrome, Firefox, Edge…).
   - Optional: in VS Code, right-click `index.html` and choose **Open with Live Server** to get automatic reload while editing.
4. You need an internet connection for Bootstrap, Google Fonts, the preloader animation and the contact form to work.

No installation or build step is needed.

## Folder and File Structure

```
project-folder/
├── index.html      Main page: all sections (Home, About, Services, Projects, Design Studio, Team, Contact)
├── style.css       All styles, animations and responsive media queries
├── script.js       JavaScript for the mobile menu and the Design Studio
└── images/         All images used on the site
    ├── logo.png, logo2.png            Logos
    ├── living_room_hd_1500x864.png    Hero background
    ├── about-five.png, about-5.jpg    About section images
    ├── icon_img-1.png … icon_img-5.png Service icons
    ├── project_4.jpg, 2d3d.png, archi.png, decoart.png, homedeco.png, stone&hand.png   Project images
    ├── call-to-bg.png                 "20% off" banner background
    └── team_1.jpg, team_2.jpg, team_3.jpg   Team photos
```
