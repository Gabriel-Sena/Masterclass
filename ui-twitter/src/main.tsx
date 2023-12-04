import React from 'react'
import ReactDOM from 'react-dom/client'
import { Tweet } from './components/Tweet'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div>
      <Tweet user="Rodrigo">
        Meu primeiro tweet
      </Tweet>

      <Tweet user="Gabriel" likes={10}>
        Olá, Mundo!
      </Tweet>
      
      <Tweet user="Carla">
        Testee
      </Tweet>

      <Tweet user="Sena">
        Conteúdo 4
      </Tweet>
    </div>
  </React.StrictMode>,
)
