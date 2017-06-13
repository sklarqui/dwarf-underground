import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import OtherArticles from './OtherArticles'
import MainArticle from './MainArticle'
import SideAdd from './SideAdd'
import Foot from './Foot'
class App extends Component {
  render() {
    return (
    
      <div className="App">
          <Header />
        <main className="expanded row">
          
        <MainArticle />

<SideAdd />
         
          <OtherArticles />
        </main>

        <footer className="expanded row">
          <h6>&copy; 2017 Erebor Industries</h6>
          <h6 className="float-right">All rights reserved</h6>
        </footer>
       
      </div>
    );
  }
}

export default App;
