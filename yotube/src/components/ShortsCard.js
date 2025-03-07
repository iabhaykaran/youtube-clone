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
        <div
          className="shorts-box"
          key={video.id}
          style={{  }}
        >
          <video
            ref={(el) => (videoRefs.current[index] = el)}
            src={video.url}
            height="844px"
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

            <br />
            {/* <br /> */}
            <p style={{ color: "white" }}>#zimbabwe #victoriafalls #zambia</p>

            <br />
            <br />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Short;
