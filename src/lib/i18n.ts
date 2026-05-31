import { createContext, useContext } from 'react';

export type Language = 'en' | 'ru';

export const translations = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      catalog: 'Catalog',
      about: 'About',
      contact: 'Contact',
      requestSamples: 'Request Samples',
    },
    // Hero
    hero: {
      headline: '100% Genuine Premium Leather',
      subheadline: 'Sourced Directly from Africa Upon Request',
      description: 'Exquisite exotic leather hides for discerning manufacturers of luxury bags, shoes, and belts. Uncompromising quality meets African heritage.',
      cta: 'Explore Collection',
      badge: 'Free initial samples available upon request',
    },
    // Categories
    categories: {
      title: 'Our Collection',
      subtitle: 'Curated exotic leathers for the finest luxury goods',
      crocodile: 'Crocodile Leather',
      snake: 'Snake Leather',
      tiger: 'Tiger Leather',
      lion: 'Lion Leather',
      ostrich: 'Ostrich Leather',
      stingray: 'Stingray Leather',
      lizard: 'Lizard Leather',
      all: 'All Categories',
    },
    // Product
    product: {
      origin: 'Origin',
      thickness: 'Thickness',
      texture: 'Texture',
      bestFor: 'Best For',
      moq: 'Minimum Order',
      moqNote: 'MOQ: 1 piece',
      quantity: 'Quantity',
      orderNow: 'Order via WhatsApp',
      requestQuote: 'Request Quote',
      pieces: 'pieces',
      piece: 'piece',
      viewDetails: 'View Details',
      specifications: 'Specifications',
      gallery: 'Gallery',
      pricePerPiece: 'per piece',
    },
    // WhatsApp
    whatsapp: {
      message: 'Hello! I would like to order {quantity} pieces of {product} ({category}). Please provide pricing and availability.',
      quoteMessage: 'Hello! I am interested in {product} ({category}). Could you please provide a quote for bulk ordering?',
    },
    // Footer
    footer: {
      tagline: 'Premium exotic leather, sourced with integrity from the heart of Africa.',
      contact: 'Contact',
      hours: 'Business Hours',
      hoursValue: 'Mon–Fri: 9:00 AM – 6:00 PM (EAT)',
      social: 'Follow Us',
      rights: 'All rights reserved.',
      address: 'Nairobi, Kenya',
      email: 'info@afrileather.com',
      phone: '+254 700 000 000',
    },
    // About
    about: {
      title: 'Our Heritage',
      subtitle: 'Generations of expertise in sourcing the finest African exotic leathers',
      story: 'For over two decades, AfriLeather has been the trusted bridge between Africa\'s finest tanneries and the world\'s most prestigious luxury houses. Every hide we source tells a story of craftsmanship, sustainability, and uncompromising quality.',
      values: 'Our Values',
      quality: 'Uncompromising Quality',
      qualityDesc: 'Every hide undergoes rigorous inspection. Only the top 5% meet our standards.',
      sustainability: 'Ethical Sourcing',
      sustainabilityDesc: 'We work exclusively with licensed, sustainable operations across East and Southern Africa.',
      partnership: 'True Partnership',
      partnershipDesc: 'We don\'t just sell leather — we build lasting relationships with manufacturers worldwide.',
    },
  },
  ru: {
    // Navigation
    nav: {
      home: 'Главная',
      catalog: 'Каталог',
      about: 'О нас',
      contact: 'Контакты',
      requestSamples: 'Запросить образцы',
    },
    // Hero
    hero: {
      headline: '100% Натуральная Премиум Кожа',
      subheadline: 'Прямые поставки из Африки по запросу',
      description: 'Изысканная экзотическая кожа для взыскательных производителей люксовых сумок, обуви и ремней. Бескомпромиссное качество и африканское наследие.',
      cta: 'Смотреть коллекцию',
      badge: 'Бесплатные образцы доступны по запросу',
    },
    // Categories
    categories: {
      title: 'Наша Коллекция',
      subtitle: 'Отборная экзотическая кожа для лучших люксовых изделий',
      crocodile: 'Кожа крокодила',
      snake: 'Кожа змеи',
      tiger: 'Кожа тигра',
      lion: 'Кожа льва',
      ostrich: 'Кожа страуса',
      stingray: 'Кожа ската',
      lizard: 'Кожа ящерицы',
      all: 'Все категории',
    },
    // Product
    product: {
      origin: 'Происхождение',
      thickness: 'Толщина',
      texture: 'Текстура',
      bestFor: 'Применение',
      moq: 'Минимальный заказ',
      moqNote: 'МОЗ: 1 штука',
      quantity: 'Количество',
      orderNow: 'Заказать через WhatsApp',
      requestQuote: 'Запросить цену',
      pieces: 'штук',
      piece: 'штука',
      viewDetails: 'Подробнее',
      specifications: 'Характеристики',
      gallery: 'Галерея',
      pricePerPiece: 'за штуку',
    },
    // WhatsApp
    whatsapp: {
      message: 'Здравствуйте! Я хотел бы заказать {quantity} штук {product} ({category}). Пожалуйста, предоставьте информацию о ценах и наличии.',
      quoteMessage: 'Здравствуйте! Меня интересует {product} ({category}). Не могли бы вы предоставить предложение для оптового заказа?',
    },
    // Footer
    footer: {
      tagline: 'Премиальная экзотическая кожа, добытая с уважением в самом сердце Африки.',
      contact: 'Контакты',
      hours: 'Режим работы',
      hoursValue: 'Пн–Пт: 9:00 – 18:00 (EAT)',
      social: 'Мы в соцсетях',
      rights: 'Все права защищены.',
      address: 'Найроби, Кения',
      email: 'info@afrileather.com',
      phone: '+254 700 000 000',
    },
    // About
    about: {
      title: 'Наше наследие',
      subtitle: 'Поколения опыта в поиске лучшей африканской экзотической кожи',
      story: 'Более двух десятилетий AfriLeather является надёжным мостом между лучшими африканскими кожевенными заводами и самыми престижными домами моды. Каждая шкура, которую мы поставляем, рассказывает историю мастерства, устойчивости и бескомпромиссного качества.',
      values: 'Наши ценности',
      quality: 'Бескомпромиссное качество',
      qualityDesc: 'Каждая шкура проходит тщательную проверку. Только 5% лучших соответствуют нашим стандартам.',
      sustainability: 'Этичные поставки',
      sustainabilityDesc: 'Мы работаем исключительно с лицензированными устойчивыми предприятиями Восточной и Южной Африки.',
      partnership: 'Истинное партнёрство',
      partnershipDesc: 'Мы не просто продаём кожу — мы строим долгосрочные отношения с производителями по всему миру.',
    },
  },
} as const;

export type TranslationKeys = typeof translations.en;

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationKeys;
}

export const I18nContext = createContext<I18nContextType>({
  language: 'en',
  setLanguage: () => {},
  t: translations.en,
});

export const useI18n = () => useContext(I18nContext);
