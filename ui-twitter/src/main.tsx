import React from 'react'
import ReactDOM from 'react-dom/client'
import { Tweet } from './components/Tweet'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div>
<<<<<<< Updated upstream
      <Tweet user="Rodrigo" content="Meu primeiro tweet" />
      <Tweet user="Gabriel" content="Olá, Mundo!" />
      <Tweet user="Carla" content="Testee" />
=======
      <Tweet user="Rodrigo">
        Meu primeiro tweet
      </Tweet>

      <Tweet user="Gabriel">
        Olá, Mundo!
      </Tweet>
      
      <Tweet user="Carla">
        Testee
      </Tweet>
>>>>>>> Stashed changes
    </div>
  </React.StrictMode>,
)
