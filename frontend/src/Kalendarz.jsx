import { useState } from 'react'

const miesiace = [
  { nazwa: 'Lipiec 2024', krotki: 'Lip', tekst: 'Tu wpisz fragment z dzienniczka...', zdjecia: [] },
  { nazwa: 'Sierpień 2024', krotki: 'Sie', tekst: 'Tu wpisz fragment z dzienniczka...', zdjecia: [] },
  { nazwa: 'Wrzesień 2024', krotki: 'Wrz', tekst: 'Tu wpisz fragment z dzienniczka...', zdjecia: [] },
  { nazwa: 'Październik 2024', krotki: 'Paź', tekst: 'Tu wpisz fragment z dzienniczka...', zdjecia: [] },
  { nazwa: 'Listopad 2024', krotki: 'Lis', tekst: 'Tu wpisz fragment z dzienniczka...', zdjecia: [] },
  { nazwa: 'Grudzień 2024', krotki: 'Gru', tekst: 'Tu wpisz fragment z dzienniczka...', zdjecia: [] },
  { nazwa: 'Styczeń 2025', krotki: 'Sty', tekst: 'Tu wpisz fragment z dzienniczka...', zdjecia: [] },
  { nazwa: 'Luty 2025', krotki: 'Lut', tekst: 'Tu wpisz fragment z dzienniczka...', zdjecia: [] },
  { nazwa: 'Marzec 2025', krotki: 'Mar', tekst: 'Tu wpisz fragment z dzienniczka...', zdjecia: [] },
  { nazwa: 'Kwiecień 2025', krotki: 'Kwi', tekst: 'Tu wpisz fragment z dzienniczka...', zdjecia: [] },
  { nazwa: 'Maj 2025', krotki: 'Maj', tekst: 'Tu wpisz fragment z dzienniczka...', zdjecia: [] },
  { nazwa: 'Czerwiec 2025', krotki: 'Cze', tekst: 'Tu wpisz fragment z dzienniczka...', zdjecia: [] },
]

function Kalendarz() {
  const [wybrany, setWybrany] = useState(null)

  if (wybrany !== null) {
    const miesiac = miesiace[wybrany]
    return (
      <div>
        <button onClick={() => setWybrany(null)}>← Wróć</button>
        <h1>{miesiac.nazwa}</h1>
        <p>{miesiac.tekst}</p>
        <div>
          {miesiac.zdjecia.map((src, i) => (
            <img key={i} src={src} alt={`zdjecie ${i + 1}`} width="300" />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div>
      <h1>📅 Nasz rok</h1>
      <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
        {miesiace.map((m, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
            <button onClick={() => setWybrany(i)}>
              {m.krotki}
            </button>
            {i < miesiace.length - 1 && <span>——</span>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Kalendarz