import { useState } from 'react'
import './App.css'
import Listy from './Listy'
import Kalendarz from './Kalendarz'
import Test from './Test'
import Glowna from './Glowna'
import Zadanie from './Zadanie'
import { House, Brain, CalendarDays, Mail } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

function App() {
  const [zakladka, setZakladka] = useState('home')

  return (
    <div className="min-h-screen bg-yellow-700 text-stone-800 font-serif">
<nav className="flex justify-center gap-4 p-4 bg-amber-800 text-amber-50 font-serif border-b-4 border-amber-900">
  <button onClick={() => setZakladka('home')} className={`flex items-center gap-1 px-3 py-1 border border-amber-50 rounded-lg shadow-lg transition-colors hover:bg-amber-700 ${zakladka === 'home' ? 'bg-amber-600 font-bold' : ''}`}>
    <House size={16} /> Start
  </button>
  <button onClick={() => setZakladka('test')} className={`flex items-center gap-1 px-3 py-1 border border-amber-50 rounded-lg shadow-lg transition-colors hover:bg-amber-700 ${zakladka === 'test' ? 'bg-amber-600 font-bold' : ''}`}>
    <Brain size={16} /> Test osobowości
  </button>
  <button onClick={() => setZakladka('kalendarz')} className={`flex items-center gap-1 px-3 py-1 border border-amber-50 rounded-lg shadow-lg transition-colors hover:bg-amber-700 ${zakladka === 'kalendarz' ? 'bg-amber-600 font-bold' : ''}`}>
    <CalendarDays size={16} /> Kalendarz
  </button>
  <button onClick={() => setZakladka('listy')} className={`flex items-center gap-1 px-3 py-1 border border-amber-50 rounded-lg shadow-lg transition-colors hover:bg-amber-700 ${zakladka === 'listy' ? 'bg-amber-600 font-bold' : ''}`}>
    <Mail size={16} /> Listy
  </button>
  <button onClick={() => setZakladka('zadanie')} className={`flex items-center gap-1 px-3 py-1 border border-amber-50 rounded-lg shadow-lg transition-colors hover:bg-amber-700 ${zakladka === 'zadanie' ? 'bg-amber-600 font-bold' : ''}`}>
    Zadanie
  </button>
</nav>

      <AnimatePresence mode="wait">
  <motion.div
    key={zakladka}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
  >
    {zakladka === 'home' && <Glowna />}
    {zakladka === 'test' && <Test />}
    {zakladka === 'kalendarz' && <Kalendarz />}
    {zakladka === 'listy' && <Listy />}
    {zakladka === 'zadanie' && <Zadanie />}
  </motion.div>
</AnimatePresence>
    </div>
  )
}

export default App