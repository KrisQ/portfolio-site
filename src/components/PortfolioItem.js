import React from 'react'

const PortfolioItem = props => (
  <div>
    <h1>Portfolio Item #{props.match.params.id} 🖼</h1>
  </div>
)

export default PortfolioItem