"use client";

import { useEffect, useRef } from "react";

export function EmotionalVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const keepMuted = (video: HTMLVideoElement) => {
    video.defaultMuted = true;
    video.muted = true;
    video.volume = 0;
  };

  useEffect(() => {
    if (videoRef.current) {
      keepMuted(videoRef.current);
    }
  }, []);

  return (
    <video
      ref={videoRef}
      className="aspect-[16/10] h-full w-full object-cover"
      controls
      loop
      muted
      playsInline
      preload="metadata"
      poster="/cover-facebook.webp"
      onCanPlay={(event) => {
        keepMuted(event.currentTarget);
      }}
      onLoadedMetadata={(event) => {
        keepMuted(event.currentTarget);
      }}
      onPlay={(event) => {
        keepMuted(event.currentTarget);
      }}
      onVolumeChange={(event) => {
        if (!event.currentTarget.muted || event.currentTarget.volume !== 0) {
          keepMuted(event.currentTarget);
        }
      }}
    >
      <source src="/estrellas.mp4" type="video/mp4" />
      Tu navegador no soporta la reproducción de video.
    </video>
  );
}
