import React from "react";
import Review from "./Review";
// import { SlBubbles } from "react-icons/sl";

function App() {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>our reviews</h2>
          <div className="underline"></div>
        </div>
        <Review />
      </section>
      {/* <SlBubbles/> */}
    </main>
  );
}

export default App;
