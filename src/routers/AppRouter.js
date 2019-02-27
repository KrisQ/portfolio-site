import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from '../components/Header'
import Home from '../components/Home'
import Portfolio from '../components/Portfolio'
import PortfolioItem from '../components/PortfolioItem'
import Contact from '../components/Contact'
import NotFoundPage from '../components/notFoundPage'
import { General } from '../components/styles/General'

const AppRouter = () => (
  <BrowserRouter>
    <General>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/portfolio" component={Portfolio} exact={true}/>
        <Route path="/portfolio/:id" component={PortfolioItem} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFoundPage} />
      </Switch>
    </General>
  </BrowserRouter>
)

export default AppRouter
