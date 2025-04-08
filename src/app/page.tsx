'use client'
import Head from 'next/head';
import Button from '../components/Button';
import { useState } from 'react';
import { translations } from './content';
import MainContent from '@/components/MainContent';

export default function HomePage() {
  const [lang, setLang] = useState<'en' | 'ru'>('en');

  const t = translations[lang];

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

      <MainContent t={t}/>

      <footer className="bg-blue-100 py-6 text-center">
        <p className="text-sm">{t.footer}</p>
      </footer>
    </div>
  );
}
