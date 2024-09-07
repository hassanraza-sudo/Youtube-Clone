import React from "react";
import "./SearchPage.css";
import ChannelRow from "./ChannelRow.js";
import VideoRow from "./VideoRow.js";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";

function SearchPage() {
  return (
    <div className="searchPage">
      SearchPage
      <div className="searchPage-filter">
        <TuneOutlinedIcon />
        <h2>Filter</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://randomuser.me/api/portraits/men/1.jpg"
        channel="TechWorld"
        subs="1.2M"
        noOfVideos={450}
        description="Latest in tech news, reviews, and tutorials."
        verified={true}
      />
      <hr />
      <VideoRow
        views="1.5M"
        subs="1.2M"
        description="An in-depth review of the latest tech gadgets released this month."
        timestamp="2 hours ago"
        channel="TechWorld"
        title="Latest Tech Gadgets Review"
        image="https://img.youtube.com/vi/jNQXAC9IVRw/hqdefault.jpg"
      />
      <VideoRow
        views="850K"
        subs="850K"
        description="A full-body workout routine that you can do at home with no equipment."
        timestamp="1 day ago"
        channel="DailyFitness"
        title="Home Workout: Full Body Routine"
        image="https://img.youtube.com/vi/eXr8-jru1KE/hqdefault.jpg"
      />
      <VideoRow
        views="2.2M"
        subs="2.1M"
        description="Learn how to make a delicious chocolate cake from scratch."
        timestamp="3 days ago"
        channel="CookingWithLove"
        title="How to Bake a Chocolate Cake"
        image="https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg"
      />
      <VideoRow
        views="780K"
        subs="750K"
        description="Step-by-step guide to painting a beautiful sunset landscape."
        timestamp="4 days ago"
        channel="ArtisticVibes"
        title="Sunset Landscape Painting Tutorial"
        image="https://img.youtube.com/vi/3JZ_D3ELwOQ/hqdefault.jpg"
      />
      <VideoRow
        views="1.9M"
        subs="1.8M"
        description="Exploring the hidden gems of the Swiss Alps."
        timestamp="5 days ago"
        channel="TravelExplorer"
        title="Swiss Alps: Hidden Gems"
        image="https://img.youtube.com/vi/hHW1oY26kxQ/hqdefault.jpg"
      />
      <VideoRow
        views="1.4M"
        subs="1.5M"
        description="A 10-minute guided meditation to help you relax and unwind."
        timestamp="6 days ago"
        channel="MindfulMeditation"
        title="Guided Meditation for Relaxation"
        image="https://img.youtube.com/vi/inpok4MKVLM/hqdefault.jpg"
      />
      <VideoRow
        views="1.7M"
        subs="1.9M"
        description="Unboxing and review of the latest smartphone in the market."
        timestamp="1 week ago"
        channel="GadgetGuru"
        title="Latest Smartphone Unboxing and Review"
        image="https://img.youtube.com/vi/qVdPh2cBTN0/hqdefault.jpg"
      />
      <VideoRow
        views="1.8M"
        subs="1.7M"
        description="Top 10 albums you must listen to this year."
        timestamp="2 weeks ago"
        channel="MusicMania"
        title="Top 10 Albums of 2024"
        image="https://img.youtube.com/vi/5qap5aO4i9A/hqdefault.jpg"
      />
      <VideoRow
        views="1.8M"
        subs="1.7M"
        description="Top 10 albums you must listen to this year."
        timestamp="2 weeks ago"
        channel="MusicMania"
        title="Top 10 Albums of 2024"
        image="https://img.youtube.com/vi/3JZ_D3ELwOQ/hqdefault.jpg"
      />
      <VideoRow
        views="1.2M"
        subs="1.1M"
        description="DIY home decor ideas to give your living space a fresh look."
        timestamp="2 weeks ago"
        channel="HomeDecorIdeas"
        title="DIY Home Decor Ideas for 2024"
        image="https://img.youtube.com/vi/6Dh-RL__uN4/hqdefault.jpg"
      />
    </div>
  );
}

export default SearchPage;
