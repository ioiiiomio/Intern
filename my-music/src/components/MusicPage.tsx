import React from "react";
import { MusicCarousel } from "./MusicCarousel";
import '../index.css';

const COVER_URL = process.env.REACT_APP_COVER_URL;
const AUDIO_URL = process.env.REACT_APP_AUDIO_URL;


export const sampleTracks = [
  {
    id: "1",
    title: "Family and Friends",
    artist: "Oklou",
    cover: `${COVER_URL}cover1.jpg`,
    src: `${AUDIO_URL}track1.m4a`,
  },
  {
    id: "2",
    title: "Harvest Sky",
    artist: "Oklou",
    cover: `${COVER_URL}cover2.jpg`,
    src: `${AUDIO_URL}track2.m4a`,
  },
  {
    id: "3",
    title: "Blade Bird",
    artist: "Oklou",
    cover: `${COVER_URL}cover3.png`,
    src: `${AUDIO_URL}track3.m4a`,
  },
];




export default function MusicPage() {
    
  return (
    <main className="p-6 space-y-8">
      <h1 className="text-3xl font-bold text-center">My Music Player</h1>
      <MusicCarousel tracks={sampleTracks} />
    </main>
  );
}