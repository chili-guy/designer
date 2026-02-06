import React from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { name: 'Soluções', href: '#solutions' },
    { name: 'Funcionalidades', href: '#features' },
    { name: 'Empresarial', href: '#contact' },
    { name: 'Recursos', href: '#solutions' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <a href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-black flex items-center justify-center">
                <div className="w-4 h-4 bg-[#FF6B00]" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-black">ZEO APP</span>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://zeo.app.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FF6B00] text-white px-5 py-2.5 text-sm font-semibold rounded-lg hover:bg-[#E66000] transition-all"
            >
              Acesso ao Sistema
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-black p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-6 space-y-1"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-3 py-4 text-base font-medium text-gray-600 hover:text-black hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 px-3">
            <a
              href="https://zeo.app.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-[#FF6B00] text-white px-5 py-3 text-sm font-semibold text-center rounded-lg"
            >
              Acesso ao Sistema
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};
