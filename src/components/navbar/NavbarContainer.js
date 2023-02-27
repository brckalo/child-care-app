import {
  useLocation,
  useNavigate
} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  Container,
  Nav,
  Navbar
} from 'react-bootstrap';

import constants from '../../common/constants';

const NavbarContainer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { t } = useTranslation();

  const items = {
    left: [
      {
        id: 'NBL1',
        route: constants.routes.parents,
        display: t('Parents')
      },
      {
        id: 'NBL2',
        route: constants.routes.babysitters,
        display: t('Babysitters')
      },
      {
        id: 'NBL3',
        route: constants.routes.children,
        display: t('Children')
      }
    ],
    right: [
      {
        id: 'NBR1',
        route: constants.routes.settings,
        display: t('Settings')
      }   
    ]
  };

  const handleOnClick = route => {
    navigate(route);
  }

  const isActive = route => location.pathname === route;

  return (
    <Navbar
      bg='dark'
      collapseOnSelect
      expand='md'
      variant='dark'
    >
      <Container>
        <Navbar.Brand>
          {constants.appName}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='my-navbar' />
        {items && 
        <Navbar.Collapse id='my-navbar'>
          <Nav className='me-auto'>
            {items.left.map(item =>
              <Nav.Link
                key={item.id}
                active={isActive(item.route)}
                onClick={() => handleOnClick(item.route)}
              >
                {item.display}
              </Nav.Link>
            )}
          </Nav>
          <Nav>
            {items.right.map(item =>
              <Nav.Link
                key={item.id}
                active={isActive(item.route)}
                onClick={() => handleOnClick(item.route)}
              >
                {item.display}
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>}
      </Container>
    </Navbar>
  );
}

export default NavbarContainer;
