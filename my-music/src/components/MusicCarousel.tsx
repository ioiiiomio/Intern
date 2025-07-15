import React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel" // adjust path as needed
import { useAtom } from "jotai"
import { currentTrackAtom, queueAtom, Track } from "../store/playerAtom"

interface MusicCarouselProps {
  tracks: Track[]
}

export function MusicCarousel({ tracks }: MusicCarouselProps) {
  const [, setCurrentTrack] = useAtom(currentTrackAtom)
  const [, setQueue] = useAtom(queueAtom)

  const playTrack = (track: Track) => {
    setCurrentTrack(track)
    setQueue(tracks.filter((t) => t.id !== track.id))
  }

  return (
    <Carousel className="relative" opts={{ containScroll: "trimSnaps" }}>
      <CarouselPrevious />
      <CarouselNext />
      <CarouselContent className="gap-4">
        {tracks.map((track) => (
          <CarouselItem
            key={track.id}
            className="cursor-pointer w-32"
            onClick={() => playTrack(track)}
          >
            <img
              src={track.cover}
              alt={track.title}
              className="rounded shadow-md"
            />
            <div className="mt-1 text-center text-sm">{track.title}</div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
