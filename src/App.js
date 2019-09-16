import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import 'jquery/dist/jquery.slim.min';
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.scss';
import logo from './logo.svg';

class HomeComponent extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-12 text-light text-center">
          <p>Docker-React-Redux boilerplate V1</p>
        </div>
      </div>
    )
  }
}

class AboutComponent extends Component {
  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-10 col-md-4 text-light">
          <ul>
            <li>React-Create-App boilerplate</li>
            <li>Ready to deploy Docker Nginx container to serve static build</li>
            <li>Redux with react-redux, redux-thunk, and redux-devtools integration</li>
            <li>React Router Dom for routing support</li>
            <li>Bootstrap 4 with sass support (easy theming)</li>
          </ul>
        </div>
      </div>
    )
  }
}

class ContactComponent extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-12 text-light text-center">
          <p>Integration by <a href="http://www.omargonzalez.me/">Omar Gonzalez</a> &copy; 2019 - Code released under
            the MIT license.</p>
          <p>Mail me at <a href='mailto:gonzalezrocha.omar@gmail.com'>gonzalezrocha.omar@gmail.com</a></p>
        </div>
      </div>
    )
  }
}

class NotFoundComponent extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-12 text-center">
          <h2 className='text-light'>404 Not Found</h2>
        </div>
      </div>
    )
  }
}

class App extends Component {

  componentDidMount() {
    const {appName} = this.props;
    document.title = appName;
  }

  render() {
    const {appName} = this.props;
    return (
      <div className="container bg-dark">
        <Router>
          <div className="row justify-content-center mt-5">
            <div className="col-12 text-center">
              <img src={logo} className="App-logo" alt="logo"/>
              <h2 style={{color: '#61DAFB'}}>{appName}</h2>
            </div>
            <div className="col-12 text-center text-secondary">
              <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
            </div>
          </div>
          <Switch>
            <Route exact path="/" component={HomeComponent}/>
            <Route path="/about" component={AboutComponent}/>
            <Route path="/contact" component={ContactComponent}/>
            <Route component={NotFoundComponent}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    //state
    appName: state.globals.config.appName,
  }
};

export default connect(
  mapStateToProps,
  {
    //actions
  }
)(App)
