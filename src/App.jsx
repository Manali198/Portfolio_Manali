import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { FaGithub, FaLinkedin, FaArrowUp, FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';

export default function Portfolio() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [modalContent, setModalContent] = useState(null);
  const [darkMode, setDarkMode] = useState(localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const sections = ['home', 'about', 'projects', 'experience', 'education', 'contact'];

  const openModal = (content) => setModalContent(content);
  const closeModal = () => setModalContent(null);
  return (
    <>
      <head>
        <title>Manali | Blockchain Developer Portfolio</title>
        <meta name="description" content="Portfolio of Manali, Blockchain Developer skilled in React, Solidity, and Web3." />
        <link rel="icon" href="/favicon.ico" />
      </head>

      <main className={`relative font-sans overflow-x-hidden ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <Particles
        id="tsparticles"
        init={loadFull}
        options={{
          background: { color: darkMode ? '#000' : '#fff' },
          particles: {
            number: { value: 60 },
            size: { value: 2 },
            move: { speed: 0.5 },
            color: { value: darkMode ? '#00ffcc' : '#333' },
            links: { enable: true, color: '#00ffcc' },
          },
          interactivity: {
            events: { onhover: { enable: true, mode: 'repulse' } },
          },
        }}
        className="absolute top-0 left-0 w-full h-full -z-10"
      />

        {/* Loader */}
        <AnimatePresence>
          {loading && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black text-green-400 text-2xl font-bold"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              Loading Manali.dev...
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navbar */}
        <header className="fixed top-0 w-full z-50 backdrop-blur bg-black/60 border-b border-zinc-700">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-green-400">Manali Dev</h1>
            <ul className="hidden md:flex gap-8 text-sm uppercase tracking-wide">
              {sections.map((section) => (
                <motion.li key={section} whileHover={{ scale: 1.1 }}>
                  <a href={`#${section}`} className="hover:text-green-400 transition">
                    {section}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="flex items-center gap-4">
              <a href="https://github.com/Manali198" target="_blank" rel="noreferrer">
                <FaGithub className="text-xl hover:text-green-400 transition" />
              </a>  
              <a href="https://www.linkedin.com/in/manali-trivedi-8928151a8/" target="_blank" rel="noreferrer">
                <FaLinkedin className="text-xl hover:text-green-400 transition" />
              </a>
              <button onClick={toggleTheme} className="text-xl text-white">
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
              <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
          {isMobileMenuOpen && (
            <div className="md:hidden bg-black/90 text-white px-6 py-4 space-y-4">
              {sections.map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className="block text-lg hover:text-green-400"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {section}
                </a>
              ))}
            </div>
          )}
        </header>

        {/* Hero */}
        <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-32 pb-24">
          <motion.h2 className="text-5xl font-extrabold mb-4" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
            Hi, I'm <span className="text-green-400">Manali</span>
          </motion.h2>
          <p className="text-xl text-gray-400 mb-6">Blockchain Developer • React Enthusiast • Python Coder</p>
          <motion.a
            href="#contact"
            className="inline-block px-8 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 text-lg transition"
            whileHover={{ scale: 1.05 }}
          >
            Let’s Work Together
          </motion.a>
        </section>

        {/* About */}
        <section id="about" className="max-w-5xl mx-auto px-6 py-24 text-center">
          <h3 className="text-4xl font-semibold mb-8">About Me</h3>
          <p className="text-lg text-gray-300 leading-relaxed">
            I'm a passionate Blockchain Developer with experience in building decentralized applications, smart contracts, and working with various blockchain networks.
            I specialize in creating efficient and scalable solutions in both backend and frontend. Always exploring new challenges and collaborations.
          </p>
        </section>

        {/* Projects */}
        <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
          <h3 className="text-4xl font-semibold mb-12 text-center">Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { title: 'NFT Marketplace', desc: 'Mint and trade NFTs with IPFS + Ethereum.', stack: ['React', 'Solidity'] },
              { title: 'DeFi Lending', desc: 'Lending protocol with smart contracts.', stack: ['Solidity', 'Web3.js'] },
              { title: 'Crypto Wallet', desc: 'Secure wallet for multiple chains.', stack: ['Next.js', 'Ethers.js'] },
              { title: 'DAO Governance', desc: 'Voting app for decentralized orgs.', stack: ['React', 'Smart Contracts'] },
              { title: 'Supply Chain DApp', desc: 'Blockchain product traceability.', stack: ['IPFS', 'Truffle'] },
              { title: 'Auction NAPA', desc: 'Launch Auction Page Securily.', stack: ['Polygon', 'Tailwind'] }
            ].map((p, i) => (
              <motion.div
                key={i}
                className="bg-white/10 p-6 rounded-lg border border-white/20 hover:border-green-400 backdrop-blur-sm"
                whileHover={{ scale: 1.03 }}
              >
                <h4 className="text-xl font-bold text-white mb-2">{p.title}</h4>
                <p className="text-gray-400 text-sm">{p.desc}</p>
                <div className="mt-2 flex flex-wrap gap-2 text-xs text-green-300">
                  {p.stack.map((tech, index) => (
                    <span key={index} className="bg-green-900/40 px-2 py-1 rounded-full">{tech}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="max-w-6xl mx-auto px-6 py-24">
          <h3 className="text-4xl font-semibold text-center mb-12">Experience</h3>
          <div className="space-y-8">
            {[
              {
                company: 'Freelancer',
                role: 'Blockchain Developer',
                date: 'Jan 2024 – Present',
                description: 'Smart contract deployments on Ethereum & Polygon, DeFi & NFT integrations.',
              },
              {
                company: 'Virtual Height IT Services',
                role: 'Blockchain Developer',
                date: 'Dec 2021 – Dec 2023',
                description: 'Built a metaverse platform, audited contracts, and led junior dev team.',
              },
              {
                company: 'Sharvaya Infotech',
                role: '.NET Developer',
                date: 'Jul 2021 – Dec 2021',
                description: 'Developed SQL-based C# projects with client delivery success.',
              }
            ].map((exp, i) => (
              <motion.div
                key={i}
                className="bg-white/5 p-6 rounded-xl border border-zinc-800 hover:border-green-400 transition"
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="text-lg font-semibold text-green-400">{exp.role} at {exp.company}</h4>
                <p className="text-sm text-gray-400">{exp.date}</p>
                <p className="mt-2 text-gray-300 text-sm">{exp.description}</p>
                <button
                  onClick={() => openModal(exp)}  // Open modal on click
                  className="mt-4 text-green-400 hover:text-green-500"
                >
                  More Info
                </button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section id="education" className="max-w-6xl mx-auto px-6 py-24">
          <h3 className="text-4xl font-semibold text-center mb-12">Education</h3>
          <div className="space-y-8">
            {[
              {
                title: 'Masters in Computer Engineering',
                school: 'Ahmedabad Institute of Technology',
                duration: '2024–2026',
                note: 'Pursuing',
              },
              {
                title: 'Bachelor of Engineering in Computer',
                school: 'Silver Oak College of Technology',
                duration: '2018–2021',
                note: 'Graduated with a CGPA of 9.63',
              },
              {
                title: 'Diploma in Computer Engineering',
                school: 'Shree Swaminarayan Polytechnic',
                duration: '2015–2018',
              },
              {
                title: 'Secondary School Certificate (SSC)',
                school: 'Gyandeep Vidyalaya',
                duration: '2014',
              },
            ].map((edu, i) => (
              <motion.div
                key={i}
                className="bg-white/5 p-6 rounded-xl border border-zinc-800 hover:border-green-400 transition"
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="text-lg font-semibold text-green-400">{edu.title}</h4>
                <p className="text-sm text-gray-400">{edu.school} ({edu.duration})</p>
                {edu.note && <p className="mt-2 text-gray-300 text-sm">{edu.note}</p>}
                <button
                  onClick={() => openModal(edu)}  // Open modal on click
                  className="mt-4 text-green-400 hover:text-green-500"
                >
                  More Info
                </button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="max-w-xl mx-auto px-6 py-24 text-center">
          <h3 className="text-4xl font-semibold mb-8">Let's Connect</h3>
          <p className="text-gray-400 mb-4">Open to freelance, collaborations, and contract work.</p>
          <motion.a
            href="https://wa.me/yournumber"
            className="inline-block px-8 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 text-lg transition"
            whileHover={{ scale: 1.05 }}
          >
            Contact Me
          </motion.a>
        </section>

        {/* Back to Top Button */}
        {showTopBtn && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-xl hover:bg-green-600"
          >
            <FaArrowUp />
          </button>
        )}

        {/* Modal */}
        <AnimatePresence>
          {modalContent && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="bg-white text-black p-8 rounded-lg max-w-lg w-full">
                <h3 className="text-2xl font-semibold text-green-400 mb-4">More Info</h3>
                <p className="text-gray-600">{modalContent.description}</p>
                <button
                  onClick={closeModal}
                  className="mt-4 bg-green-400 text-white px-6 py-2 rounded-full hover:bg-green-500 transition"
                >
                  Close
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </>
  );
}
