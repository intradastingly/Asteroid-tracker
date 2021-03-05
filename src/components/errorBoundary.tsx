import React, { Component, CSSProperties } from 'react';

interface Props {}
interface State {
   hasError: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
   state = {
      hasError: false,
   };

   reloadPage = () => {
      window.URL = window.URL;
   };

   componentDidCatch() {
      this.setState({ hasError: true });
   }

   render() {
      if (this.state.hasError) {
         return (
            <div style={rootStyle}>
               <h2>There was an error, we are working to fix this!</h2>
               <h4>come back soon for epic adventure</h4>
               <b>
                  try{' '}
                  <a href="" onClick={this.reloadPage}>
                     Reload
                  </a>{' '}
                  the page
               </b>
            </div>
         );
      }

      return this.props.children;
   }
}

const rootStyle: CSSProperties = {
   background: 'white',
   color: '#1E1E1E',
   height: '100%',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   flexDirection: 'column',
   backgroundColor: '#F5FFC6',
};
