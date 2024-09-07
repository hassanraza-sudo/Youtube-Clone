import React from "react";
import "./RecommendedVideos.css";
import VideoCard from "./VideoCard";

function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <h2>Recommended</h2>
      <div className="recommendedVideos-videos">
        <VideoCard
          image="https://img.youtube.com/vi/9bZkp7q19f0/hqdefault.jpg"
          title="Introduction to Algorithms"
          channel="MIT OpenCourseWare"
          views="2.3M"
          timestamp="1 year ago"
          channelImage="https://yt3.googleusercontent.com/e1KUKBD5xAGuyy68Y-q3JECx8XkRGYSZLy9DbZfaVZuDPiaTFbgrc67j5VYFBpvQdu8K-xVBTw=s160-c-k-c0x00ffffff-no-rj"
        />

        <VideoCard
          image="https://img.youtube.com/vi/U8XF6AFGqlc/hqdefault.jpg"
          title="JavaScript Crash Course for Beginners"
          channel="Traversy Media"
          views="3.7M"
          timestamp="3 years ago"
          channelImage="https://www.youtube.com/@TraversyMedia"
        />

        <VideoCard
          image="https://img.youtube.com/vi/1PnVor36_40/hqdefault.jpg"
          title="React JS Full Course for Beginners"
          channel="Programming with Mosh"
          views="2.3M"
          timestamp="1 year ago"
          channelImage="https://yt3.ggpht.com/lCeCb47hCbXWFa0I4gi8uWDHzWSs7sjK4FDmk7lFEUMRNp6QRzIQOkwaKhwv7eNKZacRI2uR=s176-c-k-c0x00ffffff-no-rj-mo"
        />

        <VideoCard
          image="https://img.youtube.com/vi/Rub-JsjMhWY/hqdefault.jpg"
          title="CSS Grid Tutorial - Complete Guide"
          channel="The Net Ninja"
          views="1.8M"
          timestamp="2 years ago"
          channelImage="https://yt3.googleusercontent.com/ytc/AIdro_mk2Ex-8sW03SBlBX7D1EC5skH0kv9rS3rU9IXq2I-q2Zg=s176-c-k-c0x00ffffff-no-rj-mo"
        />

        <VideoCard
          image="https://img.youtube.com/vi/FTlczfR82mQ/hqdefault.jpg"
          title="Python for Beginners - Learn Python in 1 Hour"
          channel="Programming with Mosh"
          views="5M"
          timestamp="4 years ago"
          channelImage="https://yt3.ggpht.com/lCeCb47hCbXWFa0I4gi8uWDHzWSs7sjK4FDmk7lFEUMRNp6QRzIQOkwaKhwv7eNKZacRI2uR=s176-c-k-c0x00ffffff-no-rj-mo"
        />

        <VideoCard
          image="https://img.youtube.com/vi/Ke90Tje7VS0/hqdefault.jpg"
          title="React JS Crash Course"
          channel="Traversy Media"
          views="4.2M"
          timestamp="3 years ago"
          channelImage="https://www.youtube.com/@TraversyMedia"
        />

        <VideoCard
          image="https://img.youtube.com/vi/BVfCWuca9nw/hqdefault.jpg"
          title="Node.js Crash Course"
          channel="Traversy Media"
          views="2.9M"
          timestamp="2 years ago"
          channelImage="https://www.youtube.com/@TraversyMedia"
        />

        <VideoCard
          image="https://img.youtube.com/vi/hQAHSlTtcmY/hqdefault.jpg"
          title="React Native Tutorial for Beginners"
          channel="Programming with Mosh"
          views="3.4M"
          timestamp="1 year ago"
          channelImage="https://yt3.ggpht.com/lCeCb47hCbXWFa0I4gi8uWDHzWSs7sjK4FDmk7lFEUMRNp6QRzIQOkwaKhwv7eNKZacRI2uR=s176-c-k-c0x00ffffff-no-rj-mo"
        />

        <VideoCard
          image="https://img.youtube.com/vi/0pThnRneDjw/hqdefault.jpg"
          title="Full Stack Web Development with Flask"
          channel="freeCodeCamp.org"
          views="2.7M"
          timestamp="2 years ago"
          channelImage="https://yt3.googleusercontent.com/ytc/AIdro_lGRc-05M2OoE1ejQdxeFhyP7OkJg9h4Y-7CK_5je3QqFI=s176-c-k-c0x00ffffff-no-rj-mo"
        />
      </div>
    </div>
  );
}

export default RecommendedVideos;
