import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//const name="Kanhav Mathur";
function formatname(user) {
  return user.firstname+' '+user.lastname;
}

const user={
  firstname:'Kanhav',
  lastname:'Mathur'
}; 

const element=(<h1 className="greeting"> Hello, {formatname(user)}!!</h1>);

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  element,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
