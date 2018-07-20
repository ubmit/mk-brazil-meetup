import React from 'react';
import { Menu } from 'semantic-ui-react';

const styles = {
  header: {
    marginBottom: 20
  }
};

const Header = () => {
  return (
    <Menu widths={1} style={styles.header}>
      <Menu.Item name="meetup">Mechanical Keyboards - Brazil Meetup</Menu.Item>
    </Menu>
  );
};

export default Header;
