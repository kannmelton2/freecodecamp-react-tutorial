import React from 'react';
import ReactDOM from 'react-dom';

function Greeting() {
  // while we write very familiar html here, we are techincally returning JSX
  return(
    <div>
      <Person />
      <Message />
    </div>
  )
}

const Person = () => {
  return <h1>John Doe</h1>
}

const Message = () => {
  return <p>This is my message</p>
}

ReactDOM.render(<Greeting />, document.getElementById('root'));