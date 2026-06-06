import { useState } from 'react'

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

  if (wybrana) {
    return (
      <div>
        <button onClick={() => setWybrana(null)}>← Wróć</button>
        <img src={wybrana.zdjecie} alt={wybrana.imie} />
        <h2>{wybrana.imie}</h2>
        <p>{wybrana.wiadomosc}</p>
      </div>
    )
  }

 return (
  <div>
    <h1>💌 Listy od bliskich</h1>
    <div className="flex flex-col gap-3">
      {listy.map((osoba) => (
        <button key={osoba.imie} onClick={() => setWybrana(osoba)}>
          {osoba.imie}
        </button>
      ))}
    </div>
  </div>
)
}

export default Listy