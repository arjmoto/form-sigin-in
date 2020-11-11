import React, {Component} from 'react';
// import Nav from './components/Nav';
import Main from './components/Main';
import Header from './components/Header';
class App extends Component {
  render() {
    return (
      <div className="container">
          <Header/>
          <Main/>
      </div>
          
    );
  }
}

export default App;
