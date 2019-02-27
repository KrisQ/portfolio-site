import React from 'react'
import { Link } from 'react-router-dom'

const Portfolio = () => (
  <div>
    <h1>Portfolio 🖌</h1>
    <Link to="/portfolio/1">Item #1</Link>
    <Link to="/portfolio/2">Item #2</Link>
    <Link to="/portfolio/3">Item #3</Link>
  </div>
)

export default Portfolio
