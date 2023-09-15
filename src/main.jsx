import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Background from './jsx/Background'
import LeftContainer from './jsx/LeftContainer'
import RightContainer from './jsx/RightContainer'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Projects from './jsx/Projects'

library.add(fas, faTwitter, faFontAwesome, faArrowRight)



ReactDOM.createRoot(document.getElementById('root')).render(
<Router>
  <React.StrictMode>
    <Background>
      <Routes>
        <Route path="/" element={[<LeftContainer/>, <RightContainer/>]} />
        <Route path='/projects' element={<Projects/>}/>
      </Routes>
    </Background>
  </React.StrictMode>
</Router>,
)
