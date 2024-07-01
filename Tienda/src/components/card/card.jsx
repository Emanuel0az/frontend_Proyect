import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './card.css'

function card() {

  function edit_Put (){

  }
  return (
    <Card style={{ width: '14rem' }} className='card'>
      <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.kuhj7yX2cmUrVPifutORYAHaHa?rs=1&pid=ImgDetMain" className='img_card'/>
      <Card.Body>
        <Card.Title>Titulo de la Gorra</Card.Title>
        <Card.Text>
          Precio de la Gorra
        </Card.Text>
        <div className='btn_cards'>
        <Button variant="primary" className='btns_card'>Buy</Button>
        <Button variant="primary" className='btns_card' onClick={edit_Put}>Edit</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default card;