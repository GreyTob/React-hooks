import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

import img1 from '../assets/IMG_3874.jpg'
import img2 from '../assets/IMG_40331.jpg'
import img3 from '../assets/mc-helios-44-m-7-58-mm-2-sample-14.jpg'

export const Home = () => (
  <Jumbotron fluid>
    <h1>Привет Мир</h1>
    <p>Это компонент Jumbotron продклченный с помощью react-bootstrap</p>
    <p>
      <Button variant="primary">Learn more</Button>
    </p>
  </Jumbotron>
)
