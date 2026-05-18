"use client";

import { useEffect, useRef, useState } from "react";

export function EmotionalVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [soundEnabled, setSoundEnabled] = useState(false);

  const playMutedLoop = (video: HTMLVideoElement) => {
    video.defaultMuted = true;
    video.muted = true;
    video.loop = true;
    video.volume = 0;
    void video.play().catch(() => {
      // Autoplay can be blocked by the browser; the play button remains available.
    });
  };

  useEffect(() => {
    if (videoRef.current) {
      playMutedLoop(videoRef.current);
    }
  }, []);

  const playWithSound = async () => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    video.muted = false;
    video.defaultMuted = false;
    video.volume = 1;
    video.loop = true;
    await video.play();
    setSoundEnabled(true);
  };

  return (
    <div className="relative mx-auto aspect-[9/16] w-full max-w-[360px] overflow-hidden rounded-lg bg-[#102f46] shadow-[0_28px_80px_rgba(24,62,91,0.24)]">
      <video
        ref={videoRef}
        className="h-full w-full object-contain"
        autoPlay
        loop
        muted={!soundEnabled}
        controls={soundEnabled}
        playsInline
        preload="metadata"
        poster="/petis-post-reel.webp"
        onCanPlay={(event) => {
          if (!soundEnabled) {
            playMutedLoop(event.currentTarget);
          }
        }}
        onLoadedMetadata={(event) => {
          if (!soundEnabled) {
            playMutedLoop(event.currentTarget);
          }
        }}
        onVolumeChange={(event) => {
          if (!soundEnabled && (!event.currentTarget.muted || event.currentTarget.volume !== 0)) {
            playMutedLoop(event.currentTarget);
          }
        }}
      >
        <source src="/estrellas.mp4" type="video/mp4" />
        Tu navegador no soporta la reproducción de video.
      </video>

      {!soundEnabled ? (
        <button
          type="button"
          onClick={playWithSound}
          className="absolute inset-0 flex items-center justify-center bg-[#183e5b]/18 text-white transition hover:bg-[#183e5b]/28"
          aria-label="Reproducir video con sonido"
        >
          <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white/88 text-[#183e5b] shadow-[0_18px_40px_rgba(0,0,0,0.24)] backdrop-blur">
            <svg aria-hidden="true" className="ml-1 h-9 w-9" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5.14v13.72c0 .76.83 1.24 1.5.85l11.12-6.86a1 1 0 0 0 0-1.7L9.5 4.29C8.83 3.9 8 4.38 8 5.14Z" />
            </svg>
          </span>
        </button>
      ) : null}
    </div>
  );
}
