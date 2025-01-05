# Book Search Web Application

## Overview

This is a web application designed to help users search for books by title, author, or ISBN. It fetches data from the Google Books API and displays the results in a user-friendly list. Users can click on any book in the list to view detailed information about the selected book.

---

## Features

- **Search Options**: Search for books by:
  - Title and Author
  - ISBN
- **Book List**: Displays search results in a responsive list format.
- **Book Details**: Detailed view of a selected book, including title, authors, publisher, published date, description, and average rating.
- **Error Handling**: Displays a modal for errors such as network issues or no results found.
- **Loading Indicator**: Shows a spinner during asynchronous operations.

---

## Technologies Used

- **React**: For building the user interface.
- **Redux Toolkit**:
  - Manages global state.
  - Utilizes thunks to handle asynchronous operations (e.g., fetching data from the Google Books API).
- **CSS Modules**: For styling the components, ensuring scoped and reusable styles.
- **Responsive Design**: The application is mobile-friendly and adapts to various screen sizes.
- **Google Books API**: Provides book data.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/book-search-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd book-search-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and navigate to `http://localhost:3000`.

---

## Usage

1. **Search for Books**:
   - Select the search option (Title & Author or ISBN).
   - Enter the search terms and click the search button.
2. **View Book Details**:
   - Click on any book in the search results to view detailed information.
3. **Error Handling**:
   - If an error occurs (e.g., no results found or network issues), a modal will display the error message.

---

## API Reference

- **Google Books API**: [https://developers.google.com/books/docs/v1/getting_started](https://developers.google.com/books/docs/v1/getting_started)

---

## Contact

For any questions or feedback, feel free to reach out:

- **GitHub**: [Gabriel z](https://github.com/GabZzL)
- **LinkedIn**: [Armando Gabriel](https://www.linkedin.com/in/armandogabrieljl)

## Application Link

- **Link**: [Book Finder](book-search-c4ee6.firebaseapp.com)
