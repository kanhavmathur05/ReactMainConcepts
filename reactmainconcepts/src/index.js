import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import App from './App';
import HandleEventsComponents from './HandleEventsComponents';

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

function UserGreeting(props)
{
  return <div><h1>User Greeting!!</h1></div>
}

function GuestGreeting(props)
{
  return <div><h1>Guest Greeting!!</h1></div>
}

function Greeting(props) {
  const isLoggedIn=props.isLoggedIn;
  if(isLoggedIn)
  {
    return (<div>
      <UserGreeting />
    </div>);
  }
  else
  {
    return (<div>
        <GuestGreeting />
      </div>);
  }
}

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


function MailBox(props) {
    const unreadmessages=props.unreadmessages;
    return (
      <div>
        <h1>Hello</h1>
          {unreadmessages.length > 0 && <h2>
              You have {unreadmessages.length} unread messages.
            </h2>}        
      </div>
    );
  }

const messages=['React', 'Re: React', 'Re:Re: React','asdf'];

function WarningBanner(props)
{
  if(props.warn)
  {
    return null;
  }
  return (
    <div className="warning">
      <h1>Warning!!</h1>
    </div>
  );
}

class Page extends React.Component {
  constructor(props)
  {
    super(props);
    this.state={showWarning:true};
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick =() => {
    this.setState(prevstate => ({
      showWarning: !prevstate.showWarning  
    }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.warning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    );
  }
}

//function tick()
//{
  ReactDOM.render(
    // <React.StrictMode>
//       <App />
    // </React.StrictMode>,
//    <Clock />,
//    <HandleEventsComponents/>,
//      <Toggle />,
//      <Greeting isLoggedIn={true}/>,
//    <LoginControl />,
//    <MailBox unreadmessages={messages} />,
    <Page />,
    document.getElementById('root')
 );
//}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
//setInterval(tick,1000);