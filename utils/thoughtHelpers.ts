import { THOUGHTS } from '../data/mockData';
import { Thought } from '../types';

const DEFAULT_THOUGHT: Thought = {
  id: 'default',
  text: 'Ta ett ögonblick och andas in. Låt dagens tanke ge dig lugn och riktning.',
  source: 'Belthran',
};

const availableThoughts = THOUGHTS.filter((thought) => thought.text.trim().length > 0);

/**
 * Selects a daily thought deterministically based on the current date.
 * This ensures all users see the same "Dagens tanke" on a given day, and it rotates.
 */
export const getDailyThought = (): Thought => {
  if (availableThoughts.length === 0) return DEFAULT_THOUGHT;

  const dateStr = new Date().toDateString();
  let hash = 0;
  for (let i = 0; i < dateStr.length; i++) {
    hash = dateStr.charCodeAt(i) + ((hash << 5) - hash);
  }

  const index = Math.abs(hash) % availableThoughts.length;
  return availableThoughts[index];
};

/**
 * Returns a random thought from the collection.
 */
export const getRandomThought = (): Thought => {
  if (availableThoughts.length === 0) return DEFAULT_THOUGHT;
  return availableThoughts[Math.floor(Math.random() * availableThoughts.length)];
};

/**
 * Generates an encouraging reflection for the chosen thought.
 */
export const generateReflection = (thought: Thought): string => {
  if (thought.reflection && thought.reflection.trim().length > 0) {
    return thought.reflection.trim();
  }

  const reflections = [
    'Ta med dig det som gav dig lugn i den här tanken och låt det forma resten av dagen.',
    'Fundera över hur du kan omsätta den här tanken i ett litet, konkret steg i dag.',
    'Låt orden sjunka in och påminn dig om att du inte behöver bära allt själv.',
    'Du får ta det i din takt. Den här tanken får vara en stilla riktning, inte ett krav.',
    'Skriv ner en mening som fastnar hos dig och återkom till den när dagen rör sig vidare.',
    'Känn efter vad du behöver just nu, och låt den här tanken bli en vänlig påminnelse.',
  ];

  return reflections[Math.floor(Math.random() * reflections.length)];
};
