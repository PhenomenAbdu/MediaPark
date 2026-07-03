import React from 'react'

export default function AppBanner() {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-6 py-4 bg-white font-sans overflow-hidden">
      {/* Главный контейнер баннера с серым фоном */}
      <div className="relative w-full bg-[#f8fafc] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row justify-between items-center min-h-[380px] lg:h-[400px]">
        
        {/* Левая часть: тексты и кнопки скачивания */}
        <div className="flex flex-col max-w-[480px] z-10 w-full md:w-auto">
          {/* Логотип */}
          <div className="flex items-center text-2xl font-black tracking-tight mb-8">
            <span className="text-[#e31e24]">MEDIA</span>
            <span className="text-[#0f172a]">PARK</span>
          </div>

          {/* Заголовок */}
          <h2 className="text-[28px] md:text-[34px] font-bold text-[#0f172a] leading-[1.2] mb-4">
            Твой магазин в Твоём телефоне
          </h2>

          {/* Описание */}
          <p className="text-[14px] md:text-[15px] text-[#64748b] leading-[1.5] mb-8 max-w-[400px]">
            Найдите смартфоны, планшеты и все виды актуальной электроники в мобильном приложении MEDIAPARK.
          </p>

          {/* Кнопки сторов */}
          <div className="flex flex-wrap gap-2.5">
            {/* App Store */}
            <a href="#" className="flex items-center gap-2 bg-black hover:bg-zinc-900 text-white px-4 py-2 rounded-xl transition-colors w-[135px]">
              <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.22.67-2.94 1.5-.64.74-1.2 1.88-1.05 3 .1 1.12 1.14 2.14 2.08 2.14.07 0 .14 0 .22-.01.62-.83.64-.76.7-1.57z"/>
              </svg>
              <div className="flex flex-col text-left">
                <span className="text-[9px] text-zinc-400 leading-none">доступно в</span>
                <span className="text-[12px] font-bold leading-tight">App Store</span>
              </div>
            </a>

            {/* Google Play */}
            <a href="#" className="flex items-center gap-2 bg-black hover:bg-zinc-900 text-white px-4 py-2 rounded-xl transition-colors w-[135px]">
              <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                <path d="M3.25 2.5c-.14.15-.25.39-.25.71v17.58c0 .32.11.56.25.71l.06.06L13.29 11.6v-.2L3.31 1.44l-.06.06zM16.62 8.27l-3.33 3.33v.2l3.33 3.33.07-.04 3.94-2.24c1.12-.64 1.12-1.68 0-2.32l-3.94-2.24-.07-.02zM12.33 11.5L3.75 2.92a.57.57 0 00-.44-.04l10.02 10.02-1-1.4zM3.31 21.12c.1.04.24.03.38-.05l8.64-8.64 1.01 1.01-10.03 10.03v-.35z"/>
              </svg>
              <div className="flex flex-col text-left">
                <span className="text-[9px] text-zinc-400 leading-none">доступно в</span>
                <span className="text-[12px] font-bold leading-tight">Google Play</span>
              </div>
            </a>

            {/* App Gallery */}
            <a href="#" className="flex items-center gap-2 bg-black hover:bg-zinc-900 text-white px-4 py-2 rounded-xl transition-colors w-[135px]">
              <div className="w-5 h-5 bg-[#e31e24] rounded-md flex items-center justify-center p-0.5 shrink-0">
                <svg className="w-full h-full fill-white" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5zm1.5-4c-.55 0-1-.45-1-1V9c0-.55.45-1 1-1s1.45.45 1.45 1v2c0 .55-.45 1-1.45 1z"/>
                </svg>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[9px] text-zinc-400 leading-none">доступно в</span>
                <span className="text-[12px] font-bold leading-tight">App Gallery</span>
              </div>
            </a>
          </div>
        </div>

        {/* Средняя часть: QR-код со стрелочкой */}
        <div className="relative flex items-center justify-center my-8 md:my-0 z-10">
          <div className="bg-white p-4 rounded-3xl border border-[#e2e8f0] shadow-sm flex items-center justify-center w-[160px] h-[160px]">
            {/* Стандартный плейсхолдер QR-кода */}
            <img 
              src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://mediapark.uz" 
              alt="QR Code" 
              className="w-full h-full object-contain"
            />
          </div>
          {/* Красная изогнутая стрелка слева от QR-кода */}
          <div className="absolute -left-12 bottom-2 hidden lg:block">
            <svg className="w-10 h-10 text-[#e31e24]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" className="hidden" />
              {/* Кастомный набросок изогнутой стрелки */}
              <path d="M3 19c4-1 8-5 9-10M12 9l-3 1m3-1l1 3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* Правая часть: Телефон с макетом приложения внутри */}
        <div className="relative w-full md:w-auto flex justify-center md:absolute md:right-10 md:bottom-0 lg:right-16 h-[280px] md:h-[350px] lg:h-[390px] aspect-[4/5]">
          {/* Красный узорный фон сзади телефона */}
          <div className="absolute right-[-40px] bottom-[-20px] w-[340px] h-[340px] bg-[#e31e24] rounded-full opacity-90 filter blur-[0px] flex items-center justify-center text-white/10 text-[200px] font-black select-none pointer-events-none overflow-hidden">
            <div className="absolute inset-0 w-full h-full opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
          </div>

          {/* Корпус телефона */}
          <div className="relative bg-[#1e293b] border-4 border-[#334155] rounded-t-[40px] w-[260px] h-full shadow-2xl p-2.5 pb-0 flex flex-col overflow-hidden z-10">
            {/* Островок / Динамический остров сверху экрана */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-30 flex items-center justify-between px-2">
              <div className="w-2 h-2 bg-zinc-800 rounded-full"></div>
              <div className="w-3 h-1 bg-zinc-900 rounded-full"></div>
            </div>

            {/* Внутренний экран смартфона */}
            <div className="w-full h-full bg-white rounded-t-[32px] pt-7 px-3 flex flex-col text-[#0f172a]">
              {/* Строка поиска */}
              <div className="flex items-center gap-2 border border-[#e2e8f0] rounded-xl px-2.5 py-1.5 mb-4 text-[#94a3b8] text-[11px]">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" className="hidden" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span>искать товары и категории</span>
              </div>

              {/* Секция Категории */}
              <div className="flex justify-between items-center mb-3">
                <span className="text-[13px] font-bold">Электроника</span>
                <span className="text-[11px] text-[#64748b]">Все &gt;</span>
              </div>

              {/* Сетка товаров внутри телефона */}
              <div className="grid grid-cols-3 gap-2 text-center text-[9px] font-bold">
                <div className="flex flex-col items-center bg-[#f8fafc] p-1.5 rounded-xl">
                  <div className="h-12 w-full flex items-center justify-center mb-1">📱</div>
                  <span className="text-zinc-600">Смартфоны</span>
                </div>
                <div className="flex flex-col items-center bg-[#f8fafc] p-1.5 rounded-xl">
                  <div className="h-12 w-full flex items-center justify-center mb-1">💻</div>
                  <span className="text-zinc-600">Ноутбуки</span>
                </div>
                <div className="flex flex-col items-center bg-[#f8fafc] p-1.5 rounded-xl">
                  <div className="h-12 w-full flex items-center justify-center mb-1">🖥️</div>
                  <span className="text-zinc-600">Компьютеры</span>
                </div>
                <div className="flex flex-col items-center bg-[#f8fafc] p-1.5 rounded-xl">
                  <div className="h-12 w-full flex items-center justify-center mb-1">🔌</div>
                  <span className="text-zinc-600">Аксессуары</span>
                </div>
                <div className="flex flex-col items-center bg-[#f8fafc] p-1.5 rounded-xl">
                  <div className="h-12 w-full flex items-center justify-center mb-1">🎧</div>
                  <span className="text-zinc-600">Наушники</span>
                </div>
                <div className="flex flex-col items-center bg-[#f8fafc] p-1.5 rounded-xl">
                  <div className="h-12 w-full flex items-center justify-center mb-1">⌚</div>
                  <span className="text-zinc-600">Умные часы</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}