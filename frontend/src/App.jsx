import { useState } from 'react'
import './App.css'

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
      {zakladka === 'test' && <h1>Test osobowości</h1>}
      {zakladka === 'kalendarz' && <h1>Kalendarz</h1>}
      {zakladka === 'listy' && <h1>Listy od bliskich</h1>}
    </div>
  )
}

export default App