1. Name 3 JavaScript Array/Object Methods that do not produce side-effects. Which method do we use to create a new object while extending the properties of another object?

   .map, .filter, .concat

   Object.assign can be used to create a new object that copies and extends the properties of another object. Let’s say I have twin cats:

   const myCat = {name: 'Boots', toy: 'fake mouse', age: 4};
   const myOtherCat = Object.assign({}, myCat, {name: 'Socks'});

   The same effect can be accomplished with the spread operator:

   const myCat = {name: 'Boots', toy: 'fake mouse', age: 4};
   const myOtherCat = {...myCat, name: 'Socks'};

2. Describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

   In Redux, an action is a Object (sent from an action creator) which has a property called ‘type’, and often a second property which is conventionally called ‘payload’. The idea is that the action is saying **do this** (type-only) or **do this with this** (type and payload).

   Assuming an action Object is not intercepted by middleware, it will arrive at an app’s reducer(s) after being dispatched (under the hood for us so far) from an action creator. A reducer is a function that takes in the state object and an action and returns a new state object which has (usually) been updated in some way based on the action. Reducers should be written as pure functions, which means that they do not affect anything outside of their own scope. In particular, reducers should not affect the state object, which is why they return a new state object. This makes reducers predictable, and thus easier to debug.

   The store is the main state object in Redux (similar to Application state, below), and is stored as a property of the Provider component. The store can only be updated by a reducer (assuming the app has been written correctly) and thus changes to the store can be predicted and debugged by looking at the app’s reducers (and the actions that trigger them). Any component that needs to know about changes in state can be connected using Redux’s connect function, and any component that needs to update state can do so through action creators. While Redux apps may have Component state (see below), the store tracks all the app’s important data, thus the store is the ‘single source of truth’ in a Redux app.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

   Application state where most local data for an app is stored (this would be the store in Redux). Application state is generally stored on or close to the root component of the app so state properties can be passed down to descendent components as needed. Component state is any state that isn’t part of the application state. Like Application state, Component state is stored on a component, but in this case the component may be far from the root component of the app. This is okay because Component state is generally only directly accessed by the component that stores it.

   Application state is appropriate for most data storage in an app. Component state is mainly useful for storing temporary data such as input field values before form submission, or maybe temporary user settings concerning the view of a particular component (which tab is active, etc.).

4. What is middleware?

   Middleware is used to intercept a process, perform some action, and then either send the process along (where it was headed before hitting the middleware) or stop the process. The middleware might also launch a different process than the one it intercepted, or perhaps several. In Redux the intercepted processes are usually actions. Two examples of middleware we’ve used with Redux are logger, which console.logs each action (including payload and other useful information), and a custom authentication token catcher, which writes a token to localStorage is the LOGIN_SUCCESS action is intercepted.

5. Describe redux-thunk, what does it allow us to do? How does it change our action-creators?

   Redux-thunk is middleware that allows a Redux action creator to return a function instead of an action. The main use for thunk is to allow for asynchronous actions such as server calls. The thunk (the returned function) is usually written to call one or another action based on the outcome of the asynchronous action. For example, a LOGIN_REQUEST action returns a function that can wait for a server to respond with information about whether the login request was successful. Once the response from the server arrives, the thunk will send either a LOGIN_SUCCESS action which loads the main page of the app, or it will send a LOGIN_FAILURE action which lets the user know that perhaps their username or password is incorrect.

6. Which react-redux method links up our components with our redux store?

   connect
