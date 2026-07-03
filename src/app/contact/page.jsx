'use client'

import React, { useState } from 'react';
import { Phone, Mail, Send, ChevronLeft, ChevronRight, Clock, MapPin } from 'lucide-react';
import Footer from '../components/Footer'; // проверь путь к файлу у себя в проекте

const contactsData = {
  general: [
    {
      title: "Позвоните нам",
      description: "Есть вопросы? Мы поможем!",
      value: "+998 71 203 33 33",
      type: "phone"
    },
    {
      title: "Напишите нам",
      description: "Идеи? Предложения? Мы открыты для любых вопросов!",
      value: "info@mediapark.uz",
      type: "email"
    },
    {
      title: "Для бизнеса",
      description: "Департамент по работе с юридическими лицами",
      value: "corporate@mediapark.uz",
      type: "email"
    },
    {
      title: "Напишите нам",
      description: "Telegram чат помогут разобраться с вашим вопросом",
      value: "@MEDIAPARK_SUPPORT",
      type: "telegram"
    }
  ],
  brands: [
    { name: "TEFAL", phone: "+998 71 249 67 67", time: "09:00 - 18:00" },
    { name: "PREMIER", phone: "+998 33 202 41 00", time: "09:00 - 18:00" },
    { name: "Hisense", phone: "+998 78 113 83 83", time: "09:00 - 18:00" },
    { name: "GOODWELL", phone: "+998 71 200 55 95", time: "09:00 - 18:00" },
    { name: "REALME", phone: "+998 90 088 04 16", time: "09:00 - 18:00" },
    { name: "SAMSUNG", phone: "+998 90 121 31 12", time: "09:00 - 18:00" },
    { name: "LG", phone: "+998 71 233 17 56", time: "09:00 - 18:00" },
    { name: "XIAOMI", phone: "+998 88 122 00 06", time: "09:00 - 18:00" },
    { name: "Vivo", phone: "+998 90 809 20 20", time: "09:00 - 18:00" },
    { name: "Oppo", phone: "+998 94 052 66 68", time: "09:00 - 18:00" },
    { name: "INDESIT", phone: "+998 71 202 10 99", time: "09:00 - 16:00" },
    { name: "GEFEST", phone: "+998 71 202 10 99", time: "09:00 - 18:00" },
    
    { name: "VISTA", phone: "+998 71 200 41 00", time: "09:00 - 18:00" },
    { name: "SONY", phone: "+998 71 233 17 56", time: "09:00 - 18:00" },
    { name: "HOFMANN, HOTPOINT", phone: "+998 99 820 29 29", time: "09:00 - 18:00" },
    { name: "BOSCH", phone: "+998 71 209 63 33", time: "09:00 - 18:00" },
    { name: "ITIMAT, CORONA", phone: "+998 71 202 10 99", time: "09:00 - 18:00" },
    { name: "CHAYKA, JANOME", phone: "+998 90 115 11 99", time: "09:00 - 18:00" },
    { name: "AVTECH, AMAZFIT, MiBox TV, TENDA", phone: "+998 71 207 22 21", time: "09:00 - 18:00" },
    { name: "HUAWEI", phone: "+998 71 271 23 00", time: "09:00 - 18:00" },
    { name: "ACER, LENOVO, HP, CANON, EPSON", phone: "+998 78 147 21 47", time: "09:00 - 18:00" },
    { name: "ROWENTA, TEFAL, PHILLIPS, MOULINEX, GORENJE", phone: "+998 71 233 17 56", time: "09:00 - 18:00" },
    { name: "PANASONIC, DELONGHI, KENWOOD, BRAUN, ROSSO", phone: "+998 71 273 96 71", time: "09:00 - 18:00" },
    { name: "TECNO", phone: "+998 71 233 33 07", time: "09:00 - 18:00" },
    
    { name: "BQ", phone: "+998 97 714 09 32", time: "09:00 - 18:00" }
  ],
  credit: [
    { name: "MEDIAPARK Наманган", phone: "+998 95 290 44 54", time: "09:00 - 20:00" },
    { name: "MEDIAPARK Хива", phone: "+998 93 745 16 11", time: "09:00 - 19:00" },
    { name: "MEDIAPARK Беруни", phone: "+998 95 561 44 54", time: "09:00 - 19:00" },
    { name: "MEDIAPARK Тўрткўл", phone: "+998 93 843 88 77", time: "10:00 - 22:00" },
    { name: "MEDIAPARK Гузар", phone: "+998 94 338 80 41", time: "08:00 - 20:00" },
    { name: "MEDIAPARK Каттакурган", phone: "+998 93 334 17 00", time: "08:00 - 20:00" },
    { name: "MEDIAPARK Бешкент", phone: "+998 91 955 75 74", time: "08:00 - 20:00" },
    { name: "MEDIAPARK Зарафшан", phone: "+998 95 196 44 54", time: "10:00 - 22:00" },
    
    { name: "MEDIAPARK Гиждуван", phone: "+998 95 507 44 54", time: "09:00 - 21:00" },
    { name: "MEDIAPARK Ургенч", phone: "+998 95 479 44 54", time: "10:00 - 22:00" },
    { name: "MEDIAPARK Джизак", phone: "+998 95 411 44 54", time: "10:00 - 22:00" },
    { name: "MEDIAPARK Нукус", phone: "+998 95 560 44 54", time: "10:00 - 20:00" },
    { name: "MEDIAPARK Карши:", phone: "+998 95 485 44 54", time: "10:00 - 22:00" },
    { name: "MEDIAPARK Самарканд:", phone: "+998 95 606 44 54", time: "10:00 - 22:00" },
    { name: "MEDIAPARK Коканд:", phone: "+998 95 509 44 54", time: "10:00 - 22:00" },
    { name: "MEDIAPARK Фергана:", phone: "+998 95 201 44 54", time: "10:00 - 22:00" },
    { name: "MEDIAPARK Ц-5:Ташкент", phone: "+998 95 340 44 54", time: "09:00 - 21:00" },
    { name: "MEDIAPARK Келес", phone: "+998 95 508 44 54", time: "09:00 - 21:00" },
    { name: "MEDIAPARK Беруний Экобазар:Ташкент", phone: "+998 95 198 44 54", time: "10:00 - 22:00" },
    { name: "MEDIAPARK Чимган:Ташкент", phone: "+998 99 992 33 63", time: "10:00 - 22:00" },
    
    { name: "MEDIAPARK Юнус-Абад:Ташкент", phone: "+998 95 475 44 54", time: "10:00 - 22:00" },
    { name: "MEDIAPARK Буюк Ипак Йули", phone: "+998 95 402 44 54", time: "10:00 - 22:00" },
    { name: "MEDIAPARK Куйлюк:Ташкент", phone: "+998 95 363 44 54", time: "09:00 - 21:00" },
    { name: "MEDIAPARK Рохат:Ташкент", phone: "+998 95 478 44 54", time: "09:00 - 21:00" },
    { name: "MEDIAPARK Сергели:Ташкент", phone: "+998 99 860 77 45", time: "10:00 - 22:00" },
    { name: "MEDIAPARK Чиланзар:Ташкент", phone: "+998 99 846 81 33", time: "10:00 - 22:00" },
    { name: "MEDIAPARK Учтепа:Ташкент", phone: "+998 95 309 44 54", time: "10:00 - 22:00" },
    { name: "MEDIAPARK Караташ:Ташкент", phone: "+998 95 362 44 54", time: "10:00 - 22:00" }
  ]
};

