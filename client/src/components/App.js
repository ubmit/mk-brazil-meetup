import React, { Component } from 'react';
import Header from './Header';
import KeyboardCard from './KeyboardCard';
import { Container, Grid } from 'semantic-ui-react';

class App extends Component {
  renderCards() {
    const arr = [];
    for (let i = 0; i < 8; i++) {
      arr.push(
        <Grid.Column key={i}>
          <KeyboardCard />
        </Grid.Column>
      );
    }
    return arr;
  }

  render() {
    return (
      <div>
        <Header />
        <Container>
          <Grid columns={4}>{this.renderCards()}</Grid>
        </Container>
      </div>
    );
  }
}

export default App;
