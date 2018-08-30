import React, { Component } from 'react';
import KeyboardCard from '../components/KeyboardCard';
import Spinner from '../components/Spinner';
import { Container, Card } from 'semantic-ui-react';
import { fetchKeyboards } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import styled from 'styled-components';

const Empty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

class KeyboardCardList extends Component {
  componentDidMount() {
    this.props.fetchKeyboards(null);
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

      if (image) {
        return <KeyboardCard key={_id} {...cardProps} />;
      }
    });
  }

  render() {
    if (!this.props.keyboards.length) {
      return <Spinner />;
    }

    const isEmpty = this.props.keyboards.map(({ image }) => {
      return image === '';
    });

    const checkImage = emptyBoolean => {
      return emptyBoolean;
    };

    if (isEmpty.every(checkImage)) {
      return <Empty>There aren't keyboards to be displayed</Empty>;
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
