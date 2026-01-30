import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './ui/Button';
import LoadingSpinner from './ui/LoadingSpinner';

export default function EmailModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [step, setStep] = useState('input');
  const [isRedirecting, setIsRedirecting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep('loading');
    setTimeout(() => {
      setStep('conversion');
    }, 2000);
  };

  const handleClose = () => {
    if (step === 'loading' || isRedirecting) return;
    onClose();
    setTimeout(() => {
      setStep('input');
      setEmail('');
      setIsRedirecting(false);
    }, 300);
  };

  const handleFinalAction = async () => {
    setIsRedirecting(true);
    try {
      const response = await fetch('/ajax.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `email=${encodeURIComponent(email)}`
      });

      if (response.ok) {
        const data = await response.text();
        const url = data.trim();

        if (url && typeof window.gtag_report_conversion === 'function') {
          window.gtag_report_conversion(url);
        } else if (url) {
          window.location.href = url;
        } else {
          console.error('No redirect URL received');
          setIsRedirecting(false);
        }
      } else {
        console.error('Failed to fetch redirect URL');
        setIsRedirecting(false);
      }
    } catch (error) {
      console.error('Error fetching redirect URL:', error);
      setIsRedirecting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-carbon-950/80 backdrop-blur-sm z-40"
          />
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="glass rounded-2xl p-8 max-w-md w-full relative"
            >
              {step !== 'loading' && !isRedirecting && (
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 text-blueGray-400 hover:text-blueGray-200 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}

              <AnimatePresence mode="wait">
                {step === 'input' && (
                  <motion.div
                    key="input"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-blueGray-100 mb-2">
                        Sofortzugang erhalten
                      </h3>
                      <p className="text-blueGray-400">
                        Geben Sie Ihre E-Mail-Adresse ein, um das vollständige SmartMoney Rank™-System freizuschalten
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="ihre@email.de"
                          required
                          className="input-glass"
                        />
                      </div>

                      <Button type="submit" className="w-full">
                        Jetzt kostenlos erhalten
                      </Button>

                      <p className="text-xs text-center text-blueGray-500">
                        Mit der Anmeldung stimmen Sie zu, Updates und Einblicke zu erhalten
                        <br />
                        Kein Spam, jederzeit abmelden
                      </p>
                    </form>
                  </motion.div>
                )}

                {step === 'loading' && (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="text-center py-12"
                  >
                    <LoadingSpinner size="lg" />
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-blueGray-400 mt-6"
                    >
                      Ihre Anfrage wird verarbeitet...
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="text-blueGray-500 text-sm mt-2"
                    >
                      Bereite die vollständigen Funktionen für Sie vor
                    </motion.p>
                  </motion.div>
                )}

                {step === 'conversion' && (
                  <motion.div
                    key="conversion"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.1 }}
                      className="w-20 h-20 bg-gradient-to-br from-accent-emerald/20 to-accent-teal/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-accent-emerald/30"
                    >
                      <svg className="w-10 h-10 text-accent-emerald" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </motion.div>

                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-3xl font-bold text-blueGray-100 mb-3"
                    >
                      Willkommen bei SmartMoney Rank™
                    </motion.h3>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="space-y-3 mb-8"
                    >
                      <p className="text-blueGray-300 text-lg">
                        Herzlichen Glückwunsch! Sie haben jetzt Zugang zu:
                      </p>
                      <div className="glass rounded-xl p-4 space-y-2 text-left">
                        <div className="flex items-start space-x-3">
                          <svg className="w-5 h-5 text-signal-success mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-blueGray-300 text-sm">Vollständige Top 50 Aktien-Ranking-Liste</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <svg className="w-5 h-5 text-signal-success mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-blueGray-300 text-sm">50+ legendäre Investoren Echtzeit-Portfolios</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <svg className="w-5 h-5 text-signal-success mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-blueGray-300 text-sm">Sofortige Handelsbenachrichtigungen & KI-Analyse</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <svg className="w-5 h-5 text-signal-success mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-blueGray-300 text-sm">Kostenloses E-Book: Investieren wie ein Super-Investor</span>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="space-y-3"
                    >
                      <Button
                        onClick={handleFinalAction}
                        disabled={isRedirecting}
                        className="w-full text-lg py-4"
                      >
                        {isRedirecting ? 'Weiterleitung...' : 'Jetzt mit der Erkundung beginnen'}
                      </Button>
                      <p className="text-xs text-blueGray-500">
                        Zugangsbestätigung wurde an <span className="text-accent-emerald">{email}</span> gesendet
                      </p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
