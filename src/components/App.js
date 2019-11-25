import React,{Component} from 'react';
import '../styles/App.css';
import Hello from './Hello';

class App extends Component {
  render(){
    return (
      <div className="App">
          <p>Hello World</p>
            <Hello></Hello>
      </div>
    );
  }
}

export default App;
