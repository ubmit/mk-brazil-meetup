import React, { Component } from 'react';
import Header from './Header';
import KeyboardCard from './KeyboardCard';
import { Container, Grid } from 'semantic-ui-react';

class App extends Component {
  renderCards() {
    // return all the existing keyboards
  }

  render() {
    return (
      <div>
        <Header />
        <Container>
          <KeyboardCard />
          {/* <Grid columns={4}>
            <Grid.Column>
              <KeyboardCard />
            </Grid.Column>
            <Grid.Column>
              <KeyboardCard />
            </Grid.Column>
            <Grid.Column>
              <KeyboardCard />
            </Grid.Column>
            <Grid.Column>
              <KeyboardCard />
            </Grid.Column>
          </Grid> */}
        </Container>
      </div>
    );
  }
}

export default App;
