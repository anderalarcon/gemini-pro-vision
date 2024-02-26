import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Gemini Pro Vision: Demo de IA para Generar Contenido Visual y Textual',
  description: 'Experimenta la potencia de Gemini Pro Vision: una demostración de cómo la inteligencia artificial puede interpretar y generar contenido a partir de imágenes y texto'
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <link
          rel='canonical'
          href='https://gemini-pro-vision-nine.vercel.app/'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          content='Gemini Pro Vision: Demo de IA para Generar Contenido Visual y Textual'
        />
        <meta
          property='og:description'
          content='Experimenta la potencia de Gemini Pro Vision: una demostración de cómo la inteligencia artificial puede interpretar y generar contenido a partir de imágenes y texto.'
        />
        <meta
          property='og:image'
          content='https://www.kdnuggets.com/wp-content/uploads/how-to-access-and-use-gemini-api-for-free_01.png'
        />
        <meta
          property='og:url'
          content='https://gemini-pro-vision-nine.vercel.app/'
        />
        <meta
          name='twitter:title'
          content='Gemini Pro Vision: Demo de IA para Generar Contenido Visual y Textual'
        />
        <meta
          name='twitter:description'
          content='Experimenta la potencia de Gemini Pro Vision: una demostración de cómo la inteligencia artificial puede interpretar y generar contenido a partir de imágenes y texto.'
        />
        <meta
          name='twitter:image'
          content='https://www.kdnuggets.com/wp-content/uploads/how-to-access-and-use-gemini-api-for-free_01.png'
        />
        <meta name='twitter:card' content='summary_large_image' />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
