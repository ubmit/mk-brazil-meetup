import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import styled from 'styled-components';
import { fetchKeyboards, fetchSizes } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const Wrapper = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;
class Filter extends Component {
  constructor(props) {
    super(props);
    this.filterBySize = this.filterBySize.bind(this);
    this.clearFilter = this.clearFilter.bind(this);
  }

  componentDidMount() {
    this.props.fetchSizes();
  }

  filterBySize(event) {
    this.props.fetchKeyboards(event.target.id);
  }

  clearFilter(event) {
    this.props.fetchKeyboards(null);
  }

  renderButtons() {
    return this.props.sizes.map(size => {
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

const mapStateToProps = state => {
  return {
    sizes: state.sizes
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { fetchKeyboards: fetchKeyboards, fetchSizes: fetchSizes },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
