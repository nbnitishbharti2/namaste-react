# Namaste React Learning Notes 🚀

Welcome to my learning journey with **Namaste React** series! This repository documents detailed notes, concepts, and code snippets covered in each episode.

---

## 📚 Table of Contents

- [Episode 01: Inception](#episode-01--inception)
- [Episode 02: Igniting our App](#episode-02--igniting-our-app)
- [Episode 05: Let's Get Hooked](#episode-05--lets-get-hooked)
- [Episode 07: Routing & SPA](#episode-07--routing--spa)
- [Episode 08: Let's Get Classy](#episode-08--lets-get-classy)
- [Episode 09: Optimizing our App](#episode-09--optimizing-our-app)
- [Episode 10: Formatting UI (Tailwind)](#episode-10--formatting-ui-tailwind)
- [Episode 11: Data is the New Oil](#episode-11--data-is-the-new-oil)

---

## Episode 01 | Inception

### 📦 NPM (Node Package Manager)

- **NPM** is the standard package manager for JavaScript/Node.js.
- `npm init`: Initializes a project and creates `package.json`.
- `package.json`: Configuration file for dependencies (packages like React, Parcel, etc.).
- **Bundler**: Tools like **Webpack, Parcel, Vite** bundle code + dependencies into a single/fewer files for production.

### ✅ Dependencies Types

1. **Dev Dependencies** (`npm i -D`): Required _only_ during development (e.g., testing tools, bundlers).
2. **Prod Dependencies** (`npm i`): Required in production (e.g., React, Redux).

### ⚙️ Versioning (SemVer)

- **`^` (Caret)**: Updates to compatible **minor** versions (e.g., `^1.2.3` → `1.3.0`). Safe.
- **`~` (Tilde)**: Updates to compatible **patch** versions (e.g., `~1.2.3` → `1.2.4`). Safer.

### 🔒 package-lock.json

- Tracks the **exact version** of installed dependencies.
- Contains an **integrity hash** to ensure consistency between dev and prod environments.

### 📁 node_modules

- Contains the actual code of downloaded packages.
- **Never push this to Git**.

### 🚀 Parcel Features

Parcel is a beast! 🔥

- **HMR (Hot Module Replacement)**: Instant page transformation.
- **File Watcher**: Rebuilds on file change (C++).
- **Caching**: Faster builds.
- **Image Optimization & Minification**.
- **Bundling & Compressing**.
- **Consistent Hashing & Code Splitting**.
- **Tree Shaking**: Removes unused code.
- **HTTPS** support in dev.

---

## Episode 02 | Igniting our App

### 🛠 Scripts

Add custom commands in `package.json`:

```json
"scripts": {
  "start": "parcel index.html",
  "build": "parcel build index.html"
}
```

Run with: `npm run start` or `npm run build`.

### ⚛️ JSX vs React.createElement

- **React.createElement**: Creates a plain JS object (React Element).
- **JSX**: XML-like syntax for writing React.
  - **Not HTML**.
  - Transpiled by **Babel** to `React.createElement`.
  - **Babel**: Converts JSX code → React Element Object → HTML DOM.

### 🧩 Components

1. **Class Components** (Old way).
2. **Functional Components** (New & Recommended): Just a JS function returning JSX.

**Component Composition**: Using components inside other components.

```javascript
const Component = () => {
  return <h1>Hello Component Composition</h1>;
};
```

---

## Episode 05 | Let's Get Hooked

### 🎣 React Hooks

Hooks show the power of Functional Components.

1. **useState()**: Creates local state variables.
   - When state updates, React **re-renders** the component.

### 🌳 Reconciliation & Virtual DOM

- **Virtual DOM**: A lightweight copy of the actual DOM (JS Object).
- **Diff Algorithm**: React compares the new Virtual DOM with the old one using the **Diffing Algorithm**.
- **React Fiber** (React 16+): The new reconciliation engine for faster updates.

### 🏗 Architecture: Monolith vs Microservices

- **Monolith**: Single project containing everything (API, UI, Auth).
- **Microservices**: Separation of concerns. Different projects for different services talking to each other.

---

## Episode 07 | Routing & SPA

### 🚦 React Router DOM

- `createBrowserRouter`: Recommended way to define routes.
- `<Outlet />`: Placeholder for child routes.
- `<Link />`: Navigate **without reloading** the page.
- `useRouteError`: Hook to handle routing errors.

### ⚡ Single Page Application (SPA)

- Does **not reload** the browser.
- Only swaps components via Client-Side Routing.

---

## Episode 08 | Let's Get Classy (Class Components)

### 🔄 Lifecycle Methods

1. **Constructor** (Initialization).
2. **Render** (UI generation).
3. **ComponentDidMount** (API calls reside here).
4. **ComponentDidUpdate** (Updates).
5. **ComponentWillUnmount** (Cleanup).

**Lifecycle Order in Parent-Child:**

1. Parent Constructor
2. Parent Render
3. Child Constructor
4. Child Render
5. Child ComponentDidMount
6. Parent ComponentDidMount

---

## Episode 09 | Optimizing our App

### ✂️ Code Splitting & Lazy Loading

Break down the main bundle into smaller chunks for performance.

- **Lazy Loading / Dynamic Import**:
  ```javascript
  const Grocery = lazy(() => import("./components/Grocery"));
  ```
- **Suspense**: Wraps lazy components to show a fallback (e.g., Shimmer UI) while loading.

**Benefits:**

- Faster initial load.
- Modular & Maintainable code.

---

## Episode 10 | Jo Dikhta Hai, Vo Bikta Hai (Tailwind CSS)

### 🎨 Tailwind CSS

- A utility-first CSS framework.
- Rapidly build UIs without leaving your HTML.
- **Why use it?** No dedicated CSS files, standard classes, responsive by default.

## Episode 11 | Data is the New Oil

### Higher Order Components (HOC)

- A function that takes a component and returns a new component.
- Used to share common functionality between components.
- It will take a component as an argument and add some additional functionality to it and return a new component.

```javascript
const HOC = (WrappedComponent) => {
  return (props) => {
    return (
      <div>
        <label htmlFor="">Promoted</label>
        <WrappedComponent {...props} />
      </div>
    );
  };
};
```

**Benefits:**

- Code Reusability.
- Centralized logic sharing.

### Lifting state up

- When we want to share the state between the parent and child components.
- When we want to share the state between the multiple child components.
- When we want to share the state between the multiple parent and child components.

- Then we move the local state to the parent component and pass it to the child components as props.

**Benefits:**

- Code Reusability.
- Centralized logic sharing.

**Drawbacks:**

- Unnecessary code duplication & re-renderings.

### Props Drilling

- When we want to share the state between the multiple parent and child components.
- Then we move the local state to the parent component and pass it to the child components as props.

**Benefits:**

- Code Reusability.
- Centralized logic sharing.

**Drawbacks:**

- Unnecessary prop drilling.
- Unnecessary code duplication & re-renderings.

### Context API

- When we want to share the state between the multiple parent and child components.
- Then we move the local state to the context and so, we can access it from any component.
- Without prop drilling.

**Benefits:**

- Avoid prop drilling.
- Avoid unnecessary code duplication & re-renderings.
- Centralized logic sharing.

**Drawbacks:**

- Not Optimized for very large applications.

** createContext()**

- It creates a context.
- It returns a context object.
- It is used to create a context.
- It can take initial state as an argument.

```javascript
const Context = createContext(initialState);
```

** useContext()**

- It returns the context value.
- It is used to access the context value.
- It can take context as an argument.

```javascript
const contextValue = useContext(Context);
```

** Provider**

- It is used to provide the context value to the components.
- It can take context and value as an argument.

```javascript
<Context.Provider value={value}>
  <Component />
</Context.Provider>
```

- How to pass the context value to the components?
- We can pass the context value to the components using the Provider component.
- We can pass methods to the context value to the components using the Provider component.

```javascript
<Context.Provider value={{ state, setState }}>
  <Component />
</Context.Provider>
```

** Consumer**

- It is used to consume the context value.
- It can take context as an argument.
- In Class Components, we can use Consumer to consume the context value because we can't use hooks in class components.

```javascript
<Context.Consumer>{(value) => <Component value={value} />}</Context.Consumer>
```
