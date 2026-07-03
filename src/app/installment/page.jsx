'use client'

import React from 'react'

export default function InstallmentPage() {
  // Единый JSON массив для всего контента страницы рассрочки
  const installmentData = {
    bigBanners: [
      {
        id: 1,
        title: 'Top Banner',
        icon: 'https://mediapark.uz/images/Installment.2.ru.jpg'
      },
      {
        id: 2,
        title: 'Main Banner',
        icon: 'https://mediapark.uz/images/Installment.1.ru.jpg'
      }
    ],
    features: [
      {
        id: 1,
        title: 'Всё что нужно для оформления – номер телефона и ИИН',
        icon: 'https://mediapark.uz/images/aboutus_tolov1.svg'
      },
      {
        id: 2,
        title: 'Ты выбираешь лучшее предложение от банков',
        icon: 'https://mediapark.uz/images/aboutus_tolov2.svg',
        highlighted: true
      },
      {
        id: 3,
        title: 'Предложение от всех банков-партнёров за 5 минуты',
        icon: 'https://mediapark.uz/images/aboutus_tolov3.svg'
      }
    ],
    bookingSteps: [
      {
        id: 1,
        title: '1. Выберите понравившийся Вам товар, добавьте товар в корзину.',
        icon: 'https://mediapark.uz/images/booking-steps-1.png'
      },
      {
        id: 2,
        title: '2. Чтобы оформить заказ войдите в корзинку и нажмите кнопку Оформить',
        icon: 'https://mediapark.uz/images/booking-steps-2.png'
      },
      {
        id: 3,
        title: '3. Выберите получателя, напишите имя, фамилия и номер телефона. Затем, нажмите кнопку Продолжить.',
        icon: 'https://mediapark.uz/images/booking-steps-3.png'
      },
      {
        id: 4,
        title: '4. Уточните адрес доставки и нажмите кнопку Продолжить.',
        icon: 'https://mediapark.uz/images/booking-steps-4.png'
      },
      {
        id: 5,
        title: '5. Выберите один из вариантов рассрочки и нажмите кнопку Оформить заказ',
        icon: 'https://mediapark.uz/images/booking-steps-5.png'
      },
      {
        id: 6,
        title: '6. После оформления, заказ передается курьеру и информация об этом появится на вашем экране.',
        icon: 'https://mediapark.uz/images/booking-steps-6.png'
      }
    ]
  }

  return (
    <div className="w-full bg-white pb-24 font-sans antialiased text-[#0f172a]">
      {/* 1 Верхний баннер */}
      {installmentData.bigBanners.filter(b => b.id === 1).map((banner) => (
        <div key={banner.id} className="w-full overflow-hidden flex justify-center items-center">
          <img 
            src={banner.icon} 
            alt={banner.title} 
            className="w-full h-auto object-cover block"
          />
        </div>
      ))}

      <div className="max-w-360 mx-auto px-4 md:px-8 mt-8">
        {/* 2 Заголовок */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
          MediaPark Рассрочка
        </h1>

        {/* 3 Второй баннер */}
        {installmentData.bigBanners.filter(b => b.id === 2).map((banner) => (
          <div key={banner.id} className="w-full rounded-2xl overflow-hidden shadow-sm mb-16 flex justify-center items-center">
            <img 
              src={banner.icon} 
              alt={banner.title} 
              className="w-full h-auto object-cover block"
            />
          </div>
        ))}

        {/* 4 Партнеры */}
        <div className="mb-20 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 max-w-3xl mx-auto leading-tight">
            Мы сотрудничаем с более чем 40 топ-компаниями
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 max-w-5xl mx-auto opacity-90">
            <div className="flex flex-col items-center justify-center p-2 grayscale hover:grayscale-0 transition cursor-pointer">
              <span className="text-lg font-bold text-purple-700">uzum nasiya</span>
            </div>
            <div className="flex flex-col items-center justify-center p-2 grayscale hover:grayscale-0 transition cursor-pointer">
              <span className="text-lg font-bold text-green-500">payme nasiya</span>
            </div>
            <div className="flex flex-col items-center justify-center p-2 grayscale hover:grayscale-0 transition cursor-pointer">
              <span className="text-xl font-extrabold text-indigo-900">open</span>
            </div>
            <div className="flex flex-col items-center justify-center p-2 grayscale hover:grayscale-0 transition cursor-pointer">
              <span className="text-lg font-bold text-emerald-600">alif nasiya</span>
            </div>
            <div className="flex flex-col items-center justify-center p-2 grayscale hover:grayscale-0 transition cursor-pointer">
              <span className="text-lg font-black text-slate-800">IMAN</span>
            </div>
            <div className="flex flex-col items-center justify-center p-2 grayscale hover:grayscale-0 transition cursor-pointer">
              <span className="text-md font-bold text-blue-950">TBC BANK</span>
            </div>
            <div className="flex flex-col items-center justify-center p-2 grayscale hover:grayscale-0 transition cursor-pointer">
              <span className="text-xl font-black text-emerald-500">paynet</span>
            </div>
            <div className="flex flex-col items-center justify-center p-2 grayscale hover:grayscale-0 transition cursor-pointer">
              <span className="text-md font-bold text-red-600">ANORBANK</span>
            </div>
            <div className="flex flex-col items-center justify-center p-2 grayscale hover:grayscale-0 transition cursor-pointer">
              <span className="text-md font-bold text-orange-500">Allgood Nasiya</span>
            </div>
          </div>
        </div>

        {/* 5 Преимущества (почему удобно) */}
        <div className="mb-24">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 max-w-4xl mx-auto leading-tight">
            Почему удобно покупать в Mediapark за наличный расчёт или в рассрочку?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {installmentData.features.map((item) => (
              <div
                key={item.id}
                className={`bg-white rounded-3xl p-8 flex flex-col items-center text-center transition border ${
                  item.highlighted ? 'border-red-500 shadow-sm' : 'border-gray-100 shadow-none'
                }`}
              >
                <h3 className="text-lg font-bold text-[#0f172a] mb-8 min-h-14 flex items-center justify-center leading-snug">
                  {item.title}
                </h3>
                <div className="w-full flex items-center justify-center h-48 mt-auto">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 6 Инструкция по оформлению заказа в рассрочку */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-16">
            Как оформить заказ в рассрочку?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16 max-w-6xl mx-auto">
            {installmentData.bookingSteps.map((step) => (
              <div key={step.id} className="flex flex-col items-center">
                {/* Изображение смартфона */}
                <div className="w-full max-w-70 aspect-9/19 flex items-center justify-center mb-6 overflow-hidden">
                  <img 
                    src={step.icon} 
                    alt={`Шаг ${step.id}`} 
                    className="w-full h-full object-contain hover:scale-105 transition duration-300"
                  />
                </div>
                {/* Подпись к шагу */}
                <p className="text-sm font-semibold text-[#0f172a] text-center px-4 leading-relaxed max-w-72.5">
                  {step.title}
                </p>
              </div>
            ))}
          </div>
          
        </div>
            <footer />
      </div>
      
    </div>
    
  )
}