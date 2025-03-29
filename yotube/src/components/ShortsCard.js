import React, { useRef, useEffect } from "react";
// import React, { useRef, useEffect, useState } from "react";
import ShortsData from "../ShortsData";

const Short = () => {
  const videoRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (entry.isIntersecting) {
            video.play();
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.8 }
    );

    videoRefs.current.forEach((video) => observer.observe(video));

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {ShortsData.map((video, index) => (
        <div key={video.id} style={{ position: "relative", height: "100vh" }}>
          <video
            ref={(el) => (videoRefs.current[index] = el)}
            src={video.url}
            controls={false}
            loop
            width="100%"
            // muted
            playsInline
          />
          <div class="overlay">
            <div style={{ display: "flex" }}>
              <p style={{ color: "white", margin: "5px" }}>{video.username}</p>
              <p className="subs-btn"> Subscribe</p>
            </div>

            <p style={{ color: "white" }}>#zimbabwe #victoriafalls #zambia</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Short;
