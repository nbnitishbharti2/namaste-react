import react from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  return (
    <h2>Hello from react...</h2>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);