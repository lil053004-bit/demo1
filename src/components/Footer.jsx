export default function Footer() {
  return (
    <footer className="glass border-t border-blueGray-800/50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3">
          <p className="text-blueGray-400 text-sm">
            &copy; {new Date().getFullYear()} SmartMoney Rank™. Alle Rechte vorbehalten.
          </p>
          <p className="text-blueGray-500 text-sm">
            Haftungsausschluss: Daten dienen nur zu Informationszwecken und stellen keine Anlageberatung dar.
          </p>
          <div className="flex justify-center gap-6 text-sm">
            <a
              href="#"
              className="text-blueGray-400 hover:text-accent-emerald transition-colors duration-200"
            >
              Nutzungsbedingungen
            </a>
            <a
              href="#"
              className="text-blueGray-400 hover:text-accent-emerald transition-colors duration-200"
            >
              Datenschutzrichtlinie
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
