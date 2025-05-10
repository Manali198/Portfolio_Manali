// UpdatedPortfolio.js
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

export default function UpdatedPortfolio() {
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector("nav");
      if (window.scrollY > 10) {
        nav.classList.add("shadow-md");
      } else {
        nav.classList.remove("shadow-md");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="bg-black text-white min-h-screen font-sans overflow-x-hidden">
      <Particles
        id="tsparticles"
        init={loadFull}
        options={{
          background: { color: "#111" },
          particles: {
            number: { value: 50 },
            size: { value: 3 },
            move: { speed: 0.4 },
            color: { value: "#00ffcc" },
            links: { enable: true, color: "#00ffcc" },
          },
        }}
        className="absolute top-0 left-0 w-full h-full z-0"
      />

      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-transparent border-b border-gray-700">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-semibold text-green-400 tracking-wider cursor-pointer">Manali Trivedi</h1>
          <ul className="flex gap-8 text-lg">
            {["home", "about", "projects", "experience", "contact"].map((item, idx) => (
              <motion.li key={idx} whileHover={{ scale: 1.1 }}>
                <a href={`#${item}`} className="hover:text-green-400 transition duration-300">{item}</a>
              </motion.li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-24 relative z-10">
        <h2 className="text-5xl font-bold text-white mb-6">Hi, I'm <span className="text-green-400">Manali</span></h2>
        <p className="text-xl text-gray-400 mb-8">Blockchain Developer, React Enthusiast & Python Coder</p>
        <motion.a 
          href="#contact" 
          className="inline-block px-8 py-3 bg-green-400 text-white rounded-full text-xl font-semibold hover:bg-green-500 transition duration-300 transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
        >
          Get in Touch
        </motion.a>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h3 className="text-4xl font-semibold text-white mb-12">About Me</h3>
        <p className="text-lg text-gray-400 leading-relaxed">
          I'm a passionate Blockchain Developer with experience in building decentralized applications, smart contracts, and working with various blockchain networks. I specialize in creating efficient and scalable solutions in both backend and frontend. I'm always looking for new challenges and collaborations to expand my skill set.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
        <h3 className="text-4xl font-semibold text-white text-center mb-12">My Projects</h3>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "NFT Marketplace", desc: "A decentralized platform for minting and trading NFTs." },
            { title: "DeFi Lending", desc: "A lending protocol on blockchain for decentralized finance." },
            { title: "Crypto Wallet", desc: "A secure wallet for managing cryptocurrencies." },
            { title: "DAO Governance", desc: "A decentralized autonomous organization voting system." },
            { title: "Supply Chain DApp", desc: "Track products through the supply chain using blockchain." },
            { title: "Token Launchpad", desc: "A platform for launching tokens on Ethereum network." }
          ].map((project, idx) => (
            <motion.div 
              key={idx} 
              className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 hover:border-green-400 transition duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 0.5 }}
            >
              <h4 className="text-xl font-semibold text-white mb-3">{project.title}</h4>
              <p className="text-gray-400">{project.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="max-w-6xl mx-auto px-6 py-24">
        <h3 className="text-4xl font-semibold text-white text-center mb-12">Work Experience</h3>
        <div className="space-y-8">
          {[
            {
              company: "Freelancer",
              role: "Blockchain Developer",
              date: "Jan 2024 - Present",
              description: "Test deployments on Ethereum & Polygon, build DApps, and work with DeFi protocols."
            },
            {
              company: "Virtual Height IT Services",
              role: "Blockchain Developer",
              date: "Dec 2021 - Dec 2023",
              description: "Developed metaverse platforms, audited smart contracts, and mentored junior developers."
            },
            {
              company: "Virtual Height IT Services Pvt. LTD",
              role: "Python Developer",
              date: "Dec 2021 - Oct 2023",
              description: "Developed a multi-vendor management system using Django, enabling efficient vendor management."
            },
            {
              company: "Sharvaya Infotech",
              role: ".Net Developer",
              date: "Jul 2021 - dec 2021",
              description: "Worked on 10+ SQL database design projects. Improved speed to completeprojects by 90% in 15 weeks.Developed and provided maintenance for printing format in C#. Achieved 100% client satisfaction and on- time completion."
            }
          ].map((experience, idx) => (
            <motion.div 
              key={idx} 
              className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 hover:border-green-400 transition duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 0.5 }}
            >
              <h4 className="text-2xl font-semibold text-green-400">{experience.role} at {experience.company}</h4>
              <p className="text-gray-400 mt-2">{experience.date}</p>
              <p className="text-gray-300 mt-4">{experience.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-xl mx-auto px-6 py-24 text-center">
        <h3 className="text-4xl font-semibold text-white mb-8">Let's Connect</h3>
        <p className="text-lg text-gray-400 mb-8">Interested in collaborating or want to discuss a project idea?</p>
        <motion.a
          href="https://wa.me/919601580309"
          className="inline-block px-8 py-3 bg-green-400 text-white rounded-full text-xl font-semibold hover:bg-green-500 transition duration-300 transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
        >
          Message me on WhatsApp
        </motion.a>
        <p className="mt-6 text-sm text-gray-500">Or email me at <a href="mailto:trivedimanali51@gmail.com" className="text-green-400">trivedimanali51@gmail.com</a></p>
      </section>
    </main>
  );
}
