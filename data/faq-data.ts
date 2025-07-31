export interface FAQItem {
  question: string
  answer: string
  category?: string
}

export const faqItems: FAQItem[] = [
  {
    question: "Jak długo trwa pojedyncza sesja terapeutyczna?",
    answer:
      "Standardowa sesja terapeutyczna trwa 45-60 minut, w zależności od rodzaju terapii i indywidualnych potrzeb dziecka. W przypadku młodszych dzieci lub dzieci z trudnościami w koncentracji, sesje mogą być krótsze (30-45 minut).",
    category: "Ogólne",
  },
  {
    question: "W jakim wieku dzieci mogą rozpocząć terapię?",
    answer:
      "Terapię można rozpocząć w każdym wieku, nawet z bardzo małymi dziećmi. Wczesna interwencja (0-3 lata) jest szczególnie skuteczna w przypadku opóźnień rozwojowych. Oferuję wsparcie dla dzieci w wieku od niemowlęctwa do późnego wieku szkolnego.",
    category: "Ogólne",
  },
  {
    question: "Czy rodzic powinien być obecny podczas terapii?",
    answer:
      "To zależy od rodzaju terapii i wieku dziecka. W przypadku młodszych dzieci obecność rodzica jest często wskazana. Przy starszych dzieciach, samodzielna praca może przynieść lepsze efekty. Zawsze omawiamy to indywidualnie przed rozpoczęciem terapii.",
    category: "Przebieg terapii",
  },
  {
    question: "Jak często powinny odbywać się sesje terapeutyczne?",
    answer:
      "Częstotliwość sesji jest ustalana indywidualnie, w zależności od potrzeb dziecka i rodzaju terapii. Najczęściej spotkania odbywają się raz w tygodniu, ale w niektórych przypadkach mogą być częstsze (2-3 razy w tygodniu) lub rzadsze (raz na dwa tygodnie).",
    category: "Przebieg terapii",
  },
  {
    question: "Jak długo trwa cały proces terapeutyczny?",
    answer:
      "Czas trwania terapii jest bardzo indywidualny i zależy od wielu czynników: rodzaju trudności, ich nasilenia, wieku dziecka, regularności spotkań oraz zaangażowania w ćwiczenia w domu. Niektóre terapie trwają kilka miesięcy, inne mogą być prowadzone przez rok lub dłużej.",
    category: "Przebieg terapii",
  },
  {
    question: "Czy prowadzi Pani terapię online?",
    answer:
      "W wybranych przypadkach prowadzę konsultacje online, jednak większość terapii wymaga bezpośredniego kontaktu z dzieckiem. Terapia ręki, diagnoza KORP czy trening słuchowy Johansena muszą odbywać się stacjonarnie.",
    category: "Organizacja",
  },
  {
    question: "Jak przygotować dziecko do pierwszej wizyty?",
    answer:
      "Warto powiedzieć dziecku, że idzie na spotkanie z panią, która pomoże mu lepiej się rozwijać poprzez różne zabawy i ćwiczenia. Unikajmy określeń takich jak 'badanie' czy 'test', które mogą wzbudzać niepokój. Na pierwszą wizytę warto zabrać dotychczasową dokumentację medyczną i psychologiczną dziecka.",
    category: "Organizacja",
  },
  {
    question: "Czy terapia obejmuje również pracę w domu?",
    answer:
      "Tak, regularne ćwiczenia w domu są bardzo ważnym elementem terapii i znacząco wpływają na jej efektywność. Po każdej sesji przekazuję rodzicom wskazówki i materiały do pracy w domu. Ćwiczenia są dostosowane do możliwości czasowych rodziny i umiejętności dziecka.",
    category: "Przebieg terapii",
  },
  {
    question: "Czy wystawia Pani faktury za usługi?",
    answer: "Tak, na życzenie wystawiam faktury za przeprowadzone terapie i diagnozy.",
    category: "Organizacja",
  },
  {
    question: "Co to jest diagnoza KORP i dla kogo jest przeznaczona?",
    answer:
      "KORP (Karty Oceny Rozwoju Psychomotorycznego) to narzędzie diagnostyczne służące do oceny rozwoju dziecka w wieku od 1 miesiąca do 9 lat. Diagnoza obejmuje ocenę różnych sfer rozwojowych: motorycznej, poznawczej, komunikacyjnej i społecznej. Jest szczególnie polecana dla dzieci, u których rodzice lub specjaliści zauważyli niepokojące objawy w rozwoju.",
    category: "Oferta",
  },
  {
    question: "Na czym polega Indywidualna Stymulacja Słuchu Johansena?",
    answer:
      "Jest to metoda terapii słuchowej polegająca na słuchaniu specjalnie zmodyfikowanej muzyki, dostosowanej do indywidualnych potrzeb dziecka po przeprowadzeniu diagnozy słuchu. Terapia wspomaga rozwój mowy, koncentracji uwagi, umiejętności czytania i pisania oraz funkcji słuchowych. Jest szczególnie pomocna dla dzieci z zaburzeniami przetwarzania słuchowego, dysleksją, ADHD czy opóźnionym rozwojem mowy.",
    category: "Oferta",
  },
]
