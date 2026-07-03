'use client'
import { useRouter } from 'next/navigation'
import { useLang } from '../context/LangContext'

export default function CategoryGrid() {
  const router = useRouter()
  const { t, lang } = useLang()

  const catsRu = [
    { id: 'smartphones', name: 'Смартфоны', icon: '📱' },
    { id: 'conditioners', name: 'Кондиционеры', icon: '❄️' },
    { id: 'fridges', name: 'Холодильники', icon: '🧊' },
    { id: 'tvs', name: 'Телевизоры', icon: '📺' },
    { id: 'washers', name: 'Стиральные машины', icon: '🧼' },
    { id: 'laptops', name: 'Ноутбуки', icon: '💻' },
    { id: 'vacuums', name: 'Пылесосы', icon: '🧹' },
    { id: 'juicers', name: 'Соковыжималки', icon: '🍹' },
    { id: 'coolers', name: 'Кулеры для воды', icon: '🚰' },
    { id: 'kettles', name: 'Электрочайники', icon: '🫖' },
    { id: 'all', name: t.allCats, icon: '➔', isAll: true }
  ]

  const catsUz = [
    { id: 'smartphones', name: 'Smartfonlar', icon: '📱' },
    { id: 'conditioners', name: 'Kondicionerlar', icon: '❄️' },
    { id: 'fridges', name: 'Xolodilniklar', icon: '🧊' },
    { id: 'tvs', name: 'Televizorlar', icon: '📺' },
    { id: 'washers', name: 'Kirim yuvish mashinalari', icon: '🧼' },
    { id: 'laptops', name: 'Noutbuklar', icon: '💻' },
    { id: 'vacuums', name: 'Changyutgichlar', icon: '🧹' },
    { id: 'juicers', name: 'Sharbat siquvchilar', icon: '🍹' },
    { id: 'coolers', name: 'Suv kulerlari', icon: '🚰' },
    { id: 'kettles', name: 'Elektr choynaklar', icon: '🫖' },
    { id: 'all', name: t.allCats, icon: '➔', isAll: true }
  ]

  const categories = lang === 'ru' ? catsRu : catsUz

  return (
    <div className="max-w-[1440px] mx-auto px-4 py-8">
      <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
        {t.mainTitle}
      </h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {categories.map((cat) => (
          <div
            key={cat.id}
            onClick={() => router.push(cat.isAll ? '/catalog' : `/catalog?type=${cat.id}`)}
            className={`p-4 rounded-2xl flex justify-between items-start h-28 cursor-pointer border border-transparent transition-all shadow-sm ${
              cat.isAll 
                ? 'bg-gray-100 hover:bg-gray-200 text-gray-900' 
                : 'bg-gray-50 hover:bg-white hover:border-gray-200 hover:shadow-md'
            }`}
          >
            <span className="text-xs font-bold text-gray-800 leading-tight pr-2">{cat.name}</span>
            <span className={`text-3xl ${cat.isAll ? 'mt-auto text-xl' : ''}`}>{cat.icon}</span>
          </div>
        ))}
      </div>
    </div>
  )
}