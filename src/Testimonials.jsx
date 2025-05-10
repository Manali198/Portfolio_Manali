import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: "Meta1Zero",
    quote: "Delivered our DEX project faster than expected. Manali’s contract logic was flawless and secure.Found vulnerabilities no other audit had caught. Her detailed reports and clarity impressed us",
    avatar: "🧑‍💻"
  },
  {
    name: "XGRAFT",
    role: "CEO, XGRAFT",
    quote: "UI/UX and smart contract integration was seamless. I’ve worked with many devs — she stands out.",
    avatar: "👨‍🚀"
  },
  {
    role: "",
    quote: "Great communication, deep blockchain knowledge, and consistent delivery — would 100% recommend.",
    avatar: "👩‍💼"
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % testimonials.length);
  const prev = () => setIndex((index - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="max-w-3xl mx-auto px-6 py-20 text-center">
      {/* <h3 className="text-4xl font-bold mb-10 text-white">What Clients Say</h3> */}

      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-zinc-800 rounded-xl p-8 border border-zinc-700 shadow-lg"
          >
            <div className="text-4xl mb-4">{testimonials[index].avatar}</div>
            <blockquote className="italic text-gray-300 text-lg mb-4">“{testimonials[index].quote}”</blockquote>
            <div className="text-blue-300 font-semibold text-sm">{testimonials[index].name}</div>
            <div className="text-gray-400 text-xs">{testimonials[index].role}</div>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-between mt-6">
          <button onClick={prev} className="text-blue-400 hover:text-blue-300 focus:outline-none">← Previous</button>
          <button onClick={next} className="text-blue-400 hover:text-blue-300 focus:outline-none">Next →</button>
        </div>
      </div>
    </section>
  );
}
