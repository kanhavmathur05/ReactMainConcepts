import React from 'react';
import { render } from 'react-dom';


  function handleClick(e) {
    console.log('The link was clicked!');
  }

function HandleEventsComponents() {
  render()
  {
  return (
          <div>
            <a href='#' onClick={handleClick}>
              Click Me
            </a>
          </div>);
}
}
export default HandleEventsComponents;
