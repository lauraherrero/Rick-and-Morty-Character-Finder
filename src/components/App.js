import React from 'react';
import '../stylesheets/App.scss';
import { getDataFromApi } from '../services/api';
import CharacterList from './CharacterList';
import Filters from './Filters';
import { Route, Switch } from 'react-router-dom';
import CharacterDetail from './CharacterDetail';
import Header from './Header';
// import RickMorty from '../images/Rick_and_Morty.png';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      value: '',
      filters: {
        status: ''
      }
    }
    this.handleInputSearch=this.handleInputSearch.bind(this);
    this.renderDetail=this.renderDetail.bind(this);
    this.handleSelect=this.handleSelect.bind(this);
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
    const findId = this.state.characters.find(item => 
    {
      return (item.id === parseInt(id))
    })
    console.log(findId)
    return <CharacterDetail character={findId}/>
  }

  handleSelect (option) {
    this.setState(prevState => {
      return {
        filters: {
          ...prevState.filters,
          status: option
        }
      }
    })
  }

  render() {
    console.log(this.state.characters)
    return (
      <div className="App">
        <Header/>
          <Switch>
            <Route path='/' exact>
              <Filters
                value={this.state.value}
                handleInputSearch={this.handleInputSearch}
                handleSelect={this.handleSelect}
              />
              <CharacterList
                statusOpt={this.state.filters.status}
                CharacterList={this.state.characters}
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
