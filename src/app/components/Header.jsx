'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useLang } from '../context/LangContext'
import { Search, Package, Scale, ShoppingCart, Heart, User } from 'lucide-react'

export default function Header() {
  const { t, lang, cartCount, favCount } = useLang()
  
  const wordsRu = ['Артель', 'MacBook', 'Xiaomi', 'Смартфоны', 'Телевизоры', 'Самсунг']
  const wordsUz = ['Artel', 'MacBook', 'Xiaomi', 'Smartfonlar', 'Televizorlar', 'Samsung']
  const words = lang === 'ru' ? wordsRu : wordsUz

  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    setCurrentWordIndex(0)
    setCurrentText('')
    setIsDeleting(false)
  }, [lang])

  useEffect(() => {
    if (words.length === 0) return
    let timer
    const fullText = words[currentWordIndex] || ''
    
    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(fullText.substring(0, currentText.length - 1))
      }, 50)
    } else {
      timer = setTimeout(() => {
        setCurrentText(fullText.substring(0, currentText.length + 1))
      }, 100)
    }

    if (!isDeleting && currentText === fullText) {
      timer = setTimeout(() => setIsDeleting(true), 1500)
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false)
      setCurrentWordIndex((prev) => (prev + 1) % words.length)
    }

    return () => clearTimeout(timer)
  }, [currentText, isDeleting, currentWordIndex, words])

  return (
    <header className="w-full bg-white sticky top-0 z-40 shadow-sm font-sans text-[#1d2530]">
      {/* Главная верхняя панель навбара */}
      <div className="max-w-360 mx-auto px-4 pt-5 pb-4 flex items-center justify-between gap-4">
        
        {/* Логотип MEDIAPARK точь-в-точь по цветам */}
        <Link href="/" className="text-[28px] font-black tracking-tight flex items-center">
          <span className="text-[#D9381E]">MEDIA</span>
          <span className="text-[#0F2A4A]">PARK</span>
        </Link>

        {/* Кнопка каталог с тремя полосками */}
        <Link href="/catalog" className="bg-[#D9381E] hover:bg-[#C22F17] text-white font-bold text-base px-6 py-3 rounded-xl flex items-center gap-2.5 transition whitespace-nowrap">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          {t.catalog || 'Каталог'}
        </Link>

        {/* Поле поиска с правильной рамкой и кнопкой лупы */}
        <div className="flex-1 relative flex items-center max-w-155">
          <input
            type="text"
            placeholder={`${t.searchPlaceholder || ''}${currentText}`}
            className="w-full border border-gray-200 focus:border-[#D9381E] rounded-xl py-3 pl-5 pr-16 outline-none text-sm font-medium placeholder-gray-400 bg-gray-50/50 transition-colors"
          />
          <button className="absolute right-1 top-1 bottom-1 bg-[#D9381E] text-white w-12 rounded-lg flex items-center justify-center hover:bg-[#C22F17] transition shadow-sm">
            <Search size={20} strokeWidth={2.5} />
          </button>
        </div>

        {/* Набор красивых векторных иконок из макета */}
        <div className="flex items-center gap-5 text-slate-800 select-none">
          
          {/* Статус заказа */}
          <Link href="/order-status" className="flex flex-col items-center gap-1 hover:text-[#D9381E] transition text-center min-w-18.75 group">
            <Package size={24} className="text-slate-700 group-hover:text-[#D9381E] transition-colors" strokeWidth={2} />
            <span className="text-[11px] font-bold tracking-tight text-slate-900">{t.orderStatus || 'Статус заказа'}</span>
          </Link>

          {/* Сравнить */}
          <Link href="/compare" className="flex flex-col items-center gap-1 hover:text-[#D9381E] transition text-center min-w-16.25 group">
            <Scale size={24} className="text-slate-700 group-hover:text-[#D9381E] transition-colors" strokeWidth={2} />
            <span className="text-[11px] font-bold tracking-tight text-slate-900">{t.compare || 'Сравнить'}</span>
          </Link>
          
          {/* Корзина с индикатором количества */}
          <Link href="/cart" className="flex flex-col items-center gap-1 hover:text-[#D9381E] transition text-center min-w-16.25 relative group">
            <ShoppingCart size={24} className="text-slate-700 group-hover:text-[#D9381E] transition-colors" strokeWidth={2} />
            {cartCount > 0 && (
              <span className="absolute -top-1 right-2 bg-[#D9381E] text-white text-[10px] font-black rounded-full h-4 w-4 flex items-center justify-center">
                {cartCount}
              </span>
            )}
            <span className="text-[11px] font-bold tracking-tight text-slate-900">{t.cart || 'Корзина'}</span>
          </Link>
          
          {/* Избранное */}
          <Link href="/favorites" className="flex flex-col items-center gap-1 hover:text-[#D9381E] transition text-center min-w-16.25 relative group">
            <Heart size={24} className="text-slate-700 group-hover:text-[#D9381E] transition-colors" strokeWidth={2} />
            {favCount > 0 && (
              <span className="absolute -top-1 right-3 bg-[#D9381E] text-white text-[10px] font-black rounded-full h-4 w-4 flex items-center justify-center">
                {favCount}
              </span>
            )}
            <span className="text-[11px] font-bold tracking-tight text-slate-900">{t.favorites || 'Избранное'}</span>
          </Link>
          
          {/* Войти */}
          <Link href="/login" className="flex flex-col items-center gap-1 hover:text-[#D9381E] transition text-center min-w-13.75 group">
            <User size={24} className="text-slate-700 group-hover:text-[#D9381E] transition-colors" strokeWidth={2} />
            <span className="text-[11px] font-bold tracking-tight text-slate-900">{t.login || 'Войти'}</span>
          </Link>
        </div>

      </div>

    </header>
  )
}