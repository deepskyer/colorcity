import React from "react";
import ColorCity from "./ColorCity";
import seedColors from "./seedColors";
import { generateCity } from "./colorHelpers";

function App() {
  console.log(generateCity(seedColors[0]));
  return (
    <div>
      <ColorCity city={seedColors[0]} />
    </div>
  );
}

export default App;
