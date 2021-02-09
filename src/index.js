import React from 'react';
import ReactDOM from 'react-dom';

function Greeting() {
  // while we write very familiar html here, we are techincally returning JSX
  return(
    <h4>Our first component</h4>
  )
}

ReactDOM.render(<Greeting />, document.getElementById('root'));