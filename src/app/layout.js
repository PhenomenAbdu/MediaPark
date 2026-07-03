import React from 'react'
import { LangProvider } from './context/LangContext'
import TopBar from './components/TopBar'
import './globals.css'

export const metadata = {
  title: 'MEDIAPARK',
  description: 'Эксперт по бытовой технике в Узбекистане',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <LangProvider>
          <TopBar />
          <main>
            {children}
          </main>
        </LangProvider>
      </body>
    </html>
  )
}