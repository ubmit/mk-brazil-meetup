import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';

const marginHeader = {
  marginBottom: 20
};

const Header = () => {
  return (
    <Menu widths={1} style={marginHeader}>
      <Menu.Item name="meetup">
        <Icon name="keyboard" /> Mechanical Keyboards Brazil - #1 Meetup
      </Menu.Item>
    </Menu>
  );
};

export default Header;
