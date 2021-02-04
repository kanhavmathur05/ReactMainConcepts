import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import App from './App';
import HandleEventsComponents from './HandleEventsComponents';

function FormattedDate(props)
{
  return <h2>It is child formatted date {props.date.toLocaleTimeString()}. </h2>;
}
class Clock extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state= {date: new Date()};
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(), 1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
  render() {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      <FormattedDate date={this.state.date}/> 
    </div>
  );
  }//
}

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
// Method 1    this.handleClick = this.handleClick.bind(this);
  }
  //Method 1 - using bind function
  // handleClick() {
  //   this.setState(state => ({
  //     isToggleOn: !state.isToggleOn
  //   }));
  // }

  //Method 2 - Using public class field syntax
  handleClick = ()=> {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  //Method 3 is using arrow functions which is not recommended in some cases
  render() {
    return (
      <div>
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      {/* <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button> */}
      </button>
      </div>

    );
  }
}


function tick()
{
  ReactDOM.render(
    // <React.StrictMode>
//       <App />
    // </React.StrictMode>,
//    <Clock />,
//    <HandleEventsComponents/>,
      <Toggle />,
      document.getElementById('root')
 );
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
setInterval(tick,1000);