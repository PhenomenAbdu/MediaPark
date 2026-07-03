'use client'

import React from 'react'
import Link from 'next/link'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#181f29] text-[#7d8694] font-sans w-full py-12 px-4 md:px-12 flex flex-col justify-between relative selection:bg-orange-600 selection:text-white">
      {/* главная сетка с контентом */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 pb-12 border-b border-[#232b37]">
        
        {/* левый блок с контактами */}
        <div className="flex flex-col gap-5">
          <h2 className="text-white text-2xl font-black tracking-wide">MEDIAPARK</h2>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-medium text-[#9ba3b1]">Возникли вопросы? Готовы помочь:</p>
            <a href="tel:+998712033333" className="text-white text-[19px] font-bold hover:text-orange-500 transition-colors">
              +998 71 203 33 33
            </a>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-medium text-[#9ba3b1]">График работы:</p>
            <p className="text-white text-sm font-bold">Ежедневно : 09:00 - 21:00</p>
          </div>
        </div>

        {/* сетка платежек */}
        <div className="flex flex-col gap-4">
          <h3 className="text-white font-bold text-sm tracking-wide">Способы оплаты</h3>
          <div className="grid grid-cols-2 gap-2 max-w-[240px]">
            {/* узкарт */}
            <div className="bg-[#202834] rounded-lg h-12 flex items-center justify-center p-2 border border-[#2a3444]">
              <span className="text-white font-black text-xs tracking-tighter flex flex-col items-center leading-none">
                <span className="text-[14px]">U</span>
                <span className="text-[6px] text-gray-400">UZCARD</span>
              </span>
            </div>
            {/* хумо */}
            <div className="bg-[#202834] rounded-lg h-12 flex items-center justify-center p-2 border border-[#2a3444]">
              <span className="text-white font-black italic text-sm tracking-tight">HUMO</span>
            </div>
            {/* клик */}
            <div className="bg-[#202834] rounded-lg h-12 flex items-center justify-center p-2 border border-[#2a3444] gap-1">
              <div className="w-2.5 h-2.5 rounded-full bg-[#00a3e0]"></div>
              <span className="text-white font-extrabold text-sm lowercase">click</span>
            </div>
            {/* пейми */}
            <div className="bg-[#202834] rounded-lg h-12 flex items-center justify-center p-2 border border-[#2a3444]">
              <span className="text-[#00e5c1] font-black italic text-sm lowercase">payme</span>
            </div>
            {/* виза */}
            <div className="bg-[#202834] rounded-lg h-12 flex items-center justify-center p-2 border border-[#2a3444]">
              <span className="text-white font-black italic text-base tracking-normal">VISA</span>
            </div>
            {/* мастеркард */}
            <div className="bg-[#202834] rounded-lg h-12 flex items-center justify-center p-2 border border-[#2a3444] flex-col gap-0.5">
              <div className="flex -space-x-1.5">
                <div className="w-3 h-3 rounded-full bg-[#eb001b]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ff5f00] opacity-80"></div>
              </div>
              <span className="text-[6px] text-gray-400 uppercase tracking-widest font-medium">mastercard</span>
            </div>
          </div>
        </div>

        {/* колонка информация */}
        <div className="flex flex-col gap-3">
          <h3 className="text-white font-bold text-sm tracking-wide">Информация</h3>
          <ul className="flex flex-col gap-2 text-[13px] font-medium">
            <li><Link href="/about" className="hover:text-white transition-colors">О нас</Link></li>
            <li><Link href="/warranty" className="hover:text-white transition-colors">Гарантия</Link></li>
            <li><Link href="/promo" className="hover:text-white transition-colors">Акция</Link></li>
            <li><Link href="/shops" className="hover:text-white transition-colors">Наши магазины</Link></li>
          </ul>
        </div>

        {/* колонка услуги */}
        <div className="flex flex-col gap-3">
          <h3 className="text-white font-bold text-sm tracking-wide">Услуги</h3>
          <ul className="flex flex-col gap-2 text-[13px] font-medium">
            <li><Link href="/services" className="hover:text-white transition-colors">Услуги</Link></li>
            <li><Link href="/payment-methods" className="hover:text-white transition-colors">Способы оплаты</Link></li>
            <li><Link href="/installment" className="hover:text-white transition-colors">Всё о рассрочке</Link></li>
            <li><Link href="/partnership" className="hover:text-white transition-colors">Партнёрство</Link></li>
            <li><Link href="/returns" className="hover:text-white transition-colors">Возврат товара</Link></li>
          </ul>
        </div>

        {/* колонка для покупателей */}
        <div className="flex flex-col gap-3">
          <h3 className="text-white font-bold text-sm tracking-wide">Для покупателей</h3>
          <ul className="flex flex-col gap-2 text-[13px] font-medium">
            <li><Link href="/delivery" className="hover:text-white transition-colors">Доставка</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Связаться с нами!</Link></li>
            <li><Link href="/service-center" className="hover:text-white transition-colors">Сервисный центр</Link></li>
            <li><Link href="/feedback" className="hover:text-white transition-colors">Оставить отзыв</Link></li>
            <li><Link href="/jobs" className="hover:text-white transition-colors">Вакансии</Link></li>
          </ul>
        </div>

      </div>

      {/* нижняя плашка с соцсетями */}
      <div className="max-w-7xl mx-auto w-full pt-6 flex flex-col sm:flex-row justify-end items-center gap-6">
        <div className="flex items-center gap-5">
          {/* телеграм */}
          <a href="https://t.me/mediapark_uz" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
            </svg>
          </a>
          {/* твиттер */}
          <a href="https://x.com/mediapark_uz" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          {/* инста */}
          <a href="https://www.instagram.com/mediapark_uzbekistan" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204 013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
          </a>
          {/* фейсбук */}
          <a href="https://www.facebook.com/mediapark.uz" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* плавающие кнопки справа звонок и наверх */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <a href="tel:+998712033333" className="w-12 h-12 bg-[#e64a19] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-orange-600 transition-colors animate-bounce">
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M6.62 10.79a15.15 15.15 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.01-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
          </svg>
        </a>
        <button onClick={scrollToTop} className="w-12 h-12 bg-[#e2e5eb] text-[#1c2430] rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors">
          <svg className="w-6 h-6 fill-current rotate-180" viewBox="0 0 24 24">
            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
          </svg>
        </button>
      </div>

    </footer>
  )
}