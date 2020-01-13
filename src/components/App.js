import React from 'react';
import '../stylesheets/App.css';
import { getDataFromApi } from '../services/api';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: []
    }
  }
  componentDidMount () {
    getDataFromApi()
    .then(data => {
      this.setState ({
        characters: data.results
      })
    })
  }
  render() {
    console.log(this.state.characters)
    return (
      <div className="App">
        <header className="App-header">
          Holaaaaaa!!!
        </header>
      </div>
    );
  }
}

export default App;
