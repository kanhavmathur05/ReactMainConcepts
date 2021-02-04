import React from 'react';


  function handleClick(e) {
    console.log('',e);
    console.log('The link was clicked!');
  }

function HandleEventsComponents() {
  
  return (
          <div>
            <a href='#' onClick={handleClick}>
              Click Me
            </a>
          </div>);
}

export default HandleEventsComponents;
