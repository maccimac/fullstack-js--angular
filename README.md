# Angular Store


## Description
Simple but dynamic store using Angular. Uses both frontend and backend functionalities.


## How to start
1. Open terminal in project folder
2. Go to angular folder `cd my-store`
3. Run `ng serve`
4. Open in browser `localhost:4200` or whatever terminal recommends


## Project features / scaffold
- Uses typescript typing
- Fetches product data using HttpClient
- Orders are updated in services
- Mobile responsive

#### Header
Route: Shown in all routes
- Can redirect to home and cart route
- Cart button includes total number of orders
- Cart button updates every new order

#### Products
Routes:
  * Homepage [`/`] - Houses all the items
  * Singe product page [`/product/:id`]- Displays additional product detail

- Can change item quantity
- Shows notification when items are added; Hides in 3 seconds

#### Cart
Route: [`/cart`]
- Displays full summary of orders and prices
- Enables deleting of items
- Enable change of item quantity
- Dynamic computation of order total and cart total
- Shows different message if empty

#### Checkout
Route: [`/checkout`]
- Shows quicks summary of orders; Updating is no longer possible here
- Allows for input of user details
- Uses form verification
- Has warning for invalid values
- Disables processing if has invalid details
- Redirects if cart is empty

#### Success / Confirmation
Route: [`/success`]
- Displays user
- Shows delivery time estimate (additional few days)
- Resets cart data
- Redirects if user data is empty
