import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Instagram, Volume2, VolumeX, Play, Pause, Heart, MessageCircle, Share2, Bookmark } from 'lucide-react';

interface VideoData {
  id: number;
  title: string;
  description: string;
  src: string;
  likes: string;
  comments: string;
}

export const InstagramSection: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  const videoRef0 = useRef<HTMLVideoElement>(null);
  const videoRef1 = useRef<HTMLVideoElement>(null);

  const videos: VideoData[] = [
    {
      id: 0,
      title: "Investimento em Carta Contemplada",
      description: "Entenda a estratégia de investimento através da venda de cartas contempladas e como maximizar seus ganhos.",
      src: "https://res.cloudinary.com/dnkggulhp/video/upload/v1783961583/WhatsApp_Video_2026-07-13_at_1.47.50_PM_qorcal.mp4",
      likes: "1,248",
      comments: "84"
    },
    {
      id: 1,
      title: "Testemunhos de Clientes",
      description: "Veja o que nossos clientes dizem sobre suas experiências e resultados alcançados com o nosso planejamento.",
      src: "https://res.cloudinary.com/dnkggulhp/video/upload/v1783961582/WhatsApp_Video_2026-07-13_at_1.48.11_PM_azoyzs.mp4",
      likes: "2,190",
      comments: "142"
    }
  ];

  // Sync play/pause and muted states
  useEffect(() => {
    const activeRef = activeIdx === 0 ? videoRef0.current : videoRef1.current;
    const inactiveRef = activeIdx === 0 ? videoRef1.current : videoRef0.current;

    if (inactiveRef) {
      inactiveRef.pause();
      inactiveRef.currentTime = 0;
    }

    if (activeRef) {
      activeRef.muted = isMuted;
      if (isPlaying) {
        activeRef.play().catch((err) => {
          console.log("Autoplay blocked or interrupted:", err);
        });
      } else {
        activeRef.pause();
      }
    }
  }, [activeIdx, isPlaying, isMuted]);

  // Handle video ended event -> auto play next video
  const handleVideoEnded = () => {
    // Cycles back and forth between 0 and 1
    const nextIdx = (activeIdx + 1) % videos.length;
    setActiveIdx(nextIdx);
    setIsPlaying(true);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <section id="instagram" className="py-24 bg-gradient-to-b from-[#121212] to-[#1a1a1a] border-t border-white/5 relative overflow-hidden">
      {/* Abstract Background Lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-pink-500/10 via-purple-500/5 to-yellow-500/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-instagram-gradient bg-white/5 border border-white/10 text-[#E30613] font-bold text-sm tracking-wider uppercase mb-4"
          >
            <Instagram size={18} className="text-pink-500" />
            Instagram de Resultados
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4"
          >
            Siga-nos em <span className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">@drconsorcio.oficial</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-neutral-400 max-w-2xl mx-auto mb-8 text-lg"
          >
            Veja os bastidores, dicas de investimento de elite e a satisfação real de quem mudou de vida planejando com quem mais entende de consórcio no Brasil.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a 
              href="https://www.instagram.com/drconsorcio.oficial" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white px-8 py-4 rounded-2xl font-black text-lg transition-all transform hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(219,39,119,0.5)] uppercase tracking-wider group"
            >
              <Instagram size={24} className="group-hover:rotate-12 transition-transform duration-300" />
              Seguir no Instagram
            </a>
          </motion.div>
        </div>

        {/* Reels Player Deck */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Side Selectors / Context Cards (Lg: 5 Cols) */}
          <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
            <h3 className="text-xl font-bold text-neutral-400 uppercase tracking-widest border-l-4 border-[#E30613] pl-4">
              Histórias de Sucesso
            </h3>

            <div className="space-y-4">
              {videos.map((video, index) => {
                const isActive = activeIdx === index;
                return (
                  <motion.div
                    key={video.id}
                    onClick={() => {
                      setActiveIdx(index);
                      setIsPlaying(true);
                    }}
                    className={`cursor-pointer p-6 rounded-2xl transition-all border text-left relative overflow-hidden ${
                      isActive 
                        ? 'bg-white/10 border-pink-500/40 shadow-xl shadow-pink-500/5' 
                        : 'bg-neutral-900/60 border-white/5 hover:border-white/10 hover:bg-neutral-900'
                    }`}
                    whileHover={{ x: isActive ? 0 : 5 }}
                  >
                    {isActive && (
                      <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-pink-500 to-orange-500"></div>
                    )}
                    <div className="flex justify-between items-start mb-2">
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                        isActive 
                          ? 'bg-pink-500/20 text-pink-400 border border-pink-500/30' 
                          : 'bg-neutral-800 text-neutral-500'
                      }`}>
                        {isActive ? '● REPRODUZINDO AGORA' : 'VER AGORA'}
                      </span>
                      <span className="text-xs text-neutral-500 font-mono">REEL {index + 1}/2</span>
                    </div>
                    <h4 className={`text-xl font-extrabold mb-2 ${isActive ? 'text-white' : 'text-neutral-400'}`}>
                      {video.title}
                    </h4>
                    <p className="text-sm text-neutral-400 line-clamp-2">
                      {video.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <div className="bg-neutral-900/40 border border-white/5 rounded-2xl p-6 text-sm text-neutral-500 flex items-start gap-3">
              <span className="text-lg">💡</span>
              <p>
                Os vídeos reproduzem de forma contínua e sequencial. Quando um vídeo termina, o outro inicia de forma automática para uma melhor experiência. Use o botão no player para ativar o áudio.
              </p>
            </div>
          </div>

          {/* Core Interactive Reel Phone Frame (Lg: 7 Cols) */}
          <div className="lg:col-span-7 flex justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-[340px] aspect-[9/16] bg-black rounded-[3rem] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] border-[10px] border-neutral-800 overflow-hidden group">
              
              {/* Dynamic Video Render Panel */}
              <div className="relative w-full h-full">
                
                {/* Video 0 */}
                <video
                  ref={videoRef0}
                  src={videos[0].src}
                  onEnded={handleVideoEnded}
                  playsInline
                  loop={false}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    activeIdx === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                />

                {/* Video 1 */}
                <video
                  ref={videoRef1}
                  src={videos[1].src}
                  onEnded={handleVideoEnded}
                  playsInline
                  loop={false}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    activeIdx === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                />

                {/* Phone Notch/Island */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-full z-40"></div>

                {/* Custom Overlay Interactive HUD */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80 z-30 flex flex-col justify-between p-5">
                  
                  {/* Top HUD Row */}
                  <div className="flex justify-between items-center mt-6">
                    <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                      <div className="w-2.5 h-2.5 bg-[#E30613] rounded-full animate-ping"></div>
                      <span className="text-[10px] font-black uppercase text-white tracking-widest">DR. CONSÓRCIO</span>
                    </div>
                    
                    {/* Sound and Control Toggles */}
                    <div className="flex gap-2">
                      <button 
                        onClick={togglePlay}
                        className="p-2.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white hover:bg-black/80 transition-all active:scale-95"
                      >
                        {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                      </button>
                      <button 
                        onClick={toggleMute}
                        className="p-2.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white hover:bg-black/80 transition-all active:scale-95 flex items-center gap-1.5"
                      >
                        {isMuted ? (
                          <>
                            <VolumeX size={16} className="text-red-400" />
                            <span className="text-[9px] font-bold tracking-widest text-red-400 uppercase pr-0.5">MUDO</span>
                          </>
                        ) : (
                          <>
                            <Volume2 size={16} className="text-green-400" />
                            <span className="text-[9px] font-bold tracking-widest text-green-400 uppercase pr-0.5">SOM</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Bottom Instagram Reel Info Panel */}
                  <div className="space-y-4">
                    <div className="flex items-end justify-between gap-4">
                      <div className="flex-1 text-left">
                        <div className="flex items-center gap-2 mb-2">
                          <img 
                            src="https://res.cloudinary.com/ddfacd0wf/image/upload/v1781915808/WhatsApp_Image_2026-06-19_at_9.35.09_PM_ejhudx.jpg" 
                            alt="@drconsorcio.oficial"
                            className="w-8 h-8 rounded-full border-2 border-pink-500 object-cover"
                          />
                          <span className="font-bold text-white text-sm">drconsorcio.oficial</span>
                          <span className="text-white/60 text-xs">• Siga</span>
                        </div>
                        <p className="text-xs text-white line-clamp-3 font-medium leading-relaxed drop-shadow">
                          {videos[activeIdx].description}
                        </p>
                      </div>

                      {/* Right Hand Actions Menu */}
                      <div className="flex flex-col items-center gap-4 text-white">
                        <div className="flex flex-col items-center">
                          <button className="p-2 rounded-full bg-black/40 hover:bg-black/60 transition-colors">
                            <Heart size={20} className="fill-pink-500 stroke-pink-500" />
                          </button>
                          <span className="text-[10px] font-bold mt-1">{videos[activeIdx].likes}</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <button className="p-2 rounded-full bg-black/40 hover:bg-black/60 transition-colors">
                            <MessageCircle size={20} />
                          </button>
                          <span className="text-[10px] font-bold mt-1">{videos[activeIdx].comments}</span>
                        </div>
                        <button className="p-2 rounded-full bg-black/40 hover:bg-black/60 transition-colors">
                          <Share2 size={20} />
                        </button>
                        <button className="p-2 rounded-full bg-black/40 hover:bg-black/60 transition-colors">
                          <Bookmark size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Big Screen Overlay Play/Pause Tap Target */}
                <div 
                  onClick={togglePlay}
                  className="absolute inset-0 cursor-pointer z-20 flex items-center justify-center bg-black/10 hover:bg-black/20 transition-all"
                >
                  <AnimatePresence>
                    {!isPlaying && (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        className="p-5 rounded-full bg-black/60 text-white backdrop-blur-md"
                      >
                        <Play size={32} fill="white" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
