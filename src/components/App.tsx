import React, { CSSProperties, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import ErrorBoundary from "./ErrorBoundary";

function App() {
   return (
      <Suspense fallback={<h2>get drunk</h2>}>
         <BrowserRouter>
            <div style={rootStyle}>
               <ErrorBoundary>
                  <Layout />
               </ErrorBoundary>
            </div>
         </BrowserRouter>
      </Suspense>
   );
}

const rootStyle: CSSProperties = {
   width: "100%",
   height: "100%",
};

export default App;
