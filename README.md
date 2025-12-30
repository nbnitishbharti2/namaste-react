# NPM - npm is a package manager for the JavaScript programming language maintained by npm, Inc., a subsidiary of GitHub. npm is the default package manager for the JavaScript runtime environment Node.js and is included as a recommended feature in the Node.js installer.

# npm init - commnd for creting package.json

# It will sk for some detils & generte the package.json file.

# package.json - It's configurtion file for the JS project like Rect, ngulr, Vue & Node & NPM to manage packages & dependencies. Keeps an approx version of dependencies.

# Bundler - A JavaScript bundler is a tool that puts your code and all its dependencies together in one JavaScript file. There are many of them out there these days, being the most popular ones browserify and webpack, parcel, vite.

# There re two types of dependencies we cn install.

1. Dev dependencies - It is generlly reuire in development phse.

2. Prod dependencies - It is norml dependency which moved to Production.

# npm install -D parcel - Instll for dev dependency only

# parcel - Its module bundler just like webpack & vite to combine ll the files & generte single file for Production.

# caret(^) and tilde(~) in package.json

~version “Approximately equivalent to version”, will automatically update you to all future patch versions that are backwards-compatible, without incrementing the minor version. ~1.2.3 will use releases from 1.2.3 to < 1.3.0.

^version “Compatible with version”, will automatically update you to all future minor/patch versions that are backwards-compatible, without incrementing the major version. ^1.2.3 will use releases from 1.2.3 to < 2.0.0.

# package-lock.json - Keep the track of exact version of the dependencies.

# integrity - integrity is basically a hash sha512. This hash is because to verify whatever is on my dev machine is matching the same version which is deployed on server.

# dependencies inside package-lock.json -

# The package(parcel) has its own dependencies & its comes under this. & downloaded inside node_modules.

# node_modules = contains all the code that we fetched from NPM. It consists diffenent packages which reuired inside the project & its collection of dependencies.

# npx parcel index.html

# npx is used for executing a package.

# CDN links is not a good way to include React into your project. Why? because fetching from CDN links is a costly operation. So, the better way to include it using NPM in your project.

# Parcel

- Dev build
- Local server
- HMR = Hot module replacement (for refreshing the page instantaly)
- File watching algorithm (written in C++)
- Catching - Faster builds
- Image optimiation
- Minification
- Bundling
- Compressing files
- Consistent hashing
- Code splitting
- Differential Bundling - (To support old browsers)
- Diagnostic
- Error handling
- Https
- Tree shaking - (remove unused code)
- Different build for dev & Prod
-

# Parcel is not doing everything by its own. Its dependent on the different packages.

# browserslist - Its makes the website old browsers compatible. Its a npm package which is used by Parcel. You can configure it through composer.json file.

# You can create the development run command through adding it into package.json scripts object.

Like start, build, jest.

& then run the command through npm run start or npm run build.

Conversion
#React.createElement => React Element JS Object => HTMLElement(render)

React.createElement - is not the HTML element its an object. When we render this to DOM then it becomes then it will become HTML.

root.render() - It will replace the content inside the root element not root append.

# JSX - JSX is a JS syntax which merges HTML & JS together.

JSX is not HTML inside JS. Its HTML or XML like syntax.

# JSX is a valid JS??

No - JSX is not a valid JS because JS is which is JS engine understands. & JS engine understands ECMAScript. If you just try to run it inside browser will throw syntax error.

Conversion

# JSX => React.createElement => React Element JS Object => HTMLElement(render)

Then how it is working? SO the module bundler like webpack & parcel transpiled the code into JS before sending to JS engine. & then JS engine is received the code what its understands.

Parcel is not doing directly this for you. Actually Babel is doing this transpilation.

Babel takes the JSX & convert it.

If you have to add attribute to JSX you need to use camelCase.

If you have to write the multiline jSX then you need to add it inside middle or round bracket. So, Babel will understands where it starting & ending.

// React Component

// Class based component - OLD

// Functional component - NEW

// React Functional component is just a JS function. Which returns some JSX element.

# Component composition

Component composition is a technique for building complex components from simpler ones.
In simpler words ccombining two or more components to building complex components is called
Component composition.

# JSX will sanitie the data before rendering to prevent Cross site scripts.

# Difference between React Element & React Component??

While a React element is a plain object describing a part of the UI, a React component is a function or a class that can produce React elements and manage their state and lifecycle. Components can return multiple elements, components, strings, numbers, or any other types React can render.

