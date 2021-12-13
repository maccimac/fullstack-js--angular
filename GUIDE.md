## Workspace Instructions

The Angular CLI has been installed and is ready to use! Follow these quick steps to get your application up and running:

1. To initialize the Workspace, click the `SET UP WORKSPACE` button.
2. To serve an Angular application: After scaffolding a new Angular application, `cd` into its root directory, then click the `START ANGULAR` button.
3. To open an Angular application in a browser window, click on `OPEN APP`.

## Starter Code

The Angular CLI allows you to quickly scaffold a new application, as well as generate all necessary components, services, and modules. While you'll use the CLI to create a new application from scratch, we've provided some code and data to help you along the way:

* **CSS**. The provided stylesheets are not required, but you may use the included CSS classes to help you style the application. Feel free to use your creativity and build a UI as you see fit!
* `data.json`. You may fetch the list of products for your store from the API created in the previous course of this Nanodegree program. In lieu of using that data, you may also choose to have your application read the provided `data.json` file to populate your store.
If you choose to use the starter code, just merge the included `src` folder into the `src` folder of a newly-scaffolded application.

## Project features

Your application reflects the same user experience as that of a real-world e-commerce website, including a(n):

* **Product list** page, which displays the available products for the user to choose and add to their cart (in various quantities)
* **Product details** page, which displays more information about any particular product
* **Shopping cart**, which includes the products that the user has added to their cart
* **Checkout form**, which collects information about the user (e.g., name, address, payment details, etc.)
* **Order confirmation page**, which shows the outcome after the user completes the checkout process (i.e., submits the checkout form)

## Development strategy

Feel free to use this overview and the [project rubric](https://review.udacity.com/#!/rubrics/3005/view) specifications to create this project. You are always welcome to design and implement your own workflow, but if you are stuck or could use some inspiration, we've included the following walkthrough the help you get up and running.

* **Scaffold your project** using the Angular CLI, and install any dependencies.
* **Generate the product list component**. Having the product list as the "main" page is a great start for your users.
* **Begin building the component logic and template** What is the function of the product list? What logic is included in the TypeScript component, and how does its HTML template function? Does this component collect any user input? If so, how does information entered by the user relate to properties in the TypeScript component?
* **Consider the hierarchy of components**. Which other components do you anticipate you'll need to build in this application? Which component(s) should render other components? Which components should represent a parent-child relationship? Feel free to draw out this hierarchy as a chart to help you visualize the relationships between components.
* **Create the TypeScript model** for products in the app. Any available product should be of this type, rather than an ordinary object.
* **Generate the service(s)**. Which service(s) make the most sense? For any particular service, what is its function? Hint: You may want to create a service to handle any asynchronous data.
* **Fetch data** from the API (or included `data.json` file) and render products in your product list.
* **Generate and create other components**. How do these components interact, if at all, with the component you first created? How can we facilitate sharing information between them?
* **Create routing** between components. Which components are linked by the router? How is the app routing module set up and configured to make sure the page doesn't reload during navigation?
* **Ensure that inputs are validated** in the client. For example, your checkout form needs to collect information from the user in order for them to complete the checkout process. How do you ensure that you are collecting accurate information from the user?
