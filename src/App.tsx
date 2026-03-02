/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Flower, 
  Sparkles, 
  Heart, 
  Wind, 
  Coffee, 
  Moon, 
  Leaf, 
  ChevronRight,
  RefreshCw,
  Baby,
  Cloud,
  Star,
  Footprints,
  Milk,
  Smile
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const MESSAGES = [
  "Obrigado por fazer parte do nosso jardim de amor!",
  "Sua presença é o presente mais lindo para a Hellena.",
  "Gratidão por celebrar conosco a espera da nossa pequena.",
  "Obrigado por cultivar tanto carinho pela nossa família!",
  "Hellena já sente todo o amor que você trouxe hoje.",
  "Nosso coração transborda gratidão por ter você aqui.",
  "Obrigado por regar nosso jardim com sua amizade!",
  "Sua energia torna este momento ainda mais mágico.",
  "Gratidão por cada palavra e gesto de carinho!",
  "Obrigado por caminhar ao nosso lado nesta jornada doce.",
  "Você é uma flor especial no jardim da Hellena!",
  "Obrigado por compartilhar essa alegria infinita conosco.",
  "Nossa família agradece por todo o apoio e amor.",
  "Gratidão por ser luz no caminho da nossa pequena Hellena.",
  "Obrigado por tornar este chá de bebê inesquecível!",
  "Sua presença aquece nossos corações. Muito obrigado!",
  "Gratidão por todo o carinho dedicado à nossa Hellena.",
  "Obrigado por florescer junto conosco neste dia!",
  "Sua amizade é um tesouro que a Hellena já herdou.",
  "Obrigado por tanto amor, Yasmin, Je e Hellena agradecem!"
];

