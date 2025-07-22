import React from "react";
import { MusicCarousel } from "./MusicCarousel";
import { MusicPlayer } from "./MusicPlayer";
import '../index.css';


const sampleTracks = [
  { id: "1", title: "Family and Friends", artist: "Oklou", 
    cover: "http://localhost:3002/cover/cover1.jpg", 
    src: "http://localhost:3002/audio/track1.m4a" },
  { id: "2", title: "Harvest Sky", artist: "Oklou", 
    cover: "http://localhost:3002/cover/cover2.jpg", 
    src: "http://localhost:3002/audio/track2.m4a" },
  { id: "3", title: "Blade Bird", artist: "Oklou", 
    cover: "http://localhost:3002/cover/cover3.png", 
    src: "http://localhost:3002/audio/track3.m4a" },
];



export default function MusicPage() {
    
  return (
    <main className="p-6 space-y-8">
      <h1 className="text-3xl font-bold text-center">My Music Player</h1>
      <MusicCarousel tracks={sampleTracks} />
    </main>
  );
}