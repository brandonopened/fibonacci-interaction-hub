import { useEffect, useState } from "react";

const phrases = [
  "Building AI Solutions",
  "Crafting LLM Agents",
  "Transforming Businesses",
];

export const Hero = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="container mx-auto px-4 text-center z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
          Fibonacci Skills
        </h1>
        <div className="h-16 md:h-20">
          <p className="text-2xl md:text-4xl font-semibold overflow-hidden whitespace-nowrap border-r-4 border-primary inline-block animate-typing animate-cursor-blink">
            {phrases[currentPhrase]}
          </p>
        </div>
        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Empowering businesses with cutting-edge AI solutions and custom LLM agents
        </p>
        <button className="mt-8 px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
          Explore Our Work
        </button>
      </div>
    </div>
  );
};