import React from 'react';


const categories = [
  { id: 'all', name: 'Все', active: true },
  { id: 'apps', name: 'Приложения' },
  { id: 'data', name: 'Данные' },
  { id: 'programs', name: 'Программы' },
  { id: 'tips', name: 'Советы' },
  { id: 'laptop', name: 'Ноутбук' },
  { id: 'cloud', name: 'Облака' },
  { id: 'smartphone', name: 'Смартфон' },
  { id: 'computer', name: 'Компьютер' },
  { id: 'news', name: 'Новости' },
  { id: 'lifehack', name: 'Лайфхак' },
  { id: 'internet', name: 'Интернет' },
  { id: 'tech', name: 'Современные технологии' },
  { id: 'ai', name: 'AI' },
];

const articles = [
  {
    id: 1,
    title: 'Как подготовить дом к Чемпионату мира по футболу...',
    description: 'Насколько важны качество телевизора, комфорт звука и...',
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=500&q=80', // Футбол / ТВ плейсхолдер
    views: 67,
    date: '05-06-2026',
  },
  {
    id: 2,
    title: 'Microsoft представила Project Solara — Android-платформу дл...',
    description: 'По словам Microsoft, такой подход позволит создавать более...',
    image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=500&q=80', // Гаджеты / Полки плейсхолдер
    views: 11,
    date: '05-06-2026',
  },
  {
    id: 3,
    title: 'Представлен доступный смартфон HONOR X7e',
    description: 'Устройство получило экран 120 Гц и аккумулятор емкостью до 7500 мА·ч.',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&q=80', // Смартфон плейсхолдер
    views: 86,
    date: '04-06-2026',
    badge: 'HONOR X7e'
  },
  {
    id: 4,
    title: 'Как правильно выбрать идеальный холодильник для...',
    description: 'В следующих руководствах приведены полезные рекомендации, которые...',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500&q=80', // Холодильники плейсхолдер
    views: 99,
    date: '02-06-2026',
  },
  {
    id: 5,
    title: 'Как правильно выбрать компьютерное кресло',
    description: 'Подробное руководство по выбору эргономичной мебели: от...',
    image: 'https://images.unsplash.com/photo-1505797149-43b0069ec26b?w=500&q=80', // Кресла плейсхолдер
    views: 28,
    date: '04-06-2026',
  }
];

export default function ArticlesPage() {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-6 py-8 bg-white font-sans text-[#1d1d1f]">
      {/* Шапка секции */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-[26px] font-bold tracking-tight text-[#161616]">Статьи</h2>
        <button className="flex items-center gap-1 px-4 py-2 bg-[#f5f5f7] hover:bg-[#e8e8ed] text-[#1d1d1f] text-sm font-medium rounded-xl transition-colors">
          Посмотреть все
          <svg className="w-4 h-4 text-[#86868b]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Горизонтальный скролл категорий */}
      <div className="flex items-center gap-2 overflow-x-auto pb-6 scrollbar-none snap-x -mx-6 px-6">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`whitespace-nowrap px-4 py-2 text-sm rounded-full transition-colors snap-shrink-0 ${
              category.active
                ? 'bg-[#1a202c] text-white font-medium'
                : 'bg-[#f5f5f7] text-[#86868b] hover:bg-[#e8e8ed] hover:text-[#1d1d1f]'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Сетка карточек */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {articles.map((article) => (
          <div key={article.id} className="flex flex-col group cursor-pointer">
            {/* Картинка */}
            <div className="relative aspect-[1.6/1] w-full rounded-2xl overflow-hidden bg-[#f5f5f7] mb-4">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
              />
              {article.badge && (
                <div className="absolute top-1/2 right-4 -translate-y-1/2 text-xs font-bold text-black/40 tracking-wider">
                  {article.badge}
                </div>
              )}
            </div>

            {/* Заголовок */}
            <h3 className="text-[15px] font-bold leading-[1.35] text-[#161616] mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
              {article.title}
            </h3>

            {/* Описание */}
            <p className="text-[13px] text-[#86868b] leading-[1.4] mb-4 line-clamp-2">
              {article.description}
            </p>

            {/* Мета-данные (просмотры и дата) */}
            <div className="mt-auto flex items-center gap-3 text-[12px] text-[#86868b]">
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-[#86868b]/70" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <span>{article.views}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-[#86868b]/70" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{article.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}