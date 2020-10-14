import React, { Component } from 'react';
import styled from 'styled-components';
import styles from './App.styles';
import Nav from './components/Nav';
import RecordsList from './components/RecordsList';
import PropTypes from 'prop-types';



class App extends Component {

  render() {
    return (
      <div className={this.props.className}>
        <Nav/>
        <RecordsList />
      </div>
    )
  }
}

App.propTypes ={
  className: PropTypes.string.isRequired,
}



export default styled(App)([styles]);
