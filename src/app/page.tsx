'use client'
import Head from 'next/head';
import Button from '../components/Button';
import Card from '../components/Card';
import { motion } from 'framer-motion';
import { FileText, User, Mail, ClipboardList } from 'lucide-react';
import { useState } from 'react';

type Translations = {
  [key: string]: {
    heroTitle: string;
    heroSubtitle: string;
    advantages: { title: string; desc: string }[];
    servicesTitle: string;
    servicesDesc: string;
    types: string[];
    langsTitle: string;
    langs: string[];
    contactTitle: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    send: string;
    aboutTitle: string;  // Added About Title
    aboutText: string;   // Added About Text
    learnMore: string; // Added Learn More Text
    footer: string
  };
};

const translations: Translations = {
  ru: {
    heroTitle: "Профессиональный перевод медицинской документации",
    heroSubtitle: "С английского на русский — точно, конфиденциально, с медицинским пониманием",
    advantages: [
      { title: "Медицинская точность", desc: "Использую профессиональные словари и базы терминов" },
      { title: "Опыт и знание предмета", desc: "Работаю с медицинскими текстами более 5 лет" },
      { title: "Конфиденциальность", desc: "Все документы обрабатываются строго анонимно" },
    ],
    servicesTitle: "Услуги",
    servicesDesc: "Я предоставляю услуги перевода следующих типов документов:",
    types: ["Истории болезни", "Выписки", "Научные статьи", "Инструкции к препаратам", "Клинические исследования"],
    langsTitle: "Языковые пары и подача",
    langs: ["Английский → Русский", "Работа с PDF, Word, сканами", "Терминологическая точность"],
    contactTitle: "Связаться со мной",
    namePlaceholder: "Ваше имя",
    emailPlaceholder: "Email",
    messagePlaceholder: "Сообщение",
    send: "Отправить",
    aboutTitle: "Обо мне",  // Added About Title in Russian
    aboutText: "Меня зовут Сергей. Я профессиональный переводчик, специализируюсь на переводе медицинских документов с английского на русский язык. Работаю с клиническими отчетами, выписками, научными статьями и инструкциями к препаратам. Я использую надежные терминологические ресурсы и обладаю большим опытом в своей области.", // Added About Text in Russian
    learnMore: "Узнать больше",  // Added Learn More Text in Russian
    footer: "© 2025 Сергей | Медицинский переводчик"
  },
  en: {
    heroTitle: "Professional Medical Document Translation",
    heroSubtitle: "From English to Russian — accurate, confidential, medically informed",
    advantages: [
      { title: "Medical Accuracy", desc: "Using professional glossaries and terminology databases" },
      { title: "Experience and Expertise", desc: "Over 5 years working with medical texts" },
      { title: "Confidentiality", desc: "All documents handled strictly anonymously" },
    ],
    servicesTitle: "Services",
    servicesDesc: "I provide translation services for the following document types:",
    types: ["Medical histories", "Discharge summaries", "Scientific articles", "Drug instructions", "Clinical trials"],
    langsTitle: "Languages and Formats",
    langs: ["English → Russian", "Work with PDF, Word, scanned files", "Terminological precision"],
    contactTitle: "Contact Me",
    namePlaceholder: "Your name",
    emailPlaceholder: "Email",
    messagePlaceholder: "Message",
    send: "Send",
    aboutTitle: "About Me",  // Added About Title in English
    aboutText: "My name is Sergey. I'm a professional translator specializing in medical document translation from English to Russian. I work with clinical reports, discharge summaries, research articles, and drug instructions. I use reliable terminology resources and have extensive experience in my field.", // Added About Text in English
    learnMore: "Learn More",  // Added Learn More Text in English
    footer: "© 2025 Sergey | Medical Translator"
  },
};


export default function HomePage({ defaultLang = 'en' } : { defaultLang: 'en' | 'ru' }) {
  const [lang, setLang] = useState(defaultLang);

  const t = translations[lang];

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Head>
        <title>{t.heroTitle}</title>
        <meta name="description" content={t.heroSubtitle} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className="flex justify-end p-4">
        <Button onClick={() => setLang(lang === 'ru' ? 'en' : 'ru') }>
          {lang === 'ru' ? 'EN' : 'RU'}
        </Button>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-50 py-16 px-4 text-center">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl font-bold mb-4">{t.heroTitle}</h1>
          <p className="text-lg mb-6">{t.heroSubtitle}</p>
          <Button onClick={scrollToAbout}>{t.learnMore}</Button>
        </motion.div>
      </section>

      {/* Advantages */}
      <section className="py-12 px-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        {t.advantages.map((item, index) => (
          <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.2 }}>
          <Card
            key={index}
            icon={[FileText, User, Mail][index % 3]}
            title={item.title}
            description={item.desc}
          />
          </motion.div>
        ))}
      </section>

      {/* About Section */}
      <section className="py-16 px-6 max-w-3xl mx-auto" id="about">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl font-bold mb-4">{t.aboutTitle}</h2>
          <p className="text-lg leading-relaxed">{t.aboutText}</p>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 bg-gray-50">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <h2 className="text-3xl font-bold mb-6 text-center">{t.servicesTitle}</h2>
        <p className="text-lg mb-6 text-center">{t.servicesDesc}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card
            icon={ClipboardList}
            title={t.servicesTitle}
            description={
              <ul className="list-disc list-inside text-left">
                {t.types.map((type, index) => (
                  <li key={index}>{type}</li>
                ))}
              </ul>
            }
          />
          <Card
            icon={FileText}
            title={t.langsTitle}
            description={
              <ul className="list-disc list-inside text-left">
                {t.langs.map((lang, index) => (
                  <li key={index}>{lang}</li>
                ))}
              </ul>
            }
          />
        </div>
        </motion.div>
      </section>

       {/* Contact Section */}
       <section className="py-16 px-6" id="contact">
        <div className="max-w-2xl mx-auto">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <h2 className="text-3xl font-bold mb-6 text-center">{t.contactTitle}</h2>
          <form className="grid gap-4">
            <input
              type="text"
              placeholder={t.namePlaceholder}
              className="border p-3 rounded-xl w-full"
              required
            />
            <input
              type="email"
              placeholder={t.emailPlaceholder}
              className="border p-3 rounded-xl w-full"
              required
            />
            <textarea
              placeholder={t.messagePlaceholder}
              rows={4}
              className="border p-3 rounded-xl w-full"
              required
            />
            <Button
              type="submit"
            >
              {t.send}
            </Button>
          </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-100 py-6 text-center">
        <p className="text-sm">{t.footer}</p>
      </footer>
    </div>
  );
}
