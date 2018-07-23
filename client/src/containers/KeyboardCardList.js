import React, { Component } from 'react';
import KeyboardCard from '../components/KeyboardCard';
import Spinner from '../components/Spinner';
import { Grid, Container } from 'semantic-ui-react';
import { fetchKeyboards } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

class KeyboardCardList extends Component {
  componentDidMount() {
    this.props.fetchKeyboards();
  }

  renderCards() {
    const keyboards = this.props.keyboards;
    return _.map(keyboards, keeb => {
      const { _id, image, name, description, owner } = keeb;
      const cardProps = {
        image,
        name,
        description,
        owner
      };
      return (
        <Grid.Column key={_id}>
          <KeyboardCard {...cardProps} />
        </Grid.Column>
      );
    });
  }

  render() {
    if (!this.props.keyboards.length) {
      return <Spinner />;
    }

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
