import React from "react";

const App = () => {
  const size = window.innerWidth < 500 ? 200 : 300;
  return (
    <div className="App">
      <div>
        <h1 className="heading">Ken Saro-Wiwa Innovation Hub</h1>
      </div>
      <h3>Twitter Qr Code</h3>
      <div>
        <img
          src={`https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Ftwitter.com%2Fintent%2Ftweet%3Ftext%3D%2523arvrPH%2520%2523ksih%2520%2523imisi3d%2520%2523arvrafrica%2520%250ATag%2520%250A%40imisi3d%2520%40ksih%2520%40arvrafrica&chs=${size}&choe=UTF-8&chld=L|2`}
          alt="qr code"
          className="qr-code"
        />
      </div>
    </div>
  );
};

export default App;
