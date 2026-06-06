import { useState } from 'react'
import './App.css'
import Listy from './Listy'
import Kalendarz from './Kalendarz'
import Test from './Test'
import Glowna from './Glowna'
import Zadanie from './Zadanie'

function App() {
  const [zakladka, setZakladka] = useState('home')

  return (
    <div>
      <nav>
        <button onClick={() => setZakladka('home')}>🏠 Start</button>
        <button onClick={() => setZakladka('test')}>🧠 Test osobowości</button>
        <button onClick={() => setZakladka('kalendarz')}>📅 Kalendarz</button>
        <button onClick={() => setZakladka('listy')}>💌 Listy</button>
        <button onClick={() => setZakladka('zadanie')}>Zadanie</button>
      </nav>

      {zakladka === 'home' && <Glowna />}
      {zakladka === 'test' && <Test />}
      {zakladka === 'kalendarz' && <Kalendarz />}
      {zakladka === 'listy' && <Listy />}
      {zakladka === 'zadanie' && <Zadanie />}
    </div>
  )
}

export default App