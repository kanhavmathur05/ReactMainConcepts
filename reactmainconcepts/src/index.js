import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import App from './App';
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

function tick()
{
  ReactDOM.render(
    // <React.StrictMode>
//       <App />
    // </React.StrictMode>,
    <Clock />,
   document.getElementById('root')
 );
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
setInterval(tick,1000);