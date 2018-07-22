import React, { Component } from 'react';
import KeyboardCard from '../components/KeyboardCard';
import { Grid, Container } from 'semantic-ui-react';
import { fetchKeyboards } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class KeyboardCardList extends Component {
  componentDidMount() {
    this.props.fetchKeyboards();
  }

  renderCards() {
    return this.props.keyboards.map(keeb => {
      const { image, name, description, owner } = keeb;
      const cardProps = {
        image,
        name,
        description,
        owner
      };
      return (
        <Grid.Column>
          <KeyboardCard {...cardProps} />
        </Grid.Column>
      );
    });
  }

  render() {
    return (
      <Container>
        <Grid columns={4}>{this.renderCards()}</Grid>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    keyboards: state.keyboards
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchKeyboards: fetchKeyboards }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KeyboardCardList);
