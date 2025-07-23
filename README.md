# 🎬 Movie App

A beautiful React application for managing your favorite movies and TV shows. Built with modern React hooks and featuring a stunning UI design.

## ✨ Features

- **Movie Collection**: Display your favorite movies with beautiful cards
- **Add New Movies**: Add movies with title, description, poster URL, and rating
- **Smart Filtering**: Filter movies by title and minimum rating
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Modern UI**: Beautiful gradient backgrounds and smooth animations
- **Form Validation**: Comprehensive validation for all input fields

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone or download this project
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm start
```

5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser

## 🎯 How to Use

### Viewing Movies

- The app comes with 3 sample movies pre-loaded
- Movies are displayed in a responsive grid layout
- Each movie card shows the title, description, poster, and rating

### Adding New Movies

1. Click the "Add New Movie" button
2. Fill in the required fields:
   - **Title**: The movie's title
   - **Description**: A brief description of the movie
   - **Poster URL**: A valid URL to the movie's poster image
   - **Rating**: A rating from 0 to 10 (can use decimals)
3. Click "Add Movie" to save

### Filtering Movies

- **Search by Title**: Type in the search box to filter movies by title
- **Filter by Rating**: Use the slider to set a minimum rating filter
- **Clear Filters**: Click "Clear All" to remove all active filters

## 🛠️ Built With

- **React 18** - Frontend framework
- **React Hooks** - State management (useState)
- **CSS3** - Styling with modern features like:
  - CSS Grid and Flexbox
  - CSS Custom Properties
  - Backdrop filters
  - Smooth animations and transitions
- **HTML5** - Semantic markup

## 📁 Project Structure

```
src/
├── components/
│   ├── MovieCard.js          # Individual movie display component
│   ├── MovieCard.css
│   ├── MovieList.js          # Grid of movie cards
│   ├── MovieList.css
│   ├── Filter.js             # Search and rating filter
│   ├── Filter.css
│   ├── AddMovie.js           # Form to add new movies
│   └── AddMovie.css
├── App.js                    # Main application component
├── App.css
├── index.js                  # Application entry point
└── index.css                 # Global styles
```

## 🎨 Design Features

- **Gradient Backgrounds**: Beautiful purple gradient background
- **Glass Morphism**: Semi-transparent components with backdrop blur
- **Hover Effects**: Smooth animations on interactive elements
- **Responsive Grid**: Automatically adjusts to different screen sizes
- **Star Ratings**: Visual star rating display
- **Form Validation**: Real-time validation with error messages

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (not recommended)

## 📱 Responsive Design

The app is fully responsive and works on:

- Desktop computers
- Tablets
- Mobile phones
- All modern browsers

## 🎯 React Hooks Used

- **useState**: For managing component state
  - Movie data
  - Filter states
  - Form data
  - Error states

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Enjoy managing your movie collection! 🎬✨**
