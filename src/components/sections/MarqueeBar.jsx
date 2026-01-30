import { motion } from 'framer-motion';

export default function MarqueeBar() {
  const updates = [
    { investor: 'WARREN BUFFETT', action: 'Neue Beteiligung in OXY', detail: '2M Aktien', type: 'buy' },
    { investor: 'BILL ACKMAN', action: 'Position in CMG reduziert', detail: '150k Aktien', type: 'sell' },
    { investor: 'MONISH PABRAI', action: 'Wert in MU erhöht', detail: '500k Aktien', type: 'buy' },
    { investor: 'GEORGE SOROS', action: 'Gesamten Anteil in GOOGL verkauft', detail: '$100M Wert', type: 'sell' },
    { investor: 'RAY DALIO', action: 'Gold-Exposition erhöht', detail: '7% Portfolio', type: 'buy' },
  ];

  return (
    <div className="relative glass border-y border-blueGray-800/50 py-4 overflow-hidden">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {[...updates, ...updates].map((update, index) => (
          <div
            key={index}
            className="inline-flex items-center mx-8 text-sm"
          >
            <span
              className={`font-bold ${
                update.type === 'buy' ? 'text-signal-success' : 'text-signal-danger'
              }`}
            >
              {update.investor}
            </span>
            <span className="text-blueGray-400 mx-2">-</span>
            <span className="text-blueGray-300">{update.action}</span>
            <span
              className={`ml-2 ${
                update.type === 'buy' ? 'text-signal-success/80' : 'text-signal-danger/80'
              }`}
            >
              ({update.detail})
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
