import React from "react";
import { MusicCarousel } from "./MusicCarousel";
import { MusicPlayer } from "./MusicPlayer";


const sampleTracks = [
  { id: "1", title: "Family and Friends", artist: "Oklou", cover: "./cover/cover1.jpg", src: "./audio/track1.m4a" },
  { id: "2", title: "Harvest Sky", artist: "Oklou", cover: "./cover/cover2.jpg", src: "./audio/track1.m4a" },
  { id: "3", title: "Blade Bird", artist: "Oklou", cover: "./cover/cover3.png", src: "./audio/track1.m4a" },
];



export default function MusicPage() {
    
  return (
    <main className="p-6 space-y-8">
      <h1 className="text-3xl font-bold text-center">Music Experience</h1>
      <MusicCarousel tracks={sampleTracks} />
      <MusicPlayer />
    </main>
  );
}