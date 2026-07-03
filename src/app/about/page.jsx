'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { useLang } from '../context/LangContext'
import Footer from '../components/Footer'

export default function AboutPage() {
    const { lang, setLang } = useLang()

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    const [agree, setAgree] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!agree) {
            alert(lang === 'ru' ? 'Вы должны согласиться с политикой конфиденциальности' : 'Maxfiylik siyosatiga rozilik bildirishingiz kerak')
            return
        }
        console.log({ name, phone, message })
    }

    const brands = [
        { name: 'LG', icon: 'LG' },
        { name: 'Artel', icon: 'artel' },
        { name: 'Apple', icon: 'Apple' },
        { name: 'DeLonghi', icon: 'DeLonghi' },
        { name: 'Tefal', icon: 'Tefal' },
        { name: 'Dyson', icon: 'dyson' },
        { name: 'Karcher', icon: 'KÄRCHER' },
        { name: 'Smeg', icon: 'smeg' },
        { name: 'Vivo', icon: 'vivo' },
        { name: 'Rowenta', icon: 'Rowenta' },
        { name: 'Bork', icon: 'BORK' },
        { name: 'Samsung', icon: 'SAMSUNG' },
        { name: 'Gree', icon: 'Gree' }
    ]

    return (
        <div className="w-full min-h-screen bg-gray-50 font-sans selection:bg-red-600 selection:text-white flex flex-col justify-between">

            <div className="w-full">
                {/* верхняя мини-шапка страницы о нас */}
                <div className="w-full bg-white border-b border-gray-100 shadow-sm py-4 mb-6">
                    <div className="max-w-[1440px] mx-auto px-4 flex justify-between items-center">
                        <Link href="/" className="text-gray-900 text-2xl font-black tracking-wider hover:opacity-80 transition-opacity">
                            MEDIAPARK
                        </Link>

                        <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-lg text-xs font-bold border border-gray-200">
                            <button
                                onClick={() => setLang('ru')}
                                className={`px-3 py-1.5 rounded-md transition-all ${lang === 'ru' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-900'}`}
                            >
                                Ру
                            </button>
                            <button
                                onClick={() => setLang('uz')}
                                className={`px-3 py-1.5 rounded-md transition-all ${lang === 'uz' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-900'}`}
                            >
                                Oʻz
                            </button>
                        </div>
                    </div>
                </div>

                {/* главный контент страницы */}
                <div className="max-w-[1440px] mx-auto px-4 flex flex-col gap-10 mb-16">

                    {/* первая большая фотка команды */}
                    <div className="w-full rounded-2xl overflow-hidden shadow-md max-h-[500px] relative">
                        <img
                            src="/About1.jpg"
                            alt="Mediapark Team"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                e.target.src = '/About1.png'
                            }}
                        />
                        <div className="absolute top-4 left-4 bg-red-600 text-white text-[10px] font-bold px-3 py-1 rounded uppercase tracking-wider shadow">
                            Kassa
                        </div>
                    </div>

                    {/* блок с текстовой информацией */}
                    <div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-gray-100">
                        <h1 className="text-2xl md:text-4xl font-black text-gray-900 mb-4 tracking-tight">
                            {lang === 'ru' ? 'Мы создаем удобство и комфорт для вас!' : 'Biz siz uchun qulaylik va shinamlik yaratamiz!'}
                        </h1>
                        <p className="text-gray-500 text-xs md:text-sm font-medium mb-8">
                            {lang === 'ru'
                                ? 'В 2015 году мы открылись как первая сеть магазинов в Узбекистане, offering самый широкий ассортимент товаров'
                                : '2015-yilda biz Oʻzbekistonda eng keng turdagi mahsulotlarni taklif etuvchi birinchi doʻkonlar tarmogʻi boʻlib ochildik'}
                        </p>

                        <h2 className="text-xl md:text-3xl font-black text-gray-900 mb-4">
                            {lang === 'ru' ? 'О нас' : 'Biz haqimizda'}
                        </h2>
                        <p className="text-gray-600 text-xs md:text-sm leading-relaxed font-normal text-justify">
                            {lang === 'ru' ? (
                                'Mediapark - лидер Узбекистана в сфере торговли бытовой техники и электроники. Компания основана в 2015 году как первая сеть магазинов в Узбекистане. Наша компания до сегодняшнего дня поставляла качественную и доступную продукцию миллионам наших соотечественников и продолжает так работать. На сегодняшний день компания имеет 38 филиалов, через которые налажены постоянные оффлайн и онлайн продажи. Девиз нашей компании – надежность, удобство и лидерство. Мы можем стать настоящим партнером для людей в сфере бытовой техники и электроники. Мы предоставляем нашим клиентам и партнерам широкий ассортимент бытовой техники и электроники. В наших магазинах представлено более 21 000 видов товаров производства более 200 брендов. Наша компания стремится поставлять клиентам качественную продукцию и создавать для них комфортные условия наряду с развитием бизнеса.'
                            ) : (
                                'Mediapark - maishiy texnika va elektronika savdosi sohasida Oʻzbekistonda yetakchi hisoblanadi. Kompaniya 2015-yilda Oʻzbekistondagi birinchi doʻkonlar tarmogʻi sifatida tashkil etilgan. Bizning kompaniyamiz shu kungacha millionlab vatandoshlarimizga sifatli va hamyonbop mahsulotlarni yetkazib berdi va shu tarzda ishlashda davom etmoqda. Bugungi kunda kompaniyaning 38 ta filiali mavjud boʻlib, ular orqali doimiy oflayn va onlayn savdolar yoʻlga qoʻyilgan. Kompaniyamiz shiori – ishonchlilik, qulaylik va yetakchilikdir. Biz maishiy texnika va elektronika sohasida insonlar uchun haqiqiy hamkorga aylana olamiz. Biz mijozlarimiz va hamkorlarimizga maishiy texnika va elektronikaning keng assortimentini taqdim etamiz. Doʻkonlarimizda 200 dan ortiq brendlar tomonidan ishlab chiqarilgan 21 000 dan ortiq mahsulot turlari mavjud.'
                            )}
                        </p>
                    </div>

                    {/* сетка с цифрами и показатели */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full">
                        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                            <div className="text-2xl font-black text-gray-900 mb-1">10 лет</div>
                            <div className="text-[11px] text-gray-400 font-medium leading-tight">
                                {lang === 'ru' ? 'Опыт, на который можно полагаться.' : 'Siz ishonishingiz mumkin boʻlgan tajriba.'}
                            </div>
                        </div>
                        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                            <div className="text-2xl font-black text-gray-900 mb-1">35 точек</div>
                            <div className="text-[11px] text-gray-400 font-medium leading-tight">
                                {lang === 'ru' ? 'торговых точек по всей стране.' : 'butun mamlakat boʻylab savdo nuqtalari.'}
                            </div>
                        </div>
                        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                            <div className="text-2xl font-black text-gray-900 mb-1">200+</div>
                            <div className="text-[11px] text-gray-400 font-medium leading-tight">
                                {lang === 'ru' ? 'У нас есть товары брендов, которым вы доверяете' : 'Bizda siz ishonadigan brendlar mahsulotlari bor'}
                            </div>
                        </div>
                        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                            <div className="text-2xl font-black text-gray-900 mb-1">38 900 m²</div>
                            <div className="text-[11px] text-gray-400 font-medium leading-tight">
                                {lang === 'ru' ? 'Общая площадь наших магазинов составляет' : 'Doʻkonlarimizning umumiy maydoni tashkil etadi'}
                            </div>
                        </div>
                    </div>

                    {/* нижний блок с видео-превью и круглым счетчиком товаров */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch w-full">
                        <div className="md:col-span-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between relative overflow-hidden min-h-[240px]">
                            <div className="z-10">
                                <div className="text-3xl font-black text-gray-900 flex items-center gap-1">
                                    21 000 <span className="text-red-500">+</span>
                                </div>
                                <p className="text-gray-500 text-xs font-semibold mt-3 leading-relaxed max-w-[200px]">
                                    {lang === 'ru' ? 'Мы предоставляем вам огромный выбор из 21 000 товаров in наших магазинах.' : 'Biz doʻkonlarimizda 21 000 dan ortiq mahsulotlarning keng tanlovini taqdim etamiz.'}
                                </p>
                            </div>
                            <div className="flex -space-x-2 overflow-hidden z-10 pt-4">
                                <div className="w-7 h-7 rounded-full bg-red-500 border-2 border-white flex items-center justify-center text-[10px] text-white font-bold">M</div>
                                <div className="w-7 h-7 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center text-[10px] text-white font-bold">E</div>
                                <div className="w-7 h-7 rounded-full bg-green-500 border-2 border-white flex items-center justify-center text-[10px] text-white font-bold">D</div>
                                <div className="w-7 h-7 rounded-full bg-orange-500 border-2 border-white flex items-center justify-center text-[10px] text-white font-bold">I</div>
                                <div className="w-7 h-7 rounded-full bg-purple-500 border-2 border-white flex items-center justify-center text-[10px] text-white font-bold">A</div>
                            </div>
                            <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none select-none">
                                <svg width="150" height="150" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M0,50 Q25,25 50,50 T100,50 M0,60 Q25,35 50,60 T100,60 M0,70 Q25,45 50,70 T100,70" />
                                </svg>
                            </div>
                        </div>

                        <div className="md:col-span-8 rounded-2xl overflow-hidden relative group shadow-sm min-h-[240px]">
                            <img
                                src="https://mediapark.uz/images/video-img.jpg"
                                alt="Как мы работаем?"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center gap-4 transition-colors group-hover:bg-opacity-40">
                                <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 cursor-pointer">
                                    <svg className="w-6 h-6 fill-white translate-x-0.5" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                                <div className="text-white text-xl md:text-2xl font-black tracking-wide text-center drop-shadow-md">
                                    {lang === 'ru' ? 'Как мы работаем?' : 'Biz qanday ishlaymiz?'}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* СЕКЦИЯ ЦЕННОСТИ */}
                    <div className="w-full mt-4">
                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 text-center mb-10 tracking-tight">
                            {lang === 'ru' ? 'Ценности' : 'Qadriyatlar'}
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm flex flex-col items-center text-center">
                                <div className="w-12 h-12 bg-red-50 text-red-600 rounded-full flex items-center justify-center mb-5">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg md:text-xl font-black text-gray-900 mb-4">
                                    {lang === 'ru' ? 'Стремление к комфорту' : 'Shinamlikka intilish'}
                                </h3>
                                <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-normal">
                                    {lang === 'ru'
                                        ? 'Мы заботимся о вашем комфорте в каждой детали. Мы предоставляем широкий выбор товаров для вас и вашей семьи. Мы уделяем особое внимание качеству товаров, чтобы ваша покупка служила вам долго и надёжно. Наши магазины созданы так, чтобы вы чувствовали себя комфортно и уютно во время покупок, а наша команда сотрудников всегда готова помочь вам в этом.'
                                        : 'Biz har bir detalda sizning qulayligingiz haqida qaygʻuramiz. Biz siz va oilangiz uchun keng turdagi mahsulotlarni taqdim etamiz. Xaridingiz uzoq va ishonchli xizmak qilishi uchun mahsulot sifatiga alohida eʼtibor qaratamiz.'}
                                </p>
                            </div>

                            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm flex flex-col items-center text-center">
                                <div className="w-12 h-12 bg-red-50 text-red-600 rounded-full flex items-center justify-center mb-5">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg md:text-xl font-black text-gray-900 mb-4">
                                    {lang === 'ru' ? 'Амбициозность' : 'Shijoatkorlik'}
                                </h3>
                                <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-normal">
                                    {lang === 'ru'
                                        ? 'Наши сотрудники - это наше богатство. Мы верим, что именно они составляют главную основу успеха нашей компании. Каждый сотрудник Mediapark обладает высоким уровнем профессионализма и страстью к своей работе. Мы работаем в близком сотрудничестве с нашими клиентами, чтобы понять их потребности и предложить товары.'
                                        : 'Xodimlarimiz — bizning boyligimizdir. Ularning kompaniyamiz muvaffaqiyatining asosiy poydevori ekanligiga ishonamiz. Mediapark doʻkonining har bir xodimi yuqori professionallikka ega.'}
                                </p>
                            </div>

                            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm flex flex-col items-center text-center">
                                <div className="w-12 h-12 bg-red-50 text-red-600 rounded-full flex items-center justify-center mb-5">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                </div>
                                <h3 className="text-lg md:text-xl font-black text-gray-900 mb-4">
                                    {lang === 'ru' ? 'Любознательность' : 'Qiziquvchanlik'}
                                </h3>
                                <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-normal">
                                    {lang === 'ru'
                                        ? 'Наша любознательность позволяет нам постоянно изучать рынок, анализировать потребности наших клиентов и предлагать продукты, которые наилучшим образом соответствуют их запросам. Благодаря этому мы постоянно растем и расширяемся, предлагая нашим покупателям все только новое и лучшее.'
                                        : 'Bizning qiziquvchanligimiz bozorni doimiy ravishda oʻrganish, mijozlarimiz ehtiyojlarini tahlil qilish va ularning soʻrovlariga eng yaxshi javob beradigan mahsulotlarni taklif qilish imkonini beradi.'}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* СЕКЦИЯ НАГРАДЫ (6 ШТУК) */}
                    <div className="w-full mt-4 flex flex-col items-center">
                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 text-center mb-10 tracking-tight">
                            {lang === 'ru' ? 'Награды' : 'Mukofotlar'}
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-10">
                            {/* 1 */}
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between min-h-[320px]">
                                <div className="w-full h-40 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100 text-gray-400 mb-4">
                                    <svg className="w-12 h-12 stroke-current" fill="none" strokeWidth="1.5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-6.75a1.125 1.125 0 00-1.125 1.125v3.375m9 0M9 10.5h.008v.008H9V10.5zm.75 0h.008v.008H9.75V10.5z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-gray-950 text-base font-black mb-1">{lang === 'ru' ? 'Премия «BREND 2021»' : '«BREND 2021» mukofoti'}</h4>
                                    <p className="text-gray-400 text-xs font-medium mb-1 leading-snug">{lang === 'ru' ? 'Победитель номинации Розничная торговля. Магазины бытовой техники' : 'Chakana savdo gʻolibi'}</p>
                                    <span className="text-[10px] font-bold text-gray-300">2021</span>
                                </div>
                            </div>
                            {/* 2 */}
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between min-h-[320px]">
                                <div className="w-full h-40 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100 text-gray-400 mb-4">
                                    <svg className="w-12 h-12 stroke-current" fill="none" strokeWidth="1.5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 11.25a3 3 0 100-6 3 3 0 000 6z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-gray-950 text-base font-black mb-1">{lang === 'ru' ? 'Премия «TAF! 2022»' : '«TAF! 2022» mukofoti'}</h4>
                                    <p className="text-gray-400 text-xs font-medium mb-1 leading-snug">{lang === 'ru' ? 'Победитель номинации "Кампания с использованием национальных..."' : '“Milliy elementlardan foydalanilgan kampaniya” gʻolibi'}</p>
                                    <span className="text-[10px] font-bold text-gray-300">2022</span>
                                </div>
                            </div>
                            {/* 3 */}
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between min-h-[320px]">
                                <div className="w-full h-40 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100 text-gray-400 mb-4">
                                    <svg className="w-12 h-12 stroke-current" fill="none" strokeWidth="1.5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499c.173-.439.817-.439.99 0l2.4 4.863 5.362.78c.485.07.679.666.328 1.006l-3.88 3.78 1.03 5.337c.093.483-.415.851-.85.575L12 14.075l-4.793 2.52c-.435.275-.943-.093-.85-.575l1.03-5.337-3.88-3.78c-.351-.34-.157-.936.328-1.006l5.362-.78 2.4-4.863z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-gray-950 text-base font-black mb-1">{lang === 'ru' ? 'Премия «Brend 2019»' : '«Brend 2019» mukofoti'}</h4>
                                    <p className="text-gray-400 text-xs font-medium mb-1 leading-snug">{lang === 'ru' ? 'Победитель номинации "Выбор потребителя"' : '“Isteʼmolchilar tanlovi” gʻolibi'}</p>
                                    <span className="text-[10px] font-bold text-gray-300">2019</span>
                                </div>
                            </div>
                            {/* 4 */}
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between min-h-[320px]">
                                <div className="w-full h-40 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100 text-gray-400 mb-4">
                                    <svg className="w-12 h-12 stroke-current" fill="none" strokeWidth="1.5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-gray-950 text-base font-black mb-1">{lang === 'ru' ? 'Премия «YIL BRENDI 2022»' : '«YIL BRENDI 2022» mukofoti'}</h4>
                                    <p className="text-gray-400 text-xs font-medium mb-1 leading-snug">{lang === 'ru' ? 'За самый широкий ассортимент в Ташкенте' : 'Eng keng assortiment uchun'}</p>
                                    <span className="text-[10px] font-bold text-gray-300">2022</span>
                                </div>
                            </div>
                            {/* 5 */}
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between min-h-[320px]">
                                <div className="w-full h-40 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100 text-gray-400 mb-4">
                                    <svg className="w-12 h-12 stroke-current" fill="none" strokeWidth="1.5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.397-1.102-2.397-2.427C9.603 4.102 10.645 3 12 3s2.397 1.102 2.397 2.427c0 1.325-1.042 2.427-2.397 2.427zm0 0c-2.115 0-3.83 1.722-3.83 3.845v1.442" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-gray-950 text-base font-black mb-1">{lang === 'ru' ? 'Премия «Лидер рынка»' : '«Bozor yetakchisi»'}</h4>
                                    <p className="text-gray-400 text-xs font-medium mb-1 leading-snug">{lang === 'ru' ? 'Первое место по продажам крупной бытовой техники' : 'Birinchi oʻrin savdo boʻyicha'}</p>
                                    <span className="text-[10px] font-bold text-gray-300">2023</span>
                                </div>
                            </div>
                            {/* 6 */}
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between min-h-[320px]">
                                <div className="w-full h-40 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100 text-gray-400 mb-4">
                                    <svg className="w-12 h-12 stroke-current" fill="none" strokeWidth="1.5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-gray-950 text-base font-black mb-1">{lang === 'ru' ? 'Народный Бренд' : 'Xalq brendi'}</h4>
                                    <p className="text-gray-400 text-xs font-medium mb-1 leading-snug">{lang === 'ru' ? 'Победитель голосования среди покупателей' : 'Xaridorlar tanlovi gʻolibi'}</p>
                                    <span className="text-[10px] font-bold text-gray-300">2024</span>
                                </div>
                            </div>
                        </div>

                        <button className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs md:text-sm px-10 py-3.5 rounded-xl shadow-md transition-all active:scale-[0.98]">
                            {lang === 'ru' ? 'Все награды' : 'Barcha mukofotlar'}
                        </button>
                    </div>

                    {/* ================= СЛАЙДЕР БРЕНДОВ С РАБОЧИМ АВТОСКРОЛЛОМ (ТЕПЕРЬ ПО СЕРЕДИНЕ) ================= */}
                    <div className="w-full bg-white border border-gray-100 rounded-2xl py-8 shadow-sm overflow-hidden relative mt-4">
                        <div className="text-center text-xs md:text-sm font-bold text-gray-900 mb-6 uppercase tracking-wider">
                            {lang === 'ru' ? 'Мы сотрудничаем с топ-компаниями' : 'Biz yetakchi kompaniyalar bilan hamkorlik qilamiz'}
                        </div>

                        {/* чистый инлайновый стиль для бесконечной плавной анимации влево */}
                        <div className="relative w-full flex overflow-x-hidden">
                            <div
                                className="flex gap-16 px-8 whitespace-nowrap min-w-full"
                                style={{
                                    animation: 'brandMarquee 25s linear infinite',
                                    display: 'flex',
                                    width: 'max-content'
                                }}
                            >
                                {/* стили для кейфреймса чтобы работал автоскролл */}
                                <style>{`
                  @keyframes brandMarquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-33.33%); }
                  }
                `}</style>

                                {/* тройной рендер массива брендов для абсолютно бесшовного круга */}
                                {[...brands, ...brands, ...brands].map((brand, idx) => (
                                    <div key={idx} className="flex items-center justify-center min-w-[130px] h-12 text-gray-400 font-black text-xl tracking-tight hover:text-red-600 transition-colors cursor-pointer select-none">
                                        {brand.icon === 'Apple' ? (
                                            <span className="text-2xl flex items-center"> <span className="text-[10px] font-bold tracking-normal uppercase ml-1 opacity-70">Reseller</span></span>
                                        ) : (
                                            brand.icon.toUpperCase()
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* СЕКЦИЯ ОБРАТНОЙ СВЯЗИ */}
                    <div className="w-full bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-4">
                        <div className="lg:col-span-5 flex flex-col gap-6">
                            <div>
                                <h2 className="text-2xl md:text-4xl font-black text-gray-900 leading-tight">
                                    {lang === 'ru' ? 'Вопросы. Предложения. Жалобы' : 'Savollar. Takliflar. Shikoyatlar'}
                                </h2>
                                <p className="text-gray-400 text-xs md:text-sm mt-2">
                                    {lang === 'ru' ? 'Напишите нам. Мы будем рады получить ваше сообщение.' : 'Bizga yozing. Sizdan xabar olishdan xursand boʻlamiz.'}
                                </p>
                            </div>

                            <div className="flex flex-col gap-5 pt-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 border border-gray-100 rounded-full flex items-center justify-center text-red-600 shadow-sm">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-gray-900 text-sm font-black">{lang === 'ru' ? 'Телефон (с 09:00 до 21:00)' : 'Telefon (09:00 dan 21:00 gacha)'}</div>
                                        <a href="tel:+998712033333" className="text-gray-400 text-xs font-semibold hover:text-red-600 transition-colors">+998 71 203-3-33</a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 border border-gray-100 rounded-full flex items-center justify-center text-red-600 shadow-sm">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-gray-900 text-sm font-black">{lang === 'ru' ? 'График работы:' : 'Ish tartibi:'}</div>
                                        <div className="text-gray-400 text-xs font-semibold">{lang === 'ru' ? 'Пн-Вс: 09:00 - 21:00' : 'Du-Yak: 09:00 - 21:00'}</div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 border border-gray-100 rounded-full flex items-center justify-center text-red-600 shadow-sm">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-gray-900 text-sm font-black">{lang === 'ru' ? 'Офис' : 'Ofis'}</div>
                                        <div className="text-gray-400 text-xs font-semibold">{lang === 'ru' ? 'г. Ташкент, Шайхонтохурский район, ул. Караташ, 11А' : 'Toshkent sh., Shayxontohur tumani, Qoratosh koʻchasi, 11A'}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="lg:col-span-7 bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100 shadow-inner flex flex-col gap-4">
                            <div>
                                <label className="block text-gray-700 text-xs font-bold mb-1.5">{lang === 'ru' ? 'Имя *' : 'Ism *'}</label>
                                <input
                                    type="text"
                                    required
                                    placeholder={lang === 'ru' ? 'Ваше имя' : 'Ismingiz'}
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs md:text-sm font-medium text-gray-900 outline-none focus:border-red-500 transition-colors"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 text-xs font-bold mb-1.5">{lang === 'ru' ? 'Телефон *' : 'Telefon *'}</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="+998"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs md:text-sm font-medium text-gray-900 outline-none focus:border-red-500 transition-colors"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 text-xs font-bold mb-1.5">{lang === 'ru' ? 'Сообщение *' : 'Xabar *'}</label>
                                <textarea
                                    required
                                    rows="4"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs md:text-sm font-medium text-gray-900 outline-none focus:border-red-500 transition-colors resize-none"
                                />
                            </div>

                            <div className="flex items-start gap-3 mt-1">
                                <input
                                    type="checkbox"
                                    id="privacy-checkbox"
                                    checked={agree}
                                    onChange={(e) => setAgree(e.target.checked)}
                                    className="w-4 h-4 rounded border-gray-300 text-red-600 focus:ring-red-500 mt-0.5 accent-red-600 cursor-pointer"
                                />
                                <label htmlFor="privacy-checkbox" className="text-[11px] font-bold text-gray-500 cursor-pointer select-none leading-tight">
                                    {lang === 'ru' ? 'Вы соглашаетесь с Политикой конфиденциальности' : 'Siz Maxfiylik siyosatiga rozilik bildirasiz'}
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-xs md:text-sm py-4 rounded-xl shadow-md transition-all active:scale-[0.99] mt-2"
                            >
                                {lang === 'ru' ? 'Отправить' : 'Yuborish'}
                            </button>
                        </form>
                    </div>

                </div>
            </div>

            <Footer />

        </div>
    )
}