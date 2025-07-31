export interface Service {
  id: string
  name: string
  description: string
  duration: number
  image: string
  category: string
  price?: number
}

export const availableServices: Service[] = [
  {
    id: "terapia-pedagogiczna",
    name: "Terapia pedagogiczna",
    description:
      "Kompleksowa terapia dla dzieci z trudnościami w nauce, problemami z koncentracją i zaburzeniami rozwoju poznawczego. Indywidualne podejście dostosowane do potrzeb każdego dziecka.",
    duration: 45,
    image: "/child-development-puzzle.png",
    category: "terapia",
  },
  {
    id: "wsparcie-autyzm",
    name: "Wsparcie dzieci ze spektrum autyzmu",
    description:
      "Specjalistyczna terapia dla dzieci ze spektrum autyzmu, skupiająca się na rozwoju komunikacji, umiejętności społecznych i regulacji emocjonalnej.",
    duration: 60,
    image: "/colorful-learning-tools.png",
    category: "autyzm",
  },
  {
    id: "trening-sluchowy",
    name: "Trening słuchowy Johansena",
    description:
      "Indywidualna Stymulacja Słuchu (IAS) - nowoczesna metoda terapii słuchowej wspierająca rozwój mowy, koncentracji i umiejętności uczenia się.",
    duration: 30,
    image: "/johansen-sound-training.png",
    category: "sluch",
  },
  {
    id: "terapia-integracji",
    name: "Terapia integracji sensorycznej",
    description:
      "Wsparcie dzieci z zaburzeniami przetwarzania sensorycznego, problemami z koordynacją ruchową i nadwrażliwością zmysłową.",
    duration: 45,
    image: "/focused-mind-training.png",
    category: "integracja",
  },
  {
    id: "wsparcie-emocjonalne",
    name: "Wsparcie emocjonalne i behawioralne",
    description:
      "Pomoc dzieciom z problemami emocjonalnymi, zaburzeniami zachowania i trudnościami w regulacji emocji. Trening umiejętności społecznych.",
    duration: 45,
    image: "/child-development-puzzle.png",
    category: "emocje",
  },
  {
    id: "wczesne-wspomaganie",
    name: "Wczesne wspomaganie rozwoju",
    description:
      "Kompleksowe wsparcie dla najmłodszych dzieci (0-7 lat) z opóźnieniami rozwojowymi lub ryzykiem ich wystąpienia.",
    duration: 45,
    image: "/colorful-learning-tools.png",
    category: "wczesne",
  },
  {
    id: "konsultacje-rodzicielskie",
    name: "Konsultacje dla rodziców",
    description:
      "Wsparcie i doradztwo dla rodziców w zakresie wychowania dzieci ze specjalnymi potrzebami edukacyjnymi. Praktyczne strategie i techniki.",
    duration: 60,
    image: "/focused-mind-training.png",
    category: "rodzice",
  },
]

export function getAvailableSlots(date: Date): string[] {
  const slots = ["08:00", "08:45", "09:30", "10:15", "11:00", "11:45", "12:30", "13:15", "14:00", "14:45", "15:30"]

  // Filter out past slots for today
  const now = new Date()
  if (date.toDateString() === now.toDateString()) {
    const currentHour = now.getHours()
    const currentMinute = now.getMinutes()

    return slots.filter((slot) => {
      const [hour, minute] = slot.split(":").map(Number)
      return hour > currentHour || (hour === currentHour && minute > currentMinute)
    })
  }

  return slots
}
