import React, {Component} from 'react';
// import logo from './logo.svg';
// import './App.css';
import ReactDOM from 'react-dom';
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
          <HashRouter>
            <>
              <Switch>
                <Route exact path='/' component={Home}/>
                {/*<Route path='/userPanel' component={UserPanel}/>*/}
                {/*<Route path='/newUserPanel' component={NewUserPanel}/>*/}
              </Switch>
            </>
          </HashRouter>
      );
  }
}

export default App;


// function App() {
//   return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//               className="App-link"
//               href="https://reactjs.org"
//               target="_blank"
//               rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//   );
// }
