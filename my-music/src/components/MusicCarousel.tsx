import React from 'react';
import { useAtom } from 'jotai';
import { currentTrackAtom, queueAtom, Track } from '../store/playerAtom';

interface MusicCarouselProps {
  tracks: Track[];
}

export function MusicCarousel({ tracks }: MusicCarouselProps) {
  const [, setCurrentTrack] = useAtom(currentTrackAtom);
  const [, setQueue] = useAtom(queueAtom);

  const playTrack = (track: Track) => {
    setCurrentTrack(track);
    setQueue(tracks.filter(t => t.id !== track.id));
  };

  return (
    <div className="flex space-x-4 overflow-x-auto p-4">
      {tracks.map(track => (
        <div
          key={track.id}
          className="cursor-pointer flex-shrink-0 w-32"
          onClick={() => playTrack(track)}
        >
          <img src={track.cover} alt={track.title} className="rounded shadow-md" />
          <div className="mt-1 text-center text-sm">{track.title}</div>
        </div>
      ))}
    </div>
  );
}
