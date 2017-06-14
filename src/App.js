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
<Foot />
        
       
      </div>
    );
  }
}

export default App;
