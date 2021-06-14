import React from 'react'
import { Link } from 'react-router-dom'

export const Card = () => (
  <div className="card pb-2">
    <img src={''} alt={''} className="card-img-top" />
    <div className="card-body">
      <h5 className="car-title">React js</h5>
      <Link to={'/profile/' + 'nikname'} className="btn btn-primary">
        Открыть
      </Link>
    </div>
  </div>
)
