import React, { useEffect, useRef } from 'react';
import { useAtom } from 'jotai';
import { currentTrackAtom, queueAtom, Track } from '../store/playerAtom';

export function MusicPlayer() {
  const [currentTrack, setCurrentTrack] = useAtom(currentTrackAtom);
  const [queue, setQueue] = useAtom(queueAtom);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Play audio when currentTrack changes
  useEffect(() => {
    if (audioRef.current && currentTrack) {
      audioRef.current.src = currentTrack.src;
      audioRef.current.play();
    }
  }, [currentTrack]);

  const onEnded = () => {
    if (queue.length > 0) {
      const nextTrack = queue[0];
      setCurrentTrack(nextTrack);
      setQueue(queue.slice(1));
    } else {
      setCurrentTrack(null);
    }
  };

  return (
    <div className="music-player p-4 border rounded shadow-md">
      <audio ref={audioRef} onEnded={onEnded} controls />
      {currentTrack ? (
        <div className="mt-2">
          <img src={currentTrack.cover} alt={currentTrack.title} className="w-24 h-24 object-cover rounded" />
          <div className="mt-1">
            <strong>{currentTrack.title}</strong> - {currentTrack.artist}
          </div>
        </div>
      ) : (
        <div>No track playing</div>
      )}
    </div>
  );
}
