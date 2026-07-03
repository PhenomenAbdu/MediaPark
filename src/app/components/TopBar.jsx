'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useLang } from '../context/LangContext'

export default function TopBar() {
  const { lang, setLang, t } = useLang()
  const [isOpenCity, setIsOpenCity] = useState(false)
  const [selectedCity, setSelectedCity] = useState({ ru: 'Ташкент', uz: 'Toshkent' })
  const cityRef = useRef(null)

  const cities = [
    { ru: 'Ташкент', uz: 'Toshkent' },
    { ru: 'Самарканд', uz: 'Samarqand' },
    { ru: 'Бухара', uz: 'Buxoro' },
    { ru: 'Андижан', uz: 'Andijon' },
    { ru: 'Наманган', uz: 'Namangan' },
    { ru: 'Фергана', uz: 'Fargʻona' },
    { ru: 'Нукус', uz: 'Nukus' },
    { ru: 'Карши', uz: 'Qarshi' }
  ]

  useEffect(() => {
    function handleClickOutside(event) {
      if (cityRef.current && !cityRef.current.contains(event.target)) {
        setIsOpenCity(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="w-full bg-gray-100 border-b border-gray-200 py-2 text-xs text-gray-600 select-none">
      <div className="max-w-[1440px] mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-6">
          <a href="tel:+998712033333" className="hover:text-red-600 transition">+998 71 203 33 33</a>
          
          {/* выпадалка городов узбекистана */}
          <div className="relative" ref={cityRef}>
            <span 
              onClick={() => setIsOpenCity(!isOpenCity)} 
              className="cursor-pointer hover:text-red-600 flex items-center gap-1 transition font-medium"
            >
              {lang === 'ru' ? selectedCity.ru : selectedCity.uz}
              <span className="text-[9px] text-gray-400">▼</span>
            </span>
            
            {isOpenCity && (
              <div className="absolute left-0 top-full mt-2 bg-white border border-gray-200 rounded shadow-xl z-50 min-w-[140px] py-1 animate-fadeIn">
                {cities.map((city, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSelectedCity(city)
                      setIsOpenCity(false)
                    }}
                    className={`w-full px-3 py-1.5 text-left text-xs font-medium transition-colors ${
                      (lang === 'ru' ? selectedCity.ru : selectedCity.uz) === (lang === 'ru' ? city.ru : city.uz)
                        ? 'bg-blue-50 text-[#002B5B] font-bold'
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    {lang === 'ru' ? city.ru : city.uz}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center gap-5">
          <Link href="/about" className="hover:text-red-600 transition">{t.about}</Link>
          <Link href="/mediablog" className="bg-[#002B5B] text-white px-2 py-1 rounded font-medium hover:bg-opacity-90 transition">Mediablog ↗</Link>
          <Link href="/delivery" className="hover:text-red-600 transition">{t.delivery}</Link>
          <Link href="/shops" className="hover:text-red-600 transition">{t.shops}</Link>
          <Link href="/installment" className="hover:text-red-600 transition">{t.installment}</Link>
          <Link href="/contact" className="hover:text-red-600 transition">{t.contact}</Link>
          
          {/* выпадалка языков */}
          <div className="relative group cursor-pointer font-bold text-gray-700 flex items-center gap-1 bg-white px-2 py-0.5 rounded border border-gray-200">
            <span>{lang === 'ru' ? 'Русский' : 'Oʻzbekcha'}</span>
            <span>▼</span>
            <div className="absolute right-0 top-full mt-1 bg-white border border-gray-200 rounded shadow-lg hidden group-hover:block z-50 overflow-hidden min-w-[100px]">
              <button onClick={() => setLang('ru')} className="w-full px-3 py-1.5 text-left hover:bg-gray-100 transition text-xs font-medium">Русский</button>
              <button onClick={() => setLang('uz')} className="w-full px-3 py-1.5 text-left hover:bg-gray-100 transition text-xs font-medium">Oʻzbekcha</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}