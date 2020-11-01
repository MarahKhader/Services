
import React, {Component} from 'react';
import './App.css';
import Services from './Services'

class Header extends Component {
  render() {
    return (

      <header className='header' style={{paddingTop: '5px', opacity:'1'}}>
        Header 
      </header>
    )
  }
}

class Content extends Component {
  render() {
    return (
      <content className='content' style={{padding:'6px'}}>
        <Services />
      </content>
    )
  }
}

class Footer extends Component {
  render() {
    return (
      <footer className='footer' style={{opacity:'1'}}> Footer </footer>
    )
  }
}

class App extends Component {
  render() {
    return (
        <div>
          <Header/>
          <Content/> 
        </div>
    )
  }
}

export default App;
