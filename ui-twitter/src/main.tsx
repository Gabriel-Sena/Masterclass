import React from 'react'
import ReactDOM from 'react-dom/client'
import { Tweet } from './components/Tweet'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div>
      <Tweet user="Rodrigo">
        Meu primeiro tweet
      </Tweet>

      <Tweet user="Gabriel">
        Olá, Mundo!
      </Tweet>
      
      <Tweet user="Carla">
        Testee
      </Tweet>
    </div>
  </React.StrictMode>,
)
