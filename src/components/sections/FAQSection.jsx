import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GlassCard from '../ui/GlassCard';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Ist dies wirklich 100% KOSTENLOS?',
      answer:
        'Ja, absolut. Wir glauben an die Demokratisierung des Zugangs zu Smart-Money-Daten, die zuvor nur institutionellen Anlegern zur Verfügung standen. Sie erhalten das vollständige SmartMoney Rank™-System, Echtzeit-Investoren-Tracking, Portfolio-Benachrichtigungen und unsere exklusiven Investmentleitfäden völlig kostenlos. Es wird zu keinem Zeitpunkt eine Kreditkarte benötigt, keine versteckten Gebühren und keine automatischen Abonnements.',
    },
    {
      question: 'Wie oft werden die Daten aktualisiert?',
      answer:
        'Die Investor-Portfolio-Daten werden in Echtzeit aktualisiert, normalerweise innerhalb von 60 Sekunden nach Veröffentlichung einer SEC-Einreichung (13F, 13D/G). Unser automatisiertes System überwacht die SEC EDGAR-Datenbank 24/7 und verarbeitet Einreichungen sofort. Der SmartMoney Rank™-Score wird einmal täglich bei Marktschluss neu berechnet und aktualisiert, um die neuesten Konsens- und Überzeugungs-Niveaus widerzuspiegeln.',
    },
    {
      question: 'Wie funktioniert das SmartMoney Rank™-System?',
      answer:
        'Unser proprietärer Algorithmus analysiert mehrere Faktoren, um ein objektives Ranking zu erstellen: (1) Konsens - wie viele Elite-Investoren die Aktie kaufen, (2) Überzeugung - die Größe ihrer Positionen im Verhältnis zu ihrem Gesamtportfolio, (3) Timing - die Aktualität und Dynamik ihrer Trades, und (4) Performance - die historische Erfolgsbilanz der Investoren, die die Position halten. Diese Metriken werden gewichtet und kombiniert, um einen endgültigen Score für die Top 50 Aktien zu erstellen.',
    },
    {
      question: 'Welche Investoren verfolgen Sie?',
      answer:
        'Wir verfolgen 50+ legendäre Investoren, darunter Warren Buffett, Bill Ackman, George Soros, Ray Dalio, Carl Icahn, David Tepper, David Einhorn und viele mehr. Dies sind Milliardärs-Fondsmanager mit nachgewiesener jahrzehntelanger Erfolgsbilanz, die Milliarden an Vermögenswerten verwalten. Wir wählen Investoren sorgfältig aufgrund ihrer historischen Performance, Investmentphilosophie und Transparenz in ihren öffentlichen Einreichungen aus.',
    },
    {
      question: 'Woher stammen die Daten?',
      answer:
        'Alle Daten stammen direkt aus offiziellen SEC-Einreichungen, hauptsächlich 13F-Berichte (vierteljährliche Offenlegung von Beteiligungen für institutionelle Investmentmanager mit über 100 Mio. $ Vermögen) und 13D/G-Einreichungen (Offenlegung von 5%+ Eigentumsanteilen). Dies sind dieselben Daten, die von professionellen Analysten und Hedgefonds verwendet werden, aber wir verarbeiten sie sofort und machen sie kostenlos für jeden zugänglich.',
    },
    {
      question: 'Warum sollte ich Super-Investor-Bewegungen folgen?',
      answer:
        'Super-Investoren haben dedizierte Research-Teams, jahrzehntelange Erfahrung und Zugang zu Unternehmensführungen, die einzelne Investoren nicht haben. Akademische Forschung zeigt, dass das Nachahmen von Elite-Investor-Portfolios signifikante Alpha generieren kann. Durch frühzeitiges Verfolgen ihrer Bewegungen können Sie hochüberzeugte Ideen identifizieren, bevor der breitere Markt darauf aufmerksam wird. Viele der größten Investmentchancen wurden durch das Verfolgen von Smart Money entdeckt.',
    },
    {
      question: 'Wie fange ich an?',
      answer:
        'Klicken Sie einfach auf einen beliebigen "Kostenlosen Zugang erhalten"-Button, geben Sie Ihre E-Mail-Adresse ein und Sie erhalten sofortigen Zugang zur vollständigen Plattform einschließlich SmartMoney Rank™ Top 50, detaillierten Investoren-Portfolios, Echtzeit-Benachrichtigungen und unseren exklusiven Investmentleitfäden. Der gesamte Prozess dauert weniger als 30 Sekunden und Sie können sofort mit der Erkundung beginnen.',
    },
    {
      question: 'Gilt dies als Anlageberatung?',
      answer:
        'Nein. Wir bieten Echtzeit-Daten und Analysewerkzeuge nur zu Informations- und Bildungszwecken. Wir bieten keine persönliche Anlageberatung, Empfehlungen oder Vorschläge zum Kauf oder Verkauf von Wertpapieren. Alle Investitionsentscheidungen sollten auf Ihrer eigenen Recherche, Risikobereitschaft und finanziellen Situation basieren. Wir empfehlen allen Nutzern dringend, eine gründliche Due Diligence durchzuführen und vor Investitionsentscheidungen einen qualifizierten Finanzberater zu konsultieren.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-blueGray-950/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl sm:text-5xl font-bold">
            Häufig gestellte Fragen
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard
                hover={false}
                animate={false}
                className="cursor-pointer transition-all duration-300"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-blueGray-100 pr-8">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <svg
                      className="w-6 h-6 text-accent-blue"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </motion.div>
                </div>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-blueGray-400 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
