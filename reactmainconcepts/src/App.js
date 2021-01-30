import React from 'react';
import './App.css';
//const name="Kanhav Mathur";
// function formatname(user) {
//   return user.firstname+' '+user.lastname;
// }

// const user={
//   firstname:'Kanhav',
//   lastname:'Mathur'
// }; 

// const element=(<h1 className="greeting"> Hello, {formatname(user)}!!</h1>);

// function Welcome(props) {
//   return (<h1>Hello, {props.name}</h1>)
// }

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}!!!!</h1>
  }
}//

function App() {
  return (
    <div>
      <Welcome name="Sara"/>
      <Welcome name="Goku"/>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
