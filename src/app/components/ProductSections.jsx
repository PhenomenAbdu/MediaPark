'use client'
import { useRouter } from 'next/navigation'
import { useLang } from '../context/LangContext'
import { productSections } from '../data/products'
import { Scale, Heart } from 'lucide-react'

export default function ProductSections() {
  const router = useRouter()
  const { lang, addToCart, addToFav, addToCompare, t } = useLang()
  const currentSections = productSections[lang] || productSections.ru

  return (
    <div className="max-w-[1440px] mx-auto px-4 flex flex-col gap-12 py-6">
      {currentSections.map((section) => (
        <div key={section.id} className="w-full">
          
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-black text-gray-900 tracking-tight">{section.title}</h2>
            <button 
              onClick={() => router.push(`/catalog?section=${section.id}`)}
              className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold px-4 py-2 rounded-xl transition"
            >
              {lang === 'ru' ? 'Все >' : 'Barchasi >'}
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {section.products.map((prod) => (
              <div
                key={prod.id}
                onClick={() => router.push(`/product/${prod.id}`)}
                className="bg-white border border-gray-100 rounded-2xl p-4 flex flex-col justify-between relative shadow-sm hover:shadow-xl hover:border-gray-200 transition group cursor-pointer h-[420px]"
              >
                
                <div className="absolute top-3 left-3 flex flex-col gap-1 z-10">
                  {prod.badges.map((b, idx) => (
                    <span key={idx} className={`${b.bg} text-white text-[9px] font-extrabold px-2 py-0.5 rounded-md uppercase tracking-wider`}>
                      {b.text}
                    </span>
                  ))}
                </div>

                <div className="absolute top-3 right-3 flex flex-col gap-2 z-30 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity">
                  <button 
                    onClick={(e) => { 
                      e.preventDefault()
                      e.stopPropagation()
                      if (addToCompare) addToCompare(prod)
                    }}
                    className="w-8 h-8 rounded-full bg-white shadow border border-gray-100 flex items-center justify-center text-slate-500 hover:text-red-500 hover:bg-red-50 transition relative z-40"
                    title="Сравнить"
                    type="button"
                  >
                    <Scale className="w-4 h-4 stroke-[1.5] pointer-events-none" />
                  </button>
                  
                  <button 
                    onClick={(e) => { 
                      e.preventDefault()
                      e.stopPropagation()
                      if (addToFav) addToFav(prod)
                    }}
                    className="w-8 h-8 rounded-full bg-white shadow border border-gray-100 flex items-center justify-center text-slate-500 hover:text-red-500 hover:bg-red-50 transition relative z-40"
                    title="В избранное"
                    type="button"
                  >
                    <Heart className="w-4 h-4 stroke-[1.5] pointer-events-none" />
                  </button>
                </div>

                <div className="w-full h-44 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center text-5xl relative overflow-hidden select-none mt-2">
                  {prod.icon}
                  {prod.discount && (
                    <div className="absolute bottom-2 left-2 flex gap-1 items-center">
                      <span className="bg-yellow-400 text-gray-900 text-[10px] font-black px-1.5 py-0.5 rounded">
                        {prod.discount}
                      </span>
                      <span className="bg-red-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">
                        {t?.discount || (lang === 'ru' ? 'Скидка' : 'Chegirma')}
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex flex-col gap-2 flex-1 justify-between mt-4">
                  <p className="text-xs text-gray-800 font-bold line-clamp-3 leading-snug group-hover:text-red-600 transition">
                    {prod.name}
                  </p>

                  <div className="flex flex-col gap-3">
                    <span className="text-[10px] border border-blue-900 text-blue-900 font-bold px-2 py-1 rounded-lg w-max bg-blue-50/30">
                      {prod.monthly}
                    </span>

                    <div className="flex justify-between items-end">
                      <div className="flex flex-col">
                        {prod.oldPrice && (
                          <span className="text-[11px] text-gray-400 line-through font-medium">
                            {prod.oldPrice}
                          </span>
                        )}
                        <span className="text-base font-black text-gray-900 whitespace-nowrap">
                          {prod.price}
                        </span>
                      </div>

                      <button 
                        onClick={(e) => { 
                          e.preventDefault()
                          e.stopPropagation()
                          if (addToCart) addToCart(prod)
                        }}
                        className="bg-[#E31E24] hover:bg-red-700 text-white p-2.5 rounded-xl transition shadow-md shadow-red-100 flex items-center justify-center relative z-30"
                        type="button"
                      >
                        🛒
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      ))}
    </div>
  )
}