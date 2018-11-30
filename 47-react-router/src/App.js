import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from "react-router-dom";

const value = "Ciao";

const Home = props => {
  console.log(props);
  return <h1>Home</h1>;
};

const About = props => {
  console.log(props);
  return <h1>About</h1>;
};

// const Menu = props => {
//   console.log(props);
//   return <h1>Menu and message is {props.message}</h1>;
// };

class Menu extends React.Component {
  constructor(props) {
    super(props);
    console.log("In Constructor");
  }

  componentDidMount() {
    console.log("component did mount");
  }

  componentWillUnmount() {
    console.log("About to go away");
  }

  render() {
    console.log(this.props);
    return <h1>Menu and message is {this.props.message}</h1>;
  }
}

class App extends Component {
  state = {
    n: 0
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ n: this.state.n + 1 });
    }, 1000);
  }

  render() {
    return (
      <Router>
        <>
          <NavLink activeClassName="active-link" to="/home">
            Home
          </NavLink>
          <h1>Render was called {this.state.n} times</h1>
          <Switch>
            <Route
              path="/menu"
              render={props => <Menu {...props} message={value} />}
            />
            <Route path="/" component={Home} />

            <Route path="/about" component={About} />
          </Switch>
        </>
      </Router>
    );
  }
}

export default App;
