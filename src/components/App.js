import React from 'react';
import '../stylesheets/App.scss';
import { getDataFromApi } from '../services/api';
import CharacterList from './CharacterList';
import Filter from './Filter';
import { Route, Switch } from 'react-router-dom';
import CharacterDetail from './CharacterDetail';
import Header from './Header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      value: '',
    }
    this.handleInputSearch=this.handleInputSearch.bind(this);
    this.renderDetail=this.renderDetail.bind(this);
  }
  componentDidMount () {
    getDataFromApi()
    .then(data => {
      this.setState ({
        characters: data.results
      })
    })
  }

  handleInputSearch (value) {
    this.setState ({
      value: value
    })
  }

  renderDetail (props) {
    const id = props.match.params.id;
    console.log(id)
    return (
    <CharacterDetail 
      characterDetail={id}
      characters={this.state.characters}
    />)
  }
  

  render() {
    console.log(this.state.characters)
    return (
      <div className="App">
        <Header/>
          <Switch>
            <Route path='/' exact>
              <Filter
                value={this.state.value}
                handleInputSearch={this.handleInputSearch}
              />
              <CharacterList
                characterList={this.state.characters}
                value={this.state.value}
              />
            </Route>
            <Route path='/character/:id' render={this.renderDetail}
            />
          </Switch>
      </div>
    );
  }
}

export default App;
