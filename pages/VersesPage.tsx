import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { ChevronLeft, RefreshCw, Quote, Sparkles } from 'lucide-react';
import { BibleVerse } from '../types';
import { generateReflection, getRandomVerse } from '../utils/bibleHelpers';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖabcdefghijklmnopqrstuvwxyzåäö';

const scrambleString = (original: string): string => {
  return original
    .split('')
    .map((char) => {
      if (char.trim() === '') return char;
      if ('.,:;!?-–()'.includes(char)) return char;
      return CHARS[Math.floor(Math.random() * CHARS.length)];
    })
    .join('');
};

const VersesPage: React.FC = () => {
  const [currentVerse, setCurrentVerse] = useState<BibleVerse | null>(null);
  const [reflection, setReflection] = useState<string>('');
  const [isRandomizing, setIsRandomizing] = useState(false);
  const [animatedReference, setAnimatedReference] = useState<string | null>(null);
  const [animatedText, setAnimatedText] = useState<string | null>(null);
  const [reflectionAnimationKey, setReflectionAnimationKey] = useState(0);
  const [isReflectionVisible, setIsReflectionVisible] = useState(true);

  const scrambleIntervalRef = useRef<number | null>(null);

  const handleRandomizeVerse = () => {
    if (isRandomizing) return;

    const nextVerse = getRandomVerse();
    setIsRandomizing(true);
    setIsReflectionVisible(false);

    if (scrambleIntervalRef.current) {
      clearInterval(scrambleIntervalRef.current);
    }

    scrambleIntervalRef.current = window.setInterval(() => {
      setAnimatedReference(scrambleString(nextVerse.reference));
      setAnimatedText(scrambleString(nextVerse.text));
    }, 50);

    setTimeout(() => {
      if (scrambleIntervalRef.current) {
        clearInterval(scrambleIntervalRef.current);
        scrambleIntervalRef.current = null;
      }

      setAnimatedReference(null);
      setAnimatedText(null);
      setCurrentVerse(nextVerse);
      setReflection(generateReflection(nextVerse));
      setIsRandomizing(false);
      setIsReflectionVisible(true);
      setReflectionAnimationKey((prev) => prev + 1);
    }, 700);
  };

  useEffect(() => {
    return () => {
      if (scrambleIntervalRef.current) {
        clearInterval(scrambleIntervalRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background animate-fade-in flex flex-col">
      <Header
        title="Slumpa en vers"
        backButton={<Link to="/tools" className="text-secondary hover:text-primary"><ChevronLeft /></Link>}
      />

      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center max-w-md mx-auto w-full">

        {!currentVerse ? (
          <div className="space-y-8 animate-fade-in">
            <div className="w-24 h-24 bg-surface rounded-full flex items-center justify-center mx-auto text-accent mb-6 border border-border shadow-sm">
              <RefreshCw size={40} className={isRandomizing ? 'animate-spin' : ''} />
            </div>
            <h2 className="text-2xl font-bold text-primary">Behöver du ett ord på vägen?</h2>
            <p className="text-secondary leading-relaxed">
              Klicka nedan för att få en slumpad bibelvers att reflektera över.
              Slumpen är bara ett verktyg – låt orden leda dig till eftertanke.
            </p>
            <button
              onClick={handleRandomizeVerse}
              disabled={isRandomizing}
              className="bg-accent text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-accent-hover transition-transform active:scale-95 w-full disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isRandomizing ? 'Slumpar...' : 'Slumpa en vers'}
            </button>
          </div>
        ) : (
          <div className="space-y-8 w-full animate-fade-in">
            <Quote size={32} className="text-accent/50 mx-auto" />

            <div className="space-y-4">
              <h3 className="text-3xl font-serif font-medium leading-snug text-primary">
                "{isRandomizing && animatedText ? animatedText : currentVerse.text}"
              </h3>
              <p className="text-accent font-bold uppercase tracking-widest text-sm">
                {isRandomizing && animatedReference ? animatedReference : currentVerse.reference}
              </p>
            </div>

            <div
              key={reflectionAnimationKey}
              className={`bg-surface/50 p-6 rounded-xl border border-border animated-reflection ${isReflectionVisible ? 'reflection-visible' : 'reflection-hidden'}`}
            >
              <div className="flex items-center gap-2 mb-2 text-accent">
                <Sparkles size={14} />
                <span className="text-xs font-bold uppercase tracking-wide">Reflektion</span>
              </div>
              <p className="text-secondary italic text-sm">
                {reflection}
              </p>
            </div>

            <button
              onClick={handleRandomizeVerse}
              disabled={isRandomizing}
              className="flex items-center justify-center gap-2 text-primary hover:text-accent transition-colors mx-auto mt-8 py-4 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <RefreshCw size={16} className={isRandomizing ? 'animate-spin' : ''} />
              <span>{isRandomizing ? 'Slumpar...' : 'Ny vers'}</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default VersesPage;
