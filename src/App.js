import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import CatList from './CatList';
import { connect } from 'react-redux';
import * as actions from './actions/catActions';
import { bindActionCreators } from 'redux';


export class App extends Component {

  componentDidMount() {
    if (this.props.catPics.length === 0) {
      console.log('in componentDidMount');
      this.props.actions.fetchCats()
    }
  }



  render() {
    console.log('App', this.props);
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CatBook</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <CatList catPics={this.props.catPics} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { catPics: state.cats.pictures }
}

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators(actions, dispatch)}
}

export const WrapperApp = connect(mapStateToProps, mapDispatchToProps)(App)
