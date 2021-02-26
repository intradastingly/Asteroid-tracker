import React, { CSSProperties } from 'react';
import Layout from './Layout';


function App() {
    return (
        <div style={rootStyle}>
            <Layout />
        </div>
    )
}

const rootStyle: CSSProperties = {
    width: "100%",
    height: "100%"
}
export default App;