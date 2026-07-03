'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Search, MapPin, Clock, Phone } from 'lucide-react'

const storesData = [
  {
    id: 1,
    name: 'MEDIAPARK Келес',
    address: '111100, Обл. Ташкент, Келес, ул. Келес йули, 104',
    time: '09:00 - 21:00',
    phone: '+998 71 203 33 33',
    lat: 41.4022,
    lng: 69.2044
  },
  {
    id: 2,
    name: 'MEDIAPARK Маргилан',
    address: 'Маргилан, ул. Бурхануддина Маргинани, 59 ТЦ Ansor',
    time: '09:00 - 22:00',
    phone: '+998 71 203 33 33',
    lat: 40.4714,
    lng: 71.7289
  },
  {
    id: 3,
    name: 'MEDIAPARK Каракамыш',
    address: 'Ташкент, Алмазарский район, улица Мухбир',
    time: '10:00 - 22:00',
    phone: '+998 71 203 33 33',
    lat: 41.3572,
    lng: 69.2135
  },
  {
    id: 4,
    name: 'MEDIAPARK Альфраганус',
    address: 'Ташкент, Мирабадский район, Тонг Юлдузи МФЙ, улица Кушкуприк, 18,30 дом',
    time: '10:00 - 20:00',
    phone: '+998 71 203 33 33',
    lat: 41.2936,
    lng: 69.2995
  },
  {
    id: 5,
    name: 'MEDIAPARK Ургенч 2',
    address: '220100, Обл. Хорезм, Город Ургенч, улица Ёгду 40.',
    time: '09:00 - 19:00',
    phone: '+998 71 203 33 33',
    lat: 41.5542,
    lng: 60.6322
  },
  {
    id: 6,
    name: 'MEDIAPARK Андижан',
    address: '170100, Город Андижан, улица Бобура Шох, 32.',
    time: '10:00 - 22:00',
    phone: '+998 71 203 33 33',
    lat: 40.7484,
    lng: 72.3594
  },
  {
    id: 7,
    name: 'MEDIAPARK Ц-5',
    address: '100017, Ташкент, Юнусабадский район, ул. Ш.Рашидова 16А',
    time: '09:00 - 21:00',
    phone: '+998 71 203 33 33',
    lat: 41.3262,
    lng: 69.2741
  },
  {
    id: 8,
    name: 'MEDIAPARK Караташ',
    address: '100021, Ташкент, Шайхонтохурский район, ул. Караташ, 11А',
    time: '09:00 - 22:00',
    phone: '+998 71 203 33 33',
    lat: 41.3125,
    lng: 69.2415
  },
  {
    id: 9,
    name: 'MEDIAPARK Ургенч',
    address: '220100, Хорезмская область, Ургенч, улица Аль Хорезми 66',
    time: '10:00 - 20:00',
    phone: '+998 71 203 33 33',
    lat: 41.5512,
    lng: 60.6277
  },
  {
    id: 10,
    name: 'MEDIAPARK Джизак',
    address: '130100 г.Джизак, улица Ш.Рашидов',
    time: '10:00 - 22:00',
    phone: '+998 71 203 33 33',
    lat: 40.1158,
    lng: 67.8422
  },
  {
    id: 11,
    name: 'MEDIAPARK Кунград',
    address: '230600, Каракалпакстан, Кунград, филиал, магазин электроники, адрес, контакты',
    time: '09:00 - 19:00',
    phone: '+998 71 203 33 33',
    lat: 43.0858,
    lng: 58.8475
  },
  {
    id: 12,
    name: 'MEDIAPARK Бухара',
    address: '200100, г.Бухара, ул. Ислама Каримова, 108',
    time: '10:00 - 22:00',
    phone: '+998 71 203 33 33',
    lat: 39.7672,
    lng: 64.4533
  },
  {
    id: 13,
    name: 'MEDIAPARK Навои',
    address: '210100, г. Навои, 17 проспект, ул М Таробий, дом 105А',
    time: '08:00 - 20:00',
    phone: '+998 71 203 33 33',
    lat: 40.0983,
    lng: 65.3678
  },
  {
    id: 14,
    name: 'MEDIAPARK Гиждуван',
    address: '200500, Бухарская обл. , Гиждуванский р-н, Памоза МФЙ ,ул Ю Хамадоний',
    time: '09:00 - 21:00',
    phone: '+998 71 203 33 33',
    lat: 40.1014,
    lng: 64.6775
  },
  {
    id: 15,
    name: 'MEDIAPARK Беруний',
    address: '230200, Каракалпакстан, Берунийский район, Беруни МСГ, улица Беруни, дом 14.',
    time: '09:00 - 19:00',
    phone: '+998 71 203 33 33',
    lat: 41.6914,
    lng: 60.7525
  },
  {
    id: 16,
    name: 'MEDIAPARK Турткул',
    address: '231200, Каракалпакстан, Турткульский район, Турткул МСГ, улица Замандош, дом 1 Б',
    time: '10:00 - 20:00',
    phone: '+998 71 203 33 33',
    lat: 41.5547,
    lng: 61.0114
  },
  {
    id: 17,
    name: 'MEDIAPARK Шахрисабз',
    address: '181300, Улица Шелковый путь, Китаб, город Шахрисабз, Кашкадарьинская область, Узбекистан',
    time: '09:00 - 21:00',
    phone: '+998 71 203 33 33',
    lat: 39.0544,
    lng: 66.8333
  },
  {
    id: 18,
    name: 'MEDIAPARK Чимбай',
    address: '231400, Каракалпакстан, г. Чимбай, ул. Ибрайым Юсупов, дом 78',
    time: '10:00 - 20:00',
    phone: '+998 71 203 33 33',
    lat: 42.9286,
    lng: 59.7756
  }
]

