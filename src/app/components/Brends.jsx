import React from 'react'

const brands = [
  { id: 1, name: 'LG', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/LG_logo_%282015%29.svg', alt: 'LG' },
  { id: 2, name: 'Artel', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Artel_logo.svg', alt: 'Artel', isBgGreen: true },
  { id: 3, name: 'Apple Authorized Reseller', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg', alt: 'Apple', isApple: true },
  { id: 4, name: 'DeLonghi', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/De%27Longhi_logo.svg', alt: 'DeLonghi' },
  { id: 5, name: 'Tefal', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Tefal_logo.svg', alt: 'Tefal' },
  { id: 6, name: 'Dyson', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Dyson_logo.svg', alt: 'Dyson' },
  { id: 7, name: 'Karcher', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/53/K%C3%A4rcher_logo.svg', alt: 'Karcher', isKarcher: true },
  { id: 8, name: 'Vivo', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Vivo_logo.svg', alt: 'Vivo' },
  { id: 9, name: 'Smeg', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Smeg_logo.svg', alt: 'Smeg' },
  { id: 10, name: 'Rowenta', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Rowenta_logo.svg', alt: 'Rowenta' },
  { id: 11, name: 'Bork', logo: 'https://upload.wikimedia.org/wikipedia/ru/b/bc/Bork_logo.svg', alt: 'Bork' },
  { id: 12, name: 'Samsung', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg', alt: 'Samsung' }
]

export default function Brands() {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-6 py-8 bg-white font-sans">
      {/* Заголовок секции */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[22px] font-bold tracking-tight text-[#0f172a]">Популярные бренды</h2>
        <button className="flex items-center gap-1.5 px-4 py-1.5 bg-[#f8fafc] hover:bg-[#f1f5f9] text-[#0f172a] text-sm font-medium rounded-xl border border-[#f1f5f9] transition-colors">
          <span>Все</span>
          <svg className="w-3.5 h-3.5 text-[#64748b]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Сетка брендов */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {brands.map((brand) => (
          <div
            key={brand.id}
            className="flex items-center justify-center h-[108px] rounded-2xl border border-[#e2e8f0] bg-white hover:shadow-md hover:border-[#cbd5e1] transition-all duration-200 cursor-pointer p-4"
          >
            {brand.isBgGreen ? (
              <div className="bg-[#036534] w-full h-full max-w-[124px] max-h-[58px] rounded-xl flex items-center justify-center p-3">
                <img src={brand.logo} alt={brand.alt} className="w-full h-full object-contain brightness-0 invert" />
              </div>
            ) : brand.isApple ? (
              <div className="flex items-center gap-2">
                <img src={brand.logo} alt={brand.alt} className="h-9 w-auto object-contain" />
                <div className="flex flex-col text-[11px] font-semibold text-[#1e293b] leading-[1.1]">
                  <span>Authorized</span>
                  <span>Reseller</span>
                </div>
              </div>
            ) : brand.isKarcher ? (
              <div className="flex flex-col items-center">
                <img src={brand.logo} alt={brand.alt} className="h-6 w-auto object-contain" />
                <div className="w-[120px] h-[7px] bg-[#ffed00] mt-1"></div>
              </div>
            ) : (
              <img
                src={brand.logo}
                alt={brand.alt}
                className="max-w-full max-h-[48px] object-contain"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}