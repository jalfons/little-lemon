# Little Lemon Restaurant Booking App

This is the Front-End Developer Capstone project for the Little Lemon restaurant.

The app allows users to view the restaurant homepage and reserve a table through a functional booking form.

## Features

- Responsive Little Lemon homepage
- Semantic HTML structure
- Accessible navigation and form labels
- Table booking page
- Available booking times loaded from the provided API
- Controlled booking form built with React state
- Client-side validation using HTML5 and React
- Booking confirmation page
- Unit tests for booking logic, validation, and form behavior

## Technologies Used

- React
- React Router
- JavaScript
- HTML5
- CSS3
- Jest
- React Testing Library
- Git and GitHub

## Project Structure

src/
  assets/
  components/
    BookingForm.js
    BookingSlot.js
    BookingSlots.js
    CallToAction.js
    Chicago.js
    CustomersSay.js
    Footer.js
    Header.js
    Main.js
    Nav.js
    Specials.js
  pages/
    AboutPage.js
    BookingPage.js
    ConfirmedBooking.js
    HomePage.js
    LoginPage.js
    MenuPage.js
    OrderOnlinePage.js
  utils/
    bookingTimes.js
    bookingValidation.js

## How to Run the Project

Clone the repository:

git clone git@github.com:jalfons/little-lemon.git
cd little-lemon

Install dependencies:

npm install

Run the app:

npm start

Open the app in the browser:

http://localhost:3000

## How to Run Tests

npm test -- --watchAll=false

## How to Build the Project

npm run build

## Booking Form Validation

The booking form validates:

- Date is required and cannot be in the past
- Time must be one of the available booking slots
- Number of guests must be between 1 and 10
- Occasion must be selected
- Submit button is disabled until the form is valid

## Accessibility

The app includes:

- Semantic HTML elements
- Navigation landmarks
- Form labels connected with htmlFor and id
- ARIA attributes for form validation
- Keyboard focus styles
- Skip link to main content
- Accessible confirmation page

## Repository

https://github.com/jalfons/little-lemon
