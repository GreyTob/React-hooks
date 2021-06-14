import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel'

import img1 from '../assets/IMG_3874.jpg'
import img2 from '../assets/IMG_40331.jpg'
import img3 from '../assets/mc-helios-44-m-7-58-mm-2-sample-14.jpg'

export const Home = () => (
  <React.Fragment>
    <Jumbotron fluid>
      <h1>Привет Мир</h1>
      <p>Это компонент Jumbotron продклченный с помощью react-bootstrap</p>
      <p>
        <Button variant="primary">Learn more</Button>
      </p>
    </Jumbotron>

    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={img1} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img2} alt="Second slide" />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img3} alt="Third slide" />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </React.Fragment>
)
