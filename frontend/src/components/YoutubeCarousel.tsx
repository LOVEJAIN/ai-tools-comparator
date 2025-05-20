import React, { useState, useRef, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";

// Dummy YouTube video data
const DUMMY_VIDEOS = [
  { id: "M7lc1UVf-VE", title: "YouTube Developers Live: Embedded Web Player Customization" },
  { id: "ysz5S6PUM-U", title: "Big Buck Bunny Trailer" },
  { id: "dQw4w9WgXcQ", title: "Never Gonna Give You Up" },
  { id: "3JZ_D3ELwOQ", title: "AI in 2024: The Future is Now" },
  { id: "hY7m5jjJ9mM", title: "Cat Video for Science" },
  { id: "e-ORhEE9VVg", title: "Taylor Swift - Blank Space" },
  { id: "kXYiU_JCYtU", title: "Numb [Official Music Video] - Linkin Park" },
];

const VIDEO_WIDTH = 480;
const VIDEO_HEIGHT = 270;

const YoutubeCarousel: React.FC = () => {
  const [search, setSearch] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef<(HTMLIFrameElement | null)[]>([]);

  // Filter videos by search
  const filteredVideos = DUMMY_VIDEOS.filter((video) =>
    video.title.toLowerCase().includes(search.toLowerCase())
  );

  // Pause all videos except the active one
  useEffect(() => {
    videoRefs.current.forEach((iframe, idx) => {
      if (!iframe) return;
      // PostMessage API to control YouTube iframe
      iframe.contentWindow?.postMessage(
        JSON.stringify({
          event: "command",
          func: idx === activeIndex ? "playVideo" : "pauseVideo",
          args: [],
        }),
        "*"
      );
    });
  }, [activeIndex, filteredVideos]);

  return (
    <div
      style={{
        margin: "0 2vw",
        background: "#fafbfc",
        borderRadius: 20,
        boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
        padding: 32,
        maxWidth: 900,
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center", marginBottom: 18 }}>
        <input
          type="text"
          placeholder="Search AI lectures, content..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "70%",
            padding: 10,
            borderRadius: 10,
            border: "1px solid #ccc",
            fontSize: 18,
            background: "#fff",
            boxShadow: "0 1px 4px rgba(0,0,0,0.03)",
          }}
        />
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Carousel
          opts={{ align: "center", loop: true }}
          className="w-full relative flex items-center"
          setApi={(api) => {
            api.on("select", () => setActiveIndex(api.selectedScrollSnap()));
          }}
        >
          <CarouselPrevious />
          <CarouselContent>
            {filteredVideos.map((video, idx) => (
              <CarouselItem key={video.id} className="flex flex-col items-center justify-center">
                <div
                  style={{
                    width: VIDEO_WIDTH,
                    height: VIDEO_HEIGHT,
                    borderRadius: 16,
                    overflow: "hidden",
                    boxShadow: "0 2px 16px rgba(0,0,0,0.14)",
                    background: "#000",
                    marginBottom: 8,
                  }}
                >
                  <iframe
                    ref={(el) => (videoRefs.current[idx] = el)}
                    width={VIDEO_WIDTH}
                    height={VIDEO_HEIGHT}
                    src={`https://www.youtube.com/embed/${video.id}?enablejsapi=1&autoplay=1&mute=1&controls=1&rel=0&modestbranding=1`}
                    title={video.title}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    frameBorder="0"
                    style={{ display: "block" }}
                  />
                </div>
                <div style={{ fontWeight: 600, fontSize: 20, textAlign: "center" }}>{video.title}</div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default YoutubeCarousel; 