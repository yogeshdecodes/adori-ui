import React, { useState, useEffect } from 'react';
import EpisodeCard from './EpisodeCard';
import { getAllEpisodes } from '../../helper/featured/index.js';
import ShowInfo from './ShowInfo';

export default function ShowAllEpisodes() {
  const [episodes, setEpisodes] = useState([]);
  const [showData, setShowData] = useState();

  const preload = () => {
    getAllEpisodes().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setShowData(data.show);
        setEpisodes(data.episodes);
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  return (
    <div className="mainContainer">
      {showData ? <ShowInfo showData={showData} /> : <h1>loading</h1>}
      <h2>Episodes</h2>
      <section className="episode-gallery">
        {episodes.map((episode, index) => {
          return (
            <EpisodeCard key={episode.uid} episodeData={episode}></EpisodeCard>
          );
        })}
      </section>
    </div>
  );
}