function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371
  const dLat = (lat2 - lat1) * Math.PI / 180
  const dLon = (lon2 - lon1) * Math.PI / 180
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLon/2) * Math.sin(dLon/2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
  return R * c
}

export default function StoresPage() {
  const [search, setSearch] = useState('')
  const [openNow, setOpenNow] = useState(false)
  const [nearby, setNearby] = useState(false)
  const [userCoords, setUserCoords] = useState(null)
  
  const mapRef = useRef(null)
  const mapInstance = useRef(null)
  const userPlacemarkRef = useRef(null)

  // Инициализация живой карты Яндекс через скрипт
  useEffect(() => {
    const loadYandexMaps = () => {
      if (window.ymaps) {
        window.ymaps.ready(initMap)
        return
      }

      const script = document.createElement('script')
      // Для продакшена сюда можно дописать &apikey=твой_ключ, но для разработки работает и так
      script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU'
      script.async = true
      script.onload = () => {
        window.ymaps.ready(initMap)
      }
      document.body.appendChild(script)
    }

    const initMap = () => {
      if (mapInstance.current) return

      // Создаем карту с центром в Ташкенте
      const map = new window.ymaps.Map(mapRef.current, {
        center: [41.3111, 69.2401],
        zoom: 11,
        controls: [] // Отключаем дефолтные кнопки, у нас кастомный дизайн один-в-один
      })

      mapInstance.current = map

      // Наносим все точки из нашего большого списка
      storesData.forEach((store) => {
        const placemark = new window.ymaps.Placemark(
          [store.lat, store.lng],
          {
            iconContent: 'MP',
            balloonContentHeader: `<b style="color:#0f172a;font-family:sans-serif;">${store.name}</b>`,
            balloonContentBody: `
              <div style="font-family:sans-serif;font-size:12px;color:#475569;line-height:1.4;">
                <p>${store.address}</p>
                <p><b>Время:</b> ${store.time}</p>
                <p><b>Тел:</b> ${store.phone}</p>
              </div>
            `
          },
          {
            preset: 'islands#redCircleIcon', // Красный круглый значок
            hideIconOnBalloonOpen: false
          }
        )
        map.geoObjects.add(placemark)
      })
    }

    loadYandexMaps()
  }, [])

  // Синхронизация синей метки юзера на живой карте
  useEffect(() => {
    if (!mapInstance.current || !window.ymaps) return

    if (userCoords) {
      if (userPlacemarkRef.current) {
        userPlacemarkRef.current.geometry.setCoordinates([userCoords.lat, userCoords.lng])
      } else {
        userPlacemarkRef.current = new window.ymaps.Placemark(
          [userCoords.lat, userCoords.lng],
          { iconContent: 'Я' },
          { preset: 'islands#blueCircleIcon' }
        )
        mapInstance.current.geoObjects.add(userPlacemarkRef.current)
      }
      // Плавно летим к локации пользователя
      mapInstance.current.setCenter([userCoords.lat, userCoords.lng], 11, { duration: 400 })
    } else {
      if (userPlacemarkRef.current) {
        mapInstance.current.geoObjects.remove(userPlacemarkRef.current)
        userPlacemarkRef.current = null
      }
    }
  }, [userCoords])

  const handleNearbyChange = () => {
    if (!nearby) {
      if (!navigator.geolocation) {
        alert('Геолокация не поддерживается твоим браузером')
        return
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          setUserCoords({ lat: latitude, lng: longitude })
          setNearby(true)
        },
        (error) => {
          console.error(error)
          setNearby(false)
          setUserCoords(null)
          if (error.code === 1) {
            alert('Доступ отклонен. Пожалуйста, разреши геолокацию в настройках браузера.')
          } else {
            alert('Не удалось определить координаты.')
          }
        }
      )
    } else {
      setNearby(false)
      setUserCoords(null)
    }
  }

  // Клик по карточке плавно перемещает карту на этот филиал
  const handleStoreClick = (store) => {
    if (mapInstance.current) {
      mapInstance.current.setCenter([store.lat, store.lng], 14, {
        checkZoomRange: true,
        duration: 500
      })
    }
  }

  // Зумирование карты через наши красивые кнопки
  const zoomIn = () => {
    if (mapInstance.current) {
      mapInstance.current.setZoom(mapInstance.current.getZoom() + 1, { duration: 200 })
    }
  }

  const zoomOut = () => {
    if (mapInstance.current) {
      mapInstance.current.setZoom(mapInstance.current.getZoom() - 1, { duration: 200 })
    }
  }

  const processedStores = storesData
    .filter(store => 
      store.name.toLowerCase().includes(search.toLowerCase()) ||
      store.address.toLowerCase().includes(search.toLowerCase())
    )
    .map(store => {
      if (userCoords) {
        const distance = getDistance(userCoords.lat, userCoords.lng, store.lat, store.lng)
        return { ...store, distance }
      }
      return { ...store, distance: null }
    })

  if (nearby && userCoords) {
    processedStores.sort((a, b) => a.distance - b.distance)
  }

  return (
    <div className="max-w-360 mx-auto p-8 font-sans text-[#1e293b]">
      <h1 className="text-3xl font-bold mb-6 text-[#0f172a]">Наши магазины</h1>
      
      <div className="flex flex-col lg:flex-row gap-6 h-150">
        {/* Левая панель */}
        <div className="w-full lg:w-100 bg-white rounded-3xl p-5 shadow-sm border border-gray-100 flex flex-col h-full">
          <div className="relative mb-4">
            <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Поиск магазина"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-[#f8fafc] rounded-2xl border-none outline-none text-sm placeholder-gray-400 focus:ring-2 focus:ring-gray-200 transition"
            />
          </div>

          <div className="flex gap-3 mb-5">
            <label className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl text-xs font-medium cursor-pointer select-none hover:bg-gray-50 transition">
              <input 
                type="checkbox" 
                checked={openNow} 
                onChange={() => setOpenNow(!openNow)} 
                className="rounded text-red-500 focus:ring-0 w-3.5 h-3.5"
              />
              Открыто сейчас
            </label>
            <label className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl text-xs font-medium cursor-pointer select-none hover:bg-gray-50 transition">
              <input 
                type="checkbox" 
                checked={nearby} 
                onChange={handleNearbyChange} 
                className="rounded text-red-500 focus:ring-0 w-3.5 h-3.5"
              />
              Рядом
            </label>
          </div>

          <div className="flex-1 overflow-y-auto pr-1 space-y-3 custom-scrollbar">
            {processedStores.map((store) => (
              <div 
                key={store.id} 
                onClick={() => handleStoreClick(store)}
                className="p-4 border border-gray-100 rounded-2xl hover:shadow-md transition cursor-pointer bg-white relative overflow-hidden active:scale-[0.99]"
              >
                <div className="flex gap-3 items-start">
                  <MapPin className="h-5 w-5 text-gray-400 mt-0.5 shrink-0" />
                  <div className="w-full">
                    <div className="flex justify-between items-start gap-2 mb-1">
                      <h3 className="font-bold text-sm text-[#0f172a]">{store.name}</h3>
                      {store.distance !== null && (
                        <span className="text-[10px] bg-red-50 text-red-500 font-semibold px-2 py-0.5 rounded-full shrink-0">
                          {store.distance < 1 ? `${(store.distance * 1000).toFixed(0)} м` : `${store.distance.toFixed(1)} км`}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed mb-3">{store.address}</p>
                    
                    <div className="flex flex-col gap-1.5 text-xs font-medium text-[#1e293b]">
                      <div className="flex items-center gap-2">
                        <Clock className="h-3.5 w-3.5 text-gray-400" />
                        <span>{store.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-3.5 w-3.5 text-gray-400" />
                        <span>{store.phone}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {processedStores.length === 0 && (
              <p className="text-sm text-gray-400 text-center mt-4">Ничего не найденоо</p>
            )}
          </div>
        </div>

        {/* Правая панель — НАСТОЯЩАЯ ЖИВАЯ КАРТА */}
        <div className="flex-1 bg-[#f1f5f9] rounded-3xl relative overflow-hidden border border-gray-100 min-h-100 lg:min-h-full">
          
          {/* Контейнер для рендера Яндекс Карт */}
          <div ref={mapRef} className="w-full h-full absolute inset-0" />
          
          {/* Кастомные кнопки зума, привязанные к инстансу карты */}
          <div className="absolute left-4 top-1/3 flex flex-col gap-1 bg-white p-1 rounded-lg shadow-sm z-10">
            <button onClick={zoomIn} className="w-8 h-8 flex items-center justify-center font-bold text-gray-600 hover:bg-gray-100 rounded transition active:scale-95">+</button>
            <hr className="border-gray-200" />
            <button onClick={zoomOut} className="w-8 h-8 flex items-center justify-center font-bold text-gray-600 hover:bg-gray-100 rounded transition active:scale-95">-</button>
          </div>

          {/* Информационный футер поверх карты */}
          <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center text-[10px] bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-gray-500 z-10 shadow-sm pointer-events-auto">
            <div className="flex gap-3">
              <span className="cursor-pointer hover:underline text-blue-600 font-medium" onClick={() => window.open('https://maps.yandex.ru', '_blank')}>Открыть в Яндекс Картах</span>
              <span className="cursor-pointer hover:underline">Создать свою карту</span>
            </div>
            <div>© Яндекс Условия использования</div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
        }
        /* Скрываем стандартные копирайты яндекса внизу, так как мы сделали кастомный футер по дизайну */
        .ymaps-2-1-79-copyrights-promo { display: none !important; }
        .ymaps-2-1-79-map-copyrights-global { display: none !important; }
      `}</style>

      <footer />
    </div>
  )
}