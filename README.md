PokéViewer: Responsive Pokémon Gallery
Course: Interactive Frontend

Assignment: Work Requirement 4

Project Overview
This is a standalone React application that displays a collection of 6 random Pokémon using data from the PokéAPI. The main goal was to practice fetching data from a REST API and displaying it in a structured, responsive layout using React Bootstrap.

How to Run the App
Clone the repository to your local machine.

Run npm install in the terminal to download the dependencies (react-bootstrap, bootstrap, and js-cookie).

Start the development server with npm run dev.

Open your browser to the local address provided (usually http://localhost:5173).

My Approach
Data Retrieval
Instead of just showing the first 6 Pokémon, I implemented a "Random Gallery" logic.

First, I fetch a list from the /pokemon endpoint with a random offset.

Since the initial list only provides names and URLs, I used Promise.all() to make secondary fetch calls for each specific Pokémon. This allows me to access the high-quality official artwork and specific stats like height and weight.

Responsive Layout
I used the React Bootstrap Grid system (Container, Row, and Col) to meet the layout requirements:

Mobile (sm): 1 card per row (sm={12}).

Tablet (md): 2 cards per row (md={6}).

Desktop (lg): 3 cards per row (lg={4}).

Persistence (Optional Feature)
I implemented the "Star" feature to let users favorite their Pokémon.

I used the js-cookie library to store an array of favorite Pokémon names.

When the app reloads, a useEffect hook checks for the cookie and restores the starred state so the user doesn't lose their favorites.

Tools Used
VS Code for development.

Thunder Client to test the PokéAPI endpoints before coding.

React Bootstrap for styling and grid management.

GitHub for version control.