export default function App() {
  const [showMain, setShowMain] = useState(false);
  const [showAlbum, setShowAlbum] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [currentMessage, setCurrentMessage] = useState(MESSAGES[0]);
  const [isSpinning, setIsSpinning] = useState(false);
  const [showBurst, setShowBurst] = useState(false);

  const ALBUM_PHOTOS = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ];

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % ALBUM_PHOTOS.length);
  };

  const drawMessage = () => {
    setIsSpinning(true);
    setShowBurst(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * MESSAGES.length);
      setCurrentMessage(MESSAGES[randomIndex]);
      setIsSpinning(false);
    }, 600);
    setTimeout(() => setShowBurst(false), 2000);
  };

  return (
    <div className="min-h-screen jardim-gradient overflow-x-hidden selection:bg-lilac-300">
      <AnimatePresence mode="wait">
        {!showMain ? (
          <motion.div
            key="welcome"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
            transition={{ duration: 1.2 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center p-6 text-center bg-lilac-50/95 backdrop-blur-md"
          >
            {/* Background Cute Elements */}
            <div className="absolute top-10 left-10 text-lilac-200/40 animate-bounce-soft">
              <Cloud size={80} fill="currentColor" />
            </div>
            <div className="absolute top-20 right-20 text-lilac-300/30 animate-pulse">
              <Star size={60} fill="currentColor" />
            </div>
            <div className="absolute bottom-20 left-20 text-lilac-300/30 animate-pulse">
              <Footprints size={70} />
            </div>
            <div className="absolute bottom-10 right-10 text-lilac-200/40 animate-bounce-soft" style={{ animationDelay: '1s' }}>
              <Milk size={80} />
            </div>

            <motion.div 
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "backOut" }}
              className="relative w-56 h-56 md:w-[380px] md:h-[380px] mb-6 group"
            >
              {/* Decorative Frame */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-lilac-400 to-lilac-200 rounded-[1.5rem] blur-lg opacity-50 group-hover:opacity-80 transition-opacity" />
              
              <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden border-[8px] border-white shadow-xl z-10">
                <img 
                  src="https://drive.google.com/file/d/1HoRbFz15Ab6aQkXVPSGGUUu7A-mBTWDu/view?usp=drivesdk" 
                  alt="Yasmin e Je" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-lilac-900/40 via-transparent to-lilac-200/20" />
                
                {/* Floating Hearts inside photo */}
                <motion.div 
                  animate={{ y: [0, -15, 0], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute bottom-4 right-4 text-white"
                >
                  <Heart fill="currentColor" size={24} />
                </motion.div>
              </div>

              {/* Cute Corner Elements */}
              <div className="absolute -top-4 -right-4 z-20 bg-white p-3 rounded-full shadow-md text-lilac-500 animate-bounce-soft">
                <Baby size={32} />
              </div>
              <div className="absolute -bottom-4 -left-4 z-20 bg-white p-3 rounded-full shadow-md text-lilac-500 animate-bounce-soft" style={{ animationDelay: '0.5s' }}>
                <Smile size={32} />
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="space-y-2 relative z-10"
            >
              <h2 className="font-serif text-2xl md:text-5xl text-lilac-900 mb-1 italic font-bold text-glow">
                Jardim da Hellena.
              </h2>
              
              <p className="text-lilac-800/80 max-w-xs mx-auto mb-6 text-sm md:text-lg leading-relaxed font-medium">
                Um convite fofinho de Yasmin e Je para celebrar a vida que floresce.
              </p>

              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(147,51,234,0.2)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowMain(true)}
                className="group relative flex items-center gap-2 px-8 py-3.5 bg-lilac-700 text-white rounded-full font-bold text-sm shadow-lg transition-all overflow-hidden mx-auto"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Entrar com Amor
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-lilac-600 to-lilac-800 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.button>
            </motion.div>
          </motion.div>
        ) : (
          <motion.main
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="max-w-md mx-auto px-4 py-8 md:py-12 flex flex-col gap-8 relative z-10"
          >
            {/* Header Section */}
            <section className="text-center space-y-3">
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 100 }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-[1.25rem] bg-lilac-600 text-white mb-1 shadow-lg rotate-12 relative"
              >
                <Baby className="w-8 h-8" />
                <div className="absolute -top-1 -right-1 bg-yellow-400 text-white p-1 rounded-full animate-pulse shadow-sm">
                  <Star size={12} fill="currentColor" />
                </div>
              </motion.div>
              
              <div className="space-y-1">
                <h3 className="uppercase tracking-[0.3em] text-[10px] font-bold text-lilac-700 flex items-center justify-center gap-1">
                  <Footprints size={12} />
                  Jardim Encantado da
                  <Footprints size={12} />
                </h3>
                <motion.h1 
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="font-display text-5xl md:text-7xl text-lilac-900 leading-none font-black text-glow"
                >
                  Hellena
                </motion.h1>
              </div>

              <div className="flex items-center justify-center gap-4 text-lilac-800 font-serif italic text-lg md:text-xl">
                <span className="border-b-2 border-lilac-200 pb-0.5">Yasmin</span>
                <div className="relative">
                  <Heart className="w-5 h-5 fill-lilac-600 text-lilac-600 animate-pulse" />
                  <Sparkles className="absolute -top-1.5 -right-1.5 w-3 h-3 text-yellow-500" />
                </div>
                <span className="border-b-2 border-lilac-200 pb-0.5">Je</span>
              </div>
            </section>

            {/* Decorative Divider */}
            <div className="flex justify-center items-center gap-10">
              <motion.div 
                animate={{ width: [0, 100] }}
                className="h-[3px] rounded-full bg-gradient-to-r from-transparent to-lilac-600" 
              />
              <div className="relative">
                <Flower className="w-10 h-10 text-lilac-700 animate-spin-slow" style={{ animationDuration: '15s' }} />
                <Cloud className="absolute -top-4 -left-4 w-6 h-6 text-lilac-300/60" />
              </div>
              <motion.div 
                animate={{ width: [0, 100] }}
                className="h-[3px] rounded-full bg-gradient-to-l from-transparent to-lilac-600" 
              />
            </div>

            {/* Album Button */}
            <section className="flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowAlbum(true)}
                className="flex items-center gap-3 px-8 py-4 bg-white border-2 border-lilac-200 text-lilac-700 rounded-2xl font-bold shadow-sm hover:shadow-md transition-all"
              >
                <Star className="w-5 h-5 fill-lilac-200" />
                Álbum de Fotos
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </section>

            {/* Recipe Section */}
            <motion.section 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass-card rounded-[2.5rem] p-6 md:p-10 relative overflow-hidden group border-2 border-white/60">
                {/* Animated Nature Elements */}
                <motion.div 
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-16 -right-16 text-lilac-200/20"
                >
                  <Flower size={150} />
                </motion.div>
                
                <div className="relative z-10 space-y-6">
                  <div className="flex flex-col items-center text-center gap-1">
                    <motion.div 
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="p-2.5 bg-lilac-100 rounded-full text-lilac-600 shadow-sm"
                    >
                      <Sparkles size={20} />
                    </motion.div>
                    <h2 className="font-serif text-2xl italic font-bold text-lilac-900">Ritual de Bem-Estar</h2>
                    <div className="h-0.5 w-16 bg-gradient-to-r from-transparent via-lilac-400 to-transparent rounded-full" />
                  </div>
                  
                  <div className="text-center space-y-3">
                    <h4 className="text-3xl md:text-4xl font-display text-lilac-950 font-black tracking-tight">
                      Puro Relaxamento
                    </h4>
                    <div className="flex justify-center gap-3">
                      <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 4, repeat: Infinity }}><Leaf size={20} className="text-emerald-400" /></motion.div>
                      <motion.div animate={{ y: [0, -3, 0] }} transition={{ duration: 3, repeat: Infinity }}><Wind size={20} className="text-blue-300" /></motion.div>
                      <motion.div animate={{ rotate: [0, -10, 10, 0] }} transition={{ duration: 4, repeat: Infinity }}><Flower size={20} className="text-pink-300" /></motion.div>
                    </div>
                  </div>
                  
                  <div className="space-y-5">
                    <div className="relative p-6 bg-white/40 rounded-[1.5rem] border border-white/60 shadow-inner overflow-hidden">
                      <motion.div 
                        animate={{ 
                          x: ["-100%", "200%"],
                        }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12"
                      />
                      <p className="relative z-10 font-serif text-xl md:text-2xl text-lilac-900 leading-relaxed italic text-center font-medium">
                        "Em água bem quente, dissolva a porção dos sais e mergulhe os pés por 15 a 20 minutos (ou até a água esfriar). Deixando envolver você em um ritual de puro relaxamento!"
                      </p>
                    </div>
                    
                    <div className="flex flex-col items-center gap-4 bg-lilac-50/50 p-5 rounded-2xl border border-lilac-100">
                      <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center text-lilac-500 shadow-sm">
                        <Smile size={24} />
                      </div>
                      <p className="text-lilac-900 font-medium text-sm leading-snug text-center">
                        Respire e sinta a natureza. Deixe que o aroma das flores do jardim da Hellena acalme sua alma e renove suas energias.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { icon: Wind, label: "Respire", color: "bg-blue-50 text-blue-500" },
                        { icon: Coffee, label: "Calor", color: "bg-orange-50 text-orange-500" },
                        { icon: Moon, label: "Relaxe", color: "bg-indigo-50 text-indigo-500" },
                        { icon: Star, label: "Brilhe", color: "bg-yellow-50 text-yellow-500" }
                      ].map((item, idx) => (
                        <motion.div 
                          key={idx} 
                          whileHover={{ y: -4, scale: 1.02 }}
                          className={cn("flex flex-col items-center gap-1.5 p-3 rounded-xl shadow-sm border border-white transition-all", item.color)}
                        >
                          <item.icon size={20} />
                          <span className="text-[9px] font-black uppercase tracking-widest">{item.label}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Messages Section */}
            <section className="space-y-6">
              <div className="text-center space-y-1">
                <div className="flex justify-center gap-1.5">
                  <Star size={14} className="text-yellow-400 fill-yellow-400" />
                  <Star size={18} className="text-yellow-400 fill-yellow-400 animate-pulse" />
                  <Star size={14} className="text-yellow-400 fill-yellow-400" />
                </div>
                <h2 className="font-serif text-3xl italic text-lilac-950 font-black">Mensagens do Coração</h2>
                <p className="text-lilac-800 font-bold text-sm">Toque no botão para receber um carinho da Hellena</p>
              </div>

              <div className="min-h-[160px] flex items-center justify-center px-2">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentMessage}
                    initial={{ opacity: 0, scale: 0.5, rotate: -10, y: 30 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
                    exit={{ opacity: 0, scale: 1.1, rotate: 10, y: -30 }}
                    transition={{ type: "spring", bounce: 0.6, duration: 0.8 }}
                    className="bg-white p-6 md:p-8 rounded-[1.5rem] shadow-[0_15px_30px_rgba(147,51,234,0.1)] border-2 border-lilac-50 text-center max-w-sm w-full relative overflow-hidden"
                  >
                    {/* Background Sparkle */}
                    <motion.div 
                      animate={{ opacity: [0.1, 0.3, 0.1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 bg-gradient-to-br from-lilac-50 to-transparent pointer-events-none"
                    />
                    
                    <motion.div 
                      animate={{ scale: [1, 1.3, 1], rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute -top-2 -left-2 text-lilac-500 bg-white p-1.5 rounded-full shadow-md z-10"
                    >
                      <Heart size={24} fill="currentColor" />
                    </motion.div>
                    <motion.div 
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute -bottom-2 -right-2 text-lilac-500 bg-white p-1.5 rounded-full shadow-md z-10"
                    >
                      <Baby size={24} />
                    </motion.div>
                    
                    <p className="relative z-10 text-lg md:text-xl font-serif text-lilac-950 leading-tight italic font-black">
                      "{currentMessage}"
                    </p>
                    
                    <div className="absolute top-1 right-3 flex gap-1">
                      <Sparkles size={12} className="text-yellow-400 animate-pulse" />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="flex justify-center relative">
                <AnimatePresence>
                  {showBurst && [...Array(10)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 1, scale: 0, x: 0, y: 0 }}
                      animate={{ 
                        opacity: 0, 
                        scale: Math.random() * 1.2 + 0.4, 
                        x: (Math.random() - 0.5) * 200, 
                        y: (Math.random() - 0.5) * 200 - 80,
                        rotate: Math.random() * 360
                      }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      className="absolute z-50 pointer-events-none text-lilac-400"
                    >
                      {i % 3 === 0 ? <Heart size={20} fill="currentColor" /> : i % 3 === 1 ? <Star size={16} fill="currentColor" /> : <Sparkles size={16} />}
                    </motion.div>
                  ))}
                </AnimatePresence>
                <button
                  onClick={drawMessage}
                  disabled={isSpinning}
                  className={cn(
                    "group relative flex items-center gap-2 px-7 py-3.5 bg-lilac-800 text-white rounded-full font-black text-base shadow-lg transition-all active:scale-95 disabled:opacity-50 overflow-hidden",
                    isSpinning && "animate-pulse"
                  )}
                >
                  <RefreshCw className={cn("w-4 h-4 transition-transform duration-1000", isSpinning && "rotate-[720deg]")} />
                  Sortear Carinho
                  <div className="absolute inset-0 bg-gradient-to-r from-lilac-600 via-lilac-800 to-lilac-950 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                </button>
              </div>
            </section>

            {/* Footer */}
            <footer className="text-center pt-10 pb-8">
              <div className="inline-flex items-center gap-2 px-6 py-2.5 bg-lilac-950 text-white rounded-full text-[10px] font-black tracking-[0.15em] uppercase shadow-lg">
                <Baby size={16} />
                Yasmin, Je & Hellena
                <Baby size={16} />
              </div>
              <div className="mt-6 flex justify-center gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div 
                    key={i}
                    animate={{ 
                      scale: [1, 1.4, 1],
                      y: [0, -6, 0]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                    className="text-lilac-400"
                  >
                    <Heart size={12} fill="currentColor" />
                  </motion.div>
                ))}
              </div>
            </footer>
          </motion.main>
        )}
      </AnimatePresence>

      {/* Photo Album Overlay */}
      <AnimatePresence>
        {showAlbum && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[100] bg-lilac-50 flex flex-col"
          >
            <div className="p-4 flex items-center justify-between bg-white/80 backdrop-blur-sm border-b border-lilac-100">
              <button 
                onClick={() => setShowAlbum(false)}
                className="p-2 text-lilac-600 hover:bg-lilac-50 rounded-full transition-colors"
              >
                <ChevronRight className="w-6 h-6 rotate-180" />
              </button>
              <h2 className="font-serif text-xl italic font-bold text-lilac-900">Álbum da Hellena</h2>
              <div className="w-10" /> {/* Spacer */}
            </div>

            <div className="flex-1 relative overflow-hidden flex items-center justify-center p-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPhotoIndex}
                  initial={{ opacity: 0, scale: 0.9, x: 50 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 1.1, x: -50 }}
                  transition={{ duration: 0.4 }}
                  className="relative w-full max-w-sm aspect-[2/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
                >
                  <img 
                    src={ALBUM_PHOTOS[currentPhotoIndex]} 
                    alt={`Foto ${currentPhotoIndex + 1}`}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/40 backdrop-blur-md text-white px-4 py-1 rounded-full text-xs font-bold">
                    {currentPhotoIndex + 1} / {ALBUM_PHOTOS.length}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="p-8 flex flex-col items-center gap-4 bg-white/80 backdrop-blur-sm border-t border-lilac-100">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={nextPhoto}
                className="w-full max-w-xs flex items-center justify-center gap-2 py-4 bg-lilac-700 text-white rounded-full font-black text-lg shadow-xl"
              >
                Próxima Foto
                <ChevronRight className="w-6 h-6" />
              </motion.button>
              <p className="text-lilac-400 text-xs font-bold uppercase tracking-widest">Toque para ver mais momentos</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: "110%",
              opacity: 0 
            }}
            animate={{ 
              y: "-10%",
              opacity: [0, 0.2, 0],
              rotate: [0, 360],
              x: (Math.random() * 100) + (Math.random() * 10 - 5) + "%"
            }}
            transition={{ 
              duration: Math.random() * 20 + 20, 
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "linear"
            }}
            className="absolute text-lilac-200/40"
          >
            {i % 4 === 0 ? <Cloud size={Math.random() * 40 + 20} fill="currentColor" /> : 
             i % 4 === 1 ? <Star size={Math.random() * 20 + 15} fill="currentColor" /> :
             i % 4 === 2 ? <Flower size={Math.random() * 30 + 15} /> :
             <Footprints size={Math.random() * 20 + 15} />}
          </motion.div>
        ))}
        
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/soft-wallpaper.png')] opacity-[0.03] mix-blend-overlay" />
      </div>
    </div>
  );
}
