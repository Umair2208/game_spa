# 🎮 Games SPA (Single Page Application)

A responsive Games Single Page Application built with React, featuring infinite scroll pagination, client-side filtering & sorting, and a pixel-perfect UI based on provided designs.

### 🚀 Features

Infinite scroll pagination

Debounced search & filters

Client-side sorting (Name, Score, Release Date)

Minimum score filtering

Responsive UI (Desktop / Tablet / Mobile)

Expandable game summaries

Contact form with validation

Clean, modular architecture


### 🛠️ Tech Stack

React (JS)

React Router DOM

Axios

React Hook Form

Bootstrap 5

Custom Hooks

Intersection Observer API


### 🧠 Custom Hooks
useInfinitePagination

Handles:

Page tracking

API fetching

Duplicate prevention

IntersectionObserver logic

useDebounce

Used to delay filter application while typing, preventing excessive renders and filtering operations.


### 📝 Game Card Behavior

Ratings are sanitized:

No decimals

Max two digits

Release dates are formatted (DD/MM/YYYY)

Summaries:

Desktop: 300 characters

Mobile (<768px): 150 characters

Expandable with “Read more / Read less”


### 📬 Contact Form

Built using react-hook-form

Includes:

Required field validation

Email pattern validation

Minimum message length

Responsive layout

Styled to match provided design


### 📱 Responsive Design

Desktop-first layout

Tablet and mobile breakpoints handled using:

Bootstrap grid

Custom media queries

Content behavior adapts (e.g., summary length on mobile)


### ▶️ Getting Started
1. Install dependencies
npm install

2. Run the app
npm run dev


### 🧾 Notes for Reviewers

The hybrid filtering strategy was chosen intentionally to handle API limitations.

The solution prioritizes UX stability and real-world robustness.

Code is modular, readable, and easy to extend.


### 👤 Author

Built with focus on:

Clean architecture

Practical trade-offs

Production-ready patterns
