'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ShoppingBag, CheckCircle, CreditCard, Trash2 } from 'lucide-react'
import { useLang } from '../context/LangContext'

export default function CartPage() {
  const router = useRouter()
  const { lang, cart, removeFromCart, placeOrder } = useLang()
  
  const [isPaying, setIsPaying] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [createdOrderId, setCreatedOrderId] = useState(null)

  const handlePay = () => {
    setIsPaying(true)
    
    const orderId = String(Math.floor(100000 + Math.random() * 900000))
    
    setTimeout(() => {
      placeOrder(orderId, cart)
      setIsPaying(false)
      setShowSuccess(true)
      setCreatedOrderId(orderId)

      setTimeout(() => {
        setShowSuccess(false)
      }, 1500)
    }, 1000)
  }

  if (cart.length === 0 && !createdOrderId) {
    return (
      <div className="w-full min-h-[700px] flex flex-col items-center justify-center bg-white px-4 select-none">
        <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-red-50 mb-6">
          <ShoppingBag className="w-10 h-10 text-[#E31E24] stroke-[1.5]" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">
          {lang === 'ru' ? 'Ваша корзина пуста' : 'Savatiz bo\'sh'}
        </h2>
        <p className="text-sm text-slate-400 mb-8 text-center max-w-md font-medium leading-relaxed">
          {lang === 'ru' 
            ? 'Начните покупки на главной странице или перейдите в нужную категорию, чтобы добавить товары.' 
            : 'Xaridni bosh sahifadan boshlang yoki kerakli bo\'limga o\'tib, mahsulot qo\'shing.'}
        </p>
        <button 
          onClick={() => router.push('/')}
          className="bg-[#E31E24] hover:bg-red-700 text-white text-sm font-bold px-10 h-12 rounded-xl transition shadow-md shadow-red-100"
        >
          {lang === 'ru' ? 'Перейти' : 'O\'tish'}
        </button>
      </div>
    )
  }

  if (createdOrderId && cart.length === 0) {
    return (
      <div className="w-full min-h-[600px] flex flex-col items-center justify-center bg-white px-4 select-none">
        <div className="p-8 border border-emerald-100 rounded-3xl bg-emerald-50/20 max-w-md w-full text-center shadow-sm">
          <h2 className="text-xl font-extrabold text-emerald-600 mb-2">Заказ успешно оформлен!</h2>
          <p className="text-sm text-gray-500 mb-6">Используйте этот код в разделе статуса заказа для отслеживания его шагов.</p>
          <div className="bg-slate-900 text-white font-mono text-3xl py-4 px-6 rounded-2xl tracking-widest font-black mb-6">
            № {createdOrderId}
          </div>
          <button 
            onClick={() => router.push('/order-status')}
            className="w-full bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold h-12 rounded-xl transition"
          >
            Проверить статус заказа
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full min-h-screen bg-gray-50/50 py-12 relative">
      
      {showSuccess && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center z-50 animate-fade-in">
          <div className="bg-white rounded-3xl p-8 flex flex-col items-center justify-center shadow-2xl max-w-xs w-full text-center scale-95 animate-scale-up">
            <CheckCircle className="w-16 h-16 text-emerald-500 mb-4 animate-bounce" />
            <h3 className="text-xl font-black text-slate-900">Успешно оплачено</h3>
          </div>
        </div>
      )}

      <div className="max-w-[1000px] mx-auto px-4">
        <h1 className="text-2xl font-black text-slate-900 mb-8 tracking-tight">
          {lang === 'ru' ? 'Ваша корзина' : 'Sizning savatingiz'}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          
          <div className="lg:col-span-2 flex flex-col gap-3">
            {cart.map((item) => (
              <div key={item.id} className="bg-white border border-gray-100 p-4 rounded-2xl flex justify-between items-center shadow-xs">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center text-3xl select-none">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-800 line-clamp-2 max-w-sm">{item.name}</h3>
                    <span className="text-sm font-black text-slate-900 block mt-1">{item.price}</span>
                  </div>
                </div>
                <button 
                  onClick={() => removeFromCart(item.id || item.name)}
                  className="p-2.5 rounded-xl bg-gray-50 text-gray-400 hover:text-red-500 transition"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm flex flex-col gap-4">
            <h2 className="text-lg font-bold text-slate-900 border-b pb-3 border-gray-100">Детали заказа</h2>
            <div className="flex justify-between text-sm text-slate-500 font-medium">
              <span>Количество товаров:</span>
              <span className="text-slate-900 font-bold">{cart.length} шт.</span>
            </div>
            
            <button
              onClick={handlePay}
              disabled={isPaying}
              className="w-full bg-[#E31E24] hover:bg-red-700 disabled:bg-gray-200 text-white text-sm font-bold h-12 rounded-xl transition shadow-md shadow-red-100 flex items-center justify-center gap-2"
            >
              <CreditCard className="w-4 h-4" />
              {isPaying ? 'Обработка...' : 'Оплатить заказ'}
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}