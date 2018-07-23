import React, { Component } from 'react';
import KeyboardCard from '../components/KeyboardCard';
import Spinner from '../components/Spinner';
import { Container, Card } from 'semantic-ui-react';
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
      return <KeyboardCard key={_id} {...cardProps} />;
    });
  }

  render() {
    if (!this.props.keyboards.length) {
      return <Spinner />;
    }

    return (
      <Container>
        <Card.Group itemsPerRow={4}>{this.renderCards()}</Card.Group>
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
