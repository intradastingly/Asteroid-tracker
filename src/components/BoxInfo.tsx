import React, { CSSProperties } from 'react';

function BoxInfo() {
    return (
        <div style={rootStyle}>
            <h3 style={h3Style}>ASTEROIDA NAME</h3>
            <h3 style={h3Style}>DISTANCE IN MILES</h3>
            <h3 style={h3Style}>CHANCE OF DESTROYING EARTH</h3>
            <p style={pStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam tenetur enim culpa sed, impedit quae accusamus adipisci unde, eos dignissimos officiis quisquam ex nisi quaerat, iusto non? Quisquam, vel. Laudantium?</p>
        </div>
    ) 
}

const rootStyle: CSSProperties = {
    
}

const pStyle: CSSProperties = {
    width: '70%',
    color: 'white'
}

const h3Style: CSSProperties = {
    marginBottom: '-0.5rem'
}



export default BoxInfo;