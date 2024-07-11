import Carousel from 'react-bootstrap/Carousel';
import './carousel.css'

function DarkVariantExample() {
  return (
    <div>
       <h3 className='title-carousel'>Productos Especiales</h3>
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://dzqguq0tiw9xx.cloudfront.net/wcsstore/AuroraESite/Attachment/2019/blog/banner1-gorra.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5 className='title-carrusel'>Gorras tipo planas</h5>
          <p>Ideales para un estilo urbano y moderno con visera plana y diseño estructurado.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://dzqguq0tiw9xx.cloudfront.net/wcsstore/AuroraESite/Attachment/2019/blog/banner1-gorra.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5 className='title-carrusel'>Gorras tipo snapback</h5>
          <p>Combina lo retro y moderno con ajuste ajustable y visera plana, perfectas para cualquier ocasión.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://dzqguq0tiw9xx.cloudfront.net/wcsstore/AuroraESite/Attachment/2019/blog/banner1-gorra.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5 className='title-carrusel'>Gorras de béisbol</h5>
          <p>
          Clásicas y deportivas, ofrecen confort y diseño de seis paneles, ideales para actividades al aire libre y eventos deportivos.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    </div>
  );
}

export default DarkVariantExample;