# HTML-CSS-JS Sample Site by mrKevler 💫

**Repository:** [github.com/mrkevler/html-css-js-sample-site](https://github.com/mrkevler/html-css-js-sample-site)

**Demo** 🌐 [mrkevler.github.io/html-css-js-sample-site](https://mrkevler.github.io/html-css-js-sample-site/)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)  
![License](https://img.shields.io/badge/License-CC%20BY--NC-blue) ![Repo Size](https://img.shields.io/github/repo-size/mrkevler/html-css-js-sample-site) ![Last Commit](https://img.shields.io/github/last-commit/mrkevler/html-css-js-sample-site) ![GitHub](https://img.shields.io/badge/GitHub-mrkevler-green)
[![Buy Me a Coffee](https://img.shields.io/badge/Support-Buy%20Me%20a%20Coffee-yellow)](https://buymeacoffee.com/mrkevler)

## 🔍 Table of Contents

- [HTML-CSS-JS Sample Site by mrKevler 💫](#html-css-js-sample-site-by-mrkevler-)
  - [🔍 Table of Contents](#-table-of-contents)
  - [🚀 Project Overview ](#-project-overview-)
  - [✨ Concept ](#-concept-)
  - [🌟 Key Features ](#-key-features-)
  - [💫 Interactive Elements ](#-interactive-elements-)
    - [Slider Functionality](#slider-functionality)
    - [Animation Features](#animation-features)
  - [🛠️ Technologies Used ](#️-technologies-used-)
  - [💻 Code Showcase ](#-code-showcase-)
    - [Core JavaScript Patterns and Why They're Used](#core-javascript-patterns-and-why-theyre-used)
    - [Advanced CSS Features](#advanced-css-features)
  - [🏗️ Project Structure ](#️-project-structure-)
  - [🚀 HowTo Use ](#-howto-use-)

---

## 🚀 Project Overview <a name="-project-overview"></a>

This is an interactive multi-section website built with HTML, CSS and JavaScript 💫  
Built with semantic HTML5, modern CSS3 and vanilla JavaScript to showcase advanced web development patterns 🎨

This tutorial is perfect for learning interactive web development and modern design principles 🎓

Enjoy coding! ✌️  
[mrKevler](https://github.com/mrkevler)

---

## ✨ Concept <a name="-concept"></a>

This project demonstrates four core interactive web development skills:

1. **Semantic HTML5** structure with accessibility features
2. **Advanced CSS3** styling with animations and responsive design
3. **Vanilla JavaScript** for slider functionality and user interactions
4. **Modern UX patterns** with smooth transitions and dynamic content

Key learning objectives:

- Interactive slider with auto-play and manual controls
- Touch and swipe support for mobile devices
- Intersection Observer API for scroll animations
- Event handling and DOM manipulation
- CSS custom properties and modern layout techniques

---

## 🌟 Key Features <a name="-key-features"></a>

Interactive HTML5, CSS3 and JavaScript implementation  
Advanced slider with 5 gradient backgrounds  
Touch and keyboard navigation support  
Smooth scroll animations and transitions  
Responsive design with mobile-first approach  
Full-width layout with optimized spacing

---

## 💫 Interactive Elements <a name="-interactive-elements"></a>

### Slider Functionality

| Feature              | Implementation                         |
| -------------------- | -------------------------------------- |
| **Auto-play**        | 5-second intervals with pause on hover |
| **Manual controls**  | Previous/next buttons and indicators   |
| **Keyboard support** | Arrow keys navigation                  |
| **Touch gestures**   | Swipe left/right on mobile devices     |
| **Responsive**       | Adapts to all screen sizes             |

### Animation Features

- Intersection Observer for scroll-triggered animations
- Smooth scrolling between sections
- Header shadow effect on scroll
- Hover transformations on content boxes

---

## 🛠️ Technologies Used <a name="-technologies-used"></a>

| Technology            | Implementation                          |
| --------------------- | --------------------------------------- |
| **HTML5**             | Semantic markup, accessibility features |
| **CSS3**              | Custom properties, Flexbox, animations  |
| **JavaScript**        | ES6+, DOM manipulation, event handling  |
| **Responsive Design** | Mobile-first, flexible layouts          |

---

## 💻 Code Showcase <a name="-code-showcase"></a>

### Core JavaScript Patterns and Why They're Used

```javascript
// 1. Slider functionality with auto-play
let currentSlideIndex = 0;
function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    changeSlide(1);
  }, 5000);
}

// 2. Touch/swipe support for mobile
sliderContainer.addEventListener("touchstart", function (event) {
  touchStartX = event.changedTouches[0].screenX;
});

// 3. Intersection Observer for animations
const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// 4. Dynamic year generation
const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;
```

### Advanced CSS Features

```css
/* 1. CSS custom properties for consistent theming */
:root {
  --primary-blue: #1e88e5;
  --turquoise: #4dd0e1;
  --mint: #b2dfdb;
  --cream: #f5e6d3;
}

/* 2. Modern flexbox layouts */
.features-container {
  display: flex;
  gap: 40px;
  min-height: 350px;
}

/* 3. Advanced gradient backgrounds */
.slide[data-bg="gradient4"] {
  background: linear-gradient(
    45deg,
    var(--primary-blue),
    var(--mint),
    var(--turquoise)
  );
}

/* 4. Smooth transitions and transforms */
.child1:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 40px rgba(30, 136, 229, 0.2);
}
```

---

## 🏗️ Project Structure <a name="-project-structure"></a>

```
html-css-js-sample-site/
├── index.html
├── README.md
└── assets/
    ├── css/
    │   └── style.css
    ├── script/
    │   └── script.js
    ├── image/
    │   ├── bartosz_sergot_mrkevler_logo.webp
    │   └── favicon_bartosz_sergot_mrkevler.png
    └── fonts/
```

---

## 🚀 HowTo Use <a name="-usage"></a>

1. Clone the repo:

```bash
git clone https://github.com/mrkevler/html-css-js-sample-site.git
```

2. Open index.html in any browser

3. Interact with features:
   - Use slider controls or arrow keys
   - Swipe on mobile devices
   - Scroll to see animations
   - Test responsive design

**Interactive slider with 5 gradient backgrounds** 🎨  
**Touch-enabled with auto-play functionality** 📱  
**Clone, customize, and go live in minutes!** 🚀

---

[![Buy Me a Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-FF8000?style=for-the-badge&logo=buymeacoffee&logoColor=white)](https://www.buymeacoffee.com/mrkevler)

Crafted with ♥ by [mrKevler](https://github.com/mrkevler)
