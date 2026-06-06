import { useState } from 'react'
import './App.css'
import Listy from './Listy'
import Kalendarz from './Kalendarz'
import Test from './Test'

function App() {
  const [zakladka, setZakladka] = useState('home')

  return (
    <div>
      <nav>
        <button onClick={() => setZakladka('home')}>🏠 Start</button>
        <button onClick={() => setZakladka('test')}>🧠 Test osobowości</button>
        <button onClick={() => setZakladka('kalendarz')}>📅 Kalendarz</button>
        <button onClick={() => setZakladka('listy')}>💌 Listy</button>
      </nav>

      {zakladka === 'home' && <h1>Witaj! 🎉</h1>}
      {zakladka === 'test' && <Test />}
      {zakladka === 'kalendarz' && <Kalendarz />}
      {zakladka === 'listy' && <Listy />}
    </div>
  )
}

export default App