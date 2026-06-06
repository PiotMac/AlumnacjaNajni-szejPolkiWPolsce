import { useState } from 'react'

const pytania = [
  {
    pytanie: 'Jak spędzasz wolny czas?',
    odpowiedzi: [
      { tekst: 'Czytam książki', typ: 'A' },
      { tekst: 'Wychodzę z przyjaciółmi', typ: 'B' },
      { tekst: 'Oglądam seriale', typ: 'C' },
    ]
  },
  {
    pytanie: 'Jakie jest Twoje ulubione miejsce?',
    odpowiedzi: [
      { tekst: 'Las', typ: 'A' },
      { tekst: 'Kawiarnia', typ: 'B' },
      { tekst: 'Dom', typ: 'C' },
    ]
  },
]

const wyniki = {
  A: { tytul: 'Marzycielka 🌿', opis: 'Jesteś spokojna i refleksyjna...' },
  B: { tytul: 'Dusza towarzystwa 🌟', opis: 'Uwielbiasz ludzi i energię...' },
  C: { tytul: 'Przytulanka 🧸', opis: 'Cenisz komfort i spokój...' },
}

function Test() {
  const [krok, setKrok] = useState(0)
  const [punkty, setPunkty] = useState({ A: 0, B: 0, C: 0 })
  const [wynik, setWynik] = useState(null)

  const odpowiedz = (typ) => {
    const nowePunkty = { ...punkty, [typ]: punkty[typ] + 1 }
    setPunkty(nowePunkty)

    if (krok + 1 >= pytania.length) {
      const najlepszy = Object.keys(nowePunkty).reduce((a, b) =>
        nowePunkty[a] > nowePunkty[b] ? a : b
      )
      setWynik(najlepszy)
    } else {
      setKrok(krok + 1)
    }
  }

  const restart = () => {
    setKrok(0)
    setPunkty({ A: 0, B: 0, C: 0 })
    setWynik(null)
  }

  if (wynik) {
    return (
      <div>
        <h1>Twój wynik:</h1>
        <h2>{wyniki[wynik].tytul}</h2>
        <p>{wyniki[wynik].opis}</p>
        <button onClick={restart}>Spróbuj ponownie</button>
      </div>
    )
  }

  return (
    <div>
      <h1>🧠 Test osobowości</h1>
      <p>Pytanie {krok + 1} z {pytania.length}</p>
      <h2>{pytania[krok].pytanie}</h2>
      {pytania[krok].odpowiedzi.map((odp, i) => (
        <button key={i} onClick={() => odpowiedz(odp.typ)}>
          {odp.tekst}
        </button>
      ))}
    </div>
  )
}

export default Test