'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useLang } from '../context/LangContext'

export default function HeroBanner() {
  const router = useRouter()
  const { t, lang } = useLang()

  const leftBannersRu = [
    { id: 'promo1', color: 'bg-gradient-to-r from-red-600 to-red-500', title: 'СЕЗОН ПОБЕДНЫХ ПОКУПОК!', discount: 'СКИДКА ДО -50%' },
    { id: 'promo2', color: 'bg-gradient-to-r from-blue-600 to-blue-500', title: 'ТЕХНИКА ДЛЯ ДОМА', discount: 'ЛУЧШИЕ ЦЕНЫ' },
    { id: 'promo3', color: 'bg-gradient-to-r from-black to-gray-800', title: 'APPLE В РАССРОЧКУ', discount: '0% ПЕРВЫЙ ВЗНОС' },
    { id: 'promo4', color: 'bg-gradient-to-r from-purple-600 to-indigo-500', title: 'ГЕЙМИНГ ЗОНА', discount: 'СКИДКИ НА НОУТБУКИ' },
    { id: 'promo5', color: 'bg-gradient-to-r from-green-600 to-teal-500', title: 'КОНДИЦИОНЕРЫ', discount: 'СПАСЕНИЕ ОТ ЖАРЫ' },
    { id: 'promo6', color: 'bg-gradient-to-r from-orange-500 to-yellow-500', title: 'МЕЛКАЯ ТЕХНИКА', discount: 'ПОДАРКИ КАЖДОМУ' }
  ]

  const leftBannersUz = [
    { id: 'promo1', color: 'bg-gradient-to-r from-red-600 to-red-500', title: 'XARIDLAR MAVSUMI!', discount: '-50% GACHA CHEGIRMA' },
    { id: 'promo2', color: 'bg-gradient-to-r from-blue-600 to-blue-500', title: 'UY UCHUN TEXNIKA', discount: 'ENG YAXSHI NARXLAR' },
    { id: 'promo3', color: 'bg-gradient-to-r from-black to-gray-800', title: 'APPLE MUDDATLI TO‘LOVGA', discount: '0% BIRINCHI TO‘LOV' },
    { id: 'promo4', color: 'bg-gradient-to-r from-purple-600 to-indigo-500', title: 'GEYMING HUDUDI', discount: 'NOUTBUKLARGA CHEGIRMALAR' },
    { id: 'promo5', color: 'bg-gradient-to-r from-green-600 to-teal-500', title: 'KONDICIONERLAR', discount: 'ISSIG‘DAN QUTULISH' },
    { id: 'promo6', color: 'bg-gradient-to-r from-orange-500 to-yellow-500', title: 'KICHIK TEXNIKA', discount: 'HAR KIMGA SOVG‘ALAR' }
  ]

  const leftBanners = lang === 'ru' ? leftBannersRu : leftBannersUz

  const dayProductsRu = [
    { id: 'prod1', name: 'Электрическая сушилка для овощей и фруктов Аксион Т43', oldPrice: '2 093 000 сум', price: '1 047 000 сум', monthly: '110 807 сум / мес.', discount: '-50%' },
    { id: 'prod2', name: 'Смартфон Samsung Galaxy S24 Ultra 512GB', oldPrice: '18 000 000 сум', price: '14 500 000 сум', monthly: '1 400 000 сум / мес.', discount: '-20%' },
    { id: 'prod3', name: 'Кондиционер Artel Inverter 12HE', oldPrice: '6 200 000 сум', price: '4 990 000 сум', monthly: '490 000 сум / мес.', discount: '-19%' }
  ]

  const dayProductsUz = [
    { id: 'prod1', name: 'Sabzavot va mevalarni quritish uchun elektr quritgich Aksion T43', oldPrice: '2 093 000 so‘m', price: '1 047 000 so‘m', monthly: '110 807 so‘m / oy', discount: '-50%' },
    { id: 'prod2', name: 'Smartfon Samsung Galaxy S24 Ultra 512GB', oldPrice: '18 000 000 so‘m', price: '14 500 000 so‘m', monthly: '1 400 000 so‘m / oy', discount: '-20%' },
    { id: 'prod3', name: 'Kondicioner Artel Inverter 12HE', oldPrice: '6 200 000 so‘m', price: '4 990 000 so‘m', monthly: '490 000 so‘m / oy', discount: '-19%' }
  ]

  const dayProducts = lang === 'ru' ? dayProductsRu : dayProductsUz

  const [leftIndex, setLeftIndex] = useState(0)
  const [rightIndex, setRightIndex] = useState(0)
  const [timeLeft, setTimeLeft] = useState({ hours: 14, minutes: 29, seconds: 17 })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 }
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 }
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        return { hours: 14, minutes: 29, seconds: 17 }
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const leftInterval = setInterval(() => {
      setLeftIndex(prev => (prev + 1) % leftBanners.length)
    }, 4000)
    const rightInterval = setInterval(() => {
      setRightIndex(prev => (prev + 1) % dayProducts.length)
    }, 5000)
    return () => {
      clearInterval(leftInterval)
      clearInterval(rightInterval)
    }
  }, [leftBanners.length, dayProducts.length])

  const formatNum = (num) => String(num).padStart(2, '0')

  return (
    <div className="max-w-[1440px] mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
      
      <div className="lg:col-span-2 relative rounded-3xl overflow-hidden h-[400px] shadow-md group">
        <div 
          className="w-full h-full flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${leftIndex * 100}%)` }}
        >
          {leftBanners.map((banner) => (
            <div 
              key={banner.id} 
              onClick={() => router.push(`/promo/${banner.id}`)}
              className={`w-full h-full shrink-0 ${banner.color} p-10 flex flex-col justify-center text-white relative cursor-pointer`}
            >
              <div className="max-w-[60%] z-10">
                <span className="bg-white text-red-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">{banner.discount}</span>
                <h2 className="text-4xl font-black mt-4 leading-tight drop-shadow">{banner.title}</h2>
              </div>
              <div className="absolute right-6 bottom-0 top-0 w-[45%] bg-white/10 backdrop-blur-sm rounded-t-2xl mt-10 border border-white/20 flex items-center justify-center font-bold text-white/40">
                {t.yourPhoto}
              </div>
            </div>
          ))}
        </div>

        <button 
          onClick={(e) => { e.stopPropagation(); setLeftIndex(prev => (prev - 1 + leftBanners.length) % leftBanners.length) }}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-xl font-bold text-gray-700 opacity-0 group-hover:opacity-100 transition"
        >
          ‹
        </button>
        <button 
          onClick={(e) => { e.stopPropagation(); setLeftIndex(prev => (prev + 1) % leftBanners.length) }}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-xl font-bold text-gray-700 opacity-0 group-hover:opacity-100 transition"
        >
          ›
        </button>

        <div className="absolute bottom-4 left-10 flex gap-2">
          {leftBanners.map((_, idx) => (
            <button 
              key={idx} 
              onClick={(e) => { e.stopPropagation(); setLeftIndex(idx) }}
              className={`w-2.5 h-2.5 rounded-full transition-all ${idx === leftIndex ? 'bg-white w-6' : 'bg-white/50'}`}
            />
          ))}
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-3xl p-6 flex flex-col justify-between relative shadow-sm h-[400px] group">
        
        <div className="flex justify-between items-center border-b border-gray-100 pb-3">
          <h3 className="text-xl font-bold text-gray-900">{t.dayProducts}</h3>
          <div className="flex gap-1 items-center font-mono font-bold text-sm">
            <span className="bg-gray-100 px-2 py-1 rounded">{formatNum(timeLeft.hours)[0]}</span>
            <span className="bg-gray-100 px-2 py-1 rounded mr-1">{formatNum(timeLeft.hours)[1]}</span>:
            <span className="bg-gray-100 px-2 py-1 rounded ml-1">{formatNum(timeLeft.minutes)[0]}</span>
            <span className="bg-gray-100 px-2 py-1 rounded mr-1">{formatNum(timeLeft.minutes)[1]}</span>:
            <span className="bg-gray-100 px-2 py-1 rounded ml-1">{formatNum(timeLeft.seconds)[0]}</span>
            <span className="bg-gray-100 px-2 py-1 rounded">{formatNum(timeLeft.seconds)[1]}</span>
          </div>
        </div>

        <div className="flex-1 overflow-hidden relative mt-4">
          <div 
            className="w-full h-full flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${rightIndex * 100}%)` }}
          >
            {dayProducts.map((prod) => (
              <div 
                key={prod.id}
                onClick={() => router.push(`/product/${prod.id}`)}
                className="w-full h-full shrink-0 flex flex-col cursor-pointer justify-between"
              >
                <div className="flex gap-4 items-start">
                  <div className="w-1/2 h-40 bg-gray-50 border rounded-2xl flex items-center justify-center text-xs text-gray-400 font-medium">
                    {t.photo}
                  </div>
                  <div className="w-1/2 flex flex-col gap-2">
                    <div className="flex gap-1.5">
                      <span className="bg-[#FFF1F1] text-[#E31E24] text-[10px] font-bold px-2 py-0.5 rounded">{prod.discount}</span>
                      <span className="bg-[#E31E24] text-white text-[10px] font-bold px-2 py-0.5 rounded">{t.discount}</span>
                    </div>
                    <p className="text-xs text-gray-800 font-medium line-clamp-3 leading-relaxed">{prod.name}</p>
                    <span className="text-[11px] bg-gray-100 text-gray-600 font-semibold px-2 py-1 rounded-lg w-max">{prod.monthly}</span>
                  </div>
                </div>

                <div className="flex justify-between items-end mt-4">
                  <div>
                    <span className="text-xs text-gray-400 line-through block font-medium">{prod.oldPrice}</span>
                    <span className="text-xl font-black text-gray-900">{prod.price}</span>
                  </div>
                  <button onClick={(e) => e.stopPropagation()} className="bg-[#E31E24] hover:bg-red-700 text-white p-3 rounded-xl transition shadow-md shadow-red-200">
                    🛒
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button 
          onClick={(e) => { e.stopPropagation(); setRightIndex(prev => (prev - 1 + dayProducts.length) % dayProducts.length) }}
          className="absolute left-2 top-[55%] -translate-y-1/2 w-8 h-8 rounded-full bg-white border shadow flex items-center justify-center text-sm font-bold opacity-0 group-hover:opacity-100 transition"
        >
          ‹
        </button>
        <button 
          onClick={(e) => { e.stopPropagation(); setRightIndex(prev => (prev + 1) % dayProducts.length) }}
          className="absolute right-2 top-[55%] -translate-y-1/2 w-8 h-8 rounded-full bg-white border shadow flex items-center justify-center text-sm font-bold opacity-0 group-hover:opacity-100 transition"
        >
          ›
        </button>
      </div>

    </div>
  )
}