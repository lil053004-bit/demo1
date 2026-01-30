import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GlassCard from '../ui/GlassCard';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Is this really 100% FREE?',
      answer:
        'Yes, absolutely. We believe in providing access to smart money data. You get the full SmartMoney Rank™ system and investor tracking for free. No credit card is required at any point.',
    },
    {
      question: 'How often is the data updated?',
      answer:
        'The investor portfolio data is updated in real-time, typically within 60 seconds of an SEC filing (13F, 13D/G) being released. The SmartMoney Rank™ score is recalculated and updated once daily.',
    },
    {
      question: 'How does the SmartMoney Rank™ system work?',
      answer:
        'Our proprietary algorithm analyzes multiple factors, including the number of investors buying (consensus), the size of their positions (conviction), and the recency of their trades to generate a final score and ranking for the top 50 stocks.',
    },
    {
      question: 'Is this considered investment advice?',
      answer:
        'No. We provide real-time data and tools for informational purposes only. We do not provide personalized investment advice, and we encourage all users to conduct their own due diligence before making any investment decisions.',
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
            Frequently Asked Questions
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
