import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function card() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.kuhj7yX2cmUrVPifutORYAHaHa?rs=1&pid=ImgDetMain" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default card;