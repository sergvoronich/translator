export type Translations = {
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
  
  export const translations: Translations = {
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
  