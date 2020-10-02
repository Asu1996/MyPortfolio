import React from 'react'
import { Route } from 'react-router-dom'

import Home from './components/Home/Home'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'


const BaseRouter = () => (
    <div>
        <Route exact path='/' component={Home} />
        
            <Route exact path='/about' component={About} />
        <Route exact path='/skills' component={Skills} />
      
            <Route exact path='/projects' component={Projects} />
      
        <Route exact path='/contact' component={Contact} />
    </div>
)

export default BaseRouter;