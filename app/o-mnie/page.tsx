import type { Metadata } from "next"
import AboutPageClient from "./AboutPageClient"

export const metadata: Metadata = {
  title: "O mnie - Joanna Świrydowicz | Pedagog Specjalny | EduHustawka",
  description:
    "Poznaj Joannę Świrydowicz - pedagoga specjalnego z wieloletnim doświadczeniem w pracy z dziećmi z niepełnosprawnością intelektualną, spektrum autyzmu i trudnościami w nauce.",
}

export default function AboutPage() {
  return <AboutPageClient />
}
