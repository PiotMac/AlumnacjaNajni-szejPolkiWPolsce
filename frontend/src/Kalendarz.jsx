import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const miesiace = [
  { nazwa: 'Czerwiec 2024', tekst: 'Pomyślelibyście, że zaczęło się od Walnego?...', zdjecia: ['/czerwiec24-1.jpg'] },
  { nazwa: 'Lipiec 2024', tekst: 'Polish był dla każdego niesamowicie intensywny...', zdjecia: [] },
  { nazwa: 'Sierpień 2024', tekst: 'Poza tym środowe i zarządowe zdalne wspominam całkiem miło...', zdjecia: [] },
  { nazwa: 'Wrzesień 2024', tekst: 'Tu wpisz fragment z dzienniczka...', zdjecia: [] },
  { nazwa: 'Październik 2024', tekst: 'Tu wpisz fragment z dzienniczka...', zdjecia: [] },
  { nazwa: 'Listopad 2024', tekst: 'Tu wpisz fragment z dzienniczka...', zdjecia: [] },
  { nazwa: 'Grudzień 2024', tekst: 'Tu wpisz fragment z dzienniczka...', zdjecia: [] },
  { nazwa: 'Styczeń 2025', tekst: 'Tu wpisz fragment z dzienniczka...', zdjecia: [] },
  { nazwa: 'Luty 2025', tekst: 'Tu wpisz fragment z dzienniczka...', zdjecia: [] },
  { nazwa: 'Marzec 2025', tekst: 'Tu wpisz fragment z dzienniczka...', zdjecia: [] },
  { nazwa: 'Kwiecień 2025', tekst: 'Tu wpisz fragment z dzienniczka...', zdjecia: [] },
  { nazwa: 'Maj 2025', tekst: 'Tu wpisz fragment z dzienniczka...', zdjecia: [] },
  { nazwa: 'Czerwiec 2025', tekst: 'Tu wpisz fragment z dzienniczka...', zdjecia: [] },
]

const SZEROKOSC = 800
const WYSOKOSC = 500
const PRZYCISKI = [
  { x: 80,  y: 80  },
  { x: 250, y: 80  },
  { x: 420, y: 80  },
  { x: 590, y: 80  },
  { x: 720, y: 180 },
  { x: 590, y: 260 },
  { x: 420, y: 260 },
  { x: 250, y: 260 },
  { x: 80,  y: 260 },
  { x: 80,  y: 360 },
  { x: 250, y: 380 },
  { x: 420, y: 360 },
  { x: 590, y: 380 },
]

function budujSznurek() {
  return PRZYCISKI.map((p, i) => {
    if (i === 0) return `M ${p.x} ${p.y}`
    const prev = PRZYCISKI[i - 1]
    const mx = (prev.x + p.x) / 2
    const my = (prev.y + p.y) / 2
    return `Q ${prev.x + (p.x - prev.x) * 0.2} ${prev.y + (p.y - prev.y) * 0.8}, ${p.x} ${p.y}`
  }).join(' ')
}

function Kalendarz() {
  const [wybrany, setWybrany] = useState(null)

 return (
  <AnimatePresence mode="wait">
    {wybrany !== null ? (
      <motion.div
        key="miesiac"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.3 }}
        className="max-w-3xl mx-auto p-8"
      >
        <button
          onClick={() => setWybrany(null)}
          className="mb-6 px-4 py-2 bg-amber-800 text-amber-50 rounded-full shadow-md hover:bg-amber-900 transition-colors"
        >← Wróć</button>
        <h1 className="text-center mb-6">{miesiace[wybrany].nazwa}</h1>
        <p className="leading-relaxed text-lg mb-6">{miesiace[wybrany].tekst}</p>
        <div className="flex flex-wrap gap-4">
          {miesiace[wybrany].zdjecia.map((src, i) => (
            <img key={i} src={src} alt={`zdjecie ${i + 1}`} className="rounded-lg shadow-lg w-72" />
          ))}
        </div>
      </motion.div>
    ) : (
      <motion.div
        key="kalendarz"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 50 }}
        transition={{ duration: 0.3 }}
        className="max-w-3xl mx-auto p-8"
      >
        <h1 className="text-center mb-8">Nasz rok</h1>
        <svg
          viewBox={`0 0 ${SZEROKOSC} ${WYSOKOSC}`}
          width="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d={budujSznurek()}
            stroke="#78350f"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {PRZYCISKI.map((p, i) => (
            <g key={i} onClick={() => setWybrany(i)} style={{ cursor: 'pointer' }}>
              <ellipse cx={p.x} cy={p.y} rx="65" ry="22" fill="#92400e" />
              <text
                x={p.x}
                y={p.y + 5}
                textAnchor="middle"
                fill="#fef3c7"
                fontSize="12"
                fontFamily="Libre Baskerville, serif"
              >
                {miesiace[i].nazwa.replace(' 2024', ' \'24').replace(' 2025', ' \'25')}
              </text>
            </g>
          ))}
        </svg>
      </motion.div>
    )}
  </AnimatePresence>
)
}

export default Kalendarz