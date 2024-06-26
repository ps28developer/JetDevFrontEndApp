# Daily-Drinks App

## Overview

This project is a responsive web application designed for managing orders. The application allows users to add, update, and delete orders efficiently. The UI is built using ReactJS and styled with Tailwind CSS, ensuring a modern and responsive design.

## Features

- **Add Orders**: Users can add new orders with details like name, price, and notes.
- **Edit Orders**: Existing orders can be edited to update details.
- **Delete Orders**: Orders can be deleted with a confirmation prompt.
- **Tooltips**: Hovering over edit and delete icons shows tooltips for better user guidance.
- **Responsive Design**: The application is fully responsive, providing a seamless experience across different devices and screen sizes.
- **Notifications**: Success notifications for adding, updating, and deleting orders using `react-toastify`.

## Technology Stack

- **Frontend**: React, Tailwind CSS
- **State Management**: React hooks (`useState`, `useEffect`)
- **UI Components**: Custom modal implementation for adding and editing orders
- **Notifications**: `react-toastify` for user feedback

## Project Structure

- **Home Component**: Manages the state and renders the list of orders. Includes functions for opening and closing modals, handling tooltips, and managing orders.
- **AddOrder Component**: Modal for adding and editing orders, including form validation.
- **Header and Footer Components**: Simple components for the header and footer of the application.
- **OrderDetails**: A mock data file containing initial order details.
- **DeleteOrder Component**: Modal for confirming the deletion of an order.

## How to Run

1. **Install dependencies**:
    ### `npm install`

2. **npm start**:
    ### `npm start`

3. **Build for production**:
    ### `npm run build`
