import React from 'react';
import { Menu, Search } from 'semantic-ui-react';

const Navigation = () => (
  <Menu>
    <Menu.Item
      name="cards"
    />
    <Menu.Item
      name="keyboards"
    />
    <Menu.Item
      name="misc"
    />

    <Menu.Menu position="right">

      <Search />
      <Menu.Item
        name="sign in"
      />
    </Menu.Menu>
  </Menu>
);

export default Navigation;
