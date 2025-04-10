import React, { useRef, useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import ShortsData from "../ShortsData";

const Short = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = useRef([]);

  const handlers = useSwipeable({
    onSwipedUp: () => handleSwipe("up"),
    onSwipedDown: () => handleSwipe("down"),
    preventDefaultTouchmoveEvent: true,
    trackTouch: true,
    trackMouse: true,
  });

  useEffect(() => {
    const handleWheel = (event) => {
      if (event.deltaY > 0) {
        handleSwipe("up");
      } else if (event.deltaY < 0) {
        handleSwipe("down");
      }
    };
    window.addEventListener("wheel", handleWheel);
    return () => window.removeEventListener("wheel", handleWheel);
  }, [currentIndex]);

  const handleSwipe = (direction) => {
    setCurrentIndex((prevIndex) => {
      if (direction === "up" && prevIndex < ShortsData.length - 1) {
        return prevIndex + 1;
      } else if (direction === "down" && prevIndex > 0) {
        return prevIndex - 1;
      }
      return prevIndex;
    });
  };

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentIndex) {
          video.play();
        } else {
          video.pause();
        }
      }
    });
  }, [currentIndex]);

  return (
    <div
      {...handlers}
      style={{
        height: "100vh",
        width: "100%",
        overflow: "hidden",
        position: "relative",
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
      }}
    >
      {ShortsData.map((video, index) => (
        <div
          key={video.id}
          style={{
            height: "100vh",
            width: "100%",

            position: "absolute",
            top: `${(index - currentIndex) * 100}vh`,
            left: 0,
            transition: "top 0.3s ease-in-out",
          }}
        >
          <video
            ref={(el) => (videoRefs.current[index] = el)}
            src={video.url}
        
            controls={false}
            loop
            maxWidth="100%"
            playsInline
            style={{ height: "100%", objectFit: "cover" }}
          />
          <div
            className="overlay"
            style={{
              position: "absolute",
              bottom: "15%",
              left: "10px",
              color: "white",
            }}
          >
            <div style={{ display: "flex", marginBottom: "5%" }}>
              <p style={{ margin: "5px" }}>{video.username}</p>
              <p className="subs-btn"> Subscribe</p>
            </div>
            <p>#zimbabwe #victoriafalls #zambia</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Short;
