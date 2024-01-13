const element = (
  <div className="greeting">
    <h1 className="heading">
      HAPPY
      <br />
      SANKRANTHI
    </h1>
    <p className="para">CELEBRATION</p>
    <br />
    <p className="datetime">
      <span className="venue">Venue</span> : January 14th at | At 2:00 PM
    </p>
    <div className="kit-container">
      <img
        src="https://pngimg.com/uploads/kite/kite_PNG15.png"
        className="image"
      />
    </div>
  </div>
);
ReactDOM.render(element, document.getElementById("root"));
