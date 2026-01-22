"use client";

import { useEffect, useRef, useState } from "react";
import Player from "@vimeo/player";
import { Maximize2, Volume2, VolumeX, Play, Pause } from "lucide-react";

interface VimeoPlayerProps {
  videoId: string;
  title?: string;
}

export default function VimeoPlayer({ videoId, title }: VimeoPlayerProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const playerRef = useRef<Player | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (!iframeRef.current) return;

    const player = new Player(iframeRef.current);
    playerRef.current = player;

    player.setVolume(0);
    setIsMuted(true);

    player.on("play", () => setIsPlaying(true));
    player.on("pause", () => setIsPlaying(false));

    // ✅ Replay support
    player.on("ended", () => {
      setIsPlaying(false);
    });

    return () => {
      player.destroy();
    };
  }, []);

  const togglePlay = async () => {
    if (!playerRef.current) return;
    isPlaying
      ? await playerRef.current.pause()
      : await playerRef.current.play();
  };

  const toggleMute = async () => {
    if (!playerRef.current) return;

    if (isMuted) {
      await playerRef.current.setVolume(1);
      setIsMuted(false);
    } else {
      await playerRef.current.setVolume(0);
      setIsMuted(true);
    }
  };

  const enterFullscreen = async () => {
    if (!playerRef.current) return;
    await playerRef.current.requestFullscreen();
  };

  return (
    <div className="relative rounded-2xl overflow-hidden bg-black">
      <iframe
        ref={iframeRef}
        src={`https://player.vimeo.com/video/${videoId}?controls=1&loop=1&playsinline=0`}
        className="w-full aspect-[4/5] sm:aspect-video"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      />

      {/* CONTROLS — always visible on mobile */}
      <div
        className="
          absolute bottom-4 left-4 right-4
          flex justify-between items-center
          md:opacity-0 md:hover:opacity-100
          transition
          pointer-events-auto
        "
      >
        <div className="flex gap-3">
          <button onClick={togglePlay} className="control-btn">
            {isPlaying ? <Pause size={18} /> : <Play size={18} />}
          </button>

          <button onClick={toggleMute} className="control-btn">
            {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>
        </div>

        <button onClick={enterFullscreen} className="control-btn">
          <Maximize2 size={18} />
        </button>
      </div>

      {title && (
        <div className="absolute top-4 left-4 text-white text-sm font-medium bg-black/60 px-3 py-1 rounded-lg pointer-events-none">
          {title}
        </div>
      )}
    </div>
  );
}
