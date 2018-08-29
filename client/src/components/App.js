import React from 'react';
import Header from './Header';
import Filter from '../containers/Filter';
import KeyboardCardList from '../containers/KeyboardCardList';

const App = () => {
  return (
    <div>
      <Header />
      <Filter />
      <KeyboardCardList />
    </div>
  );
};

export default App;
