import { motion } from "framer-motion";
import { FileText, User, Mail, ClipboardList } from "lucide-react";
import Button from "./Button";
import Card from "./Card";

type Translation = {
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

function MainContent({t} : {t: Translation}) {

    const scrollToAbout = () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
      };

    return ( 
        <>
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
    </>
     );
}

export default MainContent;
