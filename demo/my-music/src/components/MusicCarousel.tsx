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
import { MusicPlayer } from "./MusicPlayer"

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
    <Carousel className="w-120 h-120" opts={{ containScroll: "trimSnaps" }} setApi={setEmblaApi}>

  <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white bg-opacity-70 rounded-full shadow hover:bg-opacity-100 transition" />
  <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white bg-opacity-70 rounded-full shadow hover:bg-opacity-100 transition" />

  <CarouselContent className="gap-4 h-full">
    {tracks.map((track) => (
      <CarouselItem
        key={track.id}
        className={cn(
          "cursor-pointer w-28 h-28 overflow-hidden rounded transition-all",
          track.id === currentTrack?.id && "ring-2 ring-primary ring-offset-2 scale-105"
        )}
        onClick={() => playTrack(track)}
      >
        <img
          src={track.cover}
          alt={track.title}
          className="w-full h-full object-cover"
        />
        <div className="mt-1 text-center text-sm">{track.title}</div>
      </CarouselItem>
    ))}
  </CarouselContent>
  <MusicPlayer>
        
      </MusicPlayer>
</Carousel>

  )
}