How to think building an app??
Frontend Presprective
#Planning

Name
UI Mock
Plan Layout
Wireframes

// Components
Header

- Logo
- Nav Items
  Body
- Search bar
- Restarant Container
- Restarant Card - Image - Name of Res, Star Rating, cuisine, delivery time
  Footer
- Copyright
- Links
- Address
- Contact

#Props
Passing some data to the component is known as props. props is an object in receiving component. It's just a JS object.

#Config driven UI
Based on the config the UI should render. Suppose we need to show red color background at some location & green at other location.

**\*** Episode-05 | Let's Get Hooked **\***

Two types of Export/Import

export default Component;
import Component from "path";

- Named Export/Import
  import { Component } from "path";

# React Hooks

(Normal JS utility function)

- useState() - To create state variables
  Whenever the state variable changes React rerendered the component.

# Reconcilation algorithm

Whenever React have any UI it will create virtual DOM. Virtual DOM is represantation of actual DOM. Virtual DOM is nothing but a JS object.

# Reconciliation

The algorithm React uses to diff one tree with another to determine which parts need to be changed.

update

# A change in the data used to render a React app. Usually the result of `setState`. Eventually results in a re-render.

# Diff algorithm -

Diff algorithm finds out the Difference between two Virtual DOMs. Once it will find out the difference then update the actual DOM.

# React fibre (Came in React 16) - updated version of Diff algorithm

- useEffects() -

**\*** Monolith & Microservice **\***

# Monolith => A big project with different module like API, Auth, Email.

# Microservice => Different modules developed inside seperate projects & all combined to fullfill all the reuirements. It is also known as seperation of concern & single responsbility principle.

All the services talk to each other.

# There are two ways to fetch the data.

1. page load
2. Render the UI quickly. Now we will make api call & once we get the data & then rerender the page.

useEffect - will run once the component rendered.

Why local variable is not working in React like states?

**\*** Routing **\***
use createBrowserRouter for creating & implementing router. Its recommended.

useRouteError is a hook to get the error details in React Router Dom.

<Outlet /> component is replaced by the children component.

<Link /> component is used for routing to different page. It works same as anchor tag but it wont refresh the page. Its super powerful to improve the page speed.
It's a wrapper over anchor tag. React router dom keeping the track of the link behind the scene and render anchor tag.

**\*** SPA **\***

Where the page not reloads on URL change. Fast. Client side routing.

**\*** Two types of routing you can have in web apps **\***

- Client side routing
- Server side routing

**\*** Class Based component **\***

- It extends the React.Component from React. at the end its a simple JS class.

- When a class in intiantiated then first the constructor is called & then the render method of the class is called.

- Order of life cycle method in class component
- constructor
- render
- componentDidMount - We make api calls inside this because we try to render the component first & then make the api call & then render the data. We don't want to wait for data.

* Wrong

- Incase of multiple childs
  Parent - constructor
  Parent - render
- Nitish Class constructor
- Nitish Class render
- Nitish Class componentDidMount

- Nitish Class 2 constructor
- Nitish Class 2 render
- Nitish Class 2 componentDidMount

* Correct Order - React will batch the render & commit phase for optimization

- Parent - constructor
- Parent - render

- Nitish Class constructor
- Nitish Class render

- Nitish Class 2 constructor
- Nitish Class 2 render

<<<< DOM Updated - In single Batch >>>>

- Nitish Class componentDidMount
- Nitish Class 2 componentDidMount

- Parent - componentDidMount

- React has 2 phases

1.  Render phase - (constructor & render)
2.  Commit phase - (componentDidMount, componentDidUpdate, componentWillUnmount)

- componentWillUnmount - called when we are leaving pages.

# Single responsibility function

- That means each of component or function should perform single task.

# modularity means you break the code into small code so, it will become easily maintainble, testable & manageble.

- reusable
- maintable
- testable

# Process of optimization (Spliting one bundle file into multiple files)

- Chunking
- Code Splitting
- Dynamic import
- Lazy Loading
- Preloading
- Prefetching
- Dynamic Code Splitting

# How to make small bundle files for different features?

- When you lazy load the component then it will not be loaded in the initial bundle file.
- Instead it will be loaded when the user navigate to that page.
- You can use Suspense to show a fallback UI while the component is loading.
- Suspense is a component that is used to wrap the lazy loaded component.
- Suspense is a component that is used to show a fallback UI while the component is loading.
- Grocery component is lazy loaded.
