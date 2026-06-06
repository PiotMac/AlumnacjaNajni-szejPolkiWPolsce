import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function Listy() {
  const [wybrana, setWybrana] = useState(null)

  const listy = [
    {
      imie: 'Simon',
      zdjecie: 'https://placecats.com/200/200',
      wiadomosc: 'Jesteś najlepszą przyjaciółką na świecie! 🥰'
    },
    {
      imie: 'Pakos',
      zdjecie: 'https://placecats.com/201/200',
      wiadomosc: 'Jestem z Ciebie taka dumna! ❤️'
    },
    {
      imie: 'Madzia',
      zdjecie: 'https://placecats.com/201/200',
      wiadomosc: 'Jestem z Ciebie taka dumna! ❤️'
    },
    {
      imie: 'Piotrek',
      zdjecie: 'https://placecats.com/201/200',
      wiadomosc: 'Jestem z Ciebie taka dumna! ❤️'
    },
    {
      imie: 'Wiksa',
      zdjecie: 'https://placecats.com/201/200',
      wiadomosc: 'Jestem z Ciebie taka dumna! ❤️'
    },
  ]

return (
  <AnimatePresence mode="wait">
    {wybrana ? (
      <motion.div
        key="osoba"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.3 }}
        className="max-w-2xl mx-auto p-8"
      >
        <button
          onClick={() => setWybrana(null)}
          className="mb-6 px-4 py-2 bg-amber-800 text-amber-50 rounded-full shadow-md hover:bg-amber-900 transition-colors"
        >← Wróć</button>
        <h2 className="text-center mb-4">{wybrana.imie}</h2>
        <img src={wybrana.zdjecie} alt={wybrana.imie} className="mx-auto rounded-lg shadow-lg w-64 mb-6" />
        <p className="leading-relaxed text-lg text-center">{wybrana.wiadomosc}</p>
      </motion.div>
    ) : (
      <motion.div
        key="lista"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 50 }}
        transition={{ duration: 0.3 }}
        className="max-w-md mx-auto p-8"
      >
        <h1 className="text-center mb-8">💌 Listy od bliskich</h1>
        <div className="flex flex-col gap-4">
          {listy.map((osoba) => (
            <button
              key={osoba.imie}
              onClick={() => setWybrana(osoba)}
              className="w-48 mx-auto px-6 py-3 bg-amber-800 text-amber-50 rounded-full shadow-md hover:bg-amber-900 hover:shadow-lg transition-all text-center"
            >
              {osoba.imie}
            </button>
          ))}
        </div>
      </motion.div>
    )}
  </AnimatePresence>
)
}

export default Listy