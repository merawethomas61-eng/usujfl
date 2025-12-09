import { Search, TrendingUp, Target, BarChart3, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';

function TypedText() {
  const sentences = [
    "Fra usynlig til uunnværlig.",
    "Toppen av Google – der du hører hjemme.",
    "En nettside som føles lynrask.",
    "Flere klikk. Flere kunder. Mer vekst.",
    "Synlighet er fremtidens valuta."
  ];

  const [displayedText, setDisplayedText] = useState('');
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentSentence = sentences[sentenceIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentSentence.length) {
          setDisplayedText(currentSentence.substring(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.substring(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setSentenceIndex((prev) => (prev + 1) % sentences.length);
        }
      }
    }, isDeleting ? 30 : 50);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, sentenceIndex]);

  return (
    <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight min-h-16 sm:min-h-20 md:min-h-24 flex items-center justify-center">
      <span className="typing-text text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400">
        {displayedText}
      </span>
    </h2>
  );
}

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Boost Rankings',
      description: 'Climb to the top of search results and dominate your industry'
    },
    {
      icon: Target,
      title: 'Targeted Traffic',
      description: 'Attract qualified leads actively searching for your services'
    },
    {
      icon: BarChart3,
      title: 'Data-Driven Results',
      description: 'Track measurable growth with comprehensive analytics and reporting'
    },
    {
      icon: Zap,
      title: 'Fast Implementation',
      description: 'See improvements within weeks with our proven SEO strategies'
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/background.jpg.png)' }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/40 via-gray-900/70 to-gray-950/95" />

      <div className="relative z-10 min-h-screen flex flex-col">
        <header className="pt-6 sm:pt-8 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-xl sm:text-2xl font-bold text-white">SEO Pro</h1>
          </div>
        </header>

        <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-8 sm:py-0 pb-16 sm:pb-20">
          <div className="max-w-4xl w-full text-center mb-8 sm:mb-12">
            <TypedText />
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-12 px-2 sm:px-0">
              Professional SEO services that drive real results and sustainable growth
            </p>

            <div className="relative flex flex-col sm:flex-row gap-2 sm:gap-3 max-w-2xl mx-auto w-full px-4 sm:px-0">
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-4 sm:left-6 flex items-center pointer-events-none">
                  <Search className="h-5 sm:h-6 w-5 sm:w-6 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Enter your website URL or keyword..."
                  className="glow-input w-full pl-12 sm:pl-16 pr-4 sm:pr-6 py-4 sm:py-5 bg-white/95 backdrop-blur-sm text-sm sm:text-lg text-gray-900 placeholder-gray-500 rounded-lg sm:rounded-xl focus:outline-none focus:ring-0 transition-all border border-white/30 hover:border-cyan-400/50 focus:border-cyan-400"
                />
              </div>
              <button className="glow-button bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-6 sm:px-8 py-4 sm:py-5 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base whitespace-nowrap">
                Analyze
              </button>
            </div>
          </div>

          <div className="max-w-6xl w-full mt-12 sm:mt-16 px-4 sm:px-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:bg-white/15 transition-all duration-300 hover:transform hover:-translate-y-1 border border-white/10"
                  >
                    <div className="bg-blue-600/20 w-10 sm:w-12 h-10 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                      <Icon className="h-5 sm:h-6 w-5 sm:w-6 text-blue-400" />
                    </div>
                    <h3 className="text-white font-semibold text-base sm:text-lg mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </main>

        <footer className="py-4 sm:py-6 px-4 sm:px-6 text-center">
          <p className="text-gray-400 text-xs sm:text-sm">
            Trusted by leading brands worldwide
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
