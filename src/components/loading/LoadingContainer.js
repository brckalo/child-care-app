import {
  Card,
  Placeholder
} from 'react-bootstrap';

const LoadingContainer = () => {
  return (
    <Placeholder
      as={Card.Title}
      animation='glow'
    >
      {[...Array(10).keys()].map(i =>
        <Placeholder
          key={i}
          xs={12} 
        />
      )}
    </Placeholder>
  );
}

export default LoadingContainer;
