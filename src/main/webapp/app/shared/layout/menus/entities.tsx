import React from 'react';
import MenuItem from 'app/shared/layout/menus/menu-item';
import { DropdownItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Translate, translate } from 'react-jhipster';
import { NavLink as Link } from 'react-router-dom';
import { NavDropdown } from './menu-components';

export const EntitiesMenu = props => (
  <NavDropdown
    icon="th-list"
    name={translate('global.menu.entities.main')}
    id="entity-menu"
    style={{ maxHeight: '80vh', overflow: 'auto' }}
  >
    <MenuItem icon="asterisk" to="/process-log">
      <Translate contentKey="global.menu.entities.processLog" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/content">
      <Translate contentKey="global.menu.entities.content" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/file-content">
      <Translate contentKey="global.menu.entities.fileContent" />
    </MenuItem>
    {/* jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here */}
  </NavDropdown>
);
