# Fake YouTube

## Overview
Fake YouTube is a React-based web application designed to test and showcase React UI development skills. The app features a demo page that replicates the user interface of a single YouTube video page, focusing solely on the visual layout and design without any functional backend or interactive features.

## Features
- A static UI mimicking a YouTube video page, including:
  - Video player placeholder
  - Video title and description
  - Channel information
  - Comments section layout
  - Related videos sidebar
- Built with React for component-based UI development
- Styled using vanilla CSS for a clean, custom design
- No backend or functional interactivity, purely a front-end UI demonstration

## Tech Stack
- **React**: JavaScript library for building the user interface
- **JavaScript (ES6+)**: Modern JavaScript syntax with JSX for React components
- **CSS**: Vanilla CSS for styling the application
- **Node.js & npm**: For managing dependencies and running the development server

## Setup and Installation
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/lionsgrandson/fake-you-tube.git
   cd fake-you-tube
   ```
2. **Install Dependencies**:
   ```bash
   npm install
   ```
   This installs React, ReactDOM, and other dependencies listed in `package.json`.
3. **Run the Development Server**:
   ```bash
   npm start
   ```
   This starts the app, typically at `http://localhost:3000`.
4. **Build for Production** (optional):
   ```bash
   npm run build
   ```
   This generates a production-ready build in the `build/` directory.

## Usage
- Run the app using `npm start` to view the demo page in a browser.
- The page displays a static UI resembling a YouTube video page, designed to test React component structure and CSS styling.
- Explore the layout, including the video player placeholder, video metadata, and mock comments section.

## Notes
- This project is a front-end UI demo and does not include video playback or interactive features.
- The focus is on React component composition and vanilla CSS for custom styling.
- To extend the project, consider adding:
  - Mock interactivity using React state management (e.g., useState, useEffect)
  - Additional pages (e.g., homepage, search results)
  - Integration with a YouTube API for real data

## Contributing
This is a personal project for testing React UI skills. Contributions are not expected, but feel free to fork the repository and experiment with your own enhancements!

## License
This project is unlicensed and intended for personal use and learning purposes.
