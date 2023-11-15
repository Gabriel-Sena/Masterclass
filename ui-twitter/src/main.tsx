import React from 'react'
import ReactDOM from 'react-dom/client'
import { Tweet } from './components/Tweet'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div>
      <Tweet user="Rodrigo" content="Meu primeiro tweet" />
      <Tweet user="Gabriel" content="Olá, Mundo!" />
      <Tweet user="Carla" content="Testee" />
    </div>
  </React.StrictMode>,
)
