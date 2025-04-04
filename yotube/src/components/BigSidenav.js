import React from "react";
import { FaHome, FaPlayCircle } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";

export default function BigSidenav() {
  return (
    <div className="large-screen-sidebar scroll-none">
      <ul>
        <h4>
          <div className="side-hidden-small">
            <li>
              <div>
                <FaHome />
              </div>
              <div>{<span>Home</span>}</div>
            </li>
            <li>
              <a href="shorts">
                <SiYoutubeshorts />

                <span>Shorts</span>
              </a>
            </li>
            <li>
              <a href="trending">
                <SiYoutubeshorts />

                <span>Trending</span>
              </a>
            </li>
            <li>
              <a href="subscription">
                <FaPlayCircle />
                <span>Subscriptions</span>
              </a>
            </li>
            <hr />
            <li>
              {/* <FaHeart /> */}
              {<span>History</span>}
            </li>
            <li>
              {/* <FaHeart /> */}
              {<span>Playlists</span>}
            </li>
            <li>
              {/* <FaHeart /> */}
              {<span>Watch Later</span>}
            </li>
            <li>
              {/* <FaHeart /> */}
              {<span>Liked Videos</span>}
            </li>
            <hr />
          </div>
          <li>
            {/* <FaFire /> */}
            {/* <FaHeart /> */}
            {<span>Trending</span>}
          </li>
          <li>
            {/* <FaHeart /> */}
            {<span>Shopping</span>}
          </li>
          <li>
            {/* <FaMusic /> */}

            {<span>Music</span>}
          </li>
          <li>
            {/* <MdOutlineLiveTv /> */}
            {<span>Films</span>}
          </li>
          <li>{<span>Live</span>}</li>
          <li>{<span>Gaming</span>}</li>
          <li>{<span>News</span>}</li>
        </h4>
      </ul>
    </div>
  );
}
