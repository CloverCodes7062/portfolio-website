import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Background from './jsx/Background'
import LeftContainer from './jsx/LeftContainer'
import RightContainer from './jsx/RightContainer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Background>
      <LeftContainer />
      <RightContainer />
    </Background>
  </React.StrictMode>,
)
