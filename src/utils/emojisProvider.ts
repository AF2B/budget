import { useMemo } from 'react';

const emojisProvider = () => {
  const emojis: string[] = ['🤑', '🤩', '🧐', '😎', '😉', '😃'];
  const randomIndex = Math.floor(Math.random() * emojis.length);
  return emojis[randomIndex];
};

const useEmojisProvider = () => {
  return useMemo(() => emojisProvider(), []);
};

export default useEmojisProvider;
