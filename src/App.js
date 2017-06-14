import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import Foot from './Foot'
import Articles from './Articles'
class App extends Component {
  render() {
    return (
    
      <div className="App">
          <Header />
        <Articles />
<Foot />
        
       
      </div>
    );
  }
}

export default App;
