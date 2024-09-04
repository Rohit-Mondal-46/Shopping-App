# Shopping App

This project is a simple shopping app built using React.js. The app allows users to browse products, apply filters to their search, and manage a shopping cart.

## Features

### 1. Product Listing
- The app lists a variety of products with details like name, price, availability, and ratings.
- Each product has an "Add to Cart" button, allowing users to easily add items to their shopping cart.

### 2. Filtering Options
- **Includes Out of Stock**: When this filter is selected, products that are out of stock will be displayed in the list.
- **Fast Delivery Only**: This filter shows only the products that have fast delivery enabled.
- **Price Sorting**: Users can sort products by price, either from low to high or high to low.
- **Ratings**: Users can filter products based on their ratings.

### 3. Cart Management
- The cart section displays the items added by the user.
- Users can review their selected items in the cart before proceeding to checkout.


### Components

- **App.js**: The main component that sets up routing between different pages (Home, Cart).
- **Home.js**: The home page component that displays the list of products and provides filtering options.
- **Cart.js**: The cart page component that displays the items added by the user.

### Contexts

- **CartContextProvider.js**: This context manages the state of the shopping cart, allowing for easy access and manipulation of cart data across components.

## How to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/Rohit-Mondal-46/Shopping-App-basic-React-Practice-.git
   cd shopping-app
2. npm install
3. npm run dev

## Technologies Used
React.js: A JavaScript library for building user interfaces.
React Router: For handling routing between different components.
Context API: For state management of the shopping cart.
TailwindCSS: For styling the components.

