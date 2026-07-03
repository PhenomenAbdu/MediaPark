'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { Scale, Trash2 } from 'lucide-react'
import { useLang } from '../context/LangContext'

export default function ComparePage() {
  const router = useRouter()
  const { lang, compareList, removeFromCompare } = useLang()

  if (!compareList || compareList.length === 0) {
    return (
      <div className="w-full min-h-screen flex flex-col bg-white">
        <div className="flex-grow flex flex-col items-center justify-center px-4 py-12 select-none">
          <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-red-50 mb-6">
            <Scale className="w-10 h-10 text-[#E31E24] stroke-[1.5]" />
          </div>
          
          <h2 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">
            {lang === 'ru' ? 'Сравним что-нибудь?' : 'Nimandir taqqoslaymizmi?'}
          </h2>
          
          <p className="text-sm text-slate-400 mb-8 text-center max-w-md font-medium leading-relaxed">
            {lang === 'ru' 
              ? 'Добавляйте товары в сравнение характеристик и выбирайте самый подходящий для вас товар.' 
              : "Xususiyatlarni taqqoslash uchun mahsulotlarni qo'shing va o'zingizga eng mos keladiganini tanlang."}
          </p>
          
          <button 
            onClick={() => router.push('/')}
            className="bg-[#E31E24] hover:bg-red-700 text-white text-sm font-bold px-8 h-12 rounded-xl transition shadow-md shadow-red-100"
          >
            {lang === 'ru' ? 'Перейти в каталог' : 'Katalogga o\'tish'}
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full min-h-screen flex flex-col bg-white py-12">
      <div className="max-w-[1440px] mx-auto px-4 flex-grow w-full">
        <h1 className="text-3xl font-black text-gray-900 mb-8 tracking-tight">
          {lang === 'ru' ? 'Сравнение товаров' : 'Mahsulotlarni taqqoslash'}
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {compareList.map((prod) => (
            <div key={prod.id} className="border border-gray-100 rounded-2xl p-4 flex flex-col justify-between bg-white shadow-sm relative group">
              <button 
                onClick={() => removeFromCompare && removeFromCompare(prod.id)}
                className="absolute top-3 right-3 p-2 rounded-full bg-gray-50 text-gray-400 hover:text-red-600 transition"
                title="Удалить"
              >
                <Trash2 className="w-4 h-4" />
              </button>
              
              <div className="w-full h-40 bg-gray-50 rounded-xl flex items-center justify-center text-4xl select-none mb-4">
                {prod.icon}
              </div>
              
              <div className="flex flex-col gap-2">
                <p className="text-sm font-bold text-gray-800 line-clamp-2">{prod.name}</p>
                <span className="text-lg font-black text-gray-900">{prod.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}