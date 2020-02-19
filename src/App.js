import React from "react";
import ColorCity from "./ColorCity";
import seedColors from "./seedColors";

function App() {
  return (
    <div>
      <ColorCity city={seedColors[0]} />
    </div>
  );
}

export default App;
