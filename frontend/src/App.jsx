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
    <div className="min-h-screen bg-taupe-500 text-stone-800 font-serif">
<nav className="flex justify-center gap-4 p-4 bg-amber-800 text-amber-50 font-serif border-b-4 border-amber-900">
  <button 
    onClick={() => setZakladka('home')} 
    className={`px-3 py-1 border border-amber-50 rounded transition-colors hover:bg-amber-700 ${zakladka === 'home' ? 'bg-amber-600 font-bold' : ''}`}
  >🏠 Start</button>
  <button 
    onClick={() => setZakladka('test')} 
    className={`px-3 py-1 border border-amber-50 rounded transition-colors hover:bg-amber-700 ${zakladka === 'test' ? 'bg-amber-600 font-bold' : ''}`}
  >🧠 Test osobowości</button>
  <button 
    onClick={() => setZakladka('kalendarz')} 
    className={`px-3 py-1 border border-amber-50 rounded transition-colors hover:bg-amber-700 ${zakladka === 'kalendarz' ? 'bg-amber-600 font-bold' : ''}`}
  >📅 Kalendarz</button>
  <button 
    onClick={() => setZakladka('listy')} 
    className={`px-3 py-1 border border-amber-50 rounded transition-colors hover:bg-amber-700 ${zakladka === 'listy' ? 'bg-amber-600 font-bold' : ''}`}
  >💌 Listy</button>
  <button 
    onClick={() => setZakladka('zadanie')} 
    className={`px-3 py-1 border border-amber-50 rounded transition-colors hover:bg-amber-700 ${zakladka === 'zadanie' ? 'bg-amber-600 font-bold' : ''}`}
  >Zadanie</button>
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