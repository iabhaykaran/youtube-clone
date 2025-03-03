// Shorts.js
import React, { useRef, useEffect } from "react";
// import videos from "./data";
import ShortsData from "../ShortsData";
// import { TbRuler3 } from "react-icons/tb";

const Shorts = () => {
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
    <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory">
      {ShortsData.map((video, index) => (
        <div key={video.id} style={{marginBottom: "50px" }}>
          <video
            ref={(el) => (videoRefs.current[index] = el)}
            src={video.url}
            height="650px"
            controls={false}
            loop
            width="350px"
            // muted
            playsInline
          />
        </div>
      ))}
    </div>
  );
};

export default Shorts;

// // Shorts.js
// import React, { useRef, useEffect, useState } from "react";
// // import videos from "./data";
// import ShortsData from "../ShortsData";
// import { FaHeart, FaRegHeart, FaComment } from "react-icons/fa";

// const Shorts = () => {
//   const videoRefs = useRef([]);
//   const [likes, setLikes] = useState(ShortsData.map(() => false));

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

//   const toggleLike = (index) => {
//     setLikes((prevLikes) => {
//       const newLikes = [...prevLikes];
//       newLikes[index] = !newLikes[index];
//       return newLikes;
//     });
//   };

//   return (
//     <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory">
//       {ShortsData.map((video, index) => (
//         <div key={video.id} className="h-screen flex justify-center items-center snap-center relative">
//           {/* Video */}
//           <video
//             ref={(el) => (videoRefs.current[index] = el)}
//             src={video.url}
//             className="w-full h-full object-cover"
//             controls={false}
//             loop
//             muted
//             playsInline
//           />

//           {/* Overlay Text */}
//           <div className="absolute bottom-20 left-5 text-white text-2xl font-bold bg-black bg-opacity-50 px-3 py-1 rounded">
//             {video.title}
//           </div>

//           {/* Floating Buttons */}
//           <div className="absolute bottom-10 right-5 flex flex-col items-center space-y-4">
//             <button onClick={() => toggleLike(index)} className="text-white">
//               {likes[index] ? (
//                 <FaHeart className="text-red-500 text-3xl" />
//               ) : (
//                 <FaRegHeart className="text-3xl" />
//               )}
//             </button>
//             <button className="text-white">
//               <FaComment className="text-3xl" />
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Shorts;
