import React from "react";
import "./App.css";

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Subscribed successfully!");
  };

  return (
    <div className="wrapper">
      <div className="top">
        <span className="envelope">&#9993;</span>
      </div>

      <div className="bottom">
        <div className="info">
          Subscribe to our channel and<br />get the latest updates
        </div>

        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <input type="text" placeholder="Enter your email" required />
          </div>
          <div className="input-box">
            <input type="submit" value="Subscribe" />
          </div>
        </form>

        <div className="footer">Don't worry, we don't spam</div>
      </div>
    </div>
  );
}

export default App;