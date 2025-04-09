// import React, { useRef, useEffect } from "react";
// // import React, { useRef, useEffect, useState } from "react";
// import ShortsData from "../ShortsData";

// const Short = () => {
//   const videoRefs = useRef([]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           const video = entry.target;
//           if (entry.isIntersecting) {
//             video.play();
//           } else {
//             video.pause();
//           }
//         });
//       },
//       { threshold: 0.8 }
//     );

//     videoRefs.current.forEach((video) => observer.observe(video));

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div>
//       {ShortsData.map((video, index) => (
//         <div
//           key={video.id}
//           style={{ position: "relative", marginBottom: "50px" }}
//         >
//           <video
//             ref={(el) => (videoRefs.current[index] = el)}
//             src={video.url}
//             controls={false}
//             loop
//             width="100%"
//             // muted
//             playsInline
//           />
//           <div class="overlay">
//             <div style={{ display: "flex" }}>
//               <p style={{ color: "white", margin: "5px" }}>{video.username}</p>
//               <p className="subs-btn"> Subscribe</p>
//             </div>

//             <p style={{ color: "white" }}>#zimbabwe #victoriafalls #zambia</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Short;





import React, { useRef, useEffect } from "react";
import ShortsData from "../ShortsData";
import { useSwipeable } from "react-swipeable";

const Short = () => {
  const videoRefs = useRef([]);
  const containerRef = useRef();

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

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToIndex = (index) => {
    const container = containerRef.current;
    const videoElement = videoRefs.current[index];
    if (videoElement && container) {
      videoElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const handlers = useSwipeable({
    onSwipedUp: () => {
      const currentIndex = getCurrentIndex();
      if (currentIndex < ShortsData.length - 1) {
        scrollToIndex(currentIndex + 1);
      }
    },
    onSwipedDown: () => {
      const currentIndex = getCurrentIndex();
      if (currentIndex > 0) {
        scrollToIndex(currentIndex - 1);
      }
    },
    preventDefaultTouchmoveEvent: true,
    trackTouch: true,
  });

  const getCurrentIndex = () => {
    let activeIndex = 0;
    videoRefs.current.forEach((video, index) => {
      const rect = video.getBoundingClientRect();
      if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
        activeIndex = index;
      }
    });
    return activeIndex;
  };

  return (
    <div {...handlers} ref={containerRef}>
      {ShortsData.map((video, index) => (
        <div
          key={video.id}
          style={{ position: "relative", marginBottom: "50px" }}
        >
          <video
            ref={(el) => (videoRefs.current[index] = el)}
            src={video.url}
            controls={false}
            loop
            width="100%"
            playsInline
          />
          <div className="overlay">
            <div style={{ display: "flex" }}>
              <p style={{ color: "white", margin: "5px" }}>{video.username}</p>
              <p className="subs-btn">Subscribe</p>
            </div>
            <p style={{ color: "white" }}>#zimbabwe #victoriafalls #zambia</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Short;
