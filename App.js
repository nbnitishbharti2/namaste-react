import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement(
  "h2",
  {id: "heading"},
  "Namaste React..."
);

const App = () => {
  return (
    <h2>Hello from react...</h2>
  );
}

// React Element
const jsxHeading = <h2>Namaste React From React Element</h2>;
// JSX is React Element.

// Title Component
const Title = () => (
  <h2 className="head" tabIndex="5">
    Namaste React using JSX
  </h2>
);

// React Functional component
const HeadingComponent = () => {
  return (
    <div id="container">
      <Title /> 
      {/* <Title /> is same as <Title></Title> & Title() */}
      {/* Title() */}
      {Title()}
      {jsxHeading}
      <h2>Namaste React Functional component</h2>
    </div>
  );
}
// a function which is returning some React Element is React functional component.

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeadingComponent />);