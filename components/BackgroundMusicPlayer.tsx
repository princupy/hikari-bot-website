'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  PlayIcon,
  PauseIcon,
  ForwardIcon,
  BackwardIcon,
  SpeakerWaveIcon,
  SpeakerXMarkIcon,
  XMarkIcon,
  MusicalNoteIcon,
  ArrowPathIcon,
} from '@heroicons/react/24/solid';

interface Song {
  title: string;
  artist: string;
  url: string;
  cover: string;
}

// ==========================================
// 🎵 ADD YOUR SONGS HERE! 🎵
// Put your MP3 files in: public/music/
// Then add them to this playlist
// ==========================================
const playlist: Song[] = [
  {
    title: 'JAWAN: Chaleya (Hindi)',
    artist: 'Arijit S, Shilpa R',
    url: '/music/song1.mp3',  // ← Your first song
    cover: '🎸',
  },
  {
    title: 'Farq Hai',
    artist: 'Suzonn',
    url: '/music/song2.mp3',  // ← Your second song
    cover: '🎵',
  },
  {
    title: 'Aawaara Angaara',
    artist: 'A.R. Rahman and Faheem Abdullah',
    url: '/music/song3.mp3',  // ← Your third song
    cover: '🔥',
  },
  {
    title: 'Tabeer',
    artist: 'Nabeel Shaukat Ali',
    url: '/music/song4.mp3',  // ← Your fourth song
    cover: '🎸',
  }
  // Add more songs here...
];

export default function BackgroundMusicPlayer() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isLooping, setIsLooping] = useState(false);
  const [isShuffling, setIsShuffling] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const currentSong = playlist[currentSongIndex];

  // Audio event handlers
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      if (!isNaN(audio.currentTime) && !isNaN(audio.duration)) {
        setCurrentTime(audio.currentTime);
        setProgress((audio.currentTime / audio.duration) * 100 || 0);
      }
    };

    const updateDuration = () => {
      if (!isNaN(audio.duration)) {
        setDuration(audio.duration);
      }
    };

    const handleEnded = () => {
      if (isLooping) {
        audio.currentTime = 0;
        audio.play();
      } else {
        nextSong();
      }
    };

    const handleError = () => {
      console.error('Error loading audio file:', currentSong.url);
    };

    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
    };
  }, [currentSongIndex, isLooping]);

  // Volume control
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  // Auto-play when song changes
  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play().catch(err => console.error('Play error:', err));
    }
  }, [currentSongIndex]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(err => console.error('Play error:', err));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const nextSong = () => {
    if (isShuffling) {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * playlist.length);
      } while (randomIndex === currentSongIndex && playlist.length > 1);
      setCurrentSongIndex(randomIndex);
    } else {
      setCurrentSongIndex((prev) => (prev + 1) % playlist.length);
    }
  };

  const prevSong = () => {
    if (currentTime > 3) {
      // If more than 3 seconds played, restart current song
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
      }
    } else {
      setCurrentSongIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const toggleLoop = () => {
    setIsLooping(!isLooping);
  };

  const toggleShuffle = () => {
    setIsShuffling(!isShuffling);
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newProgress = parseFloat(e.target.value);
    setProgress(newProgress);
    if (audioRef.current && !isNaN(duration)) {
      audioRef.current.currentTime = (newProgress / 100) * duration;
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  // Audio Visualizer Bars
  const visualizerBars = Array.from({ length: 20 }, (_, i) => i);

  return (
    <>
      {/* Audio Element */}
      <audio ref={audioRef} src={currentSong.url} preload="metadata" />

      {/* Floating Music Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-24 left-8 z-50 w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center shadow-2xl"
          >
            <MusicalNoteIcon className="w-8 h-8 text-white" />
            
            {/* Pulse Ring */}
            {isPlaying && (
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-pink-400"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            )}
          </motion.button>
        )}
      </AnimatePresence>

      {/* Music Player Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: -400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -400, opacity: 0 }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed bottom-8 left-8 z-50 w-96 bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-pink-500/30 overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
            >
              <XMarkIcon className="w-5 h-5 text-white" />
            </button>

            {/* Visualizer Background */}
            <div className="absolute inset-0 flex items-end justify-center gap-1 px-4 pb-4 opacity-20 pointer-events-none">
              {visualizerBars.map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    height: isPlaying
                      ? [`${20 + Math.random() * 60}%`, `${40 + Math.random() * 60}%`, `${20 + Math.random() * 60}%`]
                      : '20%',
                  }}
                  transition={{
                    duration: 0.5 + Math.random() * 0.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="w-2 bg-gradient-to-t from-pink-500 to-purple-600 rounded-full"
                />
              ))}
            </div>

            {/* Content */}
            <div className="relative p-6">
              {/* Album Cover */}
              <motion.div
                animate={{ rotate: isPlaying ? 360 : 0 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-6xl shadow-xl"
              >
                {currentSong.cover}
              </motion.div>

              {/* Song Info */}
              <div className="text-center mb-6">
                <h3 className="text-white font-bold text-xl mb-1 truncate">{currentSong.title}</h3>
                <p className="text-gray-400 text-sm">{currentSong.artist}</p>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={progress}
                  onChange={handleProgressChange}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                  style={{
                    background: `linear-gradient(to right, #ec4899 ${progress}%, #374151 ${progress}%)`,
                  }}
                />
                <div className="flex justify-between text-xs text-gray-400 mt-2">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-center gap-4 mb-6">
                {/* Shuffle */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={toggleShuffle}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                    isShuffling ? 'bg-pink-500/30 text-pink-400' : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z"/>
                  </svg>
                </motion.button>

                {/* Previous */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={prevSong}
                  className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                >
                  <BackwardIcon className="w-6 h-6 text-white" />
                </motion.button>

                {/* Play/Pause */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={togglePlay}
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center shadow-xl"
                >
                  {isPlaying ? (
                    <PauseIcon className="w-8 h-8 text-white" />
                  ) : (
                    <PlayIcon className="w-8 h-8 text-white ml-1" />
                  )}
                </motion.button>

                {/* Next */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={nextSong}
                  className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                >
                  <ForwardIcon className="w-6 h-6 text-white" />
                </motion.button>

                {/* Loop */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={toggleLoop}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                    isLooping ? 'bg-pink-500/30 text-pink-400' : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  <ArrowPathIcon className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Volume Control */}
              <div className="flex items-center gap-3 mb-6">
                <button onClick={toggleMute} className="text-white hover:text-pink-400 transition-colors">
                  {isMuted ? (
                    <SpeakerXMarkIcon className="w-6 h-6" />
                  ) : (
                    <SpeakerWaveIcon className="w-6 h-6" />
                  )}
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={(e) => setVolume(parseFloat(e.target.value))}
                  className="flex-1 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #ec4899 ${volume * 100}%, #374151 ${volume * 100}%)`,
                  }}
                />
                <span className="text-xs text-gray-400 w-10 text-right">{Math.round(volume * 100)}%</span>
              </div>

              {/* Playlist */}
              <div className="max-h-64 overflow-y-auto space-y-2 scrollbar-thin scrollbar-thumb-pink-500 scrollbar-track-gray-700">
                <p className="text-gray-400 text-xs font-semibold mb-3 sticky top-0 bg-gray-900/80 backdrop-blur-sm py-2">
                  PLAYLIST ({playlist.length} SONGS)
                </p>
                {playlist.map((song, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ x: 5 }}
                    onClick={() => {
                      setCurrentSongIndex(index);
                      setIsPlaying(true);
                    }}
                    className={`w-full p-3 rounded-xl flex items-center gap-3 transition-all ${
                      index === currentSongIndex
                        ? 'bg-pink-500/20 border border-pink-500/50'
                        : 'bg-white/5 hover:bg-white/10'
                    }`}
                  >
                    <div className="text-2xl flex-shrink-0">{song.cover}</div>
                    <div className="flex-1 text-left min-w-0">
                      <p className="text-white text-sm font-semibold truncate">{song.title}</p>
                      <p className="text-gray-400 text-xs truncate">{song.artist}</p>
                    </div>
                    {index === currentSongIndex && isPlaying && (
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.5, repeat: Infinity }}
                        className="flex gap-1 flex-shrink-0"
                      >
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            animate={{ height: ['12px', '24px', '12px'] }}
                            transition={{
                              duration: 0.5,
                              repeat: Infinity,
                              delay: i * 0.1,
                            }}
                            className="w-1 bg-pink-500 rounded-full"
                          />
                        ))}
                      </motion.div>
                    )}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CSS for Slider */}
      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #ec4899;
          cursor: pointer;
          box-shadow: 0 0 10px rgba(236, 72, 153, 0.5);
        }
        .slider::-moz-range-thumb {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #ec4899;
          cursor: pointer;
          border: none;
          box-shadow: 0 0 10px rgba(236, 72, 153, 0.5);
        }
        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }
        .scrollbar-thumb-pink-500::-webkit-scrollbar-thumb {
          background: #ec4899;
          border-radius: 3px;
        }
        .scrollbar-track-gray-700::-webkit-scrollbar-track {
          background: #374151;
          border-radius: 3px;
        }
      `}</style>
    </>
  );
}
