import Image from 'next/image'

import { getCssText } from "../../styles"

import { Roboto } from "@next/font/google"
import { globalStyles } from "../../styles/global"

const roboto = Roboto({
  weight: ["300", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
})

import logoImg from "../assets/Logo.png"

globalStyles()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={roboto.className}>
      <head >
        <style
          id='stitches'
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </head>

      <body>
        <Image src={logoImg} width={158} height={52} alt="logo" />
        {children}
      </body>
    </html>
  )
}
