'use client'
import React, { useState } from 'react'
import { Search, Package, Check, HelpCircle } from 'lucide-react'
import { useLang } from '../context/LangContext'

export default function OrderStatusPage() {
  const { lang, orders } = useLang()
  const [searchCode, setSearchCode] = useState('')
  const [currentOrder, setCurrentOrder] = useState(null)
  const [hasSearched, setHasSearched] = useState(false)

  const handleSearch = (e) => {
    e.preventDefault()
    if (!searchCode.trim()) return

    const found = orders?.find(o => String(o.id) === searchCode.trim())
    setCurrentOrder(found || null)
    setHasSearched(true)
  }

  const calculateCurrentStep = (createdAt) => {
    if (!createdAt) return 1
    const now = new Date().getTime()
    const diffTime = now - createdAt
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))

    if (diffDays >= 3) return 4
    if (diffDays === 2) return 3
    if (diffDays === 1) return 2
    return 1
  }

  const currentStep = currentOrder ? calculateCurrentStep(currentOrder.createdAt) : 1

  return (
    <div className="w-full min-h-screen bg-white py-16 select-none">
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col items-center">
        
        <div className="flex flex-col items-center justify-center w-full max-w-2xl text-center mb-12">
          <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-red-50 mb-6">
            <Package className="w-10 h-10 text-[#E31E24] stroke-[1.5]" />
          </div>
          <h1 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">Статус заказа</h1>
          <p className="text-sm text-slate-400 mb-6 font-medium">Для проверки статуса заказа введите номер заказа.</p>
          
          <form onSubmit={handleSearch} className="w-full relative">
            <input 
              type="text"
              value={searchCode}
              onChange={(e) => setSearchCode(e.target.value)}
              placeholder="Например: 213311"
              className="w-full h-14 pl-6 pr-14 border border-gray-200 rounded-2xl focus:outline-none focus:border-red-500 text-slate-800 font-medium transition text-lg shadow-sm"
            />
            <button type="submit" className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500 transition">
              <Search className="w-6 h-6" />
            </button>
          </form>
        </div>

        {hasSearched && (
          <div className="w-full max-w-5xl mt-4 animate-fade-in">
            <div className="text-2xl font-black text-slate-900 mb-6 px-2">
              № {searchCode}
            </div>

            <div className="w-full border border-gray-100 rounded-3xl p-8 bg-white shadow-sm grid grid-cols-4 relative items-start gap-4">
              
              <div className="flex flex-col items-center text-center relative z-10">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border transition ${
                  currentOrder 
                    ? 'bg-[#E31E24] text-white border-[#E31E24]' 
                    : 'bg-[#E31E24] text-white border-[#E31E24]'
                }`}>
                  1
                </div>
                <span className="text-[10px] font-bold text-gray-400 mt-3 uppercase tracking-wider">Шаг 1</span>
                <span className="text-sm font-extrabold text-slate-900 mt-1">
                  {currentOrder ? 'Заказ оплачен' : 'Заказ отменен'}
                </span>
                <span className={`text-[11px] font-bold px-3 py-1 rounded-xl mt-3 ${
                  currentOrder ? 'bg-emerald-50 text-emerald-600' : 'bg-gray-50 text-gray-400'
                }`}>
                  {currentOrder ? 'Принят' : 'Отменен'}
                </span>
              </div>

              <div className="flex flex-col items-center text-center relative z-10">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border transition ${
                  currentOrder && currentStep >= 2 
                    ? 'bg-[#E31E24] text-white border-[#E31E24]' 
                    : 'bg-white text-gray-400 border-gray-200'
                }`}>
                  2
                </div>
                <span className="text-[10px] font-bold text-gray-400 mt-3 uppercase tracking-wider">Шаг 2</span>
                <span className="text-sm font-extrabold text-slate-900 mt-1">Подтверждён</span>
                <span className={`text-[11px] font-bold px-3 py-1 rounded-xl mt-3 ${
                  currentOrder && currentStep >= 2 ? 'bg-emerald-50 text-emerald-600' : 'bg-gray-50 text-gray-400'
                }`}>
                  {currentOrder && currentStep >= 2 ? 'Готов' : 'Не пришло'}
                </span>
              </div>

              <div className="flex flex-col items-center text-center relative z-10">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border transition ${
                  currentOrder && currentStep >= 3 
                    ? 'bg-[#E31E24] text-white border-[#E31E24]' 
                    : 'bg-white text-gray-400 border-gray-200'
                }`}>
                  3
                </div>
                <span className="text-[10px] font-bold text-gray-400 mt-3 uppercase tracking-wider">Шаг 3</span>
                <span className="text-sm font-extrabold text-slate-900 mt-1">В пути</span>
                <span className={`text-[11px] font-bold px-3 py-1 rounded-xl mt-3 ${
                  currentOrder && currentStep >= 3 ? 'bg-emerald-50 text-emerald-600' : 'bg-gray-50 text-gray-400'
                }`}>
                  {currentOrder && currentStep >= 3 ? 'Едет' : 'Не пришло'}
                </span>
              </div>

              <div className="flex flex-col items-center text-center relative z-10">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border transition ${
                  currentOrder && currentStep === 4 
                    ? 'bg-[#E31E24] text-white border-[#E31E24]' 
                    : 'bg-white text-gray-400 border-gray-200'
                }`}>
                  4
                </div>
                <span className="text-[10px] font-bold text-gray-400 mt-3 uppercase tracking-wider">Шаг 4</span>
                <span className="text-sm font-extrabold text-slate-900 mt-1">Доставлен</span>
                <span className={`text-[11px] font-bold px-3 py-1 rounded-xl mt-3 ${
                  currentOrder && currentStep === 4 ? 'bg-emerald-50 text-emerald-600' : 'bg-gray-50 text-gray-400'
                }`}>
                  {currentOrder && currentStep === 4 ? 'Доставлено' : 'Не пришло'}
                </span>
              </div>

              <div className="absolute top-13 left-[12%] right-[12%] h-[1px] border-t border-dashed border-gray-200 z-0" />

            </div>
          </div>
        )}

      </div>
    </div>
  )
}