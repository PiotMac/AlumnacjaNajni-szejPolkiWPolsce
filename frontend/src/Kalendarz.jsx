import { useState } from 'react'

const miesiace = [
  { nazwa: 'Czerwiec 2024', krotki: 'Czerwiec 2024', tekst: 'Pomyślelibyście, że zaczęło się od Walnego? Otóż nie. Nasz debiut jako Zarządu (wtedy dopiero kandydującego) miał miejsce już 4 czerwca 2024 r., we wtorek, gdy poszliśmy na wspólny obiad (niestety bez Madziulki). Powstała grupa, którą do teraz wykorzystujemy do bullshitu (nie ucichnęła od 26 maja). Spędziliśmy miłe chwile na piwku i już wtedy uznałam za niesamowite, że zachowujemy się, jakbyśmy znali się od zawsze. Mam wrażenie, że w alternatywnym uniwersum mieszkaliśmy na tym samym osiedlu i bawiliśmy się jako dzieciaki, które potem dorosły, ale dalej trzymały się z grupą ze starego podwórka.', zdjecia: ['/czerwiec24-1.jpg'] },
  { nazwa: 'Lipiec 2024', krotki: 'Lipiec 2024', tekst: 'Polish był dla każdego niesamowicie intensywny. Zintegrowaliśmy się z naszymi odpowiednikami w polskich LBGsach, ale i tak największy wspólny bonding zarządowy mieliśmy na tych zasranych i praktycznie nieprzydatnych szkoleniach, gdzie prawie każdy z nas kacował i miał ochotę pójść się zrzygać w krzaki (Szymi praktykował). Mieliśmy ZZ. NAJLEPSZY EVENT BESTOWY. Była wspaniała atmosfera (mimo moich zawirowań z Dawidem). Iwo cudownie gotował i nie wiem co więcej mogę powiedzieć, że czułam wtedy największe wsparcie od Makaroniarzy. Próbowali nas przygotować nas na przyszłość, ale nie wiedzieliśmy co nas czeka. Napełnieni nadzieją i motywacjąi do pracy oraz użerania się z LBG. Niesamowite to czasy, nie byliśmy w pełni świadomi krętej drogi Zarządziaka. To były piękne chwile, integracji, wielu interesujących rozmów i zwykłej radości ze spędzania wspólnie czasu. Do teraz mam traumę po stopach Pakosach. ', zdjecia: [] },
  { nazwa: 'Sierpień 2024', krotki: 'Sierpień 2024', tekst: 'Poza tym środowe i zarządowe zdalne wspominam całkiem miło. Highlightem były urodziny Szymona. I tak to się toczyło, od jednego tygodnia do drugiego, dyskusje na Discordzie i załamywanie się Madzi nad Hubertem. Nie mogłam się doczekać w końcu stacjonarnego powrotu i pierwszych wspólnych środowych. Martwiliśmy się BHC i tym co się działo z Hubertem, a istotnym punktem zwrotnym, gdy zrozumieliśmy co się dzieje naprawdę, był Integral.', zdjecia: [] },
  { nazwa: 'Wrzesień 2024', krotki: 'Wrzesień 2024', tekst: 'Tu wpisz fragment z dzienniczka...', zdjecia: [] },
  { nazwa: 'Październik 2024', krotki: 'Październik 2024', tekst: 'Tu wpisz fragment z dzienniczka...', zdjecia: [] },
  { nazwa: 'Listopad 2024', krotki: 'Listopad 2024', tekst: 'Tu wpisz fragment z dzienniczka...', zdjecia: [] },
  { nazwa: 'Grudzień 2024', krotki: 'Grudzień 2024', tekst: 'Tu wpisz fragment z dzienniczka...', zdjecia: [] },
  { nazwa: 'Styczeń 2025', krotki: 'Styczeń 2025', tekst: 'Tu wpisz fragment z dzienniczka...', zdjecia: [] },
  { nazwa: 'Luty 2025', krotki: 'Luty 2025', tekst: 'Tu wpisz fragment z dzienniczka...', zdjecia: [] },
  { nazwa: 'Marzec 2025', krotki: 'Marzec 2025', tekst: 'Tu wpisz fragment z dzienniczka...', zdjecia: [] },
  { nazwa: 'Kwiecień 2025', krotki: 'Kwiecień', tekst: 'Tu wpisz fragment z dzienniczka...', zdjecia: [] },
  { nazwa: 'Maj 2025', krotki: 'Maj 2025', tekst: 'Tu wpisz fragment z dzienniczka...', zdjecia: [] },
  { nazwa: 'Czerwiec 2025', krotki: 'Czerwiec 2025', tekst: 'Tu wpisz fragment z dzienniczka...', zdjecia: [] },
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