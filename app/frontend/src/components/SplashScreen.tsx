import { useState, Suspense } from 'react';
import GenerativeMountainScene from '@/components/ui/mountain-scene';

interface SplashScreenProps {
  children: React.ReactNode;
}

export default function SplashScreen({ children }: SplashScreenProps) {
  const [exiting, setExiting] = useState(false);
  const [showMain, setShowMain] = useState(false);

  const handleEnter = () => {
    setExiting(true);
    setTimeout(() => setShowMain(true), 800);
  };

  if (showMain) {
    return <>{children}</>;
  }

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#faf0dc] transition-opacity duration-700 ${
        exiting ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Mountain Animation Background — untouched */}
      <div className="absolute inset-0">
        <Suspense fallback={<div className="w-full h-full bg-[#faf0dc]" />}>
          <GenerativeMountainScene />
        </Suspense>
      </div>

      {/* Upper-center content — fixed in top ~35% of viewport */}
      <div
        className="absolute left-1/2 z-10 flex flex-col items-center gap-8 text-center"
        style={{ top: '18%', transform: 'translateX(-50%)' }}
      >
        {/* Subtitle — delay 0s */}
        <p
          className="splash-animate text-gold text-lg sm:text-xl md:text-2xl font-light tracking-[0.3em] uppercase"
          style={{ animationDelay: '0s' }}
        >
          Hello, I'm Bhanu Teja
        </p>

        {/* Heading — delay 0.2s */}
        <h1
          className="splash-animate text-4xl sm:text-5xl md:text-6xl font-light text-brown-800 tracking-tight -mt-4"
          style={{ animationDelay: '0.2s' }}
        >
          Welcome to my{' '}
          <span className="font-semibold text-gold">
            Portfolio
          </span>
        </h1>

        {/* Enter button — delay 0.4s */}
        <button
          onClick={handleEnter}
          className="splash-animate px-8 py-3 rounded-full border border-gold/60 text-gold text-sm tracking-[0.25em] uppercase font-light transition-all duration-500 hover:tracking-[0.35em] hover:bg-gold/10 hover:border-gold hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]"
          style={{ animationDelay: '0.4s' }}
        >
          Enter
        </button>
      </div>
    </div>
  );
}
