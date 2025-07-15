import React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "./ui/carousel"
import { useAtom } from "jotai"
import { currentTrackAtom, queueAtom, Track } from "../store/playerAtom"
import { cn } from "../lib/utils"

interface MusicCarouselProps {
  tracks: Track[]
}

export function MusicCarousel({ tracks }: MusicCarouselProps) {
  const [currentTrack] = useAtom(currentTrackAtom)
  const [, setCurrentTrack] = useAtom(currentTrackAtom)
  const [, setQueue] = useAtom(queueAtom)
  const [emblaApi, setEmblaApi] = React.useState<CarouselApi | null>(null)

  const playTrack = (track: Track) => {
    setCurrentTrack(track)
    setQueue(tracks.filter((t) => t.id !== track.id))
  }

  React.useEffect(() => {
    if (!emblaApi || !currentTrack) return
    const index = tracks.findIndex((t) => t.id === currentTrack.id)
    if (index >= 0) emblaApi.scrollTo(index)
  }, [currentTrack, emblaApi, tracks])

  return (
    <Carousel
      className="relative"
      opts={{ containScroll: "trimSnaps" }}
      setApi={setEmblaApi}
    >
      <CarouselPrevious />
      <CarouselNext />
      <CarouselContent className="gap-4">
        {tracks.map((track) => (
          <CarouselItem
            key={track.id}
            className={cn(
              "cursor-pointer w-32 transition-all",
              track.id === currentTrack?.id &&
                "ring-2 ring-primary ring-offset-2 scale-105"
            )}
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
