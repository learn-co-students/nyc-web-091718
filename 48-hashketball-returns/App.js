import React, { Component } from 'react';
import './App.css';
import gamesData from './gamesData'
import TeamList from './components/TeamList'
import Cookie from './components/PlayerDetails'
import NavHeader from './components/Header'
import 'semantic-ui-css/semantic.min.css';
import {connect} from 'react-redux'

console.log('connect function', connect({hello: 'world'}))

class App extends Component {

  render() {
    console.log(this.props)
    return (
      <div className="App">
        <NavHeader />
        <TeamList />
        {!this.props.selectedPlayer ? <div> Click Player for Details </div> :
          <Cookie/>}
      </div>
    );
  }
}
function mapStateToProps(state){
  return {
    selectedPlayer: state.selectedPlayer
  }
}

export default connect(mapStateToProps)(App);
