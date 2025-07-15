import { atom } from 'jotai';

export interface Track {
  id: string;
  title: string;
  artist: string;
  cover: string; 
  src: string;   
}

export const currentTrackAtom = atom<Track | null>(null);
export const queueAtom = atom<Track[]>([]);
