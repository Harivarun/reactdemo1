import React,{Component} from 'react';
import '../styles/App.css';
import SearchForm from './SearchForm.js'
class App extends Component {
  render(){
    return (
      <div className="App">
          <p>Hello World</p>
            <SearchForm></SearchForm>
      </div>
    );
  }
}

export default App;
