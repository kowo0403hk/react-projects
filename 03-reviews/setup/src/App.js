import React from "react";
import Review from "./Review";
function App() {
  return (
    <main>
      <section className="containter">
        <div className="title">
          <h2>our reviews</h2>
          <div className="underline"></div>
        </div>
        <Review />
      </section>
    </main>
  );
}

export default App;
