import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchCats from './actions/catActions';
import CatList from './CatList'

class App extends Component {

  componentDidMount() {
    if (!this.props.catPics.length) {
      this.props.fetchCats()
    }
  }

  render() {
    // debugger
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CatBook</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <CatList catPics={this.props.catPics}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    catPics: state.cats.pictures,
  }
}

const mapDispatchToProps = dispatch => {
  console.log('in mapDispacthToProps', dispatch)
  return bindActionCreators({
    fetchCats
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
