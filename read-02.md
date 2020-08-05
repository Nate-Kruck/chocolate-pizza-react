# Visually Breaking Down UI

Atomic design  
Starting big and working your way down  
* Organism are large sections that we can easily extract from the page
* Molecules are repeatedly used in several places on the page
* Atoms include basic HTML elements like form labels, inputs, buttons, and others that can't be broken down any further without ceasing to be functional
* Define folder structure and break page down into components
* A folder structure should follow a consistent pattern, to allow you to browse through the files quickly and easily
* Start small and work your way up when building components with code
* For components to be reusable and composable, you have to make them as small and as independent as possible

# Thinking in React

* Start with a mock
* Step 1 - break the UI into a component hierarchy by drawing boxes around every component  
-FilterableProductTable (orange): contains the entirety of the example  
-SearchBar (blue): receives all user input  
-ProductTable (green): displays and filters the data collection based on user input  
-ProductCategoryRow (turquoise): displays a heading for each category  
-ProductRow (red): displays a row for each product

* Step 2 - Build a static version in React  
-build components that reuse other components and pass data using 'props'  
-Reacts one-way data flow keeps everything modular and fast

* Step 3 - Identify the minimal representation of UI state  
-To make your UI interactive, you need to be able to trigger changes to your underlying data model. React achieves this with state.
-DONT REPEAT YOURSELF
-Ask three questions
    1. Is it passed in from a parent via props? If so, it probably isn’t state.
    1. Does it remain unchanged over time? If so, it probably isn’t state.
    1. Can you compute it based on any other state or props in your component? If so, it isn’t state.

* Step 4 - Identify where your state should live
-Identify every component that renders something based on that state.  
-Find a common owner component (a single component above all the components that need the state in the hierarchy).  
-Either the common owner or another component higher up in the hierarchy should own the state.  
-If you can’t find a component where it makes sense to own the state, create a new component solely for holding the state and add it somewhere in the hierarchy above the common owner component.

* Step 5 - Add Inverse data flow
-React makes this data flow explicit to help you understand how your program works, but it does require a little more typing than traditional two-way data binding.

# Callback
* What is a Callback?  
-A callback is a function that is to be executed after another function has finished executing

* Why do we need callbacks?  
-JS is an event driven language. This means that instead of waiting for a response before moving on, JS will keep executing while listening for other evens.

* JavaScript Callback functions
-A JavaScript function is a block of code that will be executed when you call it  
-Because JavaScript functions are first-class objects, you can pass functions to other functions as variables  
-The method of passing in functions as parameters to other functions to use them inside is used in   -JavaScript libraries almost everywhere  
-A JavaScript Callback Function is a function that is passed as a parameter to another JavaScript function, and the callback function is run inside of the function it was passed into  
-JavaScript Callback Functions can be used synchronously or asynchronously


## I didnt finish the Review:Classes readings JavaScript classes but plan to as soon as class ends today
Intro to Object-oriented programming in JavaScript (Links to an external site.)

Intro (Links to an external site.). Read up to, but not including, Internals: Reference type section