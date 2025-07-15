import React from 'react';
import { MusicCarousel } from './components/MusicCarousel';
import { MusicPlayer } from './components/MusicPlayer';
import { Track } from './store/playerAtom';

const tracks: Track[] = [
  {
    id: '1',
    title: 'Harvest Sky ~~~',
    artist: 'Oklou',
    cover: '/cover/cover1.jpg',
    src: '/audio/track1.m4a',
  },
  {
    id: '2',
    title: 'Family & Friends',
    artist: 'Oklou',
    cover: '/cover/cover2.jpg',
    src: '/audio/track2.m4a',
  },
  // Add more tracks here
];

const App: React.FC = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">My Music Player</h1>
      <MusicCarousel tracks={tracks} />
      <MusicPlayer />
    </div>
  );
};

export default App;