export default function ContactsPage() {
  const [activeTab, setActiveTab] = useState('general');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [agree, setAgree] = useState(true);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  const currentItems = contactsData[activeTab] ? contactsData[activeTab].slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  ) : [];

  const totalPages = contactsData[activeTab] ? Math.ceil(contactsData[activeTab].length / itemsPerPage) : 1;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Данные формы:', formData, 'Согласие:', agree);
  };

  return (
    <div className="w-full px-4 py-8 font-sans text-[#1d2530]">
      <h1 className="text-3xl font-bold mb-8">Связаться с нами</h1>
      
      <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-100 pb-4">
        <button 
          onClick={() => handleTabChange('general')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all border ${
            activeTab === 'general' 
              ? 'bg-[#fef2f2] text-[#ea580c] border-[#fca5a5]' 
              : 'bg-gray-50 text-gray-500 border-transparent hover:bg-gray-100'
          }`}
        >
          Контактные телефоны
        </button>
        <button 
          onClick={() => handleTabChange('brands')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all border ${
            activeTab === 'brands' 
              ? 'bg-[#fef2f2] text-[#ea580c] border-[#fca5a5]' 
              : 'bg-gray-50 text-gray-500 border-transparent hover:bg-gray-100'
          }`}
        >
          Бренды
        </button>
        <button 
          onClick={() => handleTabChange('credit')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all border ${
            activeTab === 'credit' 
              ? 'bg-[#fef2f2] text-[#ea580c] border-[#fca5a5]' 
              : 'bg-gray-50 text-gray-500 border-transparent hover:bg-gray-100'
          }`}
        >
          Кредитный отдел
        </button>
      </div>

      {activeTab === 'general' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactsData.general.map((item, idx) => (
            <div key={idx} className="border border-gray-100 rounded-2xl p-6 bg-white shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-[#ea580c] mb-4">
                  {item.type === 'phone' && <Phone size={20} />}
                  {item.type === 'email' && <Mail size={20} />}
                  {item.type === 'telegram' && <Send size={20} />}
                </div>
                <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                <p className="text-gray-400 text-sm mb-4 min-h-[40px]">{item.description}</p>
              </div>
              <span className="font-bold text-sm text-[#ea580c] cursor-pointer hover:underline break-all">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      )}

      {(activeTab === 'brands' || activeTab === 'credit') && (
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {currentItems.map((item, idx) => (
              <div key={idx} className="border border-gray-100 rounded-2xl p-6 bg-white shadow-sm">
                <h3 className="font-bold text-base mb-4 uppercase tracking-wide text-slate-800 min-h-[48px] flex items-center">{item.name}</h3>
                <div className="text-xs text-gray-400 mb-1">Номер телефона</div>
                <div className="font-bold text-sm mb-3 text-slate-800">{item.phone}</div>
                <div className="text-xs text-gray-400 mb-1">График работы:</div>
                <div className="font-bold text-sm text-slate-800">{item.time}</div>
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex items-center justify-between mt-8 pt-4 border-t border-gray-50 select-none">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="flex items-center gap-1 text-sm font-medium text-gray-500 hover:text-gray-900 disabled:opacity-40 disabled:hover:text-gray-500 transition-colors"
              >
                <ChevronLeft size={18} />
                Предыдущий
              </button>

              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-8 h-8 rounded-lg text-sm font-medium transition-all ${
                      currentPage === page
                        ? 'bg-[#fef2f2] text-[#ea580c] font-semibold'
                        : 'text-gray-500 hover:bg-gray-50'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="flex items-center gap-1 text-sm font-medium text-gray-500 hover:text-gray-900 disabled:opacity-40 disabled:hover:text-gray-500 transition-colors"
              >
                Следующий
                <ChevronRight size={18} />
              </button>
            </div>
          )}
        </div>
      )}

      <div className="mt-16 pt-12 border-t border-gray-100 mb-16">
        <h2 className="text-2xl font-bold mb-6 text-slate-900">Реквизиты</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 gap-x-8 mb-16">
          <div>
            <div className="text-xs text-gray-400 mb-1">Название</div>
            <div className="font-bold text-sm text-slate-800">Филиал Центральный ООО GRAND ELECTRA MALL</div>
          </div>
          <div>
            <div className="text-xs text-gray-400 mb-1">Юридический адрес</div>
            <div className="font-bold text-sm text-slate-800">г. Ташкент, Шайхонтохурский район, ул. Караташ, 11А</div>
          </div>
          <div>
            <div className="text-xs text-gray-400 mb-1">ИНН / КПП</div>
            <div className="font-bold text-sm text-slate-800">312683101</div>
          </div>
          <div>
            <div className="text-xs text-gray-400 mb-1">Почтовый адрес</div>
            <div className="font-bold text-sm text-slate-800">100021, Ташкент, Шайхонтохурский район, ул. Караташ, 11А</div>
          </div>
          <div>
            <div className="text-xs text-gray-400 mb-1">ОГРН</div>
            <div className="font-bold text-sm text-slate-800">47540</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start bg-slate-50/50 rounded-3xl p-8 lg:p-12 border border-gray-50">
          <div className="lg:col-span-6">
            <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-3">Вопросы. Предложения. Жалобы</h2>
            <p className="text-gray-500 text-base mb-10">Напишите нам. Мы будем рады получить ваше сообщение.</p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full border border-gray-100 bg-white flex items-center justify-center text-[#ea580c] shrink-0 shadow-sm">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-base">Телефон(с 09:00 до 21:00)</h4>
                  <p className="text-gray-500 text-sm mt-0.5">+998 71 203-33-33</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full border border-gray-100 bg-white flex items-center justify-center text-[#ea580c] shrink-0 shadow-sm">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-base">График работы:</h4>
                  <p className="text-gray-500 text-sm mt-0.5">Пн-Вс: 09:00 - 21:00</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full border border-gray-100 bg-white flex items-center justify-center text-[#ea580c] shrink-0 shadow-sm">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-base">Офис</h4>
                  <p className="text-gray-500 text-sm mt-0.5">г. Ташкент, Шайхонтохурский район, ул. Караташ, 11А</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 w-full">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 lg:p-8 border border-gray-100 shadow-sm space-y-5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Имя <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  placeholder="Ваше имя"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#ea580c] transition-colors bg-white text-slate-800"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Телефон <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  placeholder="+998"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#ea580c] transition-colors bg-white text-slate-800"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Сообщение <span className="text-red-500">*</span>
                </label>
                <textarea 
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#ea580c] transition-colors bg-white text-slate-800 resize-none"
                />
              </div>

              <label className="flex items-start gap-3 cursor-pointer select-none py-1">
                <input 
                  type="checkbox" 
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                  className="mt-0.5 accent-[#d9381e] h-4 w-4 rounded border-gray-300"
                />
                <span className="text-xs text-slate-700 font-medium leading-normal">
                  Вы соглашаетесь с <span className="text-blue-900 hover:underline">Политикой конфиденциальности</span>
                </span>
              </label>

              <button 
                type="submit"
                className="w-full py-3.5 bg-[#d9381e] text-white font-bold text-sm rounded-xl hover:bg-[#c22f17] transition-colors shadow-md shadow-red-100"
              >
                Отправить
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}