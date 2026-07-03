  'use client'
  import { useLang } from '../context/LangContext'

  export default function CategoryTabs() {
    const { t, lang } = useLang()

    const tabsRu = [
      { id: 1, name: t.actions, isBadge: true },
      { id: 2, name: 'Dyson' },
      { id: 3, name: 'Apple' },
      { id: 4, name: 'Samsung' },
      { id: 5, name: 'Смартфоны' },
      { id: 6, name: 'Кондиционеры' },
      { id: 7, name: 'Вентиляторы' },
      { id: 8, name: 'Соковыжималки' },
      { id: 9, name: 'Холодильники' },
      { id: 10, name: 'Морозильники' },
      { id: 11, name: 'Мелкая техника для кухни' },
      { id: 12, name: 'Телевизоры' },
      { id: 13, name: t.allGoods }
    ]

    const tabsUz = [
      { id: 1, name: t.actions, isBadge: true },
      { id: 2, name: 'Dyson' },
      { id: 3, name: 'Apple' },
      { id: 4, name: 'Samsung' },
      { id: 5, name: 'Smartfonlar' },
      { id: 6, name: 'Kondicionerlar' },
      { id: 7, name: 'Ventilyatorlar' },
      { id: 8, name: 'Sharbat siquvchilar' },
      { id: 9, name: 'Xolodilniklar' },
      { id: 10, name: 'Muzlatgichlar' },
      { id: 11, name: 'Oshxona uchun kichik texnika' },
      { id: 12, name: 'Televizorlar' },
      { id: 13, name: t.allGoods }
    ]

    const currentTabs = lang === 'ru' ? tabsRu : tabsUz

    return (
      <div className="w-full bg-white border-b border-gray-100 py-3 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth whitespace-nowrap pb-1">
            {currentTabs.map((tab) => (
              <button
                key={tab.id}
                className={`text-xs font-medium px-4 py-2 rounded-full border transition shrink-0 ${
                  tab.isBadge
                    ? 'bg-[#39B54A] text-white border-[#39B54A] hover:bg-opacity-95'
                    : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-gray-400'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    )
  }