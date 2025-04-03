import videoData from "../Data";
import VideoCard from "../components/VideoCard";
import Nav from "./Nav";

const Subscription = (props) => {
  const Subscribe = videoData.filter((videoData) => videoData.subs === "yes");

  return (
    <div style={{ height: "100vh", overflow: "scroll" }}>
      <div style={{ padding: "5px 8px" }}>
        <Nav />
      </div>
      {/* <h3 style={{ padding: "5px 6px" }}>Subscription</h3> */}

      <div
        className="scroll-none"
        style={{ padding: " 16px 5px", display: "flex", overflowX: "scroll" }}
      >
        {Subscribe.map((video) => (
          <div
            style={{
              width: "55px",

              marginRight: "12px",

              borderRadius: "100%",
            }}
          >
            <img
              style={{ borderRadius: "100%" }}
              src={video.url}
              alt="#"
              width="55px"
              height="55px"
            />
            <p style={{ fontSize: "12px", color: "white" }}>
              {video.cname.slice(0, 6)}...
            </p>
          </div>
        ))}
      </div>

      <div style={{}} className="video-list">
        {Subscribe.map((video) => (
          <div className="video-item">
            <VideoCard
              key={video.id}
              url={video.url}
              dp={video.url}
              title={video.title}
              views={video.views}
              chname={video.cname}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subscription;
