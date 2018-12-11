import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { updateAnimalAction, fetchAnimalAction } from '../redux/actions';
import AnimalAdapter from '../apis/AnimalAdapter';
import * as actions from '../redux/actions';

// looks like you doing regular react
class AnimalPicture extends Component {
  getCat = (event) => {
    // this.props.dispatch({ type, payload }) ==> this.setState({ })
    // this.props.updateAnimal(url);

    // fetch('whatever')
    //   .then(res => res.json())
    //   .then(json => this.setState({ bnoom: json }))
  }

  getDog = (event) => {
    this.props.fetchAnimal();

    // async redux works! lecture done!
    // AnimalAdapter.getDog()
    //   .then(url => {
    //     this.props.updateAnimal(url);
    //   })
  }

  renderPicture = () => {
    if (!this.props.isLoading) {
      return <img src={this.props.animalSrc} alt="cute animal" />
    } else {
      return <img alt="Spinny GIF" src="https://cdn-images-1.medium.com/max/1600/1*9EBHIOzhE1XfMYoKz1JcsQ.gif" />
    }
  }

  render() {
    console.log(this.props, actions);
    return (
    <div className="animal-picture">
      <button onClick={this.getCat}>Fetch Cat</button>
      <button onClick={this.getDog}>Fetch Dog</button>
      {this.renderPicture()}
    </div>
    );
  }
}

// maps your state to your props
function mapStateToProps(state) {
  return {
    animalSrc: state.animal.animalSrc,
    isLoading: state.animal.isLoading
    // beef: "beefffy"
  }
}

// mapping the dispatch to your props
function mapDispatchToProps(dispatch) {
  return {
    // updateAnimal: (url) => dispatch(updateAnimalAction(url)),
    // fetchAnimal: () => {
    //   // oh, wait... thunk?
    //   AnimalAdapter.getDog()
    //     .then(url => {
    //       dispatch(updateAnimalAction(url));
    //     })
    // }
    // fetchAnimal: () => dispatch(fetchAnimalAction()),
    // beef: "super beefy"
  }
}

// connect => higher order function => higher order component
// is a higher order function that returns a higher order compoennt
// HOC => withRouter
export default connect(mapStateToProps, actions)(AnimalPicture);
