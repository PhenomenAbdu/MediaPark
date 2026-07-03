'use client'
import React, { useState } from 'react'

export default function DeliverySection() {
  const [activeTab, setActiveTab] = useState('delivery') // 'delivery' или 'pickup'
  const [lang, setLang] = useState('ru')

  return (
    <div className="w-full bg-white font-sans selection:bg-red-600 selection:text-white py-12 md:py-20 pb-0">
      <div className="max-w-360 mx-auto px-4 flex flex-col gap-16">
        
        {/* главный баннер секции доставки с машиной */}
        <div className="w-full bg-[#1e293b] rounded-3xl overflow-hidden relative min-h-87.5 md:min-h-112.5 flex items-center shadow-sm">
          <div className="absolute inset-0 w-full h-full">
            <img 
              src="https://mediapark.uz/images/floor.svg" 
              alt="Mediapark Delivery" 
              className="w-full h-full object-cover opacity-40 mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-linear-to-r from-[#111827] via-[#1f2937]/80 to-transparent" />
          </div>

          <div className="relative z-10 max-w-150 p-6 md:p-16 flex flex-col gap-4 md:gap-6 text-white">
            <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
              {lang === 'ru' ? 'Быстрая и надёжная доставка вместе с Mediapark' : 'Mediapark bilan tezkor va ishonchli yetkazib berish'}
            </h1>
            <p className="text-gray-300 text-xs md:text-sm font-medium max-w-112.5 leading-relaxed">
              {lang === 'ru' 
                ? 'Гарантируем надежную и безопасную доставку вашего товара в выбранное вами время.' 
                : 'Mahsulotingizni siz tanlagan vaqtda xavfsiz va ishonchli yetkazib berishni kafolatlaymiz.'}
            </p>
            <div className="pt-2">
              <button className="bg-[#df3026] hover:bg-red-700 text-white font-bold text-xs md:text-sm px-8 py-3.5 rounded-xl shadow-lg shadow-red-900/20 transition-all active:scale-[0.98]">
                {lang === 'ru' ? 'Связаться с нами!' : 'Biz bilan bogʻlanish!'}
              </button>
            </div>
          </div>
        </div>

        {/* заголовок перед табами переключения */}
        <div className="w-full text-center mt-4">
          <h2 className="text-2xl md:text-4xl font-black text-[#1e293b] tracking-tight mb-3">
            {lang === 'ru' ? 'Покупай и выбирай удобный способ получения заказа!' : 'Sotib oling va buyurtmani olishning qulay usulini tanlang!'}
          </h2>
          <p className="text-gray-400 text-xs md:text-sm font-medium">
            {lang === 'ru' ? 'Доставка курьером, самовывоз — основные условия' : 'Kuryer orqali yetkazib berish, olib ketish — asosiy shartlar'}
          </p>
        </div>

        {/* кнопки переключения табов (только доставка / самовывоз) */}
        <div className="flex justify-center w-full">
          <div className="bg-gray-100 p-1.5 rounded-2xl flex items-center gap-1 border border-gray-200 shadow-inner max-w-sm w-full">
            <button
              onClick={() => setActiveTab('delivery')}
              className={`flex-1 text-center py-3 rounded-xl font-bold text-xs md:text-sm transition-all duration-200 ${
                activeTab === 'delivery' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              {lang === 'ru' ? 'Доставка' : 'Yetkazib berish'}
            </button>
            <button
              onClick={() => setActiveTab('pickup')}
              className={`flex-1 text-center py-3 rounded-xl font-bold text-xs md:text-sm transition-all duration-200 ${
                activeTab === 'pickup' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              {lang === 'ru' ? 'Самовывоз' : 'Olib ketish'}
            </button>
          </div>
        </div>

        {/* контент основных вкладок */}
        <div className="w-full bg-[#f8fafc] border border-gray-100 rounded-3xl p-6 md:p-12 shadow-sm min-h-87.5 flex items-center">
          {activeTab === 'delivery' ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
              <div className="lg:col-span-5 flex justify-center">
                <img src="https://mediapark.uz/images/delivery2.svg" alt="Express Delivery" className="max-w-full h-auto max-h-75 object-contain" />
              </div>
              <div className="lg:col-span-7 flex flex-col gap-6">
                <div>
                  <h3 className="text-xl md:text-3xl font-black text-gray-900 tracking-tight mb-2">
                    {lang === 'ru' ? 'Экспресс-доставка от 2 часов' : '2 soatdan boshlab ekspress yetkazib berish'}
                  </h3>
                  <p className="text-gray-400 text-[11px] md:text-xs font-semibold leading-relaxed">
                    {lang === 'ru' ? '*При заказе до 20:00 Быстрая доставка — оперативное получение нужной техники в особых случаях.' : '*Soat 20:00 gacha buyurtma qilinganda tezkor yetkazib berish.'}
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <h4 className="text-gray-900 font-black text-sm md:text-base">{lang === 'ru' ? 'Получи заказ максимально быстро:' : 'Buyurtmani iloji boricha tezroq oling:'}</h4>
                  
                  <ul className="flex flex-col gap-3.5">
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-red-50 border border-red-200 flex items-center justify-center text-[#df3026] shrink-0 mt-0.5 shadow-sm">
                        <svg className="w-3 h-3 stroke-current" fill="none" strokeWidth="3" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <p className="text-gray-600 text-xs md:text-sm font-medium leading-tight">
                        {lang === 'ru' ? 'Добавь товары в корзину, а при оформлении заказа выбери «Экспресс-доставку от 2 часов»' : 'Mahsulotlarni savatga qoʻshing va buyurtmani rasmiylashtirishda ekspress variantni tanlang'}</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-red-50 border border-red-200 flex items-center justify-center text-[#df3026] shrink-0 mt-0.5 shadow-sm">
                        <svg className="w-3 h-3 stroke-current" fill="none" strokeWidth="3" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <p className="text-gray-600 text-xs md:text-sm font-medium leading-tight">
                        {lang === 'ru' ? 'Укажи адрес доставки и оплати заказ онлайн или электронными деньгами.' : 'Yetkazib berish manziling koʻrsating va onlayn tarzda toʻlovni amalga oshiring.'}</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-red-50 border border-red-200 flex items-center justify-center text-[#df3026] shrink-0 mt-0.5 shadow-sm">
                        <svg className="w-3 h-3 stroke-current" fill="none" strokeWidth="3" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <p className="text-gray-600 text-xs md:text-sm font-medium leading-tight">
                        {lang === 'ru' ? 'Ожидай доставку в течение 2 – 3 часов!' : 'Yuborilgan buyurtmani 2 - 3 soat ichida kuting!'}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
              <div className="lg:col-span-5 flex justify-center">
                <img src="https://mediapark.uz/images/delivery4.svg" alt="Store Pickup" className="max-w-full h-auto max-h-75 object-contain" />
              </div>
              <div className="lg:col-span-7 flex flex-col gap-6">
                <div>
                  <h3 className="text-xl md:text-3xl font-black text-gray-900 tracking-tight mb-2">{lang === 'ru' ? 'Самовывоз из магазина' : 'Doʻkondan olib ketish'}</h3>
                  <p className="text-gray-400 text-xs font-semibold leading-relaxed">{lang === 'ru' ? 'Покупай в «Медиапарк» и забирай заказ в магазине в любое удобное время!' : 'Mediapark-da sotib oling va buyurtmangizni oʻzingizga qulay vaqtda doʻkondan olib keting!'}</p>
                </div>
                <div className="flex flex-col gap-4">
                  <h4 className="text-gray-900 font-black text-sm md:text-base">{lang === 'ru' ? 'Всё просто:' : 'Hammasi oddiy:'}</h4>
                  <ul className="flex flex-col gap-3.5">
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-red-50 border border-red-200 flex items-center justify-center text-[#df3026] flex-shrink-0 mt-0.5 shadow-sm">
                        <svg className="w-3 h-3 stroke-current" fill="none" strokeWidth="3" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <p className="text-gray-600 text-xs md:text-sm font-medium leading-tight">{lang === 'ru' ? 'Выбери товар на сайте или в приложении, оформи заказ с самовывозом из магазина.' : 'Saytda yoki ilovada mahsulotni tanlang, doʻkondan olib ketish sharti bilan rasmiylashtiring.'}</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-red-50 border border-red-200 flex items-center justify-center text-[#df3026] flex-shrink-0 mt-0.5 shadow-sm">
                        <svg className="w-3 h-3 stroke-current" fill="none" strokeWidth="3" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <p className="text-gray-600 text-xs md:text-sm font-medium leading-tight">{lang === 'ru' ? 'Приходи за своим заказом после получения СМС уведомления о готовности.' : 'Tayyorligi haqida SMS-bildirishnoma olganingizdan soʻng buyurtmangizni olishga keling.'}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ОТДЕЛЬНЫЙ НИЖНИЙ БЛОК 1: Пункт выдачи заказов */}
        <div className="w-full bg-[#f8fafc] border border-gray-100 rounded-3xl p-6 md:p-12 shadow-sm flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
            <div className="lg:col-span-5 flex justify-center">
              <img src="https://mediapark.uz/images/delivery5.svg" alt="Delivery Point" className="max-w-full h-auto max-h-[300px] object-contain" />
            </div>
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div>
                <h3 className="text-xl md:text-3xl font-black text-gray-900 tracking-tight mb-2">
                  {lang === 'ru' ? 'Получение заказа в пункте выдачи' : 'Buyurtmani topshirish punktidan olish'}
                </h3>
                <p className="text-gray-950 text-sm font-bold mb-3">
                  {lang === 'ru' ? 'Получи заказ в пункте выдачи рядом с домом по пути в магазин или на почту!' : 'Buyurtmangizni uyga yaqin topshirish punktidan oling!'}
                </p>
              </div>
              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-50 border border-red-200 flex items-center justify-center text-[#df3026] flex-shrink-0 mt-0.5 shadow-sm">
                    <svg className="w-3 h-3 stroke-current" fill="none" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <p className="text-gray-600 text-xs md:text-sm font-medium">
                    {lang === 'ru' 
                      ? 'Оформить заказ на сумму не менее 700 000 сум (с учетом всех скидок) через наш сайт или приложение, выбрав услугу самовывоза клиентом или самовывоза в пунктах доставки.' 
                      : 'Siz sayt orqali kamida 700 000 soʻmlik buyurtma rasmiylashtirib topshirish punktini tanlashingiz mumkin.'}
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-50 border border-red-200 flex items-center justify-center text-[#df3026] flex-shrink-0 mt-0.5 shadow-sm">
                    <svg className="w-3 h-3 stroke-current" fill="none" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <p className="text-gray-600 text-xs md:text-sm font-medium">
                    {lang === 'ru' ? 'Получите свой заказ через один из филиалов «Медиапарка» по всему Узбекистану.' : 'Buyurtmangizni Oʻzbekiston boʻylab Mediapark-ning istalgan filialidan qabul qiling.'}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ОТДЕЛЬНЫЙ НИЖНИЙ БЛОК 2: Pick-Up за 15 минут */}
        <div className="w-full bg-[#f8fafc] border border-gray-100 rounded-3xl p-6 md:p-12 shadow-sm flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
            <div className="lg:col-span-5 flex justify-center">
              <img src="https://mediapark.uz/images/delivery6.svg" alt="Pick-Up 15 min" className="max-w-full h-auto max-h-[300px] object-contain" />
            </div>
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div>
                <h3 className="text-xl md:text-3xl font-black text-gray-900 tracking-tight mb-2">
                  {lang === 'ru' ? 'Pick-Up за 15 минут' : '15 daqiqada Pick-Up'}
                </h3>
                <p className="text-gray-400 text-xs font-semibold mb-3">
                  {lang === 'ru' ? 'Ситуации бывают разные, поэтому мы предусмотрели супербыструю возможность получения заказа!' : 'Vaqtingiz tejalishi uchun biz buyurtmani oʻta tez fursatda olish imkonini yaratdik!'}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="text-gray-900 font-black text-sm md:text-base">{lang === 'ru' ? 'Получи заказ максимально быстро:' : 'Buyurtmani maksimal darajada tez oling:'}</h4>
                <ul className="flex flex-col gap-3.5">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-red-50 border border-red-200 flex items-center justify-center text-[#df3026] flex-shrink-0 mt-0.5 shadow-sm">
                      <svg className="w-3 h-3 stroke-current" fill="none" strokeWidth="3" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <p className="text-gray-600 text-xs md:text-sm font-medium">{lang === 'ru' ? 'Выбери товар на сайте или в приложении.' : 'Saytda yoki ilovada mahsulotni tanlang.'}</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-red-50 border border-red-200 flex items-center justify-center text-[#df3026] flex-shrink-0 mt-0.5 shadow-sm">
                      <svg className="w-3 h-3 stroke-current" fill="none" strokeWidth="3" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <p className="text-gray-600 text-xs md:text-sm font-medium">{lang === 'ru' ? 'Оформи и оплати заказ удобным способом: онлайн или электронными деньгами.' : 'Buyurtmani onlayn yoki elektron hamyon orqali qulay usulda toʻlang.'}</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-red-50 border border-red-200 flex items-center justify-center text-[#df3026] flex-shrink-0 mt-0.5 shadow-sm">
                      <svg className="w-3 h-3 stroke-current" fill="none" strokeWidth="3" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <p className="text-gray-600 text-xs md:text-sm font-medium">{lang === 'ru' ? 'Забери заказ уже через 15 минут в ближайшем магазине рядом с домом!' : 'Buyurtmangizni atigi 15 daqiqadan soʻng uyingizga yaqin doʻkondan olib keting!'}</p>
                  </li>
                </ul>
                <div className="pt-2">
                  <button className="bg-[#df3026] hover:bg-red-700 text-white font-bold text-xs md:text-sm px-8 py-3.5 rounded-xl transition-all shadow-md">
                    {lang === 'ru' ? 'Начать покупки' : 'Xaridni boshlash'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* форма обратной связи (Вопросы. Предложения. Жалобы) */}
        <div className="w-full bg-[#f8fafc] border border-gray-100 rounded-3xl p-6 md:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 mt-4">
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div>
              <h2 className="text-2xl md:text-4xl font-black text-gray-900 tracking-tight mb-2">
                {lang === 'ru' ? 'Вопросы. Предложения. Жалобы' : 'Savollar. Takliflar. Shikoyatlar'}
              </h2>
              <p className="text-gray-400 text-xs md:text-sm font-medium">
                {lang === 'ru' ? 'Напишите нам. Мы будем рады получить ваше сообщение.' : 'Bizga yozing. Sizning xabaringizdan xursand boʻlamiz.'}
              </p>
            </div>

            <div className="flex flex-col gap-4 pt-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-red-600 font-bold">📞</div>
                <div>
                  <p className="text-gray-900 font-black text-sm">{lang === 'ru' ? 'Телефон (с 09:00 до 21:00)' : 'Telefon (09:00 dan 21:00 gacha)'}</p>
                  <p className="text-gray-500 font-bold text-xs">+998 71 203-33-33</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-red-600 font-bold">🕒</div>
                <div>
                  <p className="text-gray-900 font-black text-sm">{lang === 'ru' ? 'График работы:' : 'Ish tartibi:'}</p>
                  <p className="text-gray-500 font-bold text-xs">{lang === 'ru' ? 'Пн-Вс: 09:00 - 21:00' : 'Du-Yak: 09:00 - 21:00'}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-red-600 font-bold">📍</div>
                <div>
                  <p className="text-gray-900 font-black text-sm">{lang === 'ru' ? 'Офис' : 'Ofis'}</p>
                  <p className="text-gray-500 font-medium text-xs">{lang === 'ru' ? 'г. Ташкент, Шайхонтохурский район, ул. Караташ, 11А' : 'Toshkent sh., Shayxontohur tumani, Qoratosh koʻchasi, 11A'}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-gray-700 font-bold text-xs">{lang === 'ru' ? 'Имя *' : 'Ism *'}</label>
              <input type="text" placeholder={lang === 'ru' ? 'Ваше имя' : 'Ismingiz'} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-xs md:text-sm font-medium focus:outline-none focus:border-red-500 focus:bg-white transition-all" />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-gray-700 font-bold text-xs">{lang === 'ru' ? 'Телефон *' : 'Telefon *'}</label>
              <input type="text" defaultValue="+998" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-xs md:text-sm font-medium focus:outline-none focus:border-red-500 focus:bg-white transition-all" />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-gray-700 font-bold text-xs">{lang === 'ru' ? 'Сообщение *' : 'Xabar *'}</label>
              <textarea rows={4} placeholder={lang === 'ru' ? 'Введите ваше сообщение' : 'Xabaringizni kiriting'} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-xs md:text-sm font-medium focus:outline-none focus:border-red-500 focus:bg-white transition-all resize-none"></textarea>
            </div>

            <div className="flex items-center gap-2.5 py-1">
              <input type="checkbox" id="privacy" className="w-4 h-4 accent-red-600 rounded cursor-pointer" />
              <label htmlFor="privacy" className="text-gray-500 font-semibold text-[11px] md:text-xs cursor-pointer select-none">
                {lang === 'ru' ? 'Вы соглашаетесь с Политикой конфиденциальности' : 'Maxfiylik siyosatiga rozilik bildirasiz'}
              </label>
            </div>

            <button className="w-full bg-[#df3026] hover:bg-red-700 text-white font-black text-xs md:text-sm py-4 rounded-xl shadow-md transition-all active:scale-[0.99]">
              {lang === 'ru' ? 'Отправить' : 'Yuborish'}
            </button>
          </div>
        </div>

      </div>

      {/* ОФИЦИАЛЬНЫЙ ФУТЕР МЕДИАПАРКА */}
      <footer className="w-full bg-[#0f172a] text-white mt-20 pt-12 pb-6">
        <div className="max-w-[1440px] mx-auto px-4 flex flex-col gap-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-4">
            
            {/* блок контактов и бренда */}
            <div className="lg:col-span-4 flex flex-col gap-5">
              <span className="text-2xl font-black tracking-tight text-white">MEDIAPARK</span>
              <div className="flex flex-col gap-1">
                <p className="text-gray-400 text-xs font-semibold">{lang === 'ru' ? 'Возникли вопросы? Готовы помочь:' : 'Savollar bormi? Yordamga tayyormiz:'}</p>
                <p className="text-lg font-black text-white">+998 71 203 33 33</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-gray-400 text-xs font-semibold">{lang === 'ru' ? 'График работы:' : 'Ish tartibi:'}</p>
                <p className="text-sm font-bold text-white">{lang === 'ru' ? 'Ежедневно : 09:00 - 21:00' : 'Har kuni : 09:00 - 21:00'}</p>
              </div>
            </div>

            {/* способы оплаты */}
            <div className="lg:col-span-3 flex flex-col gap-4">
              <span className="text-sm font-black text-gray-300 tracking-wider uppercase">{lang === 'ru' ? 'Способы оплаты' : 'Toʻlov usullari'}</span>
              <div className="grid grid-cols-2 gap-2 max-w-[240px]">
                <div className="bg-slate-800/60 border border-slate-700/40 rounded-xl py-2 px-3 flex items-center justify-center font-black text-xs text-slate-300">UZCARD</div>
                <div className="bg-slate-800/60 border border-slate-700/40 rounded-xl py-2 px-3 flex items-center justify-center font-black text-xs text-slate-300">HUMO</div>
                <div className="bg-slate-800/60 border border-slate-700/40 rounded-xl py-2 px-3 flex items-center justify-center font-black text-xs text-slate-300">click</div>
                <div className="bg-slate-800/60 border border-slate-700/40 rounded-xl py-2 px-3 flex items-center justify-center font-black text-xs text-slate-300">payme</div>
                <div className="bg-slate-800/60 border border-slate-700/40 rounded-xl py-2 px-3 flex items-center justify-center font-black text-xs text-slate-300">VISA</div>
                <div className="bg-slate-800/60 border border-slate-700/40 rounded-xl py-2 px-3 flex items-center justify-center font-black text-xs text-slate-300">mastercard</div>
              </div>
            </div>

            {/* меню информация */}
            <div className="lg:col-span-2 flex flex-col gap-3">
              <span className="text-sm font-black text-gray-300 tracking-wider uppercase">{lang === 'ru' ? 'Информация' : 'Maʼlumot'}</span>
              <ul className="flex flex-col gap-2.5 text-xs text-gray-400 font-bold">
                <li className="hover:text-white cursor-pointer transition-colors">{lang === 'ru' ? 'О нас' : 'Biz haqimizda'}</li>
                <li className="hover:text-white cursor-pointer transition-colors">{lang === 'ru' ? 'Гарантия' : 'Kafolat'}</li>
                <li className="hover:text-white cursor-pointer transition-colors">{lang === 'ru' ? 'Акция' : 'Aksiyalar'}</li>
                <li className="hover:text-white cursor-pointer transition-colors">{lang === 'ru' ? 'Адреса магазинов' : 'Doʻkonlar manzillari'}</li>
              </ul>
            </div>

            {/* меню услуги */}
            <div className="lg:col-span-3 flex flex-col gap-3">
              <span className="text-sm font-black text-gray-300 tracking-wider uppercase">{lang === 'ru' ? 'Услуги' : 'Xizmatlar'}</span>
              <ul className="flex flex-col gap-2.5 text-xs text-gray-400 font-bold">
                <li className="hover:text-white cursor-pointer transition-colors">{lang === 'ru' ? 'Услуги' : 'Xizmatlar'}</li>
                <li className="hover:text-white cursor-pointer transition-colors">{lang === 'ru' ? 'Способы оплаты' : 'Toʻlov usullari'}</li>
                <li className="hover:text-white cursor-pointer transition-colors">{lang === 'ru' ? 'Всё о рассрочке' : 'Muddatli toʻlov haqida'}</li>
                <li className="hover:text-white cursor-pointer transition-colors">{lang === 'ru' ? 'Партнёрство' : 'Hamkorlik'}</li>
                <li className="hover:text-white cursor-pointer transition-colors">{lang === 'ru' ? 'Возврат товара' : 'Mahsulotni qaytarish'}</li>
              </ul>
            </div>

          </div>

          {/* нижняя строка с копирайтом и иконками соцсетей */}
          <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-xs font-semibold">
              © {new Date().getFullYear()} {lang === 'ru' ? 'Все права защищены.' : 'Barcha huquqlar himoyalangan.'}
            </p>
            <div className="flex items-center gap-4 text-gray-400">
              <span className="hover:text-white cursor-pointer text-sm">Telegram</span>
              <span className="hover:text-white cursor-pointer text-sm">Twitter</span>
              <span className="hover:text-white cursor-pointer text-sm">Instagram</span>
              <span className="hover:text-white cursor-pointer text-sm">Facebook</span>
            </div>
          </div>

        </div>
      </footer>
    </div>
  )
}