import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const PageLayoutContainer = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
}

export default PageLayoutContainer;
