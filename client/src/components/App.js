import React, { Component } from 'react';
import Header from './Header';
import KeyboardCardList from '../containers/KeyboardCardList';
import { Container } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container>
          <KeyboardCardList />
        </Container>
      </div>
    );
  }
}

export default App;
