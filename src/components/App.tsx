import React, { CSSProperties } from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./Layout";

function App() {
  return (
    <BrowserRouter>
        <div style={rootStyle}>
            <Layout />
        </div>
    </BrowserRouter>
  );
}

const rootStyle: CSSProperties = {
  width: "100%",
  height: "100%",
};
export default App;
