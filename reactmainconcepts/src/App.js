import './App.css';
import React from 'react';

class Welcome extends React.Component {
  render() {
    return (
    <div>
      <h1>Hello, {this.props.name}!!</h1>
    </div>
    )
  }
}

function App() {
  return (
          <div>
            <Welcome name="Goku"/>
            <Welcome name="Echidna"/> 
            <Welcome name="Stella"/> 
            <Welcome name="Vegeta"/>
          </div>);
}

export default App;
