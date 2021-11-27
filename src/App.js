import "./App.css";
import { useState } from "react";

function App() {
  const [isCreateButton, updateCreaeButton] = useState(true);
  return (
    <div className="App">
      <header className="App-header">
        {isCreateButton && (
          <button className="button"
            onClick={() => {
              updateCreaeButton(!isCreateButton);
            }}
          >
            Create catalogue
          </button>
        )}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
