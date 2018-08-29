import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import styled from 'styled-components';
import { fetchKeyboards } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const Wrapper = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const sizes = [40, 60, 65];

class Filter extends Component {
  constructor(props) {
    super(props);
    this.filterBySize = this.filterBySize.bind(this);
    this.clearFilter = this.clearFilter.bind(this);
  }

  filterBySize(event) {
    this.props.fetchKeyboards(event.target.id);
  }

  clearFilter(event) {
    this.props.fetchKeyboards(null);
  }

  renderButtons() {
    return sizes.map(size => {
      return (
        <Button key={size} id={size} onClick={this.filterBySize}>
          {size}%
        </Button>
      );
    });
  }

  render() {
    return (
      <Wrapper>
        <Button.Group>
          {this.renderButtons()}
          <Button negative onClick={this.clearFilter}>
            Clear
          </Button>
        </Button.Group>
      </Wrapper>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchKeyboards: fetchKeyboards }, dispatch);
};

export default connect(
  null,
  mapDispatchToProps
)(Filter);
