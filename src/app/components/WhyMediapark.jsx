import React from 'react'

const advantages = [
  {
    id: 1,
    title: 'Удобная доставка',
    description: 'Гарантируем надежную и безопасную доставку вашего товара в выбранное вами время.',
    icon: (
      <svg className="w-6 h-6 text-[#dc2626]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    )
  },
  {
    id: 2,
    title: 'Любой способ оплаты',
    description: 'Оплачивайте покупки не только через национальные платёжные системы, но и с помощью VISA и Mastercard.',
    icon: (
      <svg className="w-6 h-6 text-[#dc2626]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    id: 3,
    title: 'Гарантия и надёжный сервис',
    description: 'Гарантия на 1 год на все товары, включая бесплатную доставку и ремонт от компании...',
    icon: (
      <svg className="w-6 h-6 text-[#dc2626]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    id: 4,
    title: 'Доступные и низкие цены',
    description: 'Мы предлагаем вам товары по конкурентоспособным ценам.',
    icon: (
      <svg className="w-6 h-6 text-[#dc2626]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h10v10H7zM9 11h6M9 13h6" />
      </svg>
    )
  },
  {
    id: 5,
    title: 'Магазины по всему Узбекистану',
    description: 'У нас есть 38 торговых точек по всей стране.',
    icon: (
      <svg className="w-6 h-6 text-[#dc2626]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5" />
      </svg>
    )
  },
  {
    id: 6,
    title: 'Грандиозные акции и скидки',
    description: 'У нас всегда действуют ежедневные скидки и большие ежемесячные акции.',
    icon: (
      <svg className="w-6 h-6 text-[#dc2626]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: 7,
    title: 'Можно и в рассрочку',
    description: 'Оплачивайте по частям и получите все, что хотите прямо сейчас.',
    icon: (
      <svg className="w-6 h-6 text-[#dc2626]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    )
  },
  {
    id: 8,
    title: 'Услуга самовывоза',
    description: 'Заберите свои покупки, когда вам будет удобно.',
    icon: (
      <svg className="w-6 h-6 text-[#dc2626]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5a2 2 0 10-2 2h2zm0 0h4l1 3H7l1-3h4z" />
      </svg>
    )
  },
  {
    id: 9,
    title: 'Обмен и возврат товаров',
    description: 'При наличии дефектов, вы можете легко обменять товар на другой или вернуть деньги.',
    icon: (
      <svg className="w-6 h-6 text-[#dc2626]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: 10,
    title: 'Качественное обслуживание',
    description: 'Наши консультанты каждый месяц проходят спец-обучения для улучшения качества сервиса.',
    icon: (
      <svg className="w-6 h-6 text-[#dc2626]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    id: 11,
    title: 'Наличие предзаказов',
    description: 'Вы можете заранее заказать самые горячие новинки вместе с Mediapark.',
    icon: (
      <svg className="w-6 h-6 text-[#dc2626]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    )
  }
]

export default function WhyMediapark() {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-6 py-8 bg-[#f8fafc] font-sans relative">
      {/* Заголовок */}
      <h2 className="text-[24px] font-bold tracking-tight text-[#0f172a] mb-6">
        Почему именно Mediapark?
      </h2>

      {/* Сетка карточек преимуществ */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {advantages.map((item) => (
          <div
            key={item.id}
            className="flex flex-col bg-white border border-[#e2e8f0] rounded-2xl p-5 hover:shadow-sm transition-shadow duration-200"
          >
            {/* Иконка с нежно-красным фоном */}
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#fef2f2] mb-4 shrink-0">
              {item.icon}
            </div>

            {/* Заголовок преимущества */}
            <h3 className="text-[15px] font-bold leading-tight text-[#0f172a] mb-2">
              {item.title}
            </h3>

            {/* Описание преимущества */}
            <p className="text-[13px] text-[#64748b] leading-[1.45]">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* Плавающие кнопки справа снизу (как на скрине) */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-2 z-50">
        <button className="flex items-center justify-center w-12 h-12 rounded-full bg-[#dc2626] text-white shadow-lg hover:bg-[#b91c1c] transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </button>
        <button className="flex items-center justify-center w-12 h-12 rounded-full bg-[#e2e8f0] text-[#64748b] shadow-md hover:bg-[#cbd5e1] transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>
    </div>
  )
}