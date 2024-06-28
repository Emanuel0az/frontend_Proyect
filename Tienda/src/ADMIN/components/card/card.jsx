import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

import './card.css'

function card() {
  
  let removido = false

  function remove() {
    localStorage.removeItem('Admin_ID')
    removido = true
    if (removido === true) {
      
    }
  }
  return (
    <Card style={{ width: '14rem' }}>
      <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.kuhj7yX2cmUrVPifutORYAHaHa?rs=1&pid=ImgDetMain" className='img_card'/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example
        </Card.Text>
        <div className='btn_cards'>
        <Button variant="primary" className='btns_card'>Buy</Button>
            
        </div>
      </Card.Body>
    </Card>
  );
}

export default card;