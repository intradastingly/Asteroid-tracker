import React, { CSSProperties } from 'react';

interface Props {
   text: string;
   handleClick: () => void;
}

function Buttons(props: Props) {
   return (
      <button onClick={props.handleClick} style={buttonStyle}>
         {props.text}
      </button>
   );
}

const buttonStyle: CSSProperties = {
   height: '2.5rem',
   width: '6rem',
   margin: '0 1rem',
   backgroundColor: '#6d0000',
   borderRadius: '10px',
   border: 'none',
   fontSize: '1.5rem',
   color: 'white',
};

export default Buttons;